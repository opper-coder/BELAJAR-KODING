/*jika kita punya banyak value text pada widget tombol textview dll
kita bisa kelola di halaman values di /rest/values/string.xml*/

// di aktifity XML:
    <TextView
        android:id="@+id/textView2"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/salam" />				// ** call
// di aktifity.kt:
	<resources>
	    <string name="app_name">latihan1</string>
	    <string name="salam">halo izza</string>		// * source
	</resources>