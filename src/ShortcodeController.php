<?php

namespace GKLSMP;

class ShortcodeController
{

    public function __construct()
    {
    }
    public function index($params)
    {
        wp_enqueue_style('chuck_css_react', assetStaticCSSReact('main.b4e0a18a.chunk.css'), '', '1.0.0');

        wp_enqueue_script('chuck_js_base', asset('/js/base.js'), '', '1.0.0', true);
        wp_enqueue_script('chuck_js_react_1', assetStaticJSReact('2.4eca5775.chunk.js'), '', '1.0.0', true);
        wp_enqueue_script('chuck_js_react_2', assetStaticJSReact('main.a15c7406.chunk.js'), '', '1.0.0', true);

        return view("shortcode", [
            'show_only' => $params['show_only']
        ]);
    }
}
