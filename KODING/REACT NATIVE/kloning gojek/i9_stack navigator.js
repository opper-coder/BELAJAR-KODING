 pada operasi perpindahan halaman kita di RN ada 2 komponen yang bisa kita pakai:
 	1. Stack navigation  : navigasi halaman yang perlu history back button
 	2. Switch navigation : navigasi halaman yang tidak perlu history back button

 ada dua yang perlu di pahami dalam navigation :
 	1. createStackNavigator
 	2. createAppContainer
---
	3. saat konfigurasi berhasil navigator memberikan header otomatis sbg tanda fitur dah jalan 
	   yang akan di remove nantinya
	4. rapikan folder dengan memindah isi koding halaman home pada App di folder semestinya
	5. - masukan source code tadi di containers/pages/home/index.js lihat di struktur folder
			 masukan di class component standart dan benahi link nya 
			 (karena perpindahan dari app.js, bisakan...?)
		 - buat index.js di pages, import home disana dan export juga home disana
		 	 tujuanya adalah agar semua halaman bisa di panggil dari 1 root (pages)
		 	 jadi isinya cuma 'import home' dan langsung 'export home' sesuai page2 yang ada
		 	 tujuanya bikin port terminal
		 - 
	6. remove header di Router



====================== di app.js ==========

---------------- awalnya -----------
	import {createStackNavigator} from 'react-navigation'
	import {createAppContainer} from 		
---''
	const App = () => {						
		semua aplikasi kita														// isi home kita di pindah di halaman semestinya
	}


---''
	const Router = createStackNavigator({						// ini di pindah di /config/rooting/index.js
		home : (
				screen : App, 
			),
	});

---
	export default createAppContainer(Router);

---------------- jadinya ------------

PENDAHULUAN
	- struktur folder awalnya 
	- 

DI APP



DI PAGES/INDEX



DI HOME



DI KOMPONEN KOTAK



DI HALAMAN2



DI NAVIGATOR 













====================== di app.js ========== ???? component
import react, { component } from 'react';					
import Router from '../src/config/rooter';

class App extends Component{	
	render(){
		return(
			<Router />	
			);
		}					
}
export default App;
====================== di pages/index.js ========== ???? apakah hanya export import yang bersangkutan saja
import home from './home';												
import halaman2 from '/halaman2';

export {
		home,
		halaman2
}
====================== di home.js ========== ???? ada importnya nggak untuk kotak berita
class home extends component {
	render(){
		return{
			<kotakberita propsOnPress= { () => { this.props.navigation.navigate('halaman2') } } >
		}
	}
}
====================== kotakberita.js ========== ???? ada export nya kan
const kotakberita = ({propsOnpress}) => {
	return {
		<button onPress={propsOnPress} ></button> 					/	
	}
}
====================== di halaman2.js ==========''
import react from 'react';
import {Text, view} from 'react-native';

const halaman2 = () => {
	return{
			<Text > INI halaman2 </text>
	}
}

export halaman2;
====================== di navigator.js ==========
	import {createStackNavigator} from 'react-navigation';
	import {createAppContainer} from 'react-navigation-tack';
	import {home, halaman2} from '../../containers/pages';		// disini home di panggil dengan kurawal sebab sudah di kumpul dalam index.js di pages
---
 const Router = createStackNavigator({
		{
			home : {											// disini untuk menyingkat kata sebenarnya boleh di tulis 'home' saja karna key dan value sama
				screen : home,
			},
			halaman2 : {										// disini untuk menyingkat kata sebenarnya boleh di tulis 'home' saja karna key dan value sama
				screen : halaman2,
			}
		},
		{
			headerMode: 'none'									// dengan menambahkan header mode ini header hilang
			initialRouteName : 'home'							// jadi parent nya
		}
	});

 --- 										
 const Router = createStackNavigator({							// atau di tulis dengan bentuk di bawah ini ringkas
		{
			home,
			halaman2
		},
		{
			headerMode: 'none'																		
			initialRouteName : 'home'															
		}
	});
---
	export default createAppContainer(Router);



















>>>>>>>>>>>> dari documentasi
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

----- halaman home -----
function HomeScreen() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
		</View>
	);
}
----- halaman 2 -----
function ProfileScreen() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
		</View>
	);
}

-----  -----
const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />		//
			</Stack.Navigator> 			//
		</NavigationContainer>  	//
	);
}

export default App;
============
function DetailsScreen() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Details Screen</Text>
		</View>
	);
}

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Details" component={DetailsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
==============
<Stack.Screen
name="Home"
component={HomeScreen}
options={{ title: 'Overview' }}
/>											//
===============
<Stack.Screen name="Home">
{props => <HomeScreen {...props} extraData={someData} />}
</Stack.Screen> 				//
===============

<<<<<<<<<<<<<< dari documentasi

>>>>>>>>>>>>>> dari lampung 
// In App.js in a new project

import * as React from 'react';
import { View, Text, button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

----- halaman home -----
const HomeScreen = (props) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>		//
			<button onPress={() => props.navigation.navigate('Profile')} title= "KE HALAMAN PROFILE" } />  //
		</View>				//
	);
}
----- halaman 2 -----
const ProfileScreen = () => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
		</View>
	);
}

const AppNavigator = createStackNavigator ({
	home 		: {
		screen : HomeScreen,
	},
	Profile : {
		screen : ProfileScreen
	}
})

<<<<<<<<<<<<<< dari lampung 





<<<<<<<<<<<<<<< dari lampung