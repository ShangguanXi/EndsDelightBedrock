import {WorldLoadAfterEvent, system, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
import { EndsCuttingBoardRecipes } from "../datas/cuttingRecipes";
import { cookingPotRecipes } from "../datas/cookingpotRecipes";
import { EndsCookRecipes } from "../datas/cookRecipes";

export class RecipeRegister {
    @EventAPI.register(world.afterEvents.worldLoad)
    register(args: WorldLoadAfterEvent) {
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