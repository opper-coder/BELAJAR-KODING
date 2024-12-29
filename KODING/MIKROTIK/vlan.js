RINGAKASAN
vlan adalah port secara virtual yang dapat di kirim sacara banyak dalam satu port fisik(satu kabel)
kemudian di terima dan di pecah kembali menjadi banyak fisik port
kita akan config 2 mikrotik
1 untuk server vlan (mikrotik biasa)
2 untuk menerima vlan (mikrotik sebagai switch> yaitu yang memiliki chip switch manageable)
3 bisa juga langsung diterima dengan ONT(support vlan) namun kita harus setting dg "tag vlan"

-----------------------------------------------------------------------------------------------------------------
VLAN CITRAWEB(terima vlan > konversi jadi ether) 
        1 pakai switch(jk ada chip)
        2 pakai bridge 
            - Mikrotik Sender VLAN, interface vlan
            - Mikrotik Receiver VLAN, ada 2:
        1. pakai switch
            - cek switch chips (MT212) > lihat port yang di support (ether1,2,3,4. wlan tidak) 
            - add bridge1-SWITCH >
                - port(ether-Tag, ether2-Untag, ether3-untag) 
                - hardware offload=YES flag H hardware
            - /switch VLAN add (tag vlan dan porting ether)
                - VLANID=100
                - port=ether1, ether2
                -- 
                - VLANID=200
                - port=ether1, ether3
            - switch mode (assign tag, untag)
                switch > tab port > ether1(trunk), ether2, ether3(access)
                edit ether1 trunk : mode=secure vlan-header=add-if-missing vlanID=0
                edit ether2 access: mode=secure vlan-header=always-strip vlanID=100
                edit ether3 access: mode=secure vlan-header=always-strip vlanID=200
        2. pakai bridge(no chipset)
           bikin wlan1 dan wlan2 virtual (bikin dua SSID nanti untuk lewat dua vlan)
            - BRIDGE: +bridge-TRUNK > VLAN-filtering=yes (inti dr mode ini)
            - PORT: +ether1-tag, wlan1-untag, wlan2-untag > hardware offload=NO (no chipset) tab VLAN: per ether +PVID=100, 200
            - VLANs: +PVID=100 tagged=ether1, +untagged=ether2, +untagged=ether3

----------------------------------------------------------------------------------------------------------------
VLAN STACKING(Q-in-Q) adalah vlan dalam vlan CITRAWEB
    MIKROTIK-A selaku generate vlan in vlan 
        Bridge port ether2-DIST
            vlan10(outer)(vlan pembungkus)(di video lain outer harus centang use service tag)
                vlan100(inner)(DHCPserver)(vlan slave)
                vlan200(inner)(DHCPserver)(vlan slave)
                vlan300(inner)(DHCPserver)(vlan slave)
    MIKROTIK-B (jembatan ke C, sebaiknya CRS atau yang punya chipset switch support vlan)
        Bridge
            BRIDGE: bridge1 > vlan filtering=y
            PORT:   ether1(in), ether2(out) 
                    ether2 tab vlan PVID=10 tag stacking=y tambahkan outer 
            VLANs: bridge1 vlan-ID=10 tagged=ether1 untagged=ether2 
            (vlan100, 200, 300 karena ini tunnel untuk stacking)
    MIKROTIK-C
        Bridge
            BRIDGE: bridge1 > vlan filtering=y
            PORT:   ether1(in), ether2(out) 
                    ether2 tab vlan PVID=100
                    ether3 tab vlan PVID=200
                    vlanCOBA tab vlan PVID=300 (buat di +bridge1)
            VLANs:  bridge1 vlan-ID=100 tagged=ether1 untagged=ether2 
                    bridge1 vlan-ID=200 tagged=ether1 untagged=ether3 
                    bridge1 vlan-ID=300 tagged=ether1 untagged=vlanISP1 
            vlan10 tidak di masukan karena outer 

----------------------------------------------------------------------------------------------------------------
VLAN SEDERHANA raden budiarta
    MIKROTIK-A                      <>      MIKROTIK-B
    -------------------
    ether5=vlan1,2,3(trunk,dhcp)    <>      ether1=vlan1,2,3(trunk)
                                    <>      bridge1=vlan1, ether2(access)
                                    <>      bridge2=vlan2, ether3(access)
                                    <>      bridge3=vlan3, ether4(access)
    --------------------------------------------------------
    MENERUSKAN VLAN mirip Q-in-Q
    MIKROTIK-A                      <>      MIKROTIK-B
    ether5=vlan1,2,3(trunk,dhcp)    <>      ether1=vlan1,2,3(trunk)
                                    <>      bridge1=ether1(in), ether2(out) (meneruskan VLAN di ether2)
                                    --
                                    <>      (opt)vlan filtering=y 
                                            bridge vlan +bridge=bridge1 tagged=ether1, 2 vlan-ids=101, 102 
                                            (untagged tidak ada karena tidak ada ubah vlan ke ether)
    MIKROTIK-C sama dengan di Q-IN-Q

-----------------------------------------------------------------------------------------------------------------
VLAN BERPAPASAN
    MIKROTIK-A                      <>      MIKROTIK-B
    ether5-out=vlan1,2(trunk,dhcp)  <>      ether1-in=vlan1,2(trunk, dhcp)
    vlan1 dhcpSERV vlan2 dhcpCLIEN  <>      vlan1 dhcpCLIEN vlan2 dhcpSERV

-----------------------------------------------------------------------------------------------------------------
TARUSKAN VLAN
Mikrotik-A (create VLAN)
    1 konfig dasar
    2 bikin IP dhcp vlan sesuai skenario alokasi (192.168.168.10) 
    3 bridge-vlanDHCP -> salurkan semua internet ke Local
        bikin vlan1, 2, 3 disini 
        porting ether-LAN (untuk kirim ke B) 
    4 mangle untuk ISP1, ISP2, ISP3 (agar ISP1 ke vlan1 dst)
Mikrotik-B (terminal VLAN)
    1 bikin bridge-trunk
        - port=ether1-IN, ether2-OUT
        - vlan filtering=yes
    2 validasi vlanID yang di izinkan
        - vlan100, vlan200, vlan300
            /interface bridge vlan
            add bridge=bridge-trunk tagged=ether1,ether2 vlan-ids=10 
        - (tagged diisi 2 port terminal in out)
        - vlan IDs= boleh banyak, 100, 200, 300 dst 
Mikrotik-C (receive VLAN, ECMP)
    - bikin bridge-Trunk
    - porting= ether1, dan vlan1, 2, 3 (bikin baru ya)
    --- 
    - selanjutnya bikin ECMP disini 

siap di tes
-----------------------------------------------------------------------------------------------------------------
    - cek di DHCP server tab dhcp-leases
        - tancapkan lihat, ganti port, lihat lagi
    - atau coba dhcpClient di mikrotik sampai bound 

---------------------------------------------------------------------------------------------------------------
