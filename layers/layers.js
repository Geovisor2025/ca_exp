var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Municipios_1 = new ol.format.GeoJSON();
var features_Municipios_1 = format_Municipios_1.readFeatures(json_Municipios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_1.addFeatures(features_Municipios_1);
var lyr_Municipios_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_1, 
                style: style_Municipios_1,
                popuplayertitle: 'Municipios',
                interactive: false,
                title: '<img src="styles/legend/Municipios_1.png" /> Municipios'
            });
var format_areasconflictosexperimental_2 = new ol.format.GeoJSON();
var features_areasconflictosexperimental_2 = format_areasconflictosexperimental_2.readFeatures(json_areasconflictosexperimental_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areasconflictosexperimental_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areasconflictosexperimental_2.addFeatures(features_areasconflictosexperimental_2);
var lyr_areasconflictosexperimental_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areasconflictosexperimental_2, 
                style: style_areasconflictosexperimental_2,
                popuplayertitle: 'areas conflictos experimental',
                interactive: true,
                title: '<img src="styles/legend/areasconflictosexperimental_2.png" /> areas conflictos experimental'
            });
var format_ca_perimetros_abas_3 = new ol.format.GeoJSON();
var features_ca_perimetros_abas_3 = format_ca_perimetros_abas_3.readFeatures(json_ca_perimetros_abas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ca_perimetros_abas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ca_perimetros_abas_3.addFeatures(features_ca_perimetros_abas_3);
var lyr_ca_perimetros_abas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ca_perimetros_abas_3, 
                style: style_ca_perimetros_abas_3,
                popuplayertitle: 'ca_perimetros_abas',
                interactive: false,
                title: '<img src="styles/legend/ca_perimetros_abas_3.png" /> ca_perimetros_abas'
            });
var format_ca_perimetros_aes_4 = new ol.format.GeoJSON();
var features_ca_perimetros_aes_4 = format_ca_perimetros_aes_4.readFeatures(json_ca_perimetros_aes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ca_perimetros_aes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ca_perimetros_aes_4.addFeatures(features_ca_perimetros_aes_4);
var lyr_ca_perimetros_aes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ca_perimetros_aes_4, 
                style: style_ca_perimetros_aes_4,
                popuplayertitle: 'ca_perimetros_aes',
                interactive: false,
                title: '<img src="styles/legend/ca_perimetros_aes_4.png" /> ca_perimetros_aes'
            });
var format_ca_perimetros_ags_5 = new ol.format.GeoJSON();
var features_ca_perimetros_ags_5 = format_ca_perimetros_ags_5.readFeatures(json_ca_perimetros_ags_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ca_perimetros_ags_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ca_perimetros_ags_5.addFeatures(features_ca_perimetros_ags_5);
var lyr_ca_perimetros_ags_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ca_perimetros_ags_5, 
                style: style_ca_perimetros_ags_5,
                popuplayertitle: 'ca_perimetros_ags',
                interactive: false,
                title: '<img src="styles/legend/ca_perimetros_ags_5.png" /> ca_perimetros_ags'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Municipios_1.setVisible(true);lyr_areasconflictosexperimental_2.setVisible(true);lyr_ca_perimetros_abas_3.setVisible(true);lyr_ca_perimetros_aes_4.setVisible(true);lyr_ca_perimetros_ags_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Municipios_1,lyr_areasconflictosexperimental_2,lyr_ca_perimetros_abas_3,lyr_ca_perimetros_aes_4,lyr_ca_perimetros_ags_5];
lyr_Municipios_1.set('fieldAliases', {'DEPTO': 'DEPTO', 'PROVINCIA': 'PROVINCIA', 'MUNICIPIO': 'MUNICIPIO', });
lyr_areasconflictosexperimental_2.set('fieldAliases', {'Riesgo': 'Riesgo', 'ciu_com': 'ciu_com', 'mpio': 'mpio', 'Tipo_confl': 'Tipo_confl', 'desc_confl': 'desc_confl', 'grad_confl': 'grad_confl', });
lyr_ca_perimetros_abas_3.set('fieldAliases', {'gid': 'gid', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'cod_cd_com': 'cod_cd_com', 'ciu_com': 'ciu_com', 'id_ciu_com': 'id_ciu_com', 'com_inra': 'com_inra', 'id_inra': 'id_inra', 'tipo': 'tipo', 'fuente': 'fuente', 'upa_13': 'upa_13', 'sup13ha': 'sup13ha', 'n_pre_ace': 'n_pre_ace', 'id_com_cpv': 'id_com_cpv', 'id_com_cna': 'id_com_cna', 'id_com_ace': 'id_com_ace', 'reg_censos': 'reg_censos', 'id_com_ca': 'id_com_ca', 'tot_viv_12': 'tot_viv_12', 'tot_viv_ac': 'tot_viv_ac', 'ord_mun': 'ord_mun', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'tot_pob_ac': 'tot_pob_ac', 'tot_pob_12': 'tot_pob_12', 'cod_aba': 'cod_aba', 'aba_unico': 'aba_unico', 'upa_fin': 'upa_fin', 'usr_insert': 'usr_insert', 'fec_insert': 'fec_insert', 'usr_update': 'usr_update', 'fec_update': 'fec_update', 'd_co_comk': 'd_co_comk', 'observ': 'observ', 'codigompio': 'codigompio', 'upa_fin_t': 'upa_fin_t', 'upa_c_coor': 'upa_c_coor', 'upa_s_coor': 'upa_s_coor', 'senasag_cc': 'senasag_cc', 'senasag_sc': 'senasag_sc', 'tot_pob_24': 'tot_pob_24', 'pob_cpv49': 'pob_cpv49', 'upa_proy': 'upa_proy', 'n_pol_inra': 'n_pol_inra', 'upa_cc_inc': 'upa_cc_inc', 'depurado': 'depurado', });
lyr_ca_perimetros_aes_4.set('fieldAliases', {'gid': 'gid', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'upa_13_ae': 'upa_13_ae', 'sup13ha_ae': 'sup13ha_ae', 'pre_ace_ae': 'pre_ace_ae', 'n_aba_ae': 'n_aba_ae', 'n_com_ae': 'n_com_ae', 'n_est_ae': 'n_est_ae', 'n_tco_ae': 'n_tco_ae', 'viv_12_ae': 'viv_12_ae', 'viv_ac_ae': 'viv_ac_ae', 'ord_mun': 'ord_mun', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'observ': 'observ', 'upa_fin': 'upa_fin', 'usr_insert': 'usr_insert', 'fec_insert': 'fec_insert', 'usr_update': 'usr_update', 'fec_update': 'fec_update', 'n_cuest': 'n_cuest', 'n_empadro': 'n_empadro', 'codigompio': 'codigompio', });
lyr_ca_perimetros_ags_5.set('fieldAliases', {'gid': 'gid', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'upa_13_ag': 'upa_13_ag', 'sup13ha_ag': 'sup13ha_ag', 'pre_ace_ag': 'pre_ace_ag', 'viv_12_ag': 'viv_12_ag', 'viv_ace_ag': 'viv_ace_ag', 'n_aba_ag': 'n_aba_ag', 'n_com_ag': 'n_com_ag', 'n_est_ag': 'n_est_ag', 'n_tco_ag': 'n_tco_ag', 'ord_mun': 'ord_mun', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'observ': 'observ', 'upa_fin': 'upa_fin', 'c_op': 'c_op', 'usr_insert': 'usr_insert', 'fec_insert': 'fec_insert', 'usr_update': 'usr_update', 'fec_update': 'fec_update', 'codigompio': 'codigompio', });
lyr_Municipios_1.set('fieldImages', {'DEPTO': 'TextEdit', 'PROVINCIA': 'TextEdit', 'MUNICIPIO': 'TextEdit', });
lyr_areasconflictosexperimental_2.set('fieldImages', {'Riesgo': 'TextEdit', 'ciu_com': 'TextEdit', 'mpio': 'TextEdit', 'Tipo_confl': 'TextEdit', 'desc_confl': 'TextEdit', 'grad_confl': 'TextEdit', });
lyr_ca_perimetros_abas_3.set('fieldImages', {'gid': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'cod_cd_com': 'TextEdit', 'ciu_com': 'TextEdit', 'id_ciu_com': 'TextEdit', 'com_inra': 'TextEdit', 'id_inra': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', 'upa_13': 'TextEdit', 'sup13ha': 'TextEdit', 'n_pre_ace': 'TextEdit', 'id_com_cpv': 'TextEdit', 'id_com_cna': 'TextEdit', 'id_com_ace': 'TextEdit', 'reg_censos': 'TextEdit', 'id_com_ca': 'TextEdit', 'tot_viv_12': 'TextEdit', 'tot_viv_ac': 'TextEdit', 'ord_mun': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'tot_pob_ac': 'TextEdit', 'tot_pob_12': 'TextEdit', 'cod_aba': 'TextEdit', 'aba_unico': 'TextEdit', 'upa_fin': 'TextEdit', 'usr_insert': 'TextEdit', 'fec_insert': 'TextEdit', 'usr_update': 'TextEdit', 'fec_update': 'TextEdit', 'd_co_comk': 'TextEdit', 'observ': 'TextEdit', 'codigompio': 'TextEdit', 'upa_fin_t': 'TextEdit', 'upa_c_coor': 'TextEdit', 'upa_s_coor': 'TextEdit', 'senasag_cc': 'TextEdit', 'senasag_sc': 'TextEdit', 'tot_pob_24': 'TextEdit', 'pob_cpv49': 'TextEdit', 'upa_proy': 'TextEdit', 'n_pol_inra': 'TextEdit', 'upa_cc_inc': 'TextEdit', 'depurado': 'TextEdit', });
lyr_ca_perimetros_aes_4.set('fieldImages', {'gid': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'upa_13_ae': 'TextEdit', 'sup13ha_ae': 'TextEdit', 'pre_ace_ae': 'TextEdit', 'n_aba_ae': 'TextEdit', 'n_com_ae': 'TextEdit', 'n_est_ae': 'TextEdit', 'n_tco_ae': 'TextEdit', 'viv_12_ae': 'TextEdit', 'viv_ac_ae': 'TextEdit', 'ord_mun': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'observ': 'TextEdit', 'upa_fin': 'TextEdit', 'usr_insert': 'TextEdit', 'fec_insert': 'TextEdit', 'usr_update': 'TextEdit', 'fec_update': 'TextEdit', 'n_cuest': 'TextEdit', 'n_empadro': 'TextEdit', 'codigompio': 'TextEdit', });
lyr_ca_perimetros_ags_5.set('fieldImages', {'gid': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'upa_13_ag': 'TextEdit', 'sup13ha_ag': 'TextEdit', 'pre_ace_ag': 'TextEdit', 'viv_12_ag': 'TextEdit', 'viv_ace_ag': 'TextEdit', 'n_aba_ag': 'TextEdit', 'n_com_ag': 'TextEdit', 'n_est_ag': 'TextEdit', 'n_tco_ag': 'TextEdit', 'ord_mun': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'observ': 'TextEdit', 'upa_fin': 'TextEdit', 'c_op': 'TextEdit', 'usr_insert': 'TextEdit', 'fec_insert': 'TextEdit', 'usr_update': 'TextEdit', 'fec_update': 'TextEdit', 'codigompio': 'TextEdit', });
lyr_Municipios_1.set('fieldLabels', {'DEPTO': 'no label', 'PROVINCIA': 'no label', 'MUNICIPIO': 'no label', });
lyr_areasconflictosexperimental_2.set('fieldLabels', {'Riesgo': 'inline label - always visible', 'ciu_com': 'inline label - always visible', 'mpio': 'inline label - always visible', 'Tipo_confl': 'inline label - always visible', 'desc_confl': 'inline label - always visible', 'grad_confl': 'inline label - always visible', });
lyr_ca_perimetros_abas_3.set('fieldLabels', {'gid': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'cod_cd_com': 'no label', 'ciu_com': 'no label', 'id_ciu_com': 'no label', 'com_inra': 'no label', 'id_inra': 'no label', 'tipo': 'no label', 'fuente': 'no label', 'upa_13': 'no label', 'sup13ha': 'no label', 'n_pre_ace': 'no label', 'id_com_cpv': 'no label', 'id_com_cna': 'no label', 'id_com_ace': 'no label', 'reg_censos': 'no label', 'id_com_ca': 'no label', 'tot_viv_12': 'no label', 'tot_viv_ac': 'no label', 'ord_mun': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'tot_pob_ac': 'no label', 'tot_pob_12': 'no label', 'cod_aba': 'no label', 'aba_unico': 'no label', 'upa_fin': 'no label', 'usr_insert': 'no label', 'fec_insert': 'no label', 'usr_update': 'no label', 'fec_update': 'no label', 'd_co_comk': 'no label', 'observ': 'no label', 'codigompio': 'no label', 'upa_fin_t': 'no label', 'upa_c_coor': 'no label', 'upa_s_coor': 'no label', 'senasag_cc': 'no label', 'senasag_sc': 'no label', 'tot_pob_24': 'no label', 'pob_cpv49': 'no label', 'upa_proy': 'no label', 'n_pol_inra': 'no label', 'upa_cc_inc': 'no label', 'depurado': 'no label', });
lyr_ca_perimetros_aes_4.set('fieldLabels', {'gid': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'upa_13_ae': 'no label', 'sup13ha_ae': 'no label', 'pre_ace_ae': 'no label', 'n_aba_ae': 'no label', 'n_com_ae': 'no label', 'n_est_ae': 'no label', 'n_tco_ae': 'no label', 'viv_12_ae': 'no label', 'viv_ac_ae': 'no label', 'ord_mun': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'observ': 'no label', 'upa_fin': 'no label', 'usr_insert': 'no label', 'fec_insert': 'no label', 'usr_update': 'no label', 'fec_update': 'no label', 'n_cuest': 'no label', 'n_empadro': 'no label', 'codigompio': 'no label', });
lyr_ca_perimetros_ags_5.set('fieldLabels', {'gid': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'upa_13_ag': 'no label', 'sup13ha_ag': 'no label', 'pre_ace_ag': 'no label', 'viv_12_ag': 'no label', 'viv_ace_ag': 'no label', 'n_aba_ag': 'no label', 'n_com_ag': 'no label', 'n_est_ag': 'no label', 'n_tco_ag': 'no label', 'ord_mun': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'observ': 'no label', 'upa_fin': 'no label', 'c_op': 'no label', 'usr_insert': 'no label', 'fec_insert': 'no label', 'usr_update': 'no label', 'fec_update': 'no label', 'codigompio': 'no label', });
lyr_ca_perimetros_ags_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});