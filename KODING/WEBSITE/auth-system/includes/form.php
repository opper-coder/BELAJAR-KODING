<?php
/**
 * Form Generator Library 2026
 */

function form_input(string $type, string $name, string $label, $value = '', array $options = []): void {
    $val = htmlspecialchars($value ?? '');
    echo "<div class='form-group' style='margin-bottom:15px;'>";
    echo "<label style='display:block;'>$label</label>";

    if ($type === 'select') {
        echo "<select name='$name' class='form-control'>";
        foreach ($options as $opt_val => $opt_label) {
            $selected = ($opt_val == $value) ? 'selected' : '';
            echo "<option value='$opt_val' $selected>$opt_label</option>";
        }
        echo "</select>";
    } elseif ($type === 'textarea') {
        echo "<textarea name='$name' class='form-control'>$val</textarea>";
    } else {
        // Mendukung text, number, email, date, hidden, dll
        echo "<input type='$type' name='$name' value='$val' class='form-control'>";
    }
    echo "</div>";
}
