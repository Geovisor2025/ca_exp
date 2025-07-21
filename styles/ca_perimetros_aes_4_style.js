var size = 0;
var placement = 'point';

var style_ca_perimetros_aes_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "18.2px \'Open Sans\', sans-serif";
    var labelFill = "#ff0000";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("cod_ae") !== null) {
        labelText = String(feature.get("cod_ae"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(243,166,178,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
