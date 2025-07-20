
import { Block } from "@minecraft/server";
import { SucculentComponent } from "./customComponents/blocks/SucculentComponent";
import { CookingPotRecipeRegister } from "./register/CookingPotRecipeRegister";
import { Foodsregister } from "./register/Foodsregister";
import { LootingRegister } from "./register/LootingRegister";
import { BlockFood } from "./blocks/BlockFood";


new Foodsregister();
new LootingRegister();
new CookingPotRecipeRegister();
new SucculentComponent();

new BlockFood();