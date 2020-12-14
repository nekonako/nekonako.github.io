---
title : 'Yang biasanya saya lakukan setelah install arch linux'
slug : 'hal-yang-dilakukan-setelah-install-arch-linux'
date : '2020-12-14'
desc: 'Sedikit mengenai hal-hal apa saja yang biasanya saya lakukan setelah menginstal arch linux'
tags:
  - arch
  - linux
---

## Mengenal Arch Linux
Arch linux adalah salah satu distro dari GNU/linux yang berfokus pada kesederhanaan.

Dengan jargonya yaitu KISS ( Kepp It Simple Stupid ),arch linux membaskan penggunanya untuk membuat environment sesuai dengan kebutuhanya.

Maksudnya arch linux hanya memberikan sistem dasarnya saja, ibaratkan rumah arch linux hanya memberikan fondasinya, sementara itu 
tembok,jendela,pintu,desain interior dan exterior terserah pengguna tersebut mau dibikin model seperti apa.

Ini sangat menguntungkan bagi pengguna laptop kentang seperti saya,karena resource pada laptop saya tidak terbuang sia-sia untuk
aplikasi yang tidak saya butuhkan.

Tentu setiap pengguna mempunyai kebutuhan yang berbeda-beda,Saya sendiri kebutuhanya cuma buat nonton anime jadi pada artikel kali ini
saya akan sedikit berbagi hal-hal apa saja yang harus dilakukan setelah install arch linux **untuk kebutuhan nonton anime**.

## Display Server
Agar aplikasi berbasis GUI kita dapat berjalan kita membutuhkan sebuah display server atau window system.Itu berarti display server adalah 
aplikasi wajib yang harus kita install kecuali mungkin pada komputer server yang tidak membutuhkan aplikasi berbasis GUI.display server
yang paling banyak digunakan di linux saat ini adalah Xorg.

```bash
pacman -S xorg-server
```

## Window Manager
Untuk bisa menjalankan aplikasi berbasis GUI, tidak cukup hanya dengan display server seperti xorg, kita juga butuh sebuah aplikasi
yang bertugas untuk menyediakan **window** bagi aplikasi yang akan kita jalankan.Aplikasi tersebut bernama Window Manager.Window Manager
biasanya sudah menjadi satu paket dengan Desktop Environment seperti gnome,xfce,mate,kde dll.

karena saya ingin system yang say gunakan seminimalis
mungkin saya lebih memilih window manager yang bisa berdiri sendiri atau independen, contohnya seperti openbox,dwm,bspwm,i3wm dll.
salah satu window manager yang paling saya sukai adalah openbox.

```bash
pacman -S openbox
```

## Display Manager
Display manager adalah program yang bertugas untuk mengatur proses login.dalam hal ini melakukan user authentication dan menjalankan 
sebuah session.Session disisni berisi sebuah perintah untuk menjalankan desktop environtment/window manager.

Salah satu bagian dari display manager adalah greeter.Greeter inilah yang bertugas membuat tampilan login.
Greeter biasanya sudah dalam satu paket bersama display manager.
Ada banyak macam display manager, saya sendiri lebih menyukai slim.

```
sudo pacman -S slim
```

## Sudo
Pada sistem operasi linux untuk menginstall aplikasi kita perlu login sebagai root,dengan sudo kita bisa menginstall aplikasi sebagai 
user biasa.

```bash
pacman -S sudo
```

## AUR
Didalam arch linux adal 2 repository yaitu AUR dan repository resmi.
AUR ( Arch User Repository ) adalah repository yang berbasis kominitas pengguna arch linux.Itu artinya package yang ada didalam AUR
diibuat oleh para pengguna arch linux.

Terus apa kelebihanya ? kelebihanya adalah AUR banyak menyediakan aplikasi yang tidak ada didalam
repository resmi.Karena pengguna arch linux mempunyai inisiatif tinggi, mereke biasanya membuat package yang tidak ada dalam repository
resmi kemudian me release-nya ke AUR agar dapat digunakan oleh pengguna arch linux lain.

Untuk lebih mudah menginstall aplikasi menggunakan AUR, kita bisa menggunakan AUR helper seperti yay,yaourt,paru,pikaur dll.
saya sendiri lebih memilih menggunakan yay.

```bash
sudo pacman -S git base-devel
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

## Aplikasi pendukung lainya
```
sudo pacman -S nitrogen lxappearance tint2 thunar firefox neovim xarchiver obconf polkit-gnome notify-send dunst
yay -S obmenu-generator
```
## Penjelasan
- **Nitrogen** adalah aplikasi berbasis gui untuk mengatur wallpaper.
- **Lxappearance** adalah aplikasi untuk mengatur gtk theme.
- **Tint2** adalah panel atau bar yang kita gunakan untuk menampilkan beerapa informasi seperti jam, tanggal, memori usage, task list dll.
- **Thunar** adalah aplikasi untuk file manager.
- **Firefox** adalah browser favorit saya.
- **Neovim** adalah the best text editor in the world.
- **Xarchiver** adalah aplikasi yang digunakan untuk mengesktrak atau mengkompress file.
- **Obconf** adalah aplikasi yang digunakan untuk mengatur tema openbox kita.
- **Obmenu-generaor** adalah aplikasi untuk menggenerate menu openbox.
- **Polkit-gnome** adalah aplikasi yang digunakan untuk user authentication, mirip seperti sudo tetapi berbasi GUI.
- **notify-send** adalah aplikasi untuk mengirim notifikasi.
- **dunst** adalah apliaksi yang bertugas sebagai noitifikasi daemon.

## Konfigurasi
Setelah semua aplikasi yang saya butuhkan sudah terinstall saatnya mengkonfigurasi apliaksi tersebut agar berjalan sesuai dengan apa 
yang kita inginkan.

## Konfigurasi slim
File konfigurasi slim berada di `/etc/slim.conf`, jadi mari kita buka file tersebut.

```bash
sudo nano /etc/slim.conf
sudo systemctl enable slim.service
```

untuk konfigurasi dasar kita cukup uncomment bagian sessiondir

```bash
# Set directory that contains the xsessions.
# slim reads xsesion from this directory, and be able to select.
sessiondir            /usr/share/xsessions/
```
secara otomatis slim akan membaca daftar session yang ada di directory tersebut, karena kita sudah menginstall openbox, maka di directory 
`/usr/share/xsessions/` harusnya ada file `openbox-session`.

Jika kita mempunyai lebih dari satu session untuk memilih session mana yang kita ambil bisa menggunakan tombol f1.

Setelah selesai konfigurasi slim mari kita reboot.Harusnya kita sudah bisa masuk ke desktop.

## Konfigurasi sudo

```bash
nano /etc/sudoers
# lalu tambahkan konfigurasi berikut
%wheel ALL = ALL ALL
```

## Konfigurasi openbox

openbox mempunyai 3 file konfigurasi yaitu :

- **autostart** berisi aplikasi yang akan otomatis berjalan ketika masuk ke openbox.
- **menu.xml** berisi item yang akan tampil ketika kita menekan klik kanan.
- **rc.xml** adalah file konfigurasi utama openbox, didalamnya ada banyak konfigurasi seperti font, titlebar, shortcut, mousebind dan lain-lain.

Secara default openbox hanya menyediakan global konfigurasi yang berada di `/etc/xdg/openbox`, untuk membuat konfigurasi lokal kita perlu
menyalinya ke directory `~/.config/openbox`

```bash
mkdir ~/.config/openbox
cp -a /etc/xdg/openbox/ ~/.config/openbox/
```

sekarang saatnya mengatur file `autostart`

```
nitrogen --restore
tint2
/usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1
dunst
```

## Penutup

Sejauh ini Arch linux adalah distro GNU/linux yang paling lama saya singgahi karena adanya AUR yang sangat memudahkan saya 
dalam berbagai masalah.Dan rasanya saya belum ingin melirik distro lain.

## Sedikit Curhat

Pengalaman menggunkan linux memang banyak drama yang menyertainya dan cukup membuat berdarah-darah diawal.

Saya jadi teringat saat saya kelas 11 SMK, saat itu saya baru mempunyai laptop dan satu minggu kemudian saya memutuskan untuk 
menginstall ubuntu.Dan hasilnya sudah bisa ditebak, dengan kegoblokan saya, niat hati ingin dual-boot tapi yang terjadi 
malah partisi OS windows saya hilang.

Karena paketan malam saya sudah habis untuk mendownload file ISO ubuntu saya jadi tidak bisa mendownload ISO windows lagi, akhirnya 
saya memutuskan untuk membiasakan diri dengan ubuntu.

Mulai dari situ banyak drama yang terjadi, seperti wifi yang tidak ada, kecerahan tidak bisa diatur,grub hilang dan lain-lain.
Tapi menurut saya disitulah hal menariknya.

