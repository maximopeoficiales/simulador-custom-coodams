<?php

namespace GKLSMP;

use stdClass;

class AdminController
{

    public function __construct()
    {
    }
    public static function index()
    {
        echo view('adminPage', ['name' => 'John Doe']);
    }

    public static function saveOptions()
    {
        update_option('tasa_libre_inversion', $_POST['tasa_libre_inversion']);
        update_option('tasa_vivienda', $_POST['tasa_vivienda']);
        update_option('tasa_vehiculo_1', $_POST['tasa_vehiculo_1']);
        update_option('tasa_vehiculo_2', $_POST['tasa_vehiculo_2']);
        update_option('tasa_vehiculo_3', $_POST['tasa_vehiculo_3']);
    }


    public static function jsonGetOptions()
    {
        // http://localhost/wp-json/simulador/v1/getOptions
        register_rest_route('simulador/v1', '/getOptions', array(
            'methods' => 'GET',
            'callback' => function () {
                $object = [
                    "tasa_libre_inversion" => get_option('tasa_libre_inversion'),
                    "tasa_vivienda" => get_option('tasa_vivienda'),
                    "tasa_vehiculo_1" => get_option('tasa_vehiculo_1'),
                    "tasa_vehiculo_2" => get_option('tasa_vehiculo_2'),
                    "tasa_vehiculo_3" => get_option('tasa_vehiculo_3'),
                ];
                return $object;
            },
        ));
    }
    public static function loadAdminStyle()
    {
        // wp_enqueue_style('sim_page_admin', assetCss('page-admin.css'), '', '1.0.0');
        wp_enqueue_style('sim_page_admin', assetCss('page-admin.css'), '', '1.0.0');
    }
}
