bikin componen dengan class
	- syntax 
				class KotakHijau extend component {}				// component dari mana?:
	- dari import di atas bersama react :
				import React, { Component } from 'react'			// kasih koma setelah react
	- aturanya :
				class KotakHijau extend component { 
					render(){return}								// kalau komponen biasa bisa langsung return ini harus dalam render
				}
	- jadinya : 
				class KotakHijau extend component { 
					render(){return
						<View>										// view kasih supaya kalau lebih dari satu dalam return
							<Text>ini komponen dari class</Text> 		
						</View>
					}								
				}													// 
	- tinggal panggil dalam func App
		const App = () => {											// 
						return (
							<view> 
								<Text>HELLO WORLD</Text>			// 
								<Aqil/>								// 
								<Text>HELLO ANDROID</Text>				
								<KotakHijau />						// panggil disini
							</view>		
						);							   
					}