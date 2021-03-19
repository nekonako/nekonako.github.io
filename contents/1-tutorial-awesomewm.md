---
title : 'Membuat widget sederhana di awesomewm'
slug : '1-tutorial-awesomewm'
date : '2021-3-16'
desc: 'Tulisan awesomewm pertama, membahas tentang cara membuat widget awesomewm'
tags:
  - linux
  - awesomewm
---

Pada tulisan kali ini kita akan membahasa cara membuat widget sederhana pada awesomewm.
Mungkin pada tulisan berikutnya akan membahasa tentang bagaimana cara mebuat config awesomewm menjadi
modular.

Ada baiknya sebelum mulai belajar awesomewm terlebih mengetahui 
[Dasar bahasa pemprograman lua](https://www.tutorialspoint.com/lua/index.htm).

## Disclaimer
Saya bukan propgrammer atau developer, cuma orang biasa yang suka menikmati kopi dan drama di internet yang
kebetulan lagi gabut, jadi mohon maaf apabila kesalahan pada tulisan ini.

## Apa itu widget
Mungkin bagi yang pernah mencoba flutter, atau react native atau bahkan toolkit untuk membuat aplikasi 
berbasis desktop seperti java swing atau electron sudah tidak asing lagi karena pada dasarnya sama.

Intinya adalah sebuah objek untuk membuat Graphical User Interface (GUI).
Objek disini bisa berbeda perilakuanya tergantung dengan tujuan diciptakanya.
Misal flutter dan raect native yang berjalan di android atau java swing dan electron yang berjalan 
di desktop.

## Membuat widget
Di dalam folder **~/.config/awesome/** kita buat file baru dengan nama **hello-world.lua**.
lalu di file **rc.lua** kita import **hello-world.lua** dengan cara :

```lua
require('hello-world')
```

cara mengimport di bahasa pemprograman lua memang mirip dengan javascript.
sekarang mari kita buka file **hello-world.lua** .

```lua
-- import module wibox dan simpan dalam variabel wibox
local wibox = require('wibox')

-- membuat variabel hello_world yang didalamnya berisi instance dari wibox.
local hello_world = wibox {
-- wibox mempunya banyak properties, salah satunya adalah yang kita gunakan dibawah ini.
   height = 500,
   width = 500,
   visible = true
}

return hello_world

```

Sekarang coba kita simpan dan restart awesomewm dengan **Super + Ctrl + r** .
Setelah itu kita akan melihat kotak misterius dipojok kiri atas.


![hello world](/assets/post/1-tutorial-awesomewm/hello-world-1.png)


Kenapa yang muncul cuma kotak kosong ? karena kita belum memasukan apapun ke dalam situ.
Kita cuma baru membuat kotak dengan tinggi 500 dan lebar 500 lalu `visible = true` agar dapat terlihat.

Sekarang kita akan membuat widget yang berisi text "Hello world".

```lua
local text_hello_world = {
   text = 'Hello world',
   font = 'Iosevka Mayukai 30',
   widget = wibox.widget.textbox
}
```

Diatas kita membuat variabel `text_hello_world` yang didalamnya ada objek (di lua disebut tabel 
tapi agar lebih familiar kita sebut objek saja), dengan properties `text`, `font` dan `widget`.
properties `widget` berisi method `wibox.widget.textbox`, karena kita akan menampilkan text.


memasukan widget ke dalam wibox

```lua
hello_world : setup {
   text_hello_world,
   layout = wibox.container.place
}
```
wibox mempunya method `setup` untuk mengatur hirarki widget.
Sementara properties `layout` digunakan untuk mengatur posisi widget.
Disini kita menggunakan method **wibox.container.place** karena kita ingin teks "Hello world" berada
di tengah-tengah wibox.

<br/>

### full code

```lua
local wibox = require('wibox')

local hello_world = wibox {
   height = 500,
   width = 500,
   bg = '#2A2C3A',
   visible = true
}

local text_hello_world = wibox.widget {
   text = 'Hello world',
   font = 'Iosevka Mayukai 30',
   widget = wibox.widget.textbox
}

hello_world : setup {
   text_hello_world,
   layout = wibox.container.place
}

return hello_world
```


![hello world](/assets/post/1-tutorial-awesomewm/hello-world-2.png)

## Membuat toggle widget

```lua
local awful = require('awful')

local hello_world = wibox {
   height = 500,
   width = 500,
   bg = '#2A2C3A',
-- set visible menjadi false
   visible = false
}

-- membuat fungsi untuk mengatur visible dari wibox hello_world
local function hello_world_visibility()
   if hello_world.visible == false then
      hello_world.visible = true
   else
      hello_world.visible = false
   end
end

-- membuat shortcut/keybind
awful.keyboard.append_global_keybindings({
   awful.key({ "Mod4" }, "y", function() hello_world_visibility() end)
})
```

Kita dapat memanfaatkan properties `visible` untuk menjadikan widget kita terlihat atau tidak. 
Kemudian kita membuat fungsi yang isinya mengubah vaue dari properties `visible` yang kemudian 
fungsi tersebut kita panggil saat kita menekan **Mod4 + y** (Mod4 adalah tombol windows atau disebut juga super).

<br/>

## Membuat widget kita dapat diclick
Untuk membuat widget kita dapa diclick, kita dapat menggunakan method **buttons**.
Untuk lebih mudah kita akan membuat satu widget lagi yang berisi angka dan ketika angka itu diclik maka
nilainya akan bertambah.

```lua
local number = wibox.widget {
   text = 1,
   widget = wibox.widget.textbox
}

local function increment()
   number.text = number.text + 1
end

number:buttons(awful.button({}, 1, function() increment() end))
```

tanda **":"** didalam lua merupakan syntax sugar dari method yang parameter pertamanya adalah
dirinya sendiri.

contoh :

```lua
self.hello(self, "hellow world")

-- sama dengan
self:hello("hello_world")
```

Didalam method buttons kita menggunakan method **awful.button** sebagai parameter kedua.


Oh iya kalau kita perhatikan saat kita membuat toggle untuk memuncukan widget kita mengisi parameter
pertama pada method **awful.button dengan** **{Mod4}** dan parameter kedua adalah huruf "y".
Karena kita tidak ingin menggunakan shortcut melainkan mouse maka parameter pertama cukup kita
kasih objek kosong sedangkan parameter kedua kita isi dengan angka 1. 
Kenapa angka 1 ? apakah angka 1 punya maksud tertentu ? jawabanya iya.
Angka 1 artinya left click pada mouse. 
sedangkan untuk right click adalah angka 3, untuk lebih detailnya
bisa dilihat documentasi awesome [disini](https://awesomewm.org/doc/api/libraries/mouse.html)

<br/>

## Grouping widget
kita ingin membuat widget kita berada di tengah dan ada jarak antara widget **text_hello_world** dan
**number**. untuk melakukan itu kita butuh properties layout.

```lua
hello_world : setup {
   nil,
   {
      text_hello_world,
      number,
      spacing = 20,
      layout = wibox.layout.fixed.vertical
   },
   nil,
   expand = "none",
   layout = wibox.layout.align.vertical
}
```

kenapa ada `nil` disitu ? karena **wibox.layout.align** membagi layout menjadi 3 dengan mengambil semua 
ruang yang ada, jika vertical maka akan menjadi "atas", "tengah" dan "bawah", sedangkan kalau 
horizontal menjadi "kiri", "tengah" dan "kanan".

<br/>

Seperti yang kita singgung sebelumnya, kita ingin widget kita berada ditengah maka "atas" dan 
"bawah" kita kasih value `nil`. 
Sementara properties **expand = "none"** berguna agar widget kita tidak mengambil ruang yang tidak 
terpakai.

<br/>

Sedangkan **wibox.layout.fixed** tidak mengambil semua ruang, akan tetapi mengambil ruang berdasarkan
masing-masing widget. bedanya **wibox.layout.fixed** dengan **wibox.layout.align** adalah 
**wibox.layout.fixed** mempunyai properties `spacing`.

<br/>

sekarang coba kita simpan dan awesomewm kita restart.
Widget kita sudah berada ditengah tapi cuma secara vertical, untuk menjadikanya ditenagh secara 
horizontal kita dapat menggunakan properties `align` pada masing-masing widget.

```lua
local text_hello_world = wibox.widget {
   align = 'center',
  }

local number = wibox.widget {
   align = 'center',
  }
```


## Full Code
```lua
local wibox = require('wibox')
local awful = require('awful')

local hello_world = wibox {
   height = 500,
   width = 500,
   ontop = true,
   visible = false
}

local text_hello_world = {
   text = 'Hello world',
   align = 'center',
   font = 'Iosevka Mayukai 30',
   widget = wibox.widget.textbox
}

local number = wibox.widget {
   text = 1,
   align = 'center',
   font = 'Iosevka Mayukai 20',
   widget = wibox.widget.textbox
}

local function increment()
   number.text = number.text + 1
end

number:buttons(awful.button({}, 1, function() increment() end))

hello_world : setup {
   nil,
   {
      text_hello_world,
      number,
      spacing = 20,
      layout = wibox.layout.fixed.vertical
   },
   nil,
   expand = "none",
   layout = wibox.layout.align.vertical
}

local function hello_world_visibility()
   if hello_world.visible == false then
      hello_world.visible = true
   else
      hello_world.visible = false
   end
end

awful.keyboard.append_global_keybindings({
   awful.key({ "Mod4" }, "y", function() hello_world_visibility() end)
})

return hello_world
```

![hello world](/assets/post/1-tutorial-awesomewm/hello-world-3.png)
