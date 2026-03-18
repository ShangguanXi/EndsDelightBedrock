import { world, PlayerInteractWithBlockAfterEvent, PlayerBreakBlockBeforeEvent, system, BlockVolume, ItemStack } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
import { ItemAPI } from "../lib/ItemAPI";

export class BlockFood {
    @EventAPI.register(world.beforeEvents.playerBreakBlock)
    break(args: PlayerBreakBlockBeforeEvent) {
        const player = args.player;
        const block = args.block;
        const validTypes = [
            "ends_delight:chorus_fruit_pie",
            "ends_delight:dragon_leg_with_sauce_block",
            "ends_delight:dragon_meat_stew_block",
            "ends_delight:grilled_shulker_block",
            "ends_delight:steamed_dragon_egg_block"
        ];
        if (!validTypes.includes(block.typeId)) return;
        const stage = block.permutation.getState("farmersdelight:food_block_stage") as number
        if (stage != 0) {
            system.runTimeout(() => {
                block.dimension.setBlockType(block.location, "minecraft:air")
                ItemAPI.damage(player, player.selectedSlotIndex)
                block.dimension.playSound("dig.stone", block.location)
            })
            args.cancel = true
        }
    }

}