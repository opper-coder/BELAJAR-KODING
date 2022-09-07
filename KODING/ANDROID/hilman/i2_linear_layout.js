/*
LINEAR LAYOUT
caranya buat :
	hapus semua kecuali template lalu <LinearLayout></LinearLayout>
	dia akan menumpuk semua elemen
	ada dua atribut arah orientation : horizontal dan vertikal
	padding 
	margin
	wrap_content = ukuran akan di desak sesuai isi
	*/

<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <LinearLayout
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        tools:layout_editor_absoluteX="1dp"
        tools:layout_editor_absoluteY="1dp"
        android:layout_margin="20dp"
        android:padding="10dp"
        
        <TextView
            android:id="@+id/textView2"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="TextView" />

        <Button
            android:id="@+id/tombol"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Button" />

    </LinearLayout>

</androidx.constraintlayout.widget.ConstraintLayout>