# mux-demux-logger

Intercept mdm streams and log them

## Example

Intercept mux-demux data and log it to `console.log`

``` js
var MuxDemux = require("mux-demux-net")
    , logger = require("..")

MuxDemux(logger(function (stream) {
    stream.on("data", function (data) {
        stream.write("echo" + data)
    })
}, true), 8642)
```

## Installation

`npm install mux-demux-logger`

## Contributors

 - Raynos

## MIT Licenced