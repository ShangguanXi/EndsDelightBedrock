
import { Block } from "@minecraft/server";
import { SucculentComponent } from "./customComponents/blocks/SucculentComponent";
import { Foodsregister } from "./register/Foodsregister";
import { LootingRegister } from "./register/LootingRegister";
import { BlockFood } from "./blocks/BlockFood";


new Foodsregister();
new LootingRegister();
new SucculentComponent();

new BlockFood();