const config = {
    port : 8090,
    mongo : {
        uri : "mongodb://mongo:27017/personalWebsiteDB",
        options : {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    }
}
module.exports = config