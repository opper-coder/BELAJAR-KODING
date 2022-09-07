// TAMBAH ELEMEN BARU:
	ketik "<bu" maka ada suggestion untuk kita 
		width = wrap content adalah block
		height = 50dp adalah satuan di android
		id = akan ada suggestion pilih dan beri nama @+id/tombol // 
	
// ATAU DRAG N DROP WIDGET DI DESAIN LAYOUT 
	yang terpenting adalah id 

// di XML:

        <Button
            android:id="@+id/tombol"					// * bikin id
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Button" />

// di kotlin:

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

//      val tombol1 = findViewById(R.id.tombol) as Button						// ** disini kita panggil "DOM" nya lalu di bawah beri method onClick/ pakai alternative di bawah 
        tombol.setOnClickListener {												// *** atau panggil langsung nama nya langsung -> ketik nama -> pilih suggestion -> otomatis di import kan semua
            Toast.makeText(this, "halo toast", Toast.LENGTH_SHORT).show()
        }

    }
}
