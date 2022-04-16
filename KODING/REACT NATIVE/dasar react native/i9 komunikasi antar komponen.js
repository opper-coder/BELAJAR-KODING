

const app = () => {
	return {
		<communication />
	}
}

//---------
const keranjangBelanja = (props) => {													// 1. props
	return{
		<view>
			<text>	isi cart adalah { props.jumlah } </text>				// 2. props.jumlah
		</view>
	}
}

//--- 
const TombolbeliIni = (props) => {
	return{
		<TouchableOpacity onPress = { props.TombolDitekan } > 			// 3. 
			<view>
				<text> BELI </text>
			</view>
		</Touchable>
	}
}

//---
const communication = () => {
	const [ totalProduct, setTotalProduct ] = useState(0);
	return {
		<view>
			<text> Materi Komuniasi Antar Component </text>
			<keranjangBelanja jumlah = { totalProduct } />	
			<TombolbeliIni TombolDitekan = { () => setTotalProduct(totalProduct + 1) } />		// ()=> alert( "haloo ini bisa jalanin function lo" )															
		</view>	//
	}
}