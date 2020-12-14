---
title : 'Dari Gatsby ke Nextjs'
slug : 'how-i-rebuild-this-site-from-gatsby-to-nextsjs'
date : '2020-12-11'
desc: 'Membangun ulang blog ini dengan nextjs'
tags:
  - nextjs
  - react
---

## Mengapa saya membangun ulang website ini
Belum lama ini saya sedang belajar reactjs, dan tentu pada saat belajar kita ingin membuat project sesuai dengan apa yang sedang
kita pelajari.project yang sering kita buat adalah membuat blog pribadi.
Sebelumnya saya sudah membuat blog ini dengan gatsby. gatsby sendiri adalah static site generator (SSG) berbasis reactjs.
Sejauh pengalaman saya menggunakan gatsby, gatsby ssg yang sangat powerful, banyak sekali plugin yang sangat membantu.
Tapi yang menjadi masalah adalah graphql.
Terlepas dari segala kelebihan yang diberikan oleh graphql, saya masih kesulitan dalam memahami alur kerja dari graphl.
Oleh karena itu saya memutuskan untuk pindah ke nextjs, tentu bukan berarti saya menyerah dengan graphql mungkin pada kesempatan 
berikutnya saya akan mendalaminya lagi.

## Apa itu nextjs
Dalam website nextjs sendiri, nextjs adalah framework reactjs untuk production. apa maksudnya ? maksudnya adalah nextjs memberikan 
semua fitur yang kita butuhkan dalam mendevelop sebuah aplikasi sampai level production.

## Kelebihan nextjs
Nextjs hadir dengan membawa banyak fitur, salah satu fitur yang menjadi kelebihanya adalah hybrid rendering.Itu artinya nextjs bisa 
menggunakan SSR ( Server Side Rendering ) maupun CSR ( Cient Side Rendering ) atau bahkan mengkombinasikan keduanya.
Untuk fitur lainya menurut saya hampir mirip dengan gatsby.berikut ini adalah beberapa fitur nextjs.

- Hybris rendering 
- Support typescript
- Nol config
- Fast refresh
- File-system routing
- Built-in css support
- Dan lain-lain.

## Apa bedanya dengan gatsby
nextjs dan gatsby sama-sama menggunakan react, tapi keduanya berbeda. Gatsby adalah static site generator yang mengkombinasikan reactjs
dengan grapql sedangkan nextjs adalah framework reactjs.Secara fitur keduanya hampir mirip yang paling membedakan adalah gatsby 
menggunkan client side rendering sedangkan nextjs bisa keduanya ( CSR dan SSR ).


## Pengalaman dengan nextjs

### Development Workspace
saya mencoba meggunakan setup seminimal mungkin pada laptop kentang saya.
saya menggunkan neovim sebagai text editor dengan beberapa plugin pendukung seperti lsp,coc,vim-js-pretty dan lain-lain.
untuk terminal saya menggunakan st yang dikombinsikan dengan tmux.
secara keseluruhan nextjs memberikan pengalaman yang lebih ringan dibandingkan dengan gatsby, mungkin karena gatsby meload lebih banyak
plugin daripada nextjs.

<br/>

### Project Workspace
karena ini blog, jadi saya membuat beberapa folder untuk menyimpan gambar dan file markdown.
saya juga membuat beberapa halamanan seperti `about`,`friend`,`posts`.pada nextjs untuk file yang berada pada folder `pages` akan 
otomatis dijadikan routing jadi kita tidak perlu membuat konfigurasi routing lagi dan ini sesuai dengan jargonya "zero config".

<br/>

### Plugin yang saya gunkana

#### 1. styling
saya menggunkan tailwindcss untuk styling. tailwind sendiri adalah framework css yang sangat fleksibel dan mudah dicustomize.

<br/>

#### 2. Markdown
karena artikel kita bentuknya markdown kita perlu sesuatu untuk merender markdown tersebut.
untuk masalah itu saya menggunakan `remark-parse` dan `remark-html`, untuk metadata saya menggunkan `gray-matter`.

<br/>

#### 3. Syntax Highlighting
pada saat menulis artikel tentang kadang kita harus menampilkan source kode.untuk mempercantik tampilan source code tersebut
kita membutuhkan syntax highlighting.untuk masalah itu saya menggunkan prismjs.

<br/>

### Hosting
Nextjs sendiri dibuat oleh [Vercel]("https://vercel.com"), jadi saya memutuskan untuk mendeploy project menggunakan vercel.
Cara deploynya pun sangat mudah, tinggal upload ke github lalu import ke vercel dan vercel secara otomatis membuild aplikasi nextjs kita.

## Kesimpulan
Masih bnyak hal yang perlu saya ulik dari nextjs, tapi sejauh ini Nextjs adalah framework yang mempunyai banyak fitur keren, simpel 
dan mudah digunakan.Tidak seperti gatsby yang graphqlnya sudah built-in nextjs terasa lebih fleksibel.Lagian ini ini cuma blog jadi saya
belum membutuhkan API.
