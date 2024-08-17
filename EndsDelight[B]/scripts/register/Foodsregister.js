var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ItemStopUseAfterEvent, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
export class Foodsregister {
    eat(args) {
        const itemStack = args.itemStack;
        const player = args.source;
        const location = player.location;
        const useDuration = args.useDuration;
        if (itemStack && useDuration == 0) {
            switch (itemStack.typeId) {
                case "ends_delight:chorus_fruit_milk_tea":
                case "ends_delight:bubble_tea":
                case "ends_delight:chorus_fruit_wine":
                case "ends_delight:chorus_cookie":
                    if (player.isSneaking == true) {
                        player.runCommand(`spreadplayers ${location.x} ${location.z} 0 5 @s`);
                    }
                    break;
                case "ends_delight:shulker_meat":
                case "ends_delight:roasted_shulker_meat":
                    player.addEffect('levitation', 4 * 20, { amplifier: 1 });
                    break;
                case "ends_delight:shulker_meat_slice":
                case "ends_delight:roasted_shulker_meat_slice":
                    player.addEffect('levitation', 2 * 20, { amplifier: 1 });
                    break;
                case "ends_delight:stir_fried_shulker_meat":
                    player.addEffect('levitation', 5 * 20, { amplifier: 1 });
                    break;
                case "ends_delight:fried_dragon_egg":
                    player.addEffect('strength', 300 * 20, { amplifier: 1 });
                    player.addEffect('resistance', 300 * 20, { amplifier: 1 });
                    player.addEffect('regeneration', 300 * 20, { amplifier: 1 });
                    break;
                case "ends_delight:dragon_breath_soda":
                    player.addEffect('strength', 60 * 20, { amplifier: 1 });
                    player.addEffect('resistance', 60 * 20, { amplifier: 0 });
                    break;
                case "ends_delight:dragon_leg":
                    player.addEffect('strength', 60 * 20, { amplifier: 1 });
                    player.addEffect('resistance', 60 * 20, { amplifier: 0 });
                    break;
                case "ends_delight:chorus_fruit_popsicle":
                    player.runCommand(`spreadplayers ${location.x} ${location.z} 0 5 @s`);
                    player.extinguishFire();
                    break;
                case "ends_delight:dragon_breath_and_chorus_soup":
                    player.addEffect('strength', 60 * 20, { amplifier: 0 });
                    player.addEffect('resistance', 60 * 20, { amplifier: 1 });
                    player.addEffect('regeneration', 20 * 20, { amplifier: 0 });
                    break;
                case "ends_delight:liquid_dragon_egg":
                    player.addEffect('strength', 60 * 20, { amplifier: 0 });
                    player.addEffect('resistance', 60 * 20, { amplifier: 0 });
                    player.addEffect('regeneration', 60 * 20, { amplifier: 0 });
                    player.addEffect('blindness', 20 * 20, { amplifier: 1 });
                    break;
                case "ends_delight:end_barbecue_stick":
                    player.addEffect('regeneration', 5 * 20, { amplifier: 0 });
                    break;
                case "ends_delight:chorus_flower_tea":
                    if (player.isSneaking == true) {
                        player.runCommand(`spreadplayers ${location.x} ${location.z} 0 5 @s`);
                    }
                    player.addEffect('resistance', 20 * 20, { amplifier: 0 });
                    player.addEffect('regeneration', 5 * 20, { amplifier: 1 });
                    player.removeEffect('levitation');
                    break;
                case "ends_delight:roasted_dragon_meat":
                    player.addEffect('regeneration', 15 * 20, { amplifier: 1 });
                    break;
                case "ends_delight:roasted_dragon_meat_cuts":
                    player.addEffect('regeneration', 5 * 20, { amplifier: 1 });
                case "ends_delight:chorus_fruit_pie_slice":
                    if (player.isSneaking == true) {
                        player.runCommand(`spreadplayers ${location.x} ${location.z} 0 5 @s`);
                    }
                    player.addEffect('speed', 30 * 20, { amplifier: 0 });
                    break;
                case "ends_delight:dragon_meat_stew":
                    player.addEffect('strength', 30 * 20, { amplifier: 1 });
                    player.addEffect('absorption', 75 * 20, { amplifier: 2 });
                    player.addEffect('regeneration', 15 * 20, { amplifier: 1 });
                    break;
                case "ends_delight:end_mixed_salad":
                    player.addEffect('speed', 10 * 20, { amplifier: 0 });
                    player.addEffect('regeneration', 6 * 20, { amplifier: 0 });
                    break;
                case "ends_delight:assorted_salad":
                    player.addEffect('strength', 25 * 20, { amplifier: 0 });
                    player.addEffect('speed', 25 * 20, { amplifier: 0 });
                    player.addEffect('regeneration', 10 * 20, { amplifier: 0 });
                    break;
                case "ends_delight:chorus_flower_pie":
                    if (player.isSneaking == true) {
                        player.runCommand(`spreadplayers ${location.x} ${location.z} 0 5 @s`);
                    }
                    player.addEffect('regeneration', 5 * 20, { amplifier: 1 });
                    break;
                case "ends_delight:steamed_dragon_egg":
                    player.addEffect('absorption', 75 * 20, { amplifier: 2 });
                    player.addEffect('regeneration', 75 * 20, { amplifier: 1 });
                    player.addEffect('strength', 75 * 20, { amplifier: 1 });
                    player.addEffect('resistance', 75 * 20, { amplifier: 1 });
                    break;
                case "ends_delight:grilled_shulker":
                    player.addEffect('regeneration', 5 * 20, { amplifier: 0 });
                    player.addEffect('levitation', 2 * 20, { amplifier: 1 });
                    break;
                case "ends_delight:roasted_dragon_steak":
                    player.addEffect('regeneration', 25 * 20, { amplifier: 1 });
                    break;
                case "ends_delight:ender_congee":
                    player.addEffect('regeneration', 15 * 20, { amplifier: 1 });
                    player.addEffect('resistance', 45 * 20, { amplifier: 1 });
                    player.addEffect('health_boost', 45 * 20, { amplifier: 2 });
                    break;
                case "ends_delight:dragon_leg_with_sauce":
                    player.addEffect('absorption', 75 * 20, { amplifier: 2 });
                    player.addEffect('regeneration', 15 * 20, { amplifier: 1 });
                    break;
            }
        }
    }
}
__decorate([
    EventAPI.register(world.afterEvents.itemStopUse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ItemStopUseAfterEvent]),
    __metadata("design:returntype", void 0)
], Foodsregister.prototype, "eat", null);
//# sourceMappingURL=Foodsregister.js.map