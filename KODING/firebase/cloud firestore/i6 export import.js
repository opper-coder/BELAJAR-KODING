==================================================================================================================
==================================================================================================================
------------------------------------------------------------------------------------------------------------------
EXPORT IMPORT DB
  - export import berfungsi sebagai backup data
  - baik berupa koleksi atau dokumen tertentu atau keseluruhan
  - dapat di import bukan saja sesama firestore boleh antar project
  - bahkan dapat di import pada bigquery
  - di kenakan biaya per 1 baca per 1 dokumen di export
PERSIAPAN MULAI
  1. aktifkan penagihan (otomatis paket blaze bukan spark)
  2. bikin bucket cloud storage
  3. memiliki izin (Cloud Datastore Owner)
  4. baca lebih detil lagi dokumentasi
