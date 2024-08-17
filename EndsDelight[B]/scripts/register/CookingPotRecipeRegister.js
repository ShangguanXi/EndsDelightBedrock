var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { WorldInitializeAfterEvent, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
let register = true;
export class CookingPotRecipeRegister {
    register(args) {
        if (register) {
            world.getDimension("overworld").runCommandAsync("function ends_delight/recipe_registries");
            register = false;
        }
    }
}
__decorate([
    EventAPI.register(world.afterEvents.worldInitialize),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WorldInitializeAfterEvent]),
    __metadata("design:returntype", void 0)
], CookingPotRecipeRegister.prototype, "register", null);
//# sourceMappingURL=CookingPotRecipeRegister.js.map