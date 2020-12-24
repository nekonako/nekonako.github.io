---
title : 'Memahami konsep asynchronus pada javascript bersama chef arnold'
slug : 'memahami-asynchronus-programming'
date : '2020-12-23'
desc: 'Catatan mengenai konsep asynchronus programming pada javascript yang menggunakan single thread'
tags:
  - Promgramming
  - javascript
---

## Pendahuluan
Sebagai seorang yang baru belajar programming banyak hal yang tidak saya ketahui, salah satunya adalah konsep asynchronus pada sebuah
bahasa pemprograman. Pada tulisan kali ini saya akan mencatat pemahaman saya mengenai asyn programing terutama pada javascript yang
single thread dengan analogi cheft arnold.

## Apa itu synchronus
Sebelum berkenalan lebih jauh tentang asynchronus kita mulai dulu dengan synchronus.
Syncrhounus adalah metode atau cara untuk menyelesaikan suatu pekerjaan satu persatu secara berurutan.
Misalkan cheft arnold ingin membuat kopi dan indomie, dengan metode asynchronus cheft arnold akan membuat kopi terlebih dahulu
baru setelah kopinya jadi ia akan membuat indomie.

## Apa itu asynchronus
Asynchronus adalah suatu cara untuk meneyelesaikan suatu pekerjaan satu persatu secara bergantian.
Misalkan cheft arnold ingin membuat kopi dan indomie, dengan metode asynchronus cheft arnold akan memanaskan air terlebih dahulu,
sambil menunggu air mendidih, cheft arnold membuat kopi dan menyiapkan bumbu indomienya.

## Syncrhonus dan asynchronus pada javascript
Javascript adalah bahasa pemprograman yang menggunakan single thread. Itu artinya javascript hanya mengambil satu thread dari processor
kita untuk menjalankan tugas tertentu.
Dan secara default javascript berjalan secara synchronus.

Lah terus apa masalahnya ?

Masalahnya adalah saat kita menggunakan metode synchronus kita harus menunggu satu pekerjaan sampai selesai baru 
melakukan pekerjaan selanjutnya. Hal itu memuat program kita menjadi lambat karena harus bergantian.

Contoh pada kasus synchronus cheft arnold, cheft arnold mungkin akan gabut karena harus menunggu airnya mendidih saat masak indomie.
Nah dari pada cheft arnold gabut akan lebih baik jika cheft arnold menggunakan metode asynchronus, yaitu sambil menunggu airnya mendidih
cheft arnold akan membuat kopi dan menyiapkan bumbu.

Pada javascript banyak hal yang membuat kita harus menunggu seperti memasak air. Biasanya adalah sesuatu yang berhubungan dengan 
input/output dan read/write data seperti Upload file, mingirim data lewat api dan lain-lain.
Oleh karena itu untuk hal-hal berhubungan dengan tadi lebih baik menggunakan metode asynchronus.

## Asynchronus tetap menggunakan single thread
Pada saat saya memahami asynchronus pada javascript timbul pertanyaan yaitu "katakan lah saya membuat
fungsi A yang berjalan asynchronus, berarti fungsi a tidak ditunggu sampai selesai dan lanjut ke proses selanjutnya, lah terus fungsi a siapa dong 
yang ngurus sedangkan javascript sendiri single thread ?, Pakah sebenarnya fungsi A ditangani oleh thread lain ? Kalau begitu
javascript bukan single thread dong ?".

Oke mari kita ambil analogi cheft Arnold lagi.
Ibaratkan cheft Arnold yang sedang masak air, sambil menunggu air mendidih, ia akan membuat kopi dan menyiapkan bumbu indomie, 
dalam hal ini cheft arnold adalah thread processor, cheft arnold masih bisa melakukan banyak hal dalam satu waktu secara bergantian.
Jadi kalau fungsi A diatas diibaratkan seperti memasak air, yang menangani air tersebut (fungsi A) adalah kompor bukan cheft arnold.
Cheft arnold hanya mengecek apakah airnya sudah mendidih atau belum.

## Metode Parrarel
Parallel adalah melakukan sesuatu secara bersamaan dalam satu waktu.
Bagaimana caranya ?
Caranya yaitu dengan mengambil thread baru dari processor kita.
Analoginya seperti cheft arnold yang dibantu cheft juna saat masak indomie dan kopi. Mereka saling bagi tugas, cheft arnold
masak kopi dan cheft juna masak indomie, jadi kedua proses tersebut berjalan bersamaan.

Javascript sendiri belum mendukung proses secara parrarel karena menggunakan single thread.
Salah satu bahasa pemprograman yang mempunyai fitur parrarel dan yang sedang ngetren saat ini adalah goroutine miliknya golang dan 
coroutine miliknya kotlin. Bahsa pemprograman yang bisa berjalan secara parrarel dikenal juga dengan isitilah bahasa pemprograman 
multi thread.
