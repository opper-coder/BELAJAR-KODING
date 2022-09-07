cara membuat komponen ada 2
1 tag xml: <Button />
2 subClass: new Button()
cara bikin attribut tag 
1 dalam tag : android: width="5dp"
2 subClass:

// Button
		bikin tombol biasa dengan <Button
	attr:
		text = halo tombol
		allcaps = false

// tombol custom
	di drawable:
		ke /res/drawable/new ->  drawable resource file -> beri nama "tombol_custom" -> ke file nya -> ganti tag "selector" -> ke "shape" ->
		di akhir attr + spasi -> sugest pilih shape -> pilih rectangle -> dalam tag nya ->
		tambahkan: 
			<solid "spasi" color /> 					// untuk warna
			<corner "spasi" radius /> 					// border radius
			<stroke "spasi" color spasi "width" 2dp />	// stroke

// ------------------------------------------------------------------------------------------
<shape xmlns:android="http://schemas.android.com/apk/res/android" android:shape="rectangle">
    <solid android:color="#0F6D89"/>
    <corners android:radius="11dp"/>
    <stroke android:color="#4D4D4D" android:width="2dp" />
    <gradient android:startColor="#8BC34A" android:endColor="#009688" android:angle="0"/>
</shape>
// ------------------------------------------------------------------------------------------

	ke mainActifity.xml:
		di tombol yang dibuat tersebut berikan background dengan sumber dari "tombol_custom"
// -----
// shadow text (satuan tidak pakai dp/kosong)
	attr:
        android:shadowColor="#383838"
        android:shadowRadius="5"
        android:shadowDx="10"
        android:shadowDy="10"