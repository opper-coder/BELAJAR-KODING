KOMPONEN
=====
- komponen ada 2 seperti di react native lihat saja disana : class dan function component

	class App extends component {
		render(){
			return(
				JSX
			)
		}
	}

	function App2 (){	// nama pakai huruf besar
		return JSX		// tanpa kurung dan titikoma bisa
	}

- cara manggilnya langsung namanya pakai JSX :

	<App/>
	<App2/>

PROPS / properties
=====

adalah argumen di functional komponen agar nilai komponen nya bisa dinamis

function Salam (props){	
		return
		<h1>halo {props.name} usia {props.umur} </h1> 
	}

panggil berkali2 dengan value berbeda2

<Salam name="HILMAN" umur = 23 />
<Salam name="ARVA" umur = 19 />

KOMPONEN memanggil KOMPONEN 
=====
function biodata (props){	
		return <span>umurnya {props.umur2}<span/>	  
	}

function Salam (props){	
		return
		<h1>halo {props.name} usia <biodata umur2 = {props.umur1}/> </h1> 
	}

// di panggil dengan 2 props untuk di konsumsi 2 funcion

<Salam name="HILMAN" umur1 = 23 />
