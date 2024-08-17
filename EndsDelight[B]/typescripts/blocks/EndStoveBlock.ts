import { Block, Container, Entity, EntityInventoryComponent, ItemStack, ItemUseOnAfterEvent, Player, PlayerPlaceBlockAfterEvent, ScoreboardObjective, ScoreboardScoreInfo, Vector3, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
import { BlockWithEntity } from "../lib/blockEntity/BlockWithEntity";
import { ItemAPI } from "../lib/ItemAPI";
import { vanillaItemList } from "../data/cookRecipe";
import { EntityUtil } from "../lib/EntityUtil";



export class EndStoveBlock extends BlockWithEntity {
    @EventAPI.register(world.afterEvents.playerPlaceBlock)
   
    placeBlock(args: PlayerPlaceBlockAfterEvent) {
        const block: Block = args.block;
        if (block.typeId != "ends_delight:end_stove") return;
        //放置直接为点燃状态
        block.setPermutation(block.permutation.withState('farmersdelight:is_working', true));
        const { x, y, z }: Vector3 = block.location;
        const entity: Entity = super.setBlock(args.block.dimension, { x: x + 0.5, y: y, z: z + 0.5 }, "ends_delight:end_stove");
        world.scoreboard.addObjective(entity.typeId + entity.id, entity.id).setScore('amount', 0);
    }
    @EventAPI.register(world.afterEvents.itemUseOn)
    useOnBlock(args: ItemUseOnAfterEvent) {
        if (args?.block?.typeId !== "ends_delight:end_stove") return;
        const data = super.entityBlockData(args.block, {
            type: 'ends_delight:end_stove',
            location: args.block.location
        });
        const player: Player = args.source;
        const itemStack: ItemStack = args.itemStack;
        const container: Container | undefined = player.getComponent(EntityInventoryComponent.componentId)?.container;
        if (!data || !container) return;
        const entity: Entity = data.entity;
        const { x, y, z }: Vector3 = args.block.location;
        const sco: ScoreboardObjective | null = data.scoreboardObjective;
        const air: Block | undefined = player.dimension.getBlock({ x: x, y: y + 1, z: z });
        if (entity && sco && air?.typeId == "minecraft:air") {
            const amount: number = sco.getScore('amount') ?? 0;
            if (vanillaItemList.includes(itemStack.typeId) || itemStack.hasTag('farmersdelight:can_cook')) {
                if (amount < 6) {
                    sco.setScore('amount', amount + 1);
                    sco.setScore(`${itemStack.typeId}/${amount + 1}`, 30);
                    if (EntityUtil.gameMode(player)) ItemAPI.clear(player, player.selectedSlotIndex);
                }
            }
            else {
                const arr: string[] = [];
                const itemStackScoresData: ScoreboardScoreInfo[] = sco.getScores();
                for (const itemStackData of itemStackScoresData) {
                    const itemStack: string = itemStackData.participant.displayName;
                    if (itemStack == 'amount') continue;
                    arr.push(itemStack);
                }
                for (let i = 0; i < arr.length - 1; i++) {
                    for (let j = 0; j < arr.length - 1 - i; j++) {
                        const num1: number = parseInt(arr[j].split('/')[1]);
                        const num2: number = parseInt(arr[j + 1].split('/')[1]);
                        if (num1 > num2) {
                            [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
                        }
                    }
                }
                if (arr.length && sco) {
                    const itemStackData: string = arr[amount - 1];
                    const itemStack: string = itemStackData.split('/')[0];
                    sco.removeParticipant(itemStackData);
                    sco.setScore('amount', (sco.getScore('amount') ?? 0) - 1);
                    entity.dimension.spawnItem(new ItemStack(itemStack), entity.location);
                }
            }

        }
        
    }
}