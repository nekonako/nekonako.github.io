---
title : 'Yang biasanya saya lakukan setelah install arch linux'
slug : 'hal-yang-dilakukan-setelah-install-arch-linux'
date : '2020-12-11'
desc: 'Sedikit mengenai hal-hal apa saja yang biasanya saya lakukan setelah menginstal arch linux'
tags:
  - arch
  - linux
---

## Mengenai Arch Linux
Arch linux adalah salah satu distro dari GNU/linux yang berfokus pada kesederhanaan.

Dengan jargonya yaitu KISS ( Kepp It Simple Stupid ),arch linux membaskan penggunanya untuk membuat environment sesuai dengan kebutuhanya.

Maksudnya arch linux hanya memberikan sistem dasarnya saja, ibaratkan rumah arch linux hanya memberikan fondasinya, sementara itu 
tembok,jendela,pintu,desain interior dan exterior terserah pengguna tersebut mau dibikin model seperti apa.

Ini sangat menguntungkan bagi pengguna laptop kentang seperti saya,karena resource pada laptop saya tidak terbuang sia-sia untuk
aplikasi yang tidak saya butuhkan.

Tentu setiap pengguna mempunyai kebutuhan yang berbeda-beda,Saya sendiri kebutuhanya cuma buat nonton anime jadi pada artikel kali ini
saya akan sedikit berbagi hal-hal apa saja yang harus dilakukan setelah install arch linux **untuk kebutuhan nonton anime**.

## Display Server
Agar aplikasi berbasis GUI kita dapat berjalan kita membutuhkan sebuah display server atau window system.tentu display server adalah 
aplikasi wajib yang harus kita install kecuali mungkin pada komputer server yang tidak membutuhkan aplikasi berbasis GUI.display server
yang paling banyak digunakan di linux saat ini adalah Xorg.

## Window Manager
Untuk bisa menjalankan aplikasi berbasis GUI, tidak cukup hanya dengan display server seperti xorg, kita juga butuh sebuah aplikasi
yang bertugas untuk menyediakan **window** bagi aplikasi yang akan kita jalankan.Aplikasi tersebut bernama Window Manager.Window biasanya
sudah menjadi satu paket dengan Desktop Environment seperti GNOME,XFCE,MATE,KDE dll.

karena saya ingin system yang say gunakan seminimalis
mungkin saya lebih memilih window manager yang bisa berdiri sendiri atau independen, contohnya seperti openbox,dwm,bspwm,i3wm dll.
salah satu window manager yang paling saya sukai adalah i3wm.

## Display Manager
Display manager adalah program yang bertugas untuk mengatur proses login.dalam hal ini melakukan user authentication dan menjalankan 
sebuah session.Session disisni berisi sebuah perintah untuk menjalankan desktop environtment/window manager.

Salah satu bagian dari display manager adalah greeter.Greeter inilah yang bertugas membuat tampilan login.
Greeter biasanya sudah dalam satu paket bersama display manager.
Ada banyak macam display manager, saya sendiri lebih menyukai slim.

## Sudo
Pada sistem operasi linux untuk menginstall aplikasi kita perlu login sebagai root,dengan sudo kita bisa menginstall aplikasi sebagai 
user biasa.

## AUR
Didalam arch linux adal 2 repository yaitu AUR dan repository resmi.
AUR ( Arch User Repository ) adalah repository yang berbasis kominitas pengguna arch linux.Itu artinya package yang ada didalam AUR
diibuat oleh para pengguna arch linux.

Terus apa kelebihanya ? kelebihanya adalah AUR banyak menyediakan aplikasi yang tidak ada didalam
repository resmi.Karena pengguna arch linux mempunyai inisiatif tinggi, mereke biasanya membuat package yang tidak ada dalam repository
resmi kemudian me realisenya di AUR agar dapat digunakan oleh pengguna arch linux lain.

Untuk lebih mudah menginstall aplikasi menggunakan AUR, kita bisa menggunakan AUR helper seperti yay,yaourt,paru,pikaur dll.
saya sendiri lebih memilih menggunakan yay.




