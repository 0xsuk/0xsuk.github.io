---
title: How to install CH340 on Ubuntu 22.04
type: ''
weight: null
date: '2022-07-19T16:26:18+09:00'
draft: false
comment: true
toc: true
reward: false
pinned: false
featured: false
math: false
categories:
  - Robotics
tags:
  - Arduino
series: []
images: []
---
Most linux have built in driver for ch340, except for Ubuntu 22.04.

There's a couple of things to do if you want to upload code to arduino clone from Ubuntu 22.04.

## Install Driver

Go to https://github.com/juliagoda/CH341SER, and follow the instruction. Basically all you need to do is to clone the repo and run `make` and `make load`.  You might want to `sudo` them if you get `permission denied`.

## /dev/ttyUSB0
In order to make /dev/ttyUSB0 accesible, you have to `sudo apt autoremove brltty`. 

## Set proper permission
Depending on your root permissions, you might want to run `sudo usermod -aG dialout $username` and `sudo chmod a+rw /dev/ttyUSB0`.  

Verify permission `ls -la /dev/ttyUSB0`.
![](/uploads/2022-07-19-16:33:46.png)

## Arduino IDE
I use arduino IDE to upload code to my arduino compatible ESP32.  

Set proper serial port.
![](/uploads/2022-07-19-16:34:48.png)

Then everything will work right away.