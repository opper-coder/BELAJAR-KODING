cara install react navigation

- matikan dulu server RN
- buka website reactnavigation.org
- documentasi -> scroll ke installation copas di terminal
- di terminal >: yarn add react-navigation 
	- tunggu - selesai
	- lihat di struktur folder kita -> package json -> dependencies : hanya ada 2
		- react
		- react-native
		- react-navigation		// sekarang sudah ada
	- kita butuh lagi : react-native-gesture-handler, react-native-reanimated 
	- tinggal copas aja di documentasi ke terminal sesuai keperluan diatas
- settingan > v 0.60 sudah auto linking
	- untuk < v 0.60 setting linking -> copas 3 link di documentasi -> paste di terminal satu persatu
	- support android x android screen copas 2 baris code di documentasi -> paste di android/app/build.gradle
		- cari baris dependencies -> implementation
	- support react-native-gesture-handler
		- app/src/main/java/mainActifity.js
		- copas di documentasi 3 baris import2
		dan ada script di bawahnya di documentasi @overide ... di bawah @overide yang ada di mainActifity. hilangkan tanda +
- nyalakan server dan install ulang. jika ada error atasi		
	- pada gradle properties di folder project kita
		- tulis di bawah coment :
		android.useAndroid=true
		android.enableJetifier=true

- nyalakan server dan install ulang. jika ada error lagi atasi
	- buka build gradle -> implementation tadi 
		- disana ada 
			- implementation 'android appCompat:appCompat:1.1.0-rc01'
			tambahkan lagi script
			- implementation('androidx.annotation:annotation:1.1.0-rc02'){}
			force=true
			- implementation{'androidx.legacy:legacy-support-core.utils:1.0.0-'}
			force=true
		- simpan 

- nyalakan server dan install ulang. jika ada error lagi ke3 atasi
	- di build gradle

	copas scrip dari video clonning gojek vid 15

	- lakukan clean di android
		terminal >: cd android -> gradle clean
	
nyalakan server, unisntall dulu lalu install ulang


- sebelum menjalankan, install juga react-navigation-stack
- >: yarn add react-navigation-stack 
- siap di operasikan
