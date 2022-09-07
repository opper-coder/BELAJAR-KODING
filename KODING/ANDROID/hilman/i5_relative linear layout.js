// RELATIVE LAYOUT
karakter: 
- bisa di tempatkan dimana saja dalam area relative
- saat pertama di buat jia komponen banyak maka dia akan menumpuk di kiri atas
- maka butuh di tempatkan secara relative terhadap parent atau terhadap komponen

	bikin:> <relative -> sugest -> relativelayhout
	attr :> layout -> sugest -> pilih 
	// nempel ke tepi kanan kiri top bottom 
	:> layoutAl
		layoutAlignRight -> true
		layoutAlignTop -> true
		layoutAlignBottom -> true
		layoutAlignLeft -> true
	// center vertikal dan horizontal dan inParent mendatar, tegak, center
	:> center
		android:layout_centerVertical="true"
		android:layout_centerHorizontal="true"

// ---- contoh:
// -------------------------------------------------------------
    <RelativeLayout
    android:layout_width="match_parent"
    android:layout_height="match_parent">

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="halo aqil"
            android:layout_alignParentTop="true"
            android:layout_alignParentRight="true"
            />
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="halo aqil"
            android:layout_alignParentBottom="true"
            />
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="halo aqil"
            android:layout_alignParentBottom="true"
            android:layout_alignParentRight="true"
            />
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="halo aqil"/>

    </RelativeLayout>
// -------------------------------------------------------------

/// RELATIVE
di dalam relativeLayout = jika di dalam ada dua componen (misalnya ada 2 linearlayout)
maka biasanya akan di buat secara bertumpuk di pojok kiri atas
jika mau di tempatkan secara relative ke bawah maka pada komponen1 beri "id aqil"
komponen2 beri atribut :
"below = id aqil" di bawah
"above: di atas"
"toRightOf: lurus kanan dengan bersangkutan" -> 
"centerV" ->
"centerH"
""


/// LINEAR LAYOUT

hanya ada 2 orientation tumpukan
default orientaion horizontal
>: orientaion -> pilih salah satu

semua ada margin layoutnya belum tau gunanya 
ada juga grafity 

	// berjajar memenuhi container secara sama 
// -------------------------------------------------------------
<LinearLayout
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    >
    <TextView
        android:layout_width="match_parent"		// *
        android:layout_height="0dp"				// *
        android:layout_weight="1"				// *
        android:text="Selamat pagi"
        android:textSize="20sp"
        android:background="#95A586"
        android:gravity="center"

        />
    <TextView
        android:layout_width="match_parent"	// ** 
        android:layout_height="0dp"			// **
        android:layout_weight="1"			// **
        android:text="Selamat malam"
        android:textSize="20sp"
        android:background="#7F7375"
        android:gravity="center"
        />
</LinearLayout>
// -------------------------------------------------------------
