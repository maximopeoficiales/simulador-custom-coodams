<h2>Tasas de Interes segun Categoria</h2>
<form action="" method="post">

    <input type="hidden" name="updateOptionsSimulador" value="1">
    <small>Si desea poner decimales en el Plan de Credito por favor separenlo por "."</small>
    <div class="form-group my-2">
        <label for="tasa_plan_credito">Plan de Credito</label>
        <input type="text" name="tasa_plan_credito" id="tasa_plan_credito"   class="form-control" placeholder="Ejm: 1.1" value="<?php echo e(get_option('tasa_plan_credito')); ?>">
    </div>

    <div class="form-group my-2">
        <label for="monto_max_plan_credito">Monto Maximo Plan de Credito:</label>
        <input type="number" name="monto_max_plan_credito" id="monto_max_plan_credito" class="form-control" placeholder="Ejm: 45426300" value="<?php echo e(get_option('monto_max_plan_credito')); ?>">
    </div>

    <button type="submit" class="button blue">Guardar Cambios</button>
</form>

<h3>¿Como usarlo?</h3>
<div class="plugin-description">
    <p>Usted tendra disponible el shortcode <b>[simulador_custom]</b>.</p>
    <p> Este puede recibir como parametro "show_only" donde pondra un numero respectivo a lo que solo quiere mostrar en
        el simulador.</p>
    <ul>
        <li><b>1</b>: Solo mostrara Libre Inversion Especial</li>
        <li><b>2</b>: Solo mostrara Vivienda</li>
        <li><b>3</b>: Solo mostrara Vehiculo</li>
        <li><b>4</b>: Solo mostrara Plan de Credito</li>
    </ul>
    <p>Ejm: Si solo quieres mostrar en determinada pagina el simulador solo con <b>Libre Inversion Especial</b> deberias
        ingresar el shortcode de esta manera <b>[simulador_custom show_only=1]</b></p>
    <p><b>Importante:</b> Por otro lado, si no envias ningun parametro, por defecto este se manejara con los checks de
        activacion del inicio.
    </p>
</div>
<?php /**PATH /var/www/html/wp-content/plugins/simulador-custom/resources/views/adminPage.blade.php ENDPATH**/ ?>