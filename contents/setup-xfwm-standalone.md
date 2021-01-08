---
title : 'Setup xfwm standalone + sxhkd'
slug : 'setup-xfwm-standalone'
date : '2021-1-8'
desc: 'Setup xfwm standalone + sxhkd yang saya gunakan pada arch linx'
tags:
  - linux
  - xfwm
---

## Pendahuluan
Linux merupakan sistem operasi yang sangat fleksibel, salah satu hal yang membuatnya fleksibel adalah kita bisa membuat workflow sesuai dengan yang kita inginkan.
Saya sendiri sudah satu tahun terakhir menggunkan i3 sebagai windows manager. Dan sejauh ini i3 memberikan pengalaman yang
sangat memuaskan. Tapi ada kalanya kita bosan dan ingin mencoba hal baru, akan tetapi saya mengalami kebingungan dalam memilih window manager.
Di tengah kebingungan tersebut saya teringat postingan dari salah satu legend dari dunia persilatan taitu mas 
[adhi](https://gihut.com/addy-dclxvi) yang menggunkan xfwm standalone. Sayapun tertarik dan ingin mencobanya.

## Persiapan
Kita persiapkan terebih dahulu bahan-bahanya

```bash
sudo pacman -S xfwm4 nitrogen tint2 dunst conky redshift sxhkd xsettingsd polkit-gnome
```

Tentu package yang saya install diatas bersifat opsional, yang terpenting adalah menginstall **xfwm4**.

## Konfigurasi
Xfwm sendiri merupakan window manager yang digunakan pada xfce. Xfce sendiri merupakan desktop environment yang bersifat modular.
Oleh karena itu kita bisa menginstall komponenya tanpa harus menginstall desktop environmentnya itu sendiri.

Karena kita hanya menginstall window managernya saja, ada beberapa hal yang harus dilakukan secara manual.

--- FLow
=> Display Manager => mejalankan session => menlajankan apliaksi ( autostart ) => menjalankan xfwm

## Membuat session


**xfwm.desktop**

```bash
[Desktop Entry]
Name=Xfwm
Comment=Log in using the Xfwm window manager without session manager.
Exec=/usr/bin/xfwm4-session
Icon=xfwm4
Type=Application
```

file xfwm4.desktop ditaruh di directory /usr/share/xsessions/.
file xfwm4.desktop ini nantinya akan dideteksi oleh display manager dan mengeksekusi file xfwm4-session.

<br/>

**xfwm4-session**

```bash
#!bin/bash

/home/$USER/.config/xfwm4/autostart
xfwm4
```

karena pada file xfwm.desktop mengarah ke /usr/bin maka maka kita taruh disana.
file xfwm4-session berfungsi untuk menjalankan aplikasi-aplikasi yang kita butuhkan sebelum menjalankan xfwmnya itu sendiri

> jangan lupa beri hak akses executeable

## Membuat autostart
```bash
mkdir ~/.config/xfwm4 && touch ~/.config/xfwm4/autostart
chmod +x ~/.config/xfwm4/autostart
```
<br/>

**autostart**

```bash
nitrogen --restore &
sxhkd &
/usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1 &
mpd &
redshift &
tint2 &
conky --config ~/.config/conky/simple/config.conkyrc &
xsettingsd &
```

## Membuat shortcut untuk aplikasi
**~/.config/sxhkd/sxhkdrc**

```bash
## Restart sxhkd
super + Escape
	pkill -USR1 -x sxhkd
## simple terminal
super + Return
    st
## alacritty
super + shift + Return 
    alacritty
## pcmanfm
super + f
    pcmanfm
## rofi
super + o
    rofi -show drun
## neovim
super + shift + n
    st -e 'nvim'
super + n
    alacritty -e 'nvim'
## music
super + m
    alacritty -e 'ncmpcpp'
## tmux
super + t
    alacritty -e 'tmux'
## firefox
super + w
    firefox
# dmenu
super + j
    j4-dmenu-desktop --dmenu="dmenu -h 30"
super + d 
    dmenu_run -h 30

### MEDIA BUTTON ###
# + volume
XF86AudioRaiseVolume 
    amixer -D pulse sset Master 5%+
# - volume
XF86AudioLowerVolume 
    amixer -D pulse sset Master 5%-
# mute
XF86AudioMute
    amixer -D pulse -q sset Master toggle
XF86AudioMic
    amixer -D pulse -q sset Mic toggle
# - brightness
XF86MonBrightnessDown
    light -U 5
# + brightness
XF86MonBrightnessUp
    light -A 5
# Play
XF86AudioPlay
    mpc toggle
# Stop
XF86AudioStop
    mpc stop
# Prev
XF86AudioPrev
    mpc prev
# Next
XF86AudioNext
    mpc next

## Exit xfwm
super + xfwm4
    pkill xfwm4
```
