// Map visualisation
var vg_1 = "Map_idiom/Motor_vehicles.json";
var vg_2 = "Map_idiom/Population.json";
var vg_3 = "Map_idiom/Road_length.json";


// 
var vg_4 = "Fatalities_bar_chart/year_fatalities.json";




vegaEmbed("#MotorChart", vg_1).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#PopulationChart", vg_2).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#RoadChart", vg_3).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);



vegaEmbed("#year_fat", vg_4).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);