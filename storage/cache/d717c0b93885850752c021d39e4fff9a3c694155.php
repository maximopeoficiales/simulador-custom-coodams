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
        <input type="text" name="tasa_libre_inversion" id="tasa_libre_inversion" class="form-control"
            placeholder="Ejm: 1.1" value="<?php echo e(get_option('tasa_libre_inversion')); ?>">
    </div>

    <div class="form-group my-2">
        <label for="tasa_vivienda">Vivienda:</label>
        <input type="text" name="tasa_vivienda" id="tasa_vivienda" class="form-control" placeholder="Ejm: 1.1"
            value="<?php echo e(get_option('tasa_vivienda')); ?>">
    </div>

    <div class="form-group my-2">
        <label for="tasa_vehiculo_1">Vehiculo de 12 a 36 meses:</label>
        <input type="text" name="tasa_vehiculo_1" id="tasa_vehiculo_1" class="form-control" placeholder="Ejm: 1.1"
            value="<?php echo e(get_option('tasa_vehiculo_1')); ?>">
    </div>
    <div class="form-group my-2">
        <label for="tasa_vehiculo_2">Vehiculo de 37 a 120 meses:</label>
        <input type="text" name="tasa_vehiculo_2" id="tasa_vehiculo_2" class="form-control" placeholder="Ejm: 1.1"
            value="<?php echo e(get_option('tasa_vehiculo_2')); ?>">
    </div>

    <div class="form-group my-2">
        <label for="tasa_vehiculo_3">Vehiculo mas 120 meses:</label>
        <input type="text" name="tasa_vehiculo_3" id="tasa_vehiculo_3" class="form-control" placeholder="Ejm: 1.1"
            value="<?php echo e(get_option('tasa_vehiculo_3')); ?>">
    </div>
    <button type="submit" class="button blue">Guardar Cambios</button>
</form>
<?php /**PATH /var/www/html/wp-content/plugins/simulador-custom/resources/views/adminPage.blade.php ENDPATH**/ ?>