var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { EntityEquippableComponent, EntityHurtAfterEvent, EquipmentSlot, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
import { RandomAPI } from "../lib/RandomAPI";
import { ItemAPI } from "../lib/ItemAPI";
export class LootingRegister {
    looting(args) {
        const entity = args.damageSource.damagingEntity;
        const hurtEntity = args.hurtEntity;
        if (!entity || !hurtEntity)
            return;
        const equipment = entity.getComponent(EntityEquippableComponent.componentId);
        if (!equipment)
            return;
        const onFire = hurtEntity.getComponent('minecraft:onfire')?.onFireTicksRemaining;
        const mainHand = equipment?.getEquipmentSlot(EquipmentSlot.Mainhand);
        if (!mainHand?.hasTag('farmersdelight:is_knife'))
            return;
        const health = hurtEntity.getComponent('minecraft:health');
        if (!health?.currentValue && hurtEntity.typeId === 'minecraft:ender_dragon') {
            ItemAPI.spawn(hurtEntity, 'ends_delight:dragon_leg', 2);
            ItemAPI.spawn(hurtEntity, 'ends_delight:raw_dragon_meat', RandomAPI.RandomInt(3));
            if (RandomAPI.probability(6)) {
                ItemAPI.spawn(hurtEntity, 'ends_delight:dragon_tooth', RandomAPI.RandomInt(3));
            }
        }
        ;
        if (!health?.currentValue && hurtEntity.typeId === 'minecraft:enderman') {
            if (RandomAPI.probability(35)) {
                ItemAPI.spawn(hurtEntity, 'ends_delight:enderman_gristle', RandomAPI.RandomInt(3));
            }
        }
        ;
        if (!health?.currentValue && hurtEntity.typeId === 'minecraft:shulker') {
            try {
                ItemAPI.spawn(hurtEntity, 'ends_delight:shulker_meat', RandomAPI.RandomInt(3));
            }
            catch (error) {
            }
        }
        ;
        if (!health?.currentValue && hurtEntity.typeId === 'minecraft:endermite') {
            if (onFire != undefined) {
                try {
                    ItemAPI.spawn(hurtEntity, 'ends_delight:dried_endermite_meat', RandomAPI.RandomInt(2));
                }
                catch (error) {
                }
            }
            else {
                try {
                    ItemAPI.spawn(hurtEntity, 'ends_delight:raw_ender_mite_meat', RandomAPI.RandomInt(2));
                }
                catch (error) {
                }
            }
        }
    }
}
__decorate([
    EventAPI.register(world.afterEvents.entityHurt),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EntityHurtAfterEvent]),
    __metadata("design:returntype", void 0)
], LootingRegister.prototype, "looting", null);
//# sourceMappingURL=LootingRegister.js.map