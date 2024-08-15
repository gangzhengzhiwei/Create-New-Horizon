
ServerEvents.recipes(event =>{
    let ctnh = event.recipes.gtceu
    let nuclear = 
    [{name : 'thorium_233',color: 0x474242},
    {name: 'protactinium_233',color: 0xa18566},
    {name: 'uranium_233',color: 0x209620},{name: 'uranium_234',color: 0x1d9c1d},{name: 'uranium_239',color: 0x0d820d},
    {name: 'neptunium_235',color: 0x2b5487},{name: 'neptunium_237',color: 0x255085},{name: 'neptunium_239',color: 0x1f4b80},
    {name: 'plutonium_240',color: 0xa11e1e},{name: 'plutonium_244',color: 0x941818},{name: 'plutonium_245',color: 0x9c1515},
    {name: 'americium_241',color: 0x267d6c},{name: 'americium_243',color: 0x237d6b},{name: 'americium_245',color: 0x1e7866},
    {name: 'curium_245',color: 0x6e4742},{name: 'curium_246',color: 0x6b433e},{name: 'curium_247',color: 0x613c37},{name: 'curium_250',color: 0x5c3732},{name: 'curium_251',color: 0x4f2d29},
    {name: 'berkelium_247',color: 0x554c78},{name: 'berkelium_249',color: 0x504673},{name: 'berkelium_251',color: 0x4a406e},
    {name: 'californium_251',color: 0xa35510},{name: 'californium_252',color: 0x9c500d},{name: 'californium_253',color: 0x8c470a},{name: 'californium_256',color: 0x824107},{name: 'californium_257',color: 0x783c07},
    {name: 'einsteinium_253',color: 0xb58b01},{name: 'einsteinium_255',color: 0xa67f00},{name: 'einsteinium_257',color: 0x9c7700},
    {name: 'fermium_257',color: 0xbb90d9},{name: 'fermium_258',color: 0xae84cc},{name: 'fermium_259',color: 0xa47ac2},{name: 'fermium_262',color: 0x9d73ba},{name: 'fermium_263',color: 0x9067ad},
    {name: 'mendelevium_259',color: 0x1845bf},{name: 'mendelevium_261',color: 0x153eb0},{name: 'mendelevium_263',color: 0x123aa6}]
    let nuclear_fissle = 
    [
        {name: 'uranium_233', heat: 7},{name:'uranium_235', heat: 10},
        {name: 'neptunium_237', heat:11},
        {name: 'plutonium_241', heat:13}, {name: 'plutonium_239', heat:10},
        {name: 'americium_243', heat:14},
        {name: 'curium_245', heat:13}, {name: 'curium_247', heat: 16},
        {name: 'berkelium_249', heat:17},
        {name: 'californium_251', heat:16},{name: 'californium_253', heat: 19},
        {name: 'einsteinium_255', heat:20},
        {name: 'fermium_257', heat:19},{name: 'fermium_259', heat:22},
        {name: 'mendelevium_261', heat:23}
    ]
    let nuclear_fertile = [
        {name: 'thorium_232', fertile: [{key:'thorium_233',value:100},{key:'protactinium_233',value:1000},{key:'uranium_233' ,value:8900}]},
        {name: 'uranium_234', fertile: [{key:'uranium_235' ,value:9000}]},
        {name: 'uranium_238', fertile: [{key:'uranium_239' ,value:100},{key:'plutonium_239' ,value:8900},{key:'neptunium_239' ,value:1000}]},
        {name: 'plutonium_240', fertile: [{key:'plutonium_241', value:9000}]},
        {name: 'plutonium_244', fertile: [{key:'plutonium_245' ,value:100},{key:'americium_245' ,value:1000},{key:'curium_245' ,value:8900}]},
        {name: 'curium_246',fertile: [{key:'curium_247', value:9000}]},
        {name: 'curium_250',fertile: [{key:'curium_251', value:100},{key:'berkelium_251', value:1000},{key:'californium_251', value:8900}]},
        {name: 'californium_252',fertile: [{key:'californium_253', value:9000}]},
        {name: 'californium_256',fertile: [{key:'californium_257', value:100},{key:'einsteinium_257', value:1000},{key:'fermium_257', value:8900}]},
        {name: 'fermium_258',fertile: [{key:'fermium_259', value:9000}]},
        {name: 'fermium_262',fertile: [{key:'fermium_263', value:1000},{key:'mendelevium_263', value:9000}]}
    ]
    ctnh.electric_blast_furnace('silicon_carbide')
    .itemInputs(['gtceu:silicon_dust','gtceu:carbon_dust'])
    .inputFluids(Fluid.of('gtceu:argon',1000))
    .itemOutputs('2x gtceu:silicon_carbide_dust')
    .EUt(120)
    .duration(3000)
    .blastFurnaceTemp(2500)
    nuclear.forEach(n =>{    
    // 8F + C? + C?? + Fuel TRISO = Depleted Fuel + SiF4 + CF4
    ctnh.chemical_reactor('depleted_fuel_triso_'+ n.name)
        .itemInputs('gtceu:depleted_fuel_triso_' + n.name + '_dust')
        .inputFluids(Fluid.of('gtceu:fluorine',1000))
        .itemOutputs('gtceu:depleted_fuel_'+ n.name + '_dust')
        .outputFluids(Fluid.of('gtceu:silicon_fluoride',1000))
        .outputFluids(Fluid.of('gtceu:carbon_fluoride',1000))
        .EUt(30)
        .duration(300)

    // FuelZr + 4Cl = ZrCl4
    ctnh.large_chemical_reactor('depleted_zr_alloy_'+ n.name)
        .itemInputs('gtceu:depleted_fuel_zirconium_alloy_'+ n.name + '_dust')
        .inputFluids(Fluid.of('gtceu:chlorine',4000))
        .itemOutputs('gtceu:depleted_fuel_'+ n.name + '_dust')
        .itemOutputs('5x gtceu:zirconium_tetrachloride_dust')
        .EUt(30)
        .duration(300)

    // Fuel + O = [Fuel + O]
    ctnh.chemical_reactor('depleted_fuel_oxide_'+ n.name)
        .itemInputs('gtceu:depleted_fuel_' +n.name + '_dust')
        .inputFluids(Fluid.of('gtceu:oxygen',1000))
        .itemOutputs('gtceu:depleted_fuel_oxide_' + n.name + '_dust')
        .EUt(30)
        .duration(300)

    // HNO3 + [Fuel + O] + O = [Fuel + NO3 + H2O]
    ctnh.large_chemical_reactor('depleted_fuel_nitrate_solution_' + n.name)
        .notConsumable('gtceu:boron_dust')
        .itemInputs('gtceu:depleted_fuel_oxide_' + n.name + '_dust')
        .inputFluids(Fluid.of('gtceu:nitric_acid',1000))
        .outputFluids(Fluid.of('gtceu:depleted_fuel_nitrate_solution_' + n.name,1000))
        .EUt(30)
        .duration(1000)
    // [Fuel + NO3 + H2O] + N2H4 + RP1 + C12H27O4P = Fuel2N3 + Red Oil [N2H4 + RP1 + C12H27O4P]
    ctnh.large_chemical_reactor('depleted_fuel_nitride_'+ n.name)
        .notConsumableFluid(Fluid.of('gtceu:hydrazine',1000))
        .notConsumableFluid(Fluid.of('gtceu:rp1_mixed_fuel',1000))
        //.notConsumable(Fluid.of('')TributylPhosphate.getFluid(1000))
        .notConsumable('gtceu:ferrite_mixture_dust')
        .inputFluids(Fluid.of('gtceu:depleted_fuel_nitrate_solution_' + n.name,1000))
        .itemOutputs('gtceu:depleted_fuel_nitride_' + n.name + '_dust')
        .itemOutputs('gtceu:' + n.name.substring(0,n.name.search('_')) + '_waste_dust')
        .EUt(30)
        .duration(1000)
        
    // Fuel2N3 = Waste + 3N
    ctnh.electrolyzer('waste_' + n.name)
        .itemInputs('gtceu:depleted_fuel_nitride' + n.name + '_dust')
        .itemOutputs('gtceu:' + n.name.substring(0,n.name.search('_')) + '_waste_dust')
        .outputFluids(Fluid.of('gtceu:nitrogen',3000))
        .EUt(30)
        .duration(1000)
    

    // Fuel + Zr = [Fuel + Zr]
    ctnh.alloy_smelter('zirconium_alloy_' + n.name)
        .itemInputs('gtceu:' + n.name + '_ingot')
        .itemInputs('gtceu:zirconium_ingot')
        .itemOutputs('gtceu:zirconium_alloy_' + n.name + '_dust')
        .EUt(30).duration(300)

    // [Fuel + Zr] + 4Cl = Fuel + ZrCl4
    ctnh.large_chemical_reactor(n.name)
        .itemInputs('gtceu:zirconium_alloy_' + n.name + '_dust')
        .itemOutputs('gtceu:' + n.name + '_ingot')
        .itemOutputs('5x gtceu:zirconium_tetrachloride_dust')
        .inputFluids(Fluid.of('gtceu:chlorine',3000))
        .EUt(30).duration(300)

    // Fuel + O = [Fuel + O]
    ctnh.chemical_reactor('oxide_' + n.name)
    .itemInputs('gtceu:' + n.name + '_ingot')
    .inputFluids(Fluid.of('gtceu:oxygen',1000))
    .itemOutputs('gtceu:oxide_' + n.name + '_dust')
    .EUt(30).duration(300)

    // [Fuel + O] + 2C = [Fuel + C] + CO
    ctnh.chemical_reactor('carbide_' + n.name)
    .itemInputs('gtceu:oxide_' + n.name + '_dust')
    .itemInputs('2x gtce:carbon_dust')
    .itemOutputs('gtceu:carbide_' + n.name + '_dust')
    .outputFluids(Fluid.of('gtceu:carbon_monoxde',1000))
    .EUt(30).duration(300)

    // [Fuel + C] + 4O = CO2 + [Fuel + 2O]
    ctnh.electric_blast_furnace('oxide_' + n.name + '_from_carbon')
    .itemInputs('gtceu:carbide_' + n.name + '_dust')
    .itemOutputs('gtceu:oxide_' + n.name + '_dust')
    .inputFluids(Fluid.of('gtceu:oxygen',4000))
    .outputFluids(Fluid.of('gtceu:carbon_dioxide',1000))
    .blastFurnaceTemp(1000).EUt(120).duration(2000)

    // [Fuel + O] + [Fuel + C] + 3N = Fuel2N3 + CO
    ctnh.chemical_reactor('nitride_' + n.name)
    .itemInputs(['gtceu:carbide_' + n.name + '_dust','gtceu:oxide_' + n.name + '_dust'])
    .inputFluids(Fluid.of('gtceu:nitrogen',3000))
    .itemOutputs('gtceu:nitride_' + n.name + '_dust')
    .outputFluids(Fluid.of('gtceu:carbon_monoxde',1000))
    .EUt(30).duration(300)

    // Fuel2N3 + 4H2O + 3O = 2[Fuel + 2O] + H2O + NO2 + 2NH3
    ctnh.large_chemical_reactor('oxide_' + n.name + '_from_nitride')
    .itemInputs('gtceu:nitride_' +n.name + '_dust')
    .inputFluids(Fluid.of('minecraft:water',3000))
    .inputFluids(Fluid.of('gtceu:oxygen',3000))
    .itemOutputs('gtceu:oxide_' + n.name + '_dust')
    .outputFluids(Fluid.of('gtceu:ammonia',2000))
    .outputFluids(Fluid.of('minecraft:water',1000))
    .outputFluids(Fluid.of('gtceu:nitrogen_dioxide',1000))
    .EUt(30).duration(300)

    ctnh.alloy_smelter('fuel_carbide_' + n.name)
    .itemInputs('gtceu:carbide_' + n.name + '_dust')
    .itemOutputs('gtceu:fuel_carbide_' + n.name + '_dust')
    .notConsumable('gtceu:ball_casting_mold')
    .EUt(30).duration(200)

    ctnh.alloy_smelter('fuel_zirconium_alloy_' + n.name)
    .itemInputs('gtceu:zirconium_alloy_' + n.name + '_dust')
    .itemOutputs('gtceu:fuel_zirconium_alloy_' + n.name + '_dust')
    .notConsumable('gtceu:ball_casting_mold')
    .EUt(30).duration(200)

    ctnh.alloy_smelter('fuel_nitride_' + n.name)
    .itemInputs('gtceu:nitride_' + n.name + '_dust')
    .itemOutputs('gtceu:fuel_nitride_' + n.name + '_dust')
    .notConsumable('gtceu:ball_casting_mold')
    .EUt(30).duration(200)

    ctnh.alloy_smelter('fuel_oxide_' + n.name)
    .itemInputs('gtceu:oxide_' + n.name + '_dust')
    .itemOutputs('gtceu:fuel_oxide_' + n.name + '_dust')
    .notConsumable('gtceu:ball_casting_mold')
    .EUt(30).duration(200)

    ctnh.alloy_smelter('fuel_' + n.name)
    .itemInputs('gtceu:' + n.name + '_ingot')
    .itemOutputs('gtceu:fuel_' + n.name + '_dust')
    .notConsumable('gtceu:ball_casting_mold')
    .EUt(30).duration(200)

    ctnh.assembler('fuel_triso_' + n.name)
    .itemInputs('gtceu:fuel_carbide_' + n.name + '_dust')
    .itemInputs('gtceu:graphite_dust')
    .itemInputs('gtceu:silicon_carbide_dust')
    .itemInputs('gtceu:carbon_fiber_plate')
    .notConsumable('gtceu:ball_casting_mold')
    .itemOutputs('gtceu:fuel_triso_' + n.name + '_dust')
    .EUt(30).duration(200)
    })
    let counts = [1,2,3,4,5,6,7,8,9]
    nuclear_fissle.forEach(n =>{
        counts.forEach(count =>{
            //console.info(count + 'x gtceu:depleted_fuel_triso_' + n.name + '_dust')
            ctnh.nuclear_reactor('fuel_triso_' + n.name + count)
                .duration(20000)
                .EUt((n.heat+count)*count*2*0.8)
                .circuit(count)
                .itemInputs(count + 'x gtceu:fuel_triso_' + n.name + '_dust')
                .itemOutputs(count + 'x gtceu:depleted_fuel_triso_' + n.name + '_dust')
                ["addData(java.lang.String,int)"]("heat", (n.heat+count)*count*2)
    
            ctnh.nuclear_reactor('fuel_oxide_' + n.name + count)
                .duration(8000)
                .EUt((n.heat+count)*count*2*1.05)
                .circuit(count)
                .itemInputs(count + 'x gtceu:fuel_oxide_' + n.name + '_dust')
                .itemOutputs(count + 'x gtceu:depleted_fuel_oxide_' + n.name + '_dust')
                ["addData(java.lang.String,int)"]("heat", (n.heat+count)*count*2)
    
            ctnh.nuclear_reactor('fuel_nitride_' + n.name + count)
                .duration(10000)
                .EUt((n.heat+count)*count*2*1.1)
                .circuit(count)
                .itemInputs(count + 'x gtceu:fuel_nitride_' + n.name + '_dust')
                .itemOutputs(count + 'x gtceu:depleted_fuel_nitride_' + n.name + '_dust')
                ["addData(java.lang.String,int)"]("heat", (n.heat+count)*count*2)    
    
            ctnh.nuclear_reactor('fuel_zirconium_alloy_' + n.name + count)
                .duration(15000)
                .EUt((n.heat+count)*count*2*1.2)
                .circuit(count)
                .itemInputs(count + 'x gtceu:fuel_zirconium_alloy_' + n.name + '_dust')
                .itemOutputs(count + 'x gtceu:depleted_fuel_zirconium_alloy_' + n.name + '_dust')
                ["addData(java.lang.String,int)"]("heat", (n.heat+count)*count*2) 
            
            nuclear_fertile.forEach(m =>{
                ctnh.nuclear_reactor('fertile_fuel_triso_' + n.name + count + '_' + m.name)
                .duration(40000)
                .EUt((n.heat+count)*count/2*0.8)
                .circuit(count)
                .itemInputs(count + 'x gtceu:fuel_triso_' + n.name + '_dust')
                .itemInputs('9x gtceu:fuel_' + m.name + '_dust')
                .itemOutputs('9x gtceu:depleted_fuel_' + m.name + '_dust')
                .itemOutputs(count + 'x gtceu:depleted_fuel_triso_' + n.name + '_dust')
                ["addData(java.lang.String,int)"]("heat", (n.heat+count)*count)
    
                ctnh.nuclear_reactor('fertile_fuel_oxide_' + n.name + count + '_' + m.name)
                .duration(16000)
                .EUt((n.heat+count)*count/2*1.05)
                .circuit(count)
                .itemInputs(count + 'x gtceu:fuel_oxide_' + n.name + '_dust')
                .itemInputs('9x gtceu:fuel_' + m.name + '_dust')
                .itemOutputs('9x gtceu:depleted_fuel_' + m.name + '_dust')
                .itemOutputs(count + 'x gtceu:depleted_fuel_oxide_' + n.name + '_dust')
                ["addData(java.lang.String,int)"]("heat", (n.heat+count)*count)
    
                ctnh.nuclear_reactor('fertile_fuel_nitride_' + n.name + count + '_' + m.name)
                .duration(20000)
                .EUt((n.heat+count)*count/2*1.1)
                .circuit(count)
                .itemInputs(count + 'x gtceu:fuel_nitride_' + n.name + '_dust')
                .itemInputs('9x gtceu:fuel_' + m.name + '_dust')
                .itemOutputs('9x gtceu:depleted_fuel_' + m.name + '_dust')
                .itemOutputs(count + 'x gtceu:depleted_fuel_nitride_' + n.name + '_dust')
                ["addData(java.lang.String,int)"]("heat", (n.heat+count)*count)    
    
                ctnh.nuclear_reactor('fertile_fuel_zirconium_alloy_' + n.name + count + '_' + m.name)
                .duration(30000)
                .EUt((n.heat+count)*count/2*1.2)
                .circuit(count)
                .itemInputs(count + 'x gtceu:fuel_zirconium_alloy_' + n.name + '_dust')
                .itemInputs('9x gtceu:fuel_' + m.name + '_dust')
                .itemOutputs('9x gtceu:depleted_fuel_' + m.name + '_dust')
                .itemOutputs(count + 'x gtceu:depleted_fuel_zirconium_alloy_' + n.name + '_dust')
                ["addData(java.lang.String,int)"]("heat", (n.heat+count)*count) 

                let builder1 = ctnh.nuclear_reactor('fertile_fuel_triso_' + n.name + count + '_' + m.name + '_decay')
                .duration(10000)
                .EUt((n.heat+count)*count*0.8)
                .circuit(count + 10)
                .itemInputs(count + 'x gtceu:fuel_triso_' + n.name + '_dust')
                .itemInputs('9x gtceu:fuel_' + m.name + '_dust')
                .itemOutputs(count + 'x gtceu:depleted_fuel_triso_' + n.name + '_dust')
                ["addData(java.lang.String,int)"]("heat", (n.heat+count)*count/5)

                let builder2 = ctnh.nuclear_reactor('fertile_fuel_oxide_' + n.name + count + '_' + m.name + '_decay')
                .duration(4000)
                .EUt((n.heat+count)*count*1.05)
                .circuit(count + 10)
                .itemInputs(count + 'x gtceu:fuel_oxide_' + n.name + '_dust')
                .itemInputs('9x gtceu:fuel_' + m.name + '_dust')
                .itemOutputs(count + 'x gtceu:depleted_fuel_oxide_' + n.name + '_dust')
                ["addData(java.lang.String,int)"]("heat", (n.heat+count)*count/5)

                let builder3 = ctnh.nuclear_reactor('fertile_fuel_nitride_' + n.name + count + '_' + m.name + '_decay')
                .duration(5000)
                .EUt((n.heat+count)*count*1.1)
                .circuit(count + 10)
                .itemInputs(count + 'x gtceu:fuel_nitride_' + n.name + '_dust')
                .itemInputs('9x gtceu:fuel_' + m.name + '_dust')
                .itemOutputs(count + 'x gtceu:depleted_fuel_nitride_' + n.name + '_dust')
                ["addData(java.lang.String,int)"]("heat", (n.heat+count)*count/5)  

                let builder4 = ctnh.nuclear_reactor('fertile_fuel_zirconium_alloy_' + n.name + count + '_' + m.name + '_decay')
                .duration(7500)
                .EUt((n.heat+count)*count*1.2)
                .circuit(count + 10)
                .itemInputs(count + 'x gtceu:fuel_zirconium_alloy_' + n.name + '_dust')
                .itemInputs('9x gtceu:fuel_' + m.name + '_dust')
                .itemOutputs(count + 'x gtceu:depleted_fuel_zirconium_alloy_' + n.name + '_dust')
                ["addData(java.lang.String,int)"]("heat", (n.heat+count)*count/5)

                m.fertile.forEach(l =>{
                    builder1.chancedOutput('9x gtceu:depleted_fuel_' + l.key + '_dust',l.value,100)
                    builder2.chancedOutput('9x gtceu:depleted_fuel_' + l.key + '_dust',l.value,100)
                    builder3.chancedOutput('9x gtceu:depleted_fuel_' + l.key + '_dust',l.value,100)
                    builder4.chancedOutput('9x gtceu:depleted_fuel_' + l.key + '_dust',l.value,100)
                })
            })
        })
    })
    
    //addData()
})