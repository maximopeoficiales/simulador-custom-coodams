<?php

namespace GKLSMP;

class ShortcodeController
{

    public function __construct()
    {
    }
    public function index($params)
    {
        wp_enqueue_style('chuck_css_react', assetStaticCSSReact('main.a2ddedb7.chunk.css'), '', '1.0.0');

        wp_enqueue_script('chuck_js_base', asset('/js/base.js'), '', '1.0.0', true);
        wp_enqueue_script('chuck_js_react_1', assetStaticJSReact('2.7ac078d6.chunk.js'), '', '1.0.0', true);
        wp_enqueue_script('chuck_js_react_2', assetStaticJSReact('main.3d86509d.chunk.js'), '', '1.0.0', true);

        return view("shortcode", [
            'show_only' => $params['show_only'] ?? 0
        ]);
    }               
}
