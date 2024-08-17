var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { MinecraftDimensionTypes, system, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
import { vanillaItemList } from "../data/cookRecipe";
const scoreboard = world.scoreboard;
let bool = true;
let num = 0;
export class CookRecipeRegister {
    static initCookScoRegistries() {
        system.runInterval(() => {
            const allSco = scoreboard.getObjectives();
            if (!allSco?.length || !bool)
                return;
            for (const sco of allSco) {
                const name = sco.displayName;
                const reg = name.match(/farmersdelight_(\w+)/);
                if (reg) {
                    world.getDimension(MinecraftDimensionTypes.overworld).runCommandAsync(`function farmersdelight/cook_recipe_registries/${reg[1]}`);
                }
            }
            bool = false;
        });
    }
    registries(args) {
        const id = args.id;
        if (id != "farmersdelight:cook")
            return;
        const message = args.message;
        try {
            vanillaItemList.unshift(message);
            num++;
        }
        catch (error) {
            return;
        }
    }
}
__decorate([
    EventAPI.register(system.afterEvents.scriptEventReceive, { namespaces: ["farmersdelight"] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CookRecipeRegister.prototype, "registries", null);
//# sourceMappingURL=CookRecipeRegister.js.map