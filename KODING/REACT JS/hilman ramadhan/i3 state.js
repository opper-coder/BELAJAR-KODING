STATE

- komponen ada 2 fungtions dan class komponen 
- kenapa harus ada 2 fungtions aja dah cukup simple ?
- jawabnya value props hanya hidup di komponen instan saja (misalnya nama="A") sedang state bisa kemana2 ini hanya dimiliki oleh class komponen

bentuk dasar class komponen

	class Timer extends component{}		// dasar1
	class Timer extends component{		// dasar2
		render(){
			return(
				<div></div>
			)
		}
	}

// STATE
state itu hampir sama dengan props yaitu ngoper2 nilai
bedanya state sudah berada pada class itu sendiri bukan kepada instance nya  
sehingga bisa di mainkan dari instance mana pun 

	class Timer extends component{		
		constructor(props){				// 1- cara bikin state pertamanya awalnya kita harus punya constructor yaitu fungsi yang otomastis di jalankan
			super(props)				// 2- lalu kita punya super props untuk ngoper2 nilai
		}
		render(){
			return(
				<div></div>
			)
		}
	}
// lanjut 

		class Timer extends component{		
		constructor(props){				
			super(props)
			this.props = 0				// 3- bikin kondisi awal state 0
		}
		render(){
			return(
				<div></div>
			)
		}
	}

// lanjut 2
		class Timer extends component{		
		constructor(props){				
			super(props)
			this.props = 0				// 3- bikin kondisi awal state 0
		}
		render(){
			return(
				<div></div>
			)
		}
	}