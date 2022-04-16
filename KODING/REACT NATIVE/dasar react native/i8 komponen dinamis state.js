MEMBUAT COMPONENT "STATE" DINAMIS "FUNCTIONAL COMPONENT"

- komponen kita bisa 'berubah' dengan 'even' dari fungsi2
- bedanya dengan prop agar 'berubah' dia harus kirim argument 'value2' dari pemanggil

-------- template nya ---

const Counter = () => {							// 4. bikin template secara terpisah
	const [number, setNumber] = useState(0)		// 6. buatkan array berisi number sebagai nilai awal di <text> jangan lupa di import 'useState'
	return 											  dan setNumber untuk <button>
		<view>
			<text> {number} </text>				// 
			<button tittle= "TAMBAH" onPress= 
				() => { 
					// alert('hello world') 	// sebagai contoh onPress pake alert
					setNumber(number + 1)		// lakukan number++
				} 
			/>									// 
		</view>									//
}

-------- panggilnya ---

const StateDinamis = () => {
	return {
		<view>
			<text style = {styles.textTitle} > 
				materi component StateDinamis 
			</text>
		// <text>0</text>						// 1. ceritanya ini ada text 0 nanti saat di klik tombol angka akan bertambah
		// <button tittle= "TAMBAH" />			// 2. maka di butuhkanya tombol pemicu
												// 3. element terpisah buat text dan button ini nantinya di pindah ke element baru tersebut
			<counter />							// 5. disini tinggal di panggil element template nya
			<counter />							// 7. component dapat di panggil berulang tetap
			<CounterClass /> 						// c7. dapat di panggil disini
			<CounterClass /> 						// c8. di panggil berulang
		</view>									
	}
}

---
export default StateDinamis;
---
const styles = StyleSheet.create({
	wrapper: {
		pading : 20,
	},
	textTitle: {
		textAlign : 'center'
	}
});



MEMBUAT COMPONENT "STATE" DINAMIS "CLASS COMPONENT"

-------- template nya ---

class CounterClass extends Component {			// 1. bikin class component biasa lalu bikin state
	render(){

		state = { number: 0	}					// 2. bedanya cara membuat state di class pake object
												// 3. set nilai awal
		return(
			<view>
				<text> ( this.state.number ) </text>// 4. panggilnya disini perbedaanya ada this sebagai penganti parameter props (artinya 'disini', atau 'asup ini')
				<button tittle= "TAMBAH" onPress= 	// 
					() => { 						//
						this.setNumber({ number: this.state.number + 1 }) 
					} 								// 5. cara panggilnya lakukan ++, yaitu panggil dulu nilai awal dlm object lalu + 1
				/>									// 6. cara panggilnya di atas bisa di panggil dengan nama classnya no c7. 					 
			</view>									//							
		)
	}
}


// =============== bentuk dasar class component


class thumbnailku extends Component {				
	return(
		render(){
			<view>
				<image source={ { uri : this.props.gambar, } }/>	// harus ada this sebab prop tidak di umpan disini meskipun di oper dari luar
				<text > { this.props.judul } </text>				/// bedanya cuma ada disini dengan functional componen
			</view>													///
		});															///
}																	///

lalu panggil dalam wadahnya

const WadahTampilan = () => {			
	return(
		<view>
			<thumbnailku judul="huawei" gambar="/../gambar.jpg">		// 3. panggil nama dan kirim parameter
			<thumbnailku judul="cassing" gambar="/../gambar2.jpg">		//
			<thumbnailku judul="jam tangan" gambar="/../gambar3.jpg">	//
		</view>															//
		);
}

