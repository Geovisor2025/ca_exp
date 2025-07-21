var size = 0;
var placement = 'point';

var style_ca_perimetros_ags_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "23.400000000000002px \'Open Sans\', sans-serif";
    var labelFill = "#1400ff";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("cod_ag") !== null) {
        labelText = String(feature.get("cod_ag"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,9,255,1.0)', lineDash: [20.139999999999997,4.028], lineCap: 'butt', lineJoin: 'miter', width: 4.028}),fill: new ol.style.Fill({color: 'rgba(213,180,60,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
