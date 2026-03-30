export const EndsCuttingBoardRecipes = [
    // 龙腿 → 生龙肉 + 骨粉
    { ingredients: { item: "ends_delight:dragon_leg" }, result: [{ item: "ends_delight:raw_dragon_meat", count: 2 }, { item: "minecraft:bone_meal", count: 1 }], tool: { tag: "farmersdelight:is_knife" }, is_block_type: false, sound: "use.wood" },
    // 生龙肉 → 生龙肉切片
    { ingredients: { item: "ends_delight:raw_dragon_meat" }, result: [{ item: "ends_delight:raw_dragon_meat_cuts", count: 2 }], tool: { tag: "farmersdelight:is_knife" }, is_block_type: false, sound: "use.wood" },
    // 烤龙肉 → 烤龙肉切片
    { ingredients: { item: "ends_delight:roasted_dragon_meat" }, result: [{ item: "ends_delight:roasted_dragon_meat_cuts", count: 2 }], tool: { tag: "farmersdelight:is_knife" }, is_block_type: false, sound: "use.wood" },
    // 潜影肉 → 潜影肉切片
    { ingredients: { item: "ends_delight:shulker_meat" }, result: [{ item: "ends_delight:shulker_meat_slice", count: 2 }], tool: { tag: "farmersdelight:is_knife" }, is_block_type: false, sound: "use.wood" },
    // 烤潜影肉 → 烤潜影肉切片
    { ingredients: { item: "ends_delight:roasted_shulker_meat" }, result: [{ item: "ends_delight:roasted_shulker_meat_slice", count: 2 }], tool: { tag: "farmersdelight:is_knife" }, is_block_type: false, sound: "use.wood" },
    // 紫颂派 → 紫颂派切片
    { ingredients: { item: "ends_delight:chorus_fruit_pie" }, result: [{ item: "ends_delight:chorus_fruit_pie_slice", count: 4 }], tool: { tag: "farmersdelight:is_knife" }, is_block_type: false, sound: "use.wood" },
    // 不可孵化龙蛋 → 龙蛋壳 + 龙蛋液
    { ingredients: { item: "ends_delight:non_hatchable_dragon_egg" }, result: [{ item: "ends_delight:dragon_egg_shell", count: 2 }, { item: "ends_delight:liquid_dragon_egg", count: 1 }], tool: { item: "minecraft:nether_star" }, is_block_type: false, sound: "use.wood" },
];
//# sourceMappingURL=cuttingRecipes.js.map