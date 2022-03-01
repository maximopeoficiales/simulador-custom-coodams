<?php

namespace GKLSMP;

class AdminController
{

    public function __construct()
    {
    }
    public static function index()
    {
        require pathView('adminPage');
    }

    public static function saveOptions()
    {
        update_option('tasa_libre_inversion', $_POST['tasa_libre_inversion']);
        update_option('tasa_vivienda', $_POST['tasa_vivienda']);
        update_option('tasa_vehiculo_1', $_POST['tasa_vehiculo_1']);
        update_option('tasa_vehiculo_2', $_POST['tasa_vehiculo_2']);
        update_option('tasa_vehiculo_3', $_POST['tasa_vehiculo_3']);
        update_option('tasa_plan_credito', $_POST['tasa_plan_credito']);
        // check de valores
        update_option('sim_vehiculo', $_POST['sim_vehiculo'] ?? 0);
        update_option('sim_vivienda', $_POST['sim_vivienda'] ?? 0);
        update_option('sim_libre_inversion', $_POST['sim_libre_inversion'] ?? 0);
        update_option('sim_plan_credito', $_POST['sim_plan_credito'] ?? 0);

        update_option('monto_max_libre_inversion', $_POST['monto_max_libre_inversion'] ?? 0);
        update_option('monto_max_vivienda', $_POST['monto_max_vivienda'] ?? 0);
        update_option('monto_max_vehiculo', $_POST['monto_max_vehiculo'] ?? 0);
        update_option('monto_max_plan_credito', $_POST['monto_max_plan_credito'] ?? 0);
    }


    public static function jsonGetOptions()
    {
        // http://localhost/wp-json/simulador/v1/getOptions
        register_rest_route('simulador/v1', '/getOptions', array(
            'methods' => 'GET',
            'callback' => function () {
                $object = [
                    "tasa_libre_inversion" => floatval(get_option('tasa_libre_inversion')),
                    "tasa_vivienda" => floatval(get_option('tasa_vivienda')),
                    "tasa_vehiculo_1" => floatval(get_option('tasa_vehiculo_1')),
                    "tasa_vehiculo_2" => floatval(get_option('tasa_vehiculo_2')),
                    "tasa_vehiculo_3" => floatval(get_option('tasa_vehiculo_3')),
                    "tasa_plan_credito" => floatval(get_option('tasa_plan_credito')),

                    "sim_libre_inversion" => boolval(get_option('sim_libre_inversion')),
                    "sim_vivienda" => boolval(get_option('sim_vivienda')),
                    "sim_vehiculo" => boolval(get_option('sim_vehiculo')),
                    "sim_plan_credito" => boolval(get_option('sim_plan_credito')),

                    "monto_max_libre_inversion" => intval(get_option('monto_max_libre_inversion')),
                    "monto_max_vivienda" => intval(get_option('monto_max_vivienda')),
                    "monto_max_vehiculo" => intval(get_option('monto_max_vehiculo')),
                    "monto_max_plan_credito" => intval(get_option('monto_max_plan_credito')),
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
