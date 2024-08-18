import { Dimension, Vector3, BlockCustomComponent, BlockComponentPlayerInteractEvent, Container, EntityInventoryComponent, world, BlockComponentRandomTickEvent, WorldInitializeBeforeEvent } from "@minecraft/server";
import { ItemAPI } from "../../lib/ItemAPI";
import { EventAPI } from "../../lib/EventAPI";



class SucculentComponent implements BlockCustomComponent {

    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
        this.onRandomTick = this.onRandomTick.bind(this);
    }

    onPlayerInteract(args: BlockComponentPlayerInteractEvent): void {
        const block = args.block;
        const player = args.player;
        const dimension = args.dimension
        const itemId = player?.getComponent("inventory")?.container?.getSlot(player.selectedSlotIndex).typeId
        const random = Math.floor(Math.random() * 101)
        if (!player) return;
        const container: Container | undefined = player.getComponent(EntityInventoryComponent.componentId)?.container;
        try {
            if (itemId == "minecraft:bone_meal") {
                world.playSound("item.bone_meal.use", block.location)
                if (player?.getGameMode() == "creative" && (block.typeId == "ends_delight:chorus_succulent" || block.typeId == "ends_delight:chorus_succulent2")) {
                    dimension.spawnParticle("minecraft:crop_growth_emitter", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                    dimension.setBlockType(block.location, "ends_delight:chorus_succulent3")
                }
                else {
                    if (random <= 60) {
                        if (block.typeId == "ends_delight:chorus_succulent") {
                            dimension.setBlockType(block.location, "ends_delight:chorus_succulent2")

                        };
                        if (block.typeId == "ends_delight:chorus_succulent2") {
                            dimension.setBlockType(block.location, "ends_delight:chorus_succulent3")
                        }
                    }
                    dimension.spawnParticle("minecraft:crop_growth_emitter", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                    if (!container) return;
                    ItemAPI.clear(player, player?.selectedSlotIndex)
                }

            };
            if (itemId == "ends_delight:chorus_succulent_item") {
                if (block.typeId == "ends_delight:chorus_succulent") {
                    dimension.setBlockType(block.location, "ends_delight:chorus_succulent2")
                    if (!container) return;
                    if (player.getGameMode() == "creative") return;
                    ItemAPI.clear(player, player?.selectedSlotIndex)

                };
                if (block.typeId == "ends_delight:chorus_succulent2") {
                    dimension.setBlockType(block.location, "ends_delight:chorus_succulent3")
                    if (!container) return;
                    if (player.getGameMode() == "creative") return;
                    ItemAPI.clear(player, player?.selectedSlotIndex)
                }
            }
        } catch (error) {

        }


    }
    onRandomTick(args: BlockComponentRandomTickEvent): void {
        const block = args.block;
        const dimension = args.dimension
        if (block.typeId == "ends_delight:chorus_succulent") {
            dimension.setBlockType(block.location, "ends_delight:chorus_succulent2")

        };
        if (block.typeId == "ends_delight:chorus_succulent2") {
            dimension.setBlockType(block.location, "ends_delight:chorus_succulent3")
        }
    }
}
export class ChorusSucculentComponentRegister {
    @EventAPI.register(world.beforeEvents.worldInitialize)
    register(args: WorldInitializeBeforeEvent) {
        args.blockComponentRegistry.registerCustomComponent('ends_delight:chorus_succulent', new SucculentComponent());
    }

}
