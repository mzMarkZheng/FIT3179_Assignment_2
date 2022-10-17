// Map visualisation
var vg_1 = "Map_idiom/Motor_vehicles.json";
var vg_2 = "Map_idiom/Population.json";
var vg_3 = "Map_idiom/Road_length.json";


// 
var vg_4 = "Fatalities_year_area_chart/year_fatalities.json";

var vg_5 = "Fatalities_heatmap/heatmap.json";

var vg_6 = "Map_idiom/population_pyramid.json";

var vg_7 = "Map_idiom/sankiel.json";


vegaEmbed("#MotorChart", vg_1).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#PopulationChart", vg_2).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#RoadChart", vg_3).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#YearFat", vg_4).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


vegaEmbed("#Heatmap", vg_5).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#PopulationPyramid", vg_6).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#Sankiel", vg_7).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);