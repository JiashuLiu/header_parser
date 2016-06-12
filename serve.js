var express = require ("express");
var app = express();
app.set('port', process.env.PORT || 3000);
app.get('/', function(req, res) {
  console.log(req.headers);
 var getClientAddress = (req.headers['x-forwarded-for'] || '').split(',')[0]
        || req.connection.remoteAddress;
 var getClientLanguage=req.headers["accept-language"].split(";")[0];
 var getClientSoftware=req.headers['user-agent'].split(') ')[0].split(' (')[1]
 res.json({
 'ip-address': getClientAddress,
 'language': getClientLanguage,
 'software': getClientSoftware
});
});
app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.');
});
