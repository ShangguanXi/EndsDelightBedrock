const cookingPotRecipes = [

    // bubble_tea
    {
        "identifer": "ends_delight:bubble_tea",
        "tags": ["cooking_pot"],
        "priority": 0,
        "time": 200,
        "ingredients": [
            {
                "item": "farmersdelight:milk_bottle"
            },
            [
                {
                    "item": "minecraft:chorus_fruit"
                },
                {
                    "item": "ends_delight:chorus_fruit_grain"
                }
            ],
            {
                "item": "ends_delight:ender_pearl_grain"
            }
        ],
        "result": {
            "item": "ends_delight:bubble_tea"
        }
    },

    // chorus_flower_tea
    {
        "identifer": "ends_delight:chorus_flower_tea",
        "tags": ["cooking_pot"],
        "container": {
            "item": "minecraft:glass_bottle"
        },
        "priority": 0,
        "time": 200,
        "ingredients": [
            {
                "item": "minecraft:ghast_tear"
            },
            {
                "item": "ends_delight:dried_chorus_flower"
            }
        ],
        "result": {
            "item": "ends_delight:chorus_flower_tea"
        }
    },

    // chorus_fruit_milk_tea
    {
        "identifer": "ends_delight:chorus_fruit_milk_tea",
        "tags": ["cooking_pot"],
        "priority": 0,
        "time": 200,
        "ingredients": [
            {
                "item": "farmersdelight:milk_bottle"
            },
            [
                {
                    "item": "minecraft:chorus_fruit"
                },
                {
                    "item": "ends_delight:chorus_fruit_grain"
                }
            ]
        ],
        "result": {
            "item": "ends_delight:chorus_fruit_milk_tea"
        }
    },

    // chorus_fruit_wine
    {
        "identifer": "ends_delight:chorus_fruit_wine",
        "tags": ["cooking_pot"],
        "container": {
            "item": "minecraft:glass_bottle"
        },
        "priority": 0,
        "time": 200,
        "ingredients": [
            {
                "item": "minecraft:sugar"
            },
            [
                {
                    "item": "minecraft:chorus_fruit"
                },
                {
                    "item": "ends_delight:chorus_fruit_grain"
                }
            ],
            [
                {
                    "item": "minecraft:chorus_fruit"
                },
                {
                    "item": "ends_delight:chorus_fruit_grain"
                }
            ]
        ],
        "result": {
            "item": "ends_delight:chorus_fruit_wine"
        }
    },

        // dragon_breath_and_chorus_soup
    {
        "identifer": "ends_delight:dragon_breath_and_chorus_soup",
        "tags": ["cooking_pot"],
        "priority": 0,
        "time": 200,
        "ingredients": [
            {
                "item": "minecraft:suspicious_stew"
            },
            {
                "item": "minecraft:dragon_breath"
            },
            {
                "item": "minecraft:chorus_flower"
            },
            {
                "item": "minecraft:chorus_fruit"
            },
            {
                "item": "minecraft:chorus_fruit"
            }
        ],
        "result": {
            "item": "ends_delight:dragon_breath_and_chorus_soup"
        }
    },

    // dragon_meat_stew_block
    {
        "identifer": "ends_delight:dragon_meat_stew_block",
        "tags": ["cooking_pot"],
        "container": {
            "item": "ends_delight:half_dragon_egg_shell"
        },
        "priority": 0,
        "time": 200,
        "ingredients": [
            {
                "tag": "ends_delight:raw_dragon_meat"
            },
            {
                "item": "minecraft:chorus_fruit"
            },
            {
                "item": "ends_delight:chorus_succulent_item"
            },
            {
                "item": "minecraft:carrot"
            },
            {
                "item": "minecraft:potato"
            },
            {
                "tag": "farmersdelight:is_tomato"
            }
        ],
        "result": {
            "item": "ends_delight:dragon_meat_stew_block"
        }
    },


    // ender_congee
    {
        "identifer": "ends_delight:ender_congee",
        "tags": ["cooking_pot"],
        "container": {
            "item": "minecraft:bowl"
        },
        "priority": 0,
        "time": 200,
        "ingredients": [
            {
                "tag": "farmersdelight:is_rice"
            },
            {
                "item": "ends_delight:dried_endermite_meat"
            },
            {
                "item": "ends_delight:ender_pearl_grain"
            }
        ],
        "result": {
            "item": "ends_delight:ender_congee"
        }
    },

    // steamed_dragon_egg_block
    {
        "identifer": "ends_delight:steamed_dragon_egg_block",
        "tags": ["cooking_pot"],
        "container": {
            "item": "ends_delight:half_dragon_egg_shell"
        },
        "priority": 0,
        "time": 200,
        "ingredients": [
            {
                "item": "ends_delight:liquid_dragon_egg"
            },
            {
                "tag": "ends_delight:shulker_meat"
            },
            {
                "item": "minecraft:chorus_fruit"
            },
            {
                "item": "minecraft:brown_mushroom"
            },
            {
                "item": "ends_delight:chorus_succulent_item"
            },
            {
                "tag": "farmersdelight:is_onion"
            }
        ],
        "result": {
            "item": "ends_delight:steamed_dragon_egg_block"
        }
    },

    // stir_fried_shulker_meat
    {
        "identifer": "ends_delight:stir_fried_shulker_meat",
        "tags": ["cooking_pot"],
 "container": {
            "item": "minecraft:bowl"
        },
        "priority": 0,
        "time": 200,
        "ingredients": [
            {
                "tag": "farmersdelight:is_onion"
            },
            {
                "tag": "farmersdelight:is_tomato"
            },
            [
                {
                    "item": "minecraft:chorus_fruit"
                },
                {
                    "item": "ends_delight:chorus_fruit_grain"
                }
            ],
            {
                "tag": "ends_delight:shulker_meat"
            }
        ],
        "result": {
            "item": "ends_delight:stir_fried_shulker_meat"
        }
    },

    // chorus_sauce
    {
        "identifer": "ends_delight:chorus_sauce",
        "tags": ["cooking_pot"],
        "container": {
            "item": "minecraft:bowl"
        },
        "priority": 0,
        "time": 200,
        "ingredients": [
            {
                "item": "ends_delight:chorus_succulent_item"
            },
            [
                {
                    "item": "minecraft:chorus_fruit"
                },
                {
                    "item": "ends_delight:chorus_fruit_grain"
                }
            ]
        ],
        "result": {
            "item": "ends_delight:chorus_sauce"
        }
    },

    // enderman_gristle_stew
    {
        "identifer": "ends_delight:enderman_gristle_stew",
        "tags": ["cooking_pot"],
        "container": {
            "item": "minecraft:bowl"
        },
        "priority": 0,
        "time": 200,
        "ingredients": [
            {
                "item": "ends_delight:enderman_gristle"
            },
            {
                "item": "ends_delight:enderman_gristle"
            },
            {
                "item": "ends_delight:dried_chorus_flower"
            },
            {
                "item": "ends_delight:chorus_succulent_item"
            }
        ],
        "result": {
            "item": "ends_delight:enderman_gristle_stew"
        }
    },

    // ender_bamboo_rice
    {
        "identifer": "ends_delight:ender_bamboo_rice",
        "tags": ["cooking_pot"],
        "priority": 0,
        "time": 200,
        "ingredients": [
            {
                "item": "minecraft:bamboo"
            },
            {
                "tag": "farmersdelight:is_rice"
            },
            {
                "tag": "ends_delight:raw_dragon_meat"
            },
            {
                "item": "ends_delight:chorus_succulent_item"
            },
            {
                "item": "minecraft:carrot"
            },
            {
                "tag": "farmersdelight:is_onion"
            }
        ],
        "result": {
            "item": "ends_delight:ender_bamboo_rice"
        }
    },

    // ender_noodle
    {
        "identifer": "ends_delight:ender_noodle",
        "tags": ["cooking_pot"],
        "priority": 0,
        "time": 200,
        "ingredients": [
            {
                "tag": "ends_delight:shulker_meat"
            },
            {
                "item": "ends_delight:dried_endermite_meat"
            },
            {
                "item": "ends_delight:chorus_sauce"
            },
            [
                {
                    "item": "minecraft:warped_fungus"
                },
                {
                    "item": "minecraft:crimson_fungus"
                },
                {
                    "item": "minecraft:brown_mushroom"
                },
                {
                    "item": "minecraft:red_mushroom"
                }
            ],
            [
                {
                    "item": "farmersdelight:wheat_dough"
                },
                {
                    "item": "farmersdelight:raw_pasta"
                }
            ]
        ],
        "result": {
            "item": "ends_delight:ender_noodle"
        }
    },

    // shulker_soup
    {
        "identifer": "ends_delight:shulker_soup",
        "tags": ["cooking_pot"],
        "container": {
            "item": "minecraft:bowl"
        },
        "priority": 0,
        "time": 200,
        "ingredients": [
            {
                "tag": "ends_delight:shulker_meat"
            },
            {
                "item": "ends_delight:dried_chorus_flower"
            },
            {
                "item": "ends_delight:chorus_succulent_item"
            }
        ],
        "result": {
            "item": "ends_delight:shulker_soup"
        }
    }



];

export { cookingPotRecipes };
