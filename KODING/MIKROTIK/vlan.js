==========================================================================================================
==========================================================================================================
----------------------------------------------------------------------------------------------------------
CARA BUAT VLAN
- interface > tab VLAN > add > 
    - isikan tab general:
        - name : "nama" > vlan ID : "number (terserah sbg pengenal boleh ngka 10,11,12 dst )" > 
        interface pilih interface : "pilih port, bridge, vlan" (vlan tidak kayaknya) > 
    - tab loop :
        - loop protect : default(opt : on) supaya selalu on saja silahkan
    - tab lainya biarkan
    - kalau mau kasih comment
    - apply >  OK
----------------------------------------------------------------------------------------------------------
IP ADDRESS
- setelah interface vLAN di buat lalu buatkan IP ADDRESS ALOKASI untuknya
  untuk disebar nantinya ke luar sbg anggotanya 
- caranya:
    - IP > Adresses > add > 
        - address : 'alokasi ke bawah' > interace : 'pilih port, bridge, vlan' 
        
