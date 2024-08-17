import { EndStoveBlock } from "./blocks/EndStoveBlock";
import { EndStoveBlockEntity } from "./blocks/blockEntity/EndStoveBlockEntity";
import { ChorusSucculentComponentRegister } from "./customComponents/blocks/SucculentComponent";
import { CookRecipeRegister } from "./register/CookRecipeRegister";
import { CookingPotRecipeRegister } from "./register/CookingPotRecipeRegister";
import { Foodsregister } from "./register/Foodsregister";
import { LootingRegister } from "./register/LootingRegister";

new CookRecipeRegister()
new Foodsregister();
new LootingRegister();
new EndStoveBlock()
new EndStoveBlockEntity()
new CookingPotRecipeRegister();


new ChorusSucculentComponentRegister()