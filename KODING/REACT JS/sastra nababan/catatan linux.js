/*
jika terjadi error linux initramfs dan tidak mau loading maka perlu perbaikan file boot MediaKeySystemAccess
1. baca di script error disana di tunjukan partisi mana yang sedang error (partisi system berada)
2. lalu di depan (initramfs) ketik

fsck.ext4 /dev/sda6

lalu ikuti y y y atau yes yes yes sampai selesai.
lalu ketik reboot atau tekan ctrl+alt+del;

*/