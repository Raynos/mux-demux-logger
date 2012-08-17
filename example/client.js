var MuxDemux = require("mux-demux-net")
    , mdm = MuxDemux(8642)

var stream = mdm.createStream("winning")
stream.on("data", console.log.bind(console, "[CLIENT]"))
setInterval(function () {
    stream.write(new Date().toString())
}, 1000)
