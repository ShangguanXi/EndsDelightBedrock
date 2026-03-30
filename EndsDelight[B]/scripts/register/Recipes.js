var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { WorldLoadAfterEvent, system, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
import { EndsCuttingBoardRecipes } from "../datas/cuttingRecipes";
import { cookingPotRecipes } from "../datas/cookingpotRecipes";
import { EndsCookRecipes } from "../datas/cookRecipes";
export class RecipeRegister {
    register(args) {
        system.runTimeout(() => {
            for (let i = 0; i < cookingPotRecipes.length; i++) {
                const recipe = JSON.stringify(cookingPotRecipes[i]);
                world.getDimension("overworld").runCommand(`scriptevent farmersdelight:cooking_pot_recipe ${recipe}`);
            }
            for (let i = 0; i < EndsCuttingBoardRecipes.length; i++) {
                world.getDimension("overworld").runCommand(`scriptevent farmersdelight:cutting_board_recipe ${JSON.stringify(EndsCuttingBoardRecipes[i])}`);
            }
            for (let i = 0; i < EndsCookRecipes.length; i++) {
                world.getDimension("overworld").runCommand(`scriptevent farmersdelight:cook ${JSON.stringify(EndsCookRecipes[i])}`);
            }
        }, 1);
    }
}
__decorate([
    EventAPI.register(world.afterEvents.worldLoad),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WorldLoadAfterEvent]),
    __metadata("design:returntype", void 0)
], RecipeRegister.prototype, "register", null);
//# sourceMappingURL=Recipes.js.map