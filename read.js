var fs = require('fs');

module.exports = {
    read: function(path, callback) {
        try {
            var data = fs.readFileSync(path);

            callback && callback(null, data.toString());
        }
        catch(err) {
            callback(err);
        }
    },
    print: function(data) {
        console.log(data);
    }
};