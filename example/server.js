var MuxDemux = require("mux-demux-net")
    , logger = require("..")

MuxDemux(logger(function (stream) {
    stream.on("data", function (data) {
        stream.write("echo" + data)
    })
}, true), 8642)