var prod = {
        baseUrl: 'http://masterofpoppets.github.io/garethhughes.io/',
        isDev: false
    },
    dev = {
        baseUrl: 'http://localhost:8080/',
        isDev: true
    }

module.exports = function (args) {
    var config = dev
    args.forEach(function (arg) {
        if (arg === '-p' || arg === '--production') {
            config = prod
        }
    })
    return config
}