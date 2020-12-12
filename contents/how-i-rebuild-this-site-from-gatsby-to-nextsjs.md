---
title : 'From gatsby to nextjs'
slug : 'how-i-rebuild-this-site-from-gatsby-to-nextsjs'
date : '2020-12-11'
desc: 'how i rebuild this site from gatsby to nextjs'
tags:
  - nextjs
  - react
---

## mengapa saya membangun ulang website ini
Belum lama ini saya sedang belajar reactjs, dan tentu pada saat belajar kita ingin membuat project sesuai dengan apa yang sedang
kita pelajari.project yang sering kita buat adalah membuat blog pribadi.
Sebelumnya saya sudah membuat blog ini dengan gatsby. gatsby sendiri adalah static site generator (SSG) berbasis reactjs.
Gatsby adalah ssg yang sangat powerful, banyak sekali plugin yang sangat membantu tapi masalahnya adalah graohql.
Terlepas dari segala kelebihan yang diberikan oleh graphql, saya masih kesulitan dalam memahami alur kerja dari graphl.
Oleh karena itu saya memutuskan untuk pindah ke nextjs, tentu bukan berarti saya menyerah dengan graphql mungkin pada kesempatan 
berikutnya saya akan mencobanya lagi.

## apa itu nextjs
dalam website nextjs sendiri, nextjs adalah framework reactjs untuk production. apa maksudnya ? nextjs memberikan semua fitur yang kita 
butuhkan dalam mendevelop sebuah aplikasi sampai level production.

## Kelebihan nextjs
emang apa kelebihanya dibanding framework lain ? maksudnya siap untuk production kan fitur standar yang harus ada dalam sebuah framework.
kalo gitu doang biasa aja dong.

- hybris rendering (bisa CSR dan SSR)
- support typescript
- nol config
- fast refresh
- file-system routing
- built-in css support

dan masih banyak lagi, untuk lebih detail bisa dilihat di [nextjs.org](https://nextjs.org).
fitur yang menurut saya paling menarik adalah hybrid renderingnya.

## apa bedanya dengan gatsby
nextjs dan gatsby sama-sama menggunakan react, tapi keduanya berbeda. gatsby adalah static site generator sedangkan next adalah reactjs
framework.gatsby menggunkan client side rendering sedangkan nextjs bisa keduanya ( client side dan server side ).untuk fitur lainya
menurut saya keduanya hampir sama.

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

#### styling
saya menggunkan tailwindcss untuk styling. tailwind sendiri adalah framework css yang sangat fleksibel dan mudah dicustomize.

<br/>

#### Markdown
karena artikel kita bentuknya markdown kita perlu sesuatu untuk merender markdown tersebut.
untuk masalah itu saya menggunakan `remark-parse dan remark-html`, untuk metadata saya menggunkan `gray-matter`.

<br/>

#### Syntax Highlighting
pada saat menulis artikel tentang kadang kita harus menampilkan source kode.untuk mempercantik tampilan source code tersebut
kita membutuhkan syntax highlighting.untuk masalah itu saya menggunkan prismjs.

<br/>

### Hosting
Nextjs sendiri dibuat oleh [Vercel]("https://vercel.com"), jadi saya memutuskan untuk mendeploy project menggunakan vercel.
Cara deploynya pun sangat mudah, tinggal upload ke github lalu import ke vercel dan vercel secara otomatis membuild aplikasi nextjs kita.
sebetulnya masih ada opsi lain seperti netlify.

## Kesimpulan
Masih bnyak hal yang perlu saya ulik dari nextjs, tapi sejauh ini Nextjs adalah framework yang mempunyai banyak fitur keren, simpel 
dan mudah digunakan.


