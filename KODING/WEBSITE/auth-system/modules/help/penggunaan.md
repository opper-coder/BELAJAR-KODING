PENGGUNAANN
INTEGRASI
    - folder structur
    - .htaccess
    - relative url
AUTH
    - login
    - register
    - logout
CRUD
    - crud manual
FORM
    - form generator(create, edit, delete)
-----------------------------------------------------------
INTEGRASI
1. Folder structur
2. relative URL
3. .htaccess
----------------------------------------------------------- 
AUTH
1. login
2. register
3. role
4. logout
---
auth-system ini siap pakai, tinggal lakukan langkah integrasikan ke aplikasi html kita 
- .htaccess akan mencegah membuka halaman langsung di browser 
- login akan mengatur session dalam browser dan memberikan semacam array-credential
- session akan menentukan halaman mana yang boleh di akses, atau di tendang ke loginpage 
- role akan menentukan tool atau komponen mana yang show atau hide untuk role tertentu
- role juga bisa melakukan redirect ke halaman lain jika tidak di izinkan 
---
fitur
- auto login cookie 7 hari
- test password salah 5x dan akan jeda 1 menit 
- bebas csrf yaitu token login agar tidak bisa ambil password plaintex di cache
- validation semacam escape dari SQL INJECT, jumlah minimal maksimal, 
- ada notifikasi berupa flash 
- 
----------------------------------------------------------- 
CRUD
1. select All
2. select berdasarkan ID
3. create data
4. Update data berdasarkan ID
5. Hapus data berdasarkan ID
6. Menghitung jumlah (SUM) dari kolom tertentu 
7. Filter, Search, dan Pagination Lengkap
8. Filter LIKE (Hanya jika keyword DAN searchFields ada)
9. TOTAL (count)
10. filter Sort ( distinc jadi dropdown )

----------------------------------------------------------- 
FORM
----------------------------------------------------------- 







