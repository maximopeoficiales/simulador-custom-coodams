<h2>Tasas de Interes segun Categoria <?php echo e(get_option('libre_inversion')); ?></h2>
<form action="" method="post">

    <input type="hidden" name="updateOptionsSimulador" value="1">
    <div class="form-check">
        <label class="form-check-label">
            <input type="checkbox" class="form-check-input" name="sim_libre_inversion" value="1"
                <?php echo e(intval(get_option('sim_libre_inversion')) == 1 ? ' checked' : ''); ?>>
            Libre Inversion
        </label>
    </div>
    <div class="form-check">
        <label class="form-check-label">
            <input type="checkbox" class="form-check-input" name="sim_vivienda" value="1"
                <?php echo e(intval(get_option('sim_vivienda')) == 1 ? ' checked' : ''); ?>>
            Vivienda
        </label>
    </div>
    <div class="form-check">
        <label class="form-check-label">
            <input type="checkbox" class="form-check-input" name="sim_vehiculo" value="1"
                <?php echo e(intval(get_option('sim_vehiculo')) == 1 ? ' checked' : ''); ?>>
            Vehiculo
        </label>
    </div>
    <div class="form-group my-2">
        <label for="tasa_libre_inversion">Libre Inversion:</label>
        <input type="number" name="tasa_libre_inversion" id="tasa_libre_inversion" step="0.1" class="form-control"
            placeholder="Ejm: 1.1" value="<?php echo e(get_option('tasa_libre_inversion')); ?>">
    </div>

    <div class="form-group my-2">
        <label for="tasa_vivienda">Vivienda:</label>
        <input type="number" name="tasa_vivienda" id="tasa_vivienda" step="0.1" class="form-control" placeholder="Ejm: 1.1"
            value="<?php echo e(get_option('tasa_vivienda')); ?>">
    </div>

    <div class="form-group my-2">
        <label for="tasa_vehiculo_1">Vehiculo de 12 a 36 meses:</label>
        <input type="number" name="tasa_vehiculo_1" id="tasa_vehiculo_1" step="0.1" class="form-control" placeholder="Ejm: 1.1"
            value="<?php echo e(get_option('tasa_vehiculo_1')); ?>">
    </div>
    <div class="form-group my-2">
        <label for="tasa_vehiculo_2">Vehiculo de 37 a 120 meses:</label>
        <input type="number" name="tasa_vehiculo_2" id="tasa_vehiculo_2" step="0.1" class="form-control" placeholder="Ejm: 1.1"
            value="<?php echo e(get_option('tasa_vehiculo_2')); ?>">
    </div>

    <div class="form-group my-2">
        <label for="tasa_vehiculo_3">Vehiculo mas 120 meses:</label>
        <input type="number" name="tasa_vehiculo_3" id="tasa_vehiculo_3"  step="0.1" class="form-control" placeholder="Ejm: 1.1"
            value="<?php echo e(get_option('tasa_vehiculo_3')); ?>">
    </div>
    <div class="form-group my-2">
        <label for="monto_max_libre_inversion">Monto Maximo Libre Inversion:</label>
        <input type="number" name="monto_max_libre_inversion" id="monto_max_libre_inversion" class="form-control" placeholder="Ejm: 5269451" 
            value="<?php echo e(get_option('monto_max_libre_inversion')); ?>">
    </div>
    <div class="form-group my-2">
        <label for="monto_max_vivienda">Monto Maximo Vivienda:</label>
        <input type="number" name="monto_max_vivienda" id="monto_max_vivienda" class="form-control" placeholder="Ejm: 181705200" 
            value="<?php echo e(get_option('monto_max_vivienda')); ?>">
    </div>
    <div class="form-group my-2">
        <label for="monto_max_vehiculo">Monto Maximo Vehiculo:</label>
        <input type="number" name="monto_max_vehiculo" id="monto_max_vehiculo" class="form-control" placeholder="Ejm: 45426300" 
            value="<?php echo e(get_option('monto_max_vehiculo')); ?>">
    </div>

    <button type="submit" class="button blue">Guardar Cambios</button>
</form>
<?php /**PATH /var/www/html/wp-content/plugins/simulador-custom/resources/views/adminPage.blade.php ENDPATH**/ ?>