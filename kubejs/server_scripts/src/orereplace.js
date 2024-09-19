ServerEvents.recipes(event => {
    let ingots = ["tin", "silver", "lead", "nickel", "vibrant_alloy", "energetic_alloy", "pulsalting_alloy", "dark_steel", "end_steel", "conductive_alloy", "redstone_alloy", "copper_alloy", "soularium",
        "uranium", "osmium", "zinc", "cobalt", "iridium", "brass", "bronze", "constantan", "electrum", "steel", "sulfur", "ender_pearl",
        "calorite", "desh", "ostrum"]
    let mod = "gtceu"

    for (let i of ingots) {

        event.replaceOutput({ not: { mod: "gtceu" } }, `#forge:ingots/${i}`, `${mod}:${i}_ingot`)

        event.replaceOutput({ not: { mod: "gtceu" } }, `#forge:nuggets/${i}`, `${mod}:${i}_nugget`)

        event.replaceOutput({ not: { mod: "gtceu" } }, `#forge:storage_blocks/${i}`, `${mod}:${i}_block`)

        event.replaceOutput({ not: { mod: "gtceu" } }, `#forge:plates/${i}`, `${mod}:${i}_plate`)

        event.replaceOutput({ not: { mod: "gtceu" } }, `#forge:rods/${i}`, `${mod}:${i}_rod`)

        event.replaceOutput({ not: { mod: "gtceu" } }, `#forge:gears/${i}`, `${mod}:${i}_gear`)

        event.replaceOutput({ not: { mod: "gtceu" } }, `#forge:crushed_ores/${i}`, `${mod}:${i}_crushed`)

        event.replaceOutput({ not: { mod: "gtceu" } }, `#forge:dusts/${i}`, `${mod}:${i}_dust`)

        event.replaceInput({}, `#forge:ingots/${i}`, `${mod}:${i}_ingot`)

        event.replaceInput({}, `#forge:nuggets/${i}`, `${mod}:${i}_nugget`)

        event.replaceInput({}, `#forge:storage_blocks/${i}`, `${mod}:${i}_block`)

        event.replaceInput({}, `#forge:plates/${i}`, `${mod}:${i}_plate`)

        event.replaceInput({}, `#forge:rods/${i}`, `${mod}:${i}_rod`)

        event.replaceInput({}, `#forge:gears/${i}`, `${mod}:${i}_gear`)

        event.replaceInput({}, `#forge:dusts/${i}`, `${mod}:${i}_dust`)
    }

})
ServerEvents.recipes(event => {
    let ingots = ["copper"]
    let mod = "gtceu"
    let othermod = ["create"]
    for (let i of ingots) {
        for (let j of othermod) {
            event.replaceOutput({ not: { mod: "gtceu" } }, `#forge:nuggets/${i}`, `${mod}:${i}_nugget`)

            event.replaceOutput({ not: { mod: "gtceu" } }, `#forge:plates/${i}`, `${mod}:${i}_plate`)

            event.replaceOutput({ not: { mod: "gtceu" } }, `#forge:rods/${i}`, `${mod}:${i}_rod`)

            event.replaceOutput({ not: { mod: "gtceu" } }, `#forge:gears/${i}`, `${mod}:${i}_gear`)

            event.replaceOutput({ not: { mod: "gtceu" } }, `#forge:crushed_ores/${i}`, `${mod}:${i}_crushed`)

            event.replaceOutput({ not: { mod: "gtceu" } }, `#forge:dusts/${i}`, `${mod}:${i}_dust`)

            event.replaceInput({}, `#forge:nuggets/${i}`, `${mod}:${i}_nugget`)

            event.replaceInput({}, `#forge:plates/${i}`, `${mod}:${i}_plate`)

            event.replaceInput({}, `#forge:rods/${i}`, `${mod}:${i}_rod`)

            event.replaceInput({}, `#forge:gears/${i}`, `${mod}:${i}_gear`)

            //event.replaceInput({}, `#forge:crushed_ores/${i}`, `${mod}:${i}_crushed`)

            event.replaceInput({}, `#forge:dusts/${i}`, `${mod}:${i}_dust`)
        }
    }
})
ServerEvents.recipes(event => {
    let ingots = ["iron", "gold"]
    let mod = "gtceu"
    let othermod = ["create"]
    for (let i of ingots) {
        for (let j of othermod) {

            event.replaceOutput({ not: { mod: "gtceu" } }, `#forge:plates/${i}`, `${mod}:${i}_plate`)

            event.replaceOutput({ not: { mod: "gtceu" } }, `#forge:rods/${i}`, `${mod}:${i}_rod`)

            event.replaceOutput({ not: { mod: "gtceu" } }, `#forge:gears/${i}`, `${mod}:${i}_gear`)

            event.replaceOutput({ not: { mod: "gtceu" } }, `#forge:dusts/${i}`, `${mod}:${i}_dust`)

            event.replaceInput({}, `#forge:plates/${i}`, `${mod}:${i}_plate`)

            event.replaceInput({}, `#forge:rods/${i}`, `${mod}:${i}_rod`)

            event.replaceInput({}, `#forge:gears/${i}`, `${mod}:${i}_gear`)

            event.replaceInput({}, `#forge:dusts/${i}`, `${mod}:${i}_dust`)
        }
    }
})
ServerEvents.recipes(event => {
    event.replaceInput({}, "create:andesite_alloy", "gtceu:andesite_alloy_ingot")
    event.replaceInput({}, "#forge:silicon", "gtceu:silicon_ingot")
    event.replaceInput({}, "#forge:ingots/pulsating_alloy", "gtceu:pulsating_alloy_ingot")
    event.replaceOutput({ not: { mod: "gtceu" } }, "#forge:ingots/pulsating_alloy", "gtceu:pulsating_alloy_ingot")
    event.replaceInput({ mod: "create", not: { or: [{ type: "create:mixing" }, { type: "create:compacting" }, { type: "create:cutting" }, { type: "create:mechanical_crafting" }, { id: "create:crafting/materials/copper_nugget" }] } }, "minecraft:copper_ingot", "gtceu:bronze_ingot")
    event.replaceInput({ mod: "create", not: { or: [{ type: "create:mixing" }, { type: "create:compacting" }, { type: "create:cutting" }, { type: "create:mechanical_crafting" }] } }, "gtceu:copper_plate", "gtceu:bronze_plate")
    event.replaceInput({ id: "create:crafting/kinetics/steam_engine" }, "minecraft:copper_block", "gtceu:bronze_block")
    event.replaceOutput({ id: "create:milling/andesite" }, "minecraft:cobblestone", "gtceu:andesite_dust")
    event.replaceInput({ id: "create:crafting/logistics/andesite_funnel" }, "gtceu:andesite_alloy_ingot", "gtceu:andesite_alloy_plate")
    event.replaceInput({ id: "create:crafting/logistics/andesite_tunnel" }, "gtceu:andesite_alloy_ingot", "gtceu:andesite_alloy_plate")
    event.replaceInput({ id: "create:crafting/logistics/brass_funnel" }, "gtceu:brass_ingot", "gtceu:brass_plate")
    event.replaceInput({ id: "create:crafting/logistics/brass_tunnel" }, "gtceu:brass_ingot", "gtceu:brass_plate")
    event.replaceInput({ output: "create:brass_casing" }, "gtceu:brass_ingot", "gtceu:brass_plate")
    event.replaceInput({}, "#forge:dusts/sulfur", "gtceu:sulfur_dust")
    event.replaceOutput({}, "#forge:dusts/sulfur", "gtceu:sulfur_dust")
    event.replaceOutput({}, "bloodmagic:sulfur", "gtceu:sulfur_dust")
    event.replaceInput({}, "biomesoplenty:cherry_wood", "minecraft:cherry_wood")
    // event.replaceInput({}, "gtceu:certus_quartz_gem", "ae2:certus_quartz_crystal")
    // event.replaceOutput({}, "gtceu:certus_quartz_gem", "ae2:certus_quartz_crystal")
    //event.replaceInput({}, "#forge:dusts/certus_quartz", "gtceu:certus_quartz_dust")
    //event.replaceOutput({}, "#forge:dusts/certus_quartz", "gtceu:certus_quartz_dust")
    event.replaceInput({}, "minecraft:netherite_ingot", "gtceu:netherite_ingot")
    event.replaceOutput({}, "minecraft:netherite_ingot", "gtceu:netherite_ingot")
    event.replaceInput({}, "minecraft:netherite_block", "gtceu:netherite_block")
    event.replaceOutput({}, "minecraft:netherite_block", "gtceu:netherite_block")
    event.replaceOutput({}, "create:powered_obsidian", "gtceu:obsidian_dust")
    event.replaceInput({}, "create:powered_obsidian", "gtceu:obsidian_dust")
    event.replaceOutput({ id: "create:splashing/red_sand" }, "minecraft:gold_nugget", "gtceu:precious_alloy_nugget")
    event.replaceOutput({ id: "create:splashing/soul_sand" }, "minecraft:gold_nugget", "gtceu:precious_alloy_nugget")
    event.replaceOutput({ id: "tetranichematerials:bronnum_block" }, "tetranichematerials:bronnum_block", "gtceu:bronze_block")

    event.replaceInput({}, "tetranichematerials:red_gold_ingot", "gtceu:rose_gold_ingot")
    event.replaceInput({}, "tetranichematerials:bronnum_ingot", "gtceu:bronze_ingot")
    event.replaceInput({}, "tetranichematerials:pulverized_coal", "gtceu:coal_dust")
    event.replaceInput({}, "tetranichematerials:lapis_powder", "gtceu:lapis_dust")

    event.replaceOutput({}, "#forge:ethanol", "gtceu:ethanol")
    event.replaceInput({}, "#forge:ethanol", "gtceu:ethanol")
    event.replaceInput({}, "#forge:ingots/soularium", "gtceu:soularium_ingot")
    event.replaceOutput({}, "#forge:ingots/soularium", "gtceu:soularium_ingot")
    event.replaceInput({}, "enderio:powdered_quartz", "gtceu:nether_quartz_dust")
    event.replaceInput({}, "gtceu:refined_radiance_ingot", "create:refined_radiance")
    event.replaceInput({}, "gtceu:shadow_steel_ingot", "create:shadow_steel")
})
