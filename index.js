module.exports = logger

function logger(f, log) {
    return function (stream) {
        if (log) {
            console.log("[STREAM-RECEIVED]", JSON.stringify({
                meta: stream.meta
                , id: stream.id
            }, null, "    "))
            stream.on("data", function (data) {
                console.log("[STREAM-DATA]", JSON.stringify({
                    meta: stream.meta
                    , data: data
                    , id: stream.id
                }, null, "    "))
            })
            var _write = stream.write
            stream.write = function (data) {
                console.log("[STREAM-WRITE]", JSON.stringify({
                    meta: stream.meta
                    , data: data
                    , id: stream.id
                }, null, "    "))
                _write.apply(this, arguments)
            }
        }
        f.apply(this, arguments)
    }
}