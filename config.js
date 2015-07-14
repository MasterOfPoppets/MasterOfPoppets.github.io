var prod = {
        baseUrl: 'http://masterofpoppets.github.io/garethhughes.io/'
    },
    dev = {
        baseUrl: 'http://localhost:8080'
    }

module.exports = function (args) {
    var config = dev
    args.forEach(function (arg) {
        if (arg === '-p' || arg === '--prod') {
            config = prod
        }
    })
    return config
}