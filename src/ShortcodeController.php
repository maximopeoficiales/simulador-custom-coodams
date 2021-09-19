<?php

namespace GKLSMP;

class ShortcodeController
{

    public function __construct()
    {
    }
    public function index()
    {
        return view("shortcode", []);
    }
}
