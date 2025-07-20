import {WorldLoadAfterEvent, system, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
let register = true
export class CookingPotRecipeRegister {
    @EventAPI.register(world.afterEvents.worldLoad)
    register(args: WorldLoadAfterEvent) {
        if (register) {
            world.getDimension("overworld").runCommand("function ends_delight/recipe_registries");
            register = false
        }
    }
}