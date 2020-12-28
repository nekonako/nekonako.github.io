---
title : 'Workflow Neovim Saya'
slug : 'workflow-neovim-saya'
date : '2020-12-17'
desc: 'sedikit catatan mengenai workflow neovim yang saya gunakan'
tags:
  - neovim
  - opini
---

## Apa itu vim

Oke pada tulisan kali mungkin saya awali dengan pertanyaan apa itu vim ?. Vim adalah aplikasi text editor berbasiskan terminal. 
Karena berbasiskan terminal vim menggunakan command line untuk melakukan sesuatu, dimana command line tersebut dapat buat menjadi 
sebuah shorcut yang kemudian di vim dikenal dengan istilah remap. 

## Mengapa menggunakan vim

- **Adanya plugin**:
  Tak seperti text editor berbasiskan terminal lain seperti nano, vim mempunyai keunggulan yaitu adanya plugin yang dapat membuat vim 
  kita menjadi lebih canggih bahkan bisa melebihi text editor modern sekarang.

- **Mempunyai komunitas yang besar dan tak lekang oleh waktu**:
  vim sudah berumur lebih dari 20 tahun dan masih tetap eksis sampai sekarang ditengah banyanyak text editor
  dan IDE yang terus bermunculan.salah satunya pentebabnya adalah fanboynya yang loyal.

- **Workflow yang suka suka kita**:
  Di text editor lain pengguna harus menyesuaikan diri dengan workflow dari text editor tersebut, mungkin pengguna bisa melakukan modfikasi
  akan tetapi sangat terbatas. Sedangkan pada vim, vim sendirilah yang menyesuaikan diri dengan workflow pengguna, karena pengguna sangat 
  dibebaskan untuk memodifikasi workflow tersebut.

- **Terlihat Superior**:
  Layaknya RGB pada PC yang dapat meningkatkan FPS pada suatu game, menggunakan vim juga juga dapat membuat kita terihat pro walaupun
  mungkin faktanya tidak.
  
## Apa itu neovim
Vim adalah text editor yang dikembangkan oleh komunitas open source. Dengan umurnya yang lebih dari 20 tahun, source code vim sudah
mencapai lebih dari 300 ribu baris karena terus mengalami perkembangan.
Karena banyaknya baris code membuat hanya beberapa orang saja yang bisa mengerti atau setidaknya membutuhkan waktu yang cukup lama 
untuk memahaminya.

Hal itu membuat sulitnya menambahkan fitur baru dan perbaikan bug. Karena harus sangat hati-hati agar tidak terjadi error saat
melakukan merger ke kode utama.

Neovim datang untuk mengatasi masalah tersebut dengan melakukan refactoring pada source code vim serta menambahkan beberapa fitur baru.
Dengan melakukan refactoring dapat membawa banyak manfaat untuk neovim. diantaranya :

- maintaince yang lebih mudah, hal itu membuat lebih cepat dalam perbaikan bug dan penambahan fitur baru.
- Memecah tugas antar developer
- Membuat user interface yang lebih modern tanpa memodifikasi kode utama.
- Dukungan plugin yang menggunakan bahasa pemprograman lain.

Dengan banyaknya manfaat tersebut, diharapkan lebih banyak developer yang berkontribusi ke project neovim.

Jadi neovim adalah versi yang lebih modern dari vim dengan penambahan beberapa fitur baru.

## Install Neovim
Neovim pada saat artikel ini dibuat sudah mencapai versi 0.4 untuk ver stable. Dan bisa dinstall package prebuidlnya [https://guthub.com/neovim/neovimrelease](disini).
Cara lain yaitu bisa menggunakan package manager apt,pacman atau homebrew.
Saya menggunkan arch linux sebagai sistem operasi, dan saya ingin menginstall neovim versi nighly atau neovim yang masih dalam tahap development.
Tujuanya untuk bisa mencicipi fitur terbaru pada neovim.

Untuk menginstall neovim-nighly di arch linux kita bisa menggunakan aur

```bash
yay -S neovim-nighly
```

atau juka ingin menginstall versi stable bisa menggunakan pacman

```bash
pacman -S neovim
```

untuk menggunakanya cukup ketikan perintah `nvim` pada terminal

## Konfigurasi Neovim

Konfigurasi neovim berada pada folder `~/.config/neovim/init.vim`. Jika kita sudah mempunyai konfigurasi vim maka kita tinggal import saja
confignya ke config neovim.

```vim
" ~/.config/neovim/init.vim

set runtimepath^=~/.vim runtimepath+=~/.vim/after
let &packpath = &runtimepath
source ~/.vimrc
```

Sekarang kita cukup mengkonfigurasi pada file `~/.vimrc`, maka otomatis neovim juga akan mempunyai konfigurasi yang sama.Dengan begitu 
jika kita sudah punya config vim, maka kita harus bersusah payah lagi untuk membuatnya.
Bagaimana jika belum punya config karena baru mencobanya ? Oke disini saya akan mencoba membuat config vim mulai dari 0 dan memodularisasikan
config tersebut supaya lebih mudah.

## Modular config
Seperti yang sudah kita singgung diatas, config vim berada di file `.vimrc`, dan kita bisa langsung mengkonfigurasinya tanpa ada masalah, akan tetapi
seiring berjalanya waktu, plugin yang kita gunakan akan semakin bertambah.Hal itu membuat config vim kita menjadi panjang dan dan tidak rapih.
Tak hanya itu kita menjadi lebih susah untuk memodifikasi dan membaca config kita sendiri karna sudah terlalu panjang.

Untuk itu kita perlu memecah config tersebut menjadi file-file terpisah sesuai fungsinya yang kemudian kita import ke dalam `.vimrc`.


Oke langsung saja kita praktik.

Yang pertama harus kita lakukan adalah membuat struktur directorinya terlebih dahulu. Sebenarnya struktur directory dan penamaanya tergantung
preferensi masing-masing pengguna.

Berikut ini adalah struktur directory yang saya buat.

```tree
.vimconf
├── init.vim
│   ├── filetype.vim
│   ├── keybind.vim
│   ├── plugin.vim
│   └── setting.vim
└── plugin
    ├── bufferline.vim
    ├── coc.vim
    ├── devicons.vim
    ├── hexokinase.vim
    ├── indentline.vim
    ├── lightline.vim
    ├── nerdtree.vim
    └── tagbar.vim
```

### Keterangan
- Folder `.vimconf` kita taruh pada directory `home` lalu kita awalan titik agar terhidden supaya folder home terlihat bersih.
  Folder `.vimconf` tempat semua settingan config disimpan.
- Folder `init.vim` digunakan untuk menyimpan konfigurasi vim seperti shortcut, plugin yang disntall dan konfigurasi dasar.
  - `keybind.vim` digunakan untuk menyimpan semua fungsi yang berhubungan dengan keybind/shortcut.
  - `plugin.vim` digunakan untuk menyimpan semua plugin yang diinstall menggunakan plugin manager.
  - `setting.vim` digunakan untuk menyimpan kumpulan option pada.
- folder `plugin` digunakan untuk menyimpan konfigurasi dari masing masing plugin.

## Option vim
Oke langkah selnjutnya kita membuat option yang akan disimpan di `setting.vim`.

```vim
syntax on
set number
set relativenumber
set cursorline
set mouse=a
```

### Keterangan
- `syntax on` berfungsi untuk syntax highlighting, secara default vim akan mengambil warna dari colorscheme terminal.
- `set number` berfungsi untuk menampilkan baris angka.
- `set relativenumber` berfungsi untuk menampilkan angka yang dimulai dari dimana cursor kita berada. Fitur ini sangat berguna jika
  kita ingin berpindah pindah baris karena kita tidak harus menghitung jumlah baris yang akan kita tuju.
- `set cursorline` berfungsi untuk membuat baris dimana cursor kita berada.
- `set mouse=a` berfungsi untuk mengaktifkan fungsi mouse di semua mode.

Itu adalah sebagian options dari vim yang saya ingat dan tahu fungsinya, sebetulnya masih banyak sekali option yang disediakan akan 
tetapi saya tidak mungkin membahasnya satu persatu.
 
