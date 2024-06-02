------------------------------------
BACKUP 
- buka files 
- buka new terminal (berdampingan dengan files)
:> /ip -> enter
:> hotspot -> enter 
:> user -> enter
:> export file=namaFile -> enter
- lihat(cari) hasilnya (fileyang di export) di /root files
--- atau (backup user dan user profile)
ip hotspot user export file=namaFile
ip hotspot user profile export file=namaFile2

------------------------------------
RESTORE
- buka files 
- upload 2 file backup di atas
- buka jendela user hotspot untuk melihat perubahan
- jalankan restore di terminal:
:> import file-name=namaFile.rsc (bukan scr) 
- lihat hasilnya di jendela user
