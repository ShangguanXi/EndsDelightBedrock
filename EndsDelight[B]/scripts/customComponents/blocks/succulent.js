import { EntityInventoryComponent, world } from "@minecraft/server";
import { ItemAPI } from "../../lib/ItemAPI";
function spawnLoot(path, dimenion, location) {
    return dimenion.runCommand(`loot spawn ${location.x} ${location.y} ${location.z} loot "${path}"`);
}
class CropsComponent {
    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
        this.onRandomTick = this.onRandomTick.bind(this);
    }
    onPlayerInteract(args) {
        const block = args.block;
        const player = args.player;
        const dimension = args.dimension;
        const itemId = player?.getComponent("inventory")?.container?.getSlot(player.selectedSlotIndex).typeId;
        const random = Math.floor(Math.random() * 101);
        if (!player)
            return;
        const container = player.getComponent(EntityInventoryComponent.componentId)?.container;
        try {
            if (itemId == "minecraft:bone_meal") {
                world.playSound("item.bone_meal.use", block.location);
                if (player?.getGameMode() == "creative") {
                    dimension.spawnParticle("minecraft:crop_growth_emitter", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                    block.setPermutation(block.permutation.withState("farmersdelight:growth", 7));
                }
                else {
                    if (random <= 60) {
                    }
                    dimension.spawnParticle("minecraft:crop_growth_emitter", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                    if (!container)
                        return;
                    ItemAPI.clear(player, player?.selectedSlotIndex);
                }
            }
        }
        catch (error) {
        }
    }
    onRandomTick(args) {
        const block = args.block;
        const age = Number(block.permutation.getState("farmersdelight:growth"));
        if (age < 7) {
            block.setPermutation(block.permutation.withState("farmersdelight:growth", age + 1));
        }
    }
}
//# sourceMappingURL=succulent.js.map