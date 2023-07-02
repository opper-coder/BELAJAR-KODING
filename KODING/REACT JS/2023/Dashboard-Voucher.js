Dashboard/Voucher
-------------------------------------------------
	- inisialisasi
		harga pokok
	- harga penyesuaian

   

-------------------------------------------------
Super Admin




-------------------------------------------------
Admin




-------------------------------------------------
Seller




root
	headers
		- main capital
		- emisi transfer
		- parent
			- saldo
			- terjual
			- seller
				- jumlah terpakai
				- jumlah tercetak
					- user
						- saldo
						- voucher
						- transfer

	tabel
		# | kode | user | Hp | parent1 | p2 | p3 | seller | tgl | paket | type 
		pagination

	sort
		all
		admin
		parent
		seller
		user

		all tercetak
		all terpakai

		paket

---------- >>>>>
admin 
	sort
		parent
		seller
			terjual
			tercetak

pengelolaan
	= request dari admin
	- jual ke seller
	- promo 
	- bonus
	- pengganti pemadaman
	- max online 512 kbps/user


**seller
	sort
		selesai

**user
	histori 
		masuk tgl kode indentasi warna
		keluar tgl kode indentasi warna
		pagination



DASHBOARD

- emisi
	- paket admin
		- paket admin terjual
	- free
	- bonus
	- promo
	- iklan
	- pemadaman

	- voucher pakai
	- voucher terjual
	- pulsa
	- saldo seller
	- sold seller