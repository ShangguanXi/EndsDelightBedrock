import { EntityEquippableComponent, EntityHurtAfterEvent, EquipmentSlot, ItemStack, world } from "@minecraft/server"
import { EventAPI } from "../lib/EventAPI"
import { RandomAPI } from "../lib/RandomAPI";
import { ItemAPI } from "../lib/ItemAPI";

export class LootingRegister {
    @EventAPI.register(world.afterEvents.entityHurt)
    looting(args: EntityHurtAfterEvent) {
        const entity = args.damageSource.damagingEntity;
        const hurtEntity = args.hurtEntity;
        if (!entity || !hurtEntity) return;

        const equipment = entity.getComponent(EntityEquippableComponent.componentId);
        if (!equipment) return;

        const mainHand = equipment.getEquipmentSlot(EquipmentSlot.Mainhand);
        const itemStack = mainHand.getItem();
        if (!itemStack?.getComponent("farmersdelight:increase_production")) return;

        const health = hurtEntity.getComponent('minecraft:health');
        if (health?.currentValue) return;

        switch (hurtEntity.typeId) {
            case 'minecraft:ender_dragon':
                ItemAPI.spawn(hurtEntity, 'ends_delight:dragon_leg', 2);
                ItemAPI.spawn(hurtEntity, 'ends_delight:raw_dragon_meat', RandomAPI.RandomInt(3));
                if (RandomAPI.probability(6)) {
                    ItemAPI.spawn(hurtEntity, 'ends_delight:dragon_tooth', RandomAPI.RandomInt(3));
                }
                break;
            case 'minecraft:enderman':
                if (RandomAPI.probability(35)) {
                    ItemAPI.spawn(hurtEntity, 'ends_delight:enderman_gristle', RandomAPI.RandomInt(3));
                }
                break;
            case 'minecraft:shulker':
                ItemAPI.spawn(hurtEntity, 'ends_delight:shulker_meat', RandomAPI.RandomInt(3));
                break;
            case 'minecraft:endermite': {
                const onFire = hurtEntity.getComponent('minecraft:onfire')?.onFireTicksRemaining;
                const item = onFire != undefined
                    ? 'ends_delight:dried_endermite_meat'
                    : 'ends_delight:raw_ender_mite_meat';
                ItemAPI.spawn(hurtEntity, item, RandomAPI.RandomInt(2));
                break;
            }
        }
    }
}