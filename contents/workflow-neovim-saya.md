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

- **Terlihat pro**:
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
Neovim pada saat artikel ini dibuat sudah mencapai versi 0.4 untuk ver stable. Dan bisa dinstall package prebuidlnya 
[disini]("https://guthub.com/neovim/neovimrelease").
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

## setting.vim
Oke selnjutnya kita membuat pengaturan vim yang akan disimpan di `setting.vim`.

```vim
syntax on
colorscheme palenight
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

Itu adalah sebagian options dari vim yang saya ingat dan tahu fungsinya dari sekian banyak pengaturan yang disediakan.
Untuk mengetahui apa saja pengaturan yang disediakan bisa melihat didokumentasi vim atau lewat vim sendiri dengan command `:help set`

## keybind.vim
Selanjutnya kita akan membuat keybind yang kita simpan di file `keybind.vim`.

```vim
" Leader
let mapleader=','

"" Buffers
noremap <A-j> :bp<cr>
noremap <A-k> :bn<cr>
noremap <A-L> :bl<cr>
noremap <A-H> :bf<cr>

" close buffer
noremap <leader>q :bp<cr>:bd #<cr>
```

### Keterangan
- **mapleader** : mendefinisikan leader, leader sendiri pada vim mirip seperti tombol super pada i3wm, fungsinya sebagai master key untuk 
  shortcut, disini saya menggunakan tombol `,`
- **noremap <A-j> :bp<cr>** : membuat shortcut baru yaitu `alt+j` untuk pergi ke buffer sebelumnya
- **noremap <A-k> :bp<cr>** : membuat shortcut baru yaitu `alt+` untuk pergi ke buffer selanjutnya
- **noremap <A-L> :bp<cr>** : membuat shortcut baru yaitu `alt+L` untuk pergi ke buffer terakhir
- **noremap <A-H> :bp<cr>** : membuat shortcut baru yaitu `alt+H` untuk pergi ke buffer pertama
- **noremap <leader>q :bp<cr>:bd #<cr>** : membuat shortcut baru yaitu `,+q` untuk menutup buffer


## plugin.vim
Selanjutnya kita membuat konfigurasi plugin apa saja yang akan kita install, disini saya menggunakan vim-plug.
Untuk cara install vim plug bisa dilihat [disini]("https://github.com/junegunn/vim-plug").
Selanjutnya kita menginstall plugin yang kita butuhkan di file `plugin.vim`

```vim
call plug#begin('~/.vim/plugged')
  Plug 'itchyny/lightline.vim'
  Plug 'mengelbrecht/lightline-bufferline'
  Plug 'Yggdroot/indentLine'
  Plug 'neoclide/coc.nvim', {'branch': 'release'}
  Plug 'scrooloose/nerdtree'
  Plug 'jiangmiao/auto-pairs'
  Plug 'drewtempelmeyer/palenight.vim'
  Plug 'rrethy/vim-hexokinase', {'do': 'make hexokinase'}
  Plug 'tpope/vim-commentary'
  Plug 'majutsushi/tagbar'
  Plug 'ryanoasis/vim-devicons'
call plug#end()
```

## Konfigurasi Plugin
selnjutnya kita perlu mengkonfigurasi plugin yang kita instll

## bufferline.vim

```vim
let g:lightline#bufferline#number_map = 2
let g:lightline#bufferline#composed_number_map = {
\ 1:  '⑴ ', 2:  '⑵ ', 3:  '⑶ ', 4:  '⑷ ', 5:  '⑸ ',
\ 6:  '⑹ ', 7:  '⑺ ', 8:  '⑻ ', 9:  '⑼ ', 10: '⑽ ',
\ 11: '⑾ ', 12: '⑿ ', 13: '⒀ ', 14: '⒁ ', 15: '⒂ ',
\ 16: '⒃ ', 17: '⒄ ', 18: '⒅ ', 19: '⒆ ', 20: '⒇ '}
let g:lightline#bufferline#enable_devicons = 1
let g:lightline.component_raw = {'buffers': 1}
let g:lightline#bufferline#clickable = 1
let g:lightline#bufferline#unnamed = "new file"
let g:lightline#bufferline#filename_modifier = ':t'

nmap <Leader>1 <Plug>lightline#bufferline#go(1)
nmap <Leader>2 <Plug>lightline#bufferline#go(2)
nmap <Leader>3 <Plug>lightline#bufferline#go(3)
nmap <Leader>4 <Plug>lightline#bufferline#go(4)
nmap <Leader>5 <Plug>lightline#bufferline#go(5)
nmap <Leader>6 <Plug>lightline#bufferline#go(6)
nmap <Leader>7 <Plug>lightline#bufferline#go(7)
nmap <Leader>8 <Plug>lightline#bufferline#go(8)
nmap <Leader>9 <Plug>lightline#bufferline#go(9)
nmap <Leader>0 <Plug>lightline#bufferline#go(10)
```

## hexokinase.vim
```vim
if exists('g:plugs["vim-hexokinase"]')
    let g:hexokinase_highlighters = [
    \ 'virtual',
    \ ]
    let g:Hexokinase_virtualText = ' '
    let g:Hexokinase_signIcon = ' '
    let g:Hexokinase_alpha_bg = '#292D3E'
    let g:Hexokinase_checkBoundary = 0
    let g:Hexokinase_optInPatterns = [
                \'full_hex',
                \'triple_hex',
                \'rgba',
                \'hsl',
                \'hsla',
                \] 
endif
```

## indentline.vim
```vim
if exists('g:plugs["indentLine"]')
  let g:indentLine_char            = '│'
  let g:indentLine_faster          = 1
  let g:indentLine_color_term = 1
  let g:indentLine_color_gui = '#696482'
  let g:indentLine_conceallevel = 2
  let g:indentLine_fileTypeExclude = [
        \ 'help', 'nerdtree', 'startify', 'Preview','__doc__', 'peekaboo',
        \ 'man', 'trans', 'fzf', 'markdown', 'json',
        \ ]
  let g:indentLine_bufTypeExclude = [
        \ 'help', 'terminal' 
        \ ]
endif
```

## nerdtree.vim
```vim
if exists('g:plugs["nerdtree"]')
autocmd StdinReadPre * let S:std_in=1
autocmd VimEnter * if argc() == 1 && isdirectory(argv()[0]) && !exists("s:std_in") | exe 'NERDTree' argv()[0] | wincmd p | ene | exe 'cd '.argv()[0] | endif
let g:NERDTreeDirArrowExpandable = ""
let g:NERDTreeDirArrowCollapsible = ""
let g:NERDTreeWinSize=30
let g:NERDTreeMinimalUI = 1
let g:NERDTreeHighlightCursorline = 0
autocmd FileType nerdtree setlocal signcolumn=no
endif
```

## lightline.vim

```vim
function! CocCurrentFunction()
    return get(b:, 'coc_current_function', '')
endfunction

let g:lightline = {
  \ 'colorscheme': 'palenight',
  \ 'active': {
  \   'left': [ [ 'mode', 'paste' ], ['filename' ], ['branchIcon'] ],
  \   'right': [ [ 'cocstatus', 'coccurrentfunction', 'lineinfo' ], ['percent'], [ 'fileformat', 'fileencoding', 'filetype' ] ]
  \ },
  \ 'component_function': {
  \   'fugitive': 'FugitiveHead',
  \   'filename': 'LightlineFilename',
  \   'fileformt': 'LightlineFileformat',
  \   'filetype': 'LightlineFiletype',
  \   'fileencoding': 'LightlineFileencoding',
  \   'mode': 'LightlineMode',
  \   'ctrlpmark': 'CtrlPMark',
  \   'cocstatus': 'coc#status',
  \   'coccurrentfunction': 'CocCurrentFunction',
  \   'branchIcon': 'LighlineBranchIcon',
  \ },
  \ 'component': {
  \ 'close': '%999X Nako ',
  \},
  \ 'separator': { 'left': '', 'right': '' },
  \ 'subseparator': { 'left': '|', 'right': '|' },
 \ 'tabline': {
    \   'left': [ ['buffers'] ],
    \   'right': [ ['close'] ]
    \ },
    \ 'component_expand': {
    \   'buffers': 'lightline#bufferline#buffers'
    \ },
    \ 'component_type': {
    \   'buffers': 'tabsel'
    \ }
  \ }

function! LighlineBranchIcon()
    let gitbranch = FugitiveHead()
    let icon = ' '
    return icon.gitbranch
endfunction

function! LightlineModified()
  return &ft =~ 'help' ? '' : &modified ? '+' : &modifiable ? '' : '-'
endfunction

function! LightlineReadonly()
  return &ft !~? 'help' && &readonly ? 'RO' : ''
endfunction

function! LightlineFilename()
  let fname = expand('%:t')
  return fname == 'ControlP' && has_key(g:lightline, 'ctrlp_item') ? g:lightline.ctrlp_item :
        \ fname == '__Tagbar__' ? g:lightline.fname :
        \ fname =~ '__Gundo' ? '' :
        \ &ft == 'vimfiler' ? vimfiler#get_status_string() :
        \ &ft == 'unite' ? unite#get_status_string() :
        \ &ft == 'vimshell' ? vimshell#get_status_string() :
        \ ('' != LightlineReadonly() ? LightlineReadonly() . ' ' : '') .
        \ ('' != fname ? fname : '[No Name]') .
        \ ('' != LightlineModified() ? ' ' . LightlineModified() : '')
endfunction

function! LightlineFugitive()
  try
    if expand('%:t') !~? 'Tagbar\|Gundo\|NERD' && &ft !~? 'vimfiler' && exists('*fugitive#head')
      let mark = ' '
      let branch = 'FugitiveHead'
      return branch !=# '' ? mark.branch : ''
    endif
  catch
  endtry
  return ''
endfunction

function! LightlineFileformat()
  return winwidth(0) > 70 ? &fileformat : ''
endfunction

function! LightlineFiletype()
  return winwidth(0) > 70 ? (&filetype !=# '' ? &filetype : 'no ft') : ''
endfunction

function! LightlineFileencoding()
  return winwidth(0) > 70 ? (&fenc !=# '' ? &fenc : &enc) : ''
endfunction

function! LightlineMode()
  let fname = expand('%:t')
  return fname == '__Tagbar__' ? 'Tagbar' :
        \ fname == 'ControlP' ? 'CtrlP' :
        \ fname == '__Gundo__' ? 'Gundo' :
        \ fname == 'NERD_tree' ? 'NERD' :
        \ fname == '__Gundo_Preview__' ? 'Gundo Preview' :
        \ fname =~ 'NetrwTreeListing' ? 'Tree Listing' :
        \ &ft == 'unite' ? 'Unite' :
        \ &ft == 'vimfiler' ? 'VimFiler' :
        \ &ft == 'vimshell' ? 'VimShell' :
        \ winwidth(0) > 60 ? lightline#mode() : ''
endfunction

function! CtrlPMark()
  if expand('%:t') =~ 'ControlP' && has_key(g:lightline, 'ctrlp_item')
    call lightline#link('iR'[g:lightline.ctrlp_regex])
    return lightline#concatenate([g:lightline.ctrlp_prev, g:lightline.ctrlp_item
          \ , g:lightline.ctrlp_next], 0)
  else
    return ''
  endif
endfunction

let g:ctrlp_status_func = {
  \ 'main': 'CtrlPStatusFunc_1',
  \ 'prog': 'CtrlPStatusFunc_2',
  \ }

function! CtrlPStatusFunc_1(focus, byfname, regex, prev, item, next, marked)
  let g:lightline.ctrlp_regex = a:regex
  let g:lightline.ctrlp_prev = a:prev
  let g:lightline.ctrlp_item = a:item
  let g:lightline.ctrlp_next = a:next
  return lightline#statusline(0)
endfunction

function! CtrlPStatusFunc_2(str)
  return lightline#statusline(0)
endfunction

let g:tagbar_status_func = 'TagbarStatusFunc'

function! TagbarStatusFunc(current, sort, fname, ...) abort
    let g:lightline.fname = a:fname
  return lightline#statusline(0)
endfunction

let g:unite_force_overwrite_statusline = 0
let g:vimfiler_force_overwrite_statusline = 0
let g:vimshell_force_overwrite_statusline = 0

function! CustomTabname(n) abort
  return fnamemodify(getcwd(tabpagewinnr(a:n), a:n), ':t')
endfunction

let g:lightline.tab_component_function = {
      \ 'custom_tabname': 'CustomTabname',
      \ 'modified': 'lightline#tab#modified',
      \ 'readonly': 'lightline#tab#readonly',
      \ 'tabnum': 'lightline#tab#tabnum'
      \ }

let g:lightline.tab = {
      \ 'active': [ 'tabnum', 'custom_tabname', 'modified' ],
      \ 'inactive': [ 'tabnum', 'custom_tabname', 'modified' ] }

let g:lightline.tabline_separator = { 'left': '', 'right': '' }
let g:lightline.tabline_subseparator = { 'left': '|', 'right': '|' }
```

## tagbar.vim
```vim
if exists('g:plugs["tagbar"]')
  let g:tagbar_autopreview      = 0
  let g:tagbar_indent           = 1
  let g:tagbar_show_linenumbers = 1
  let g:tagbar_show_visibility  = 1
  let g:tagbar_singleclick      = 1
  let g:tagbar_sort             = 1
  let g:tagbar_width = 35
  let g:airline#extensions#tagbar#enabled = 1
nnoremap <C-m> :TagbarToggle<CR>
endif
```

## Menggabungkan semua file konfigurasi
Kita sudah membuat semua konfigurasi, akan tetapi file konfigurasi tersebut masih terpisah oleh karena itu kita perlu memanggil semua 
konfigurasi tadi menjadi satu bagian.
Karena file konfigurasi vim sebenarnya berada di file `~/.vimrc`, yang kita lakukan selanjutnya adalah mengimport semua konfigurasi
tadi kedalam file `./vimrc`

```vim
" =========================
"   IMPORT INITIAL SETTING
" =========================
source $HOME/.vimconf/init.vim/general.vim
source $HOME/.vimconf/init.vim/plugin.vim
source $HOME/.vimconf/init.vim/keybind.vim

" =========================
"  IMPORT PLUGIN SETTING
" =========================
source $HOME/.vimconf/plugin/bufferline.vim
source $HOME/.vimconf/plugin/lightline.vim
source $HOME/.vimconf/plugin/coc.vim
source $HOME/.vimconf/plugin/indentLine.vim
source $HOME/.vimconf/plugin/nerdtree.vim
source $HOME/.vimconf/plugin/tagbar.vim
source $HOME/.vimconf/plugin/hexokinase.vim
source $HOME/.vimconf/plugin/vim-devicons.vim
```

## Konfigurasi tambahan
Saat menggunakan vim mungkin kita akan sangat sering membuka file konfigurasinya, untuk lebih memudahkan dalam mengedit saya membuat
alias pada shell yang berisi perintah untuk membuka folder konfigurasi vim.
Masukan konfigurasi berikut pada file `.bashrc` atau `.zshrc`

```bash
alias vimedit='nvim ~/.vimconf'
```

saat kita ingin mengedit konfigurasi tinggal ketikan perintah `vimedit` pada terminal.


# Kesimpulan
Vim adalah text editor yang simple sekaligus ribet. Simple karena dia berjalan diatas terminal dan banyak fitur-fitur yang keren.
Ribet karena karena butuh waktu yang lama untuk belajar menggunakanya.

