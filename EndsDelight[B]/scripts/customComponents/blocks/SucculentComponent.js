var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { system, EntityInventoryComponent, GameMode, StartupEvent } from "@minecraft/server";
import { ItemAPI } from "../../lib/ItemAPI";
import { EventAPI } from "../../lib/EventAPI";
export class SucculentComponent {
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
                block.dimension.playSound("item.bone_meal.use", block.location);
                if (player.getGameMode() == GameMode.Creative && (block.typeId == "ends_delight:chorus_succulent" || block.typeId == "ends_delight:chorus_succulent2")) {
                    dimension.spawnParticle("minecraft:crop_growth_emitter", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                    dimension.setBlockType(block.location, "ends_delight:chorus_succulent3");
                }
                else {
                    if (random <= 60) {
                        if (block.typeId == "ends_delight:chorus_succulent") {
                            dimension.setBlockType(block.location, "ends_delight:chorus_succulent2");
                        }
                        ;
                        if (block.typeId == "ends_delight:chorus_succulent2") {
                            dimension.setBlockType(block.location, "ends_delight:chorus_succulent3");
                        }
                    }
                    dimension.spawnParticle("minecraft:crop_growth_emitter", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                    if (!container)
                        return;
                    ItemAPI.clear(player, player?.selectedSlotIndex);
                }
            }
            ;
            if (itemId == "ends_delight:chorus_succulent_item") {
                if (block.typeId == "ends_delight:chorus_succulent") {
                    dimension.setBlockType(block.location, "ends_delight:chorus_succulent2");
                    if (!container)
                        return;
                    if (player.getGameMode() == GameMode.Creative)
                        return;
                    ItemAPI.clear(player, player?.selectedSlotIndex);
                }
                ;
                if (block.typeId == "ends_delight:chorus_succulent2") {
                    dimension.setBlockType(block.location, "ends_delight:chorus_succulent3");
                    if (!container)
                        return;
                    if (player.getGameMode() == GameMode.Creative)
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
        const dimension = args.dimension;
        if (block.typeId == "ends_delight:chorus_succulent") {
            dimension.setBlockType(block.location, "ends_delight:chorus_succulent2");
        }
        ;
        if (block.typeId == "ends_delight:chorus_succulent2") {
            dimension.setBlockType(block.location, "ends_delight:chorus_succulent3");
        }
    }
    register(args) {
        args.blockComponentRegistry.registerCustomComponent('ends_delight:chorus_succulent', new SucculentComponent());
    }
}
__decorate([
    EventAPI.register(system.beforeEvents.startup),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StartupEvent]),
    __metadata("design:returntype", void 0)
], SucculentComponent.prototype, "register", null);
//# sourceMappingURL=SucculentComponent.js.map