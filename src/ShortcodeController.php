<?php

namespace GKLSMP;

class ShortcodeController
{

    public function __construct()
    {
    }
    public function index()
    {
        wp_enqueue_style('chuck_css_react', assetStaticCSSReact('main.56cda763.chunk.css'), '', '1.0.0');

        wp_enqueue_script('chuck_js_base', asset('/js/base.js'), '', '1.0.0', true);
        wp_enqueue_script('chuck_js_react_1', assetStaticJSReact('2.ea22a037.chunk.js'), '', '1.0.0', true);
        wp_enqueue_script('chuck_js_react_2', assetStaticJSReact('main.659d600d.chunk.js'), '', '1.0.0', true);

        return view("shortcode", []);
    }
}
