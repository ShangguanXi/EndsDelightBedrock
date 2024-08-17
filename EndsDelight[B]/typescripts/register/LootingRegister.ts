import { EntityEquippableComponent, EntityHurtAfterEvent, EquipmentSlot, ItemStack, world } from "@minecraft/server"
import { EventAPI } from "../lib/EventAPI"
import { RandomAPI } from "../lib/RandomAPI";
import { ItemAPI } from "../lib/ItemAPI";

export class LootingRegister {
    @EventAPI.register(world.afterEvents.entityHurt)
    looting(args: EntityHurtAfterEvent) {
        const entity = args.damageSource.damagingEntity
        const hurtEntity = args.hurtEntity
        if (!entity || !hurtEntity)
            return;
        const equipment = entity.getComponent(EntityEquippableComponent.componentId);
        const onFire = hurtEntity.getComponent('minecraft:onfire')?.onFireTicksRemaining;
        const mainHand = equipment?.getEquipmentSlot(EquipmentSlot.Mainhand);
        if (!mainHand?.hasTag('farmersdelight:is_knife')) return;
        const health = hurtEntity.getComponent('minecraft:health');
        if (!health?.currentValue && hurtEntity.typeId === 'minecraft:ender_dragon') {
            ItemAPI.spawn(hurtEntity, 'ends_delight:dragon_leg', 2);
            ItemAPI.spawn(hurtEntity, 'ends_delight:raw_dragon_meat', RandomAPI.RandomInt(3));
            if (RandomAPI.probability(6)) {
                ItemAPI.spawn(hurtEntity, 'ends_delight:dragon_tooth', RandomAPI.RandomInt(3));
            }
        };
        if (!health?.currentValue && hurtEntity.typeId === 'minecraft:shulker') {
            try {
                ItemAPI.spawn(hurtEntity, 'ends_delight:shulker_meat', RandomAPI.RandomInt(3));
            }
            catch (error) {
            }
        };
        if (!health?.currentValue && hurtEntity.typeId === 'minecraft:endermite') {
            if (onFire != undefined) {
                try {
                    ItemAPI.spawn(hurtEntity, 'ends_delight:dried_endermite_meat', RandomAPI.RandomInt(2));
                }
                catch (error) {
                }
            } else {
                try {
                    ItemAPI.spawn(hurtEntity, 'ends_delight:raw_ender_mite_meat', RandomAPI.RandomInt(2));
                }
                catch (error) {
                }
            }
        }
    }
}