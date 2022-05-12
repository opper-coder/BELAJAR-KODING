==================================================================================================================
==================================================================================================================
------------------------------------------------------------------------------------------------------------------
EXPORT IMPORT DB
  - export-import berfungsi sebagai backup-restore data
  - baik berupa koleksi atau dokumen tertentu atau keseluruhan
  - dapat di import bukan saja sesama firestore boleh antar project
  - bahkan dapat di import pada bigquery
  - di kenakan biaya per 1 baca per 1 dokumen di export
PERSIAPAN MULAI
  1. aktifkan penagihan (otomatis paket blaze bukan spark)
  2. bikin bucket cloud storage
  3. memiliki izin (memerlukan layanan GCP Cloud Datastore Owner, dan izin akun admin)
  4. dapat di kontrol di GCP Console
  5. baca lebih detil lagi dokumentasi
  6. ada juga pindahkan data firestore ke firestore diprojek lain (antar projek)
  7. kayaknya baca pada saat di butuhkan saja nanti
