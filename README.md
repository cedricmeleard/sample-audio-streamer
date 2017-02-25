# Live audio streaming

Description
> this sample project is designed to allow you to broadcast audio

## Why ?

I'm convinced that allowing people working together freely is important.
Sharing information or knowledge matters more than making immediate business, 
it a virtuous circle for us all.  

As I started [YAWPE](https://github.com/cedricmeleard/yawpe), 
I realized that this soft wasn't enough.
Just presenting slides is ok when you are in the same room than others, but not over internet.

This audio stream project is here to test and prepare audio extension for YAWPE.

## What ?

This project helps you streaming audio over network,
a node server is rununing and will broadcast soundbuffer

It is only a try therefore it might be not working so well :p

## How ?

Using [express](http://expressjs.com/) and [socket.io](https://socket.io) for server side
Call CDN for [p5js](https://p5js.org/) for sound event (for speaker)

## How to use

Git clone repository then

`npm install` will setup dependencies

`npm start` will launch node server listening on port 3000 (default)

express serve 2 routes:

> localhost:3000/ for the speaker

> localhost:3000/player for people listening

Since it use ES6 library not supported by old browser, 
it s better using chrome (I didn't test others)