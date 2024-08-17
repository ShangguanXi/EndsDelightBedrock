import { MinecraftDimensionTypes, Scoreboard, ScoreboardObjective, system, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
import { vanillaItemList } from "../data/cookRecipe";
const scoreboard: Scoreboard = world.scoreboard;
let bool: boolean = true;
let num: number = 0;

export class CookRecipeRegister {
    public static initCookScoRegistries() {
        system.runInterval(() => {
            const allSco: ScoreboardObjective[] | undefined = scoreboard.getObjectives();
            if (!allSco?.length || !bool) return;
            for (const sco of allSco) {
                const name: string = sco.displayName;
                const reg: RegExpMatchArray | null = name.match(/farmersdelight_(\w+)/);
                if (reg) {
                    world.getDimension(MinecraftDimensionTypes.overworld).runCommandAsync(`function farmersdelight/cook_recipe_registries/${reg[1]}`);
                }
            }
            bool = false;
        })
    }
    @EventAPI.register(system.afterEvents.scriptEventReceive, { namespaces: ["farmersdelight"] })
    registries(args: any) {
        const id: string = args.id;
        if (id != "farmersdelight:cook") return;
        const message: string = args.message;
        try {
            
            vanillaItemList.unshift(message)
            num++;
        } catch (error) {
            return;
        }
    }
}