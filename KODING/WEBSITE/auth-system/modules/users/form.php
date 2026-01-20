<form method="post" action="/actions/user_save.php">
    <input type="hidden" name="csrf_token" value="<?= csrf_token() ?>">
    <input type="hidden" name="_action" value="create">

    <input name="username" required>
    <select name="role">
        <option value="member">Member</option>
        <option value="admin">Admin</option>
    </select>

    <button type="submit">Simpan</button>
</form>

<!-- edit -->

<input type="hidden" name="_action" value="update">
<input type="hidden" name="id" value="<?= $user['id'] ?>">

<!-- delete -->

<input type="hidden" name="_action" value="delete">
<input type="hidden" name="id" value="<?= $user['id'] ?>">

<!-- Integrasi dengan flash.php -->

<?= flash('success') ?>
<?= flash('error') ?>



