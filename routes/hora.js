var express = require('express');
var router = express.Router();
var ntpClient = require('ntp-client');

const ntpServer = 'hora.roa.es'
const ntpPort = 123

/* GET ntp time */
router.get('/', function(req, res, next) {
 
    ntpClient.getNetworkTime(ntpServer, ntpPort, function(err, date) {
        if(err) {
            console.error(err);
            res.sendStatus(500);
        }
        
        console.log(`Hora según ${ntpServer}:${ntpPort} -> ${date}`)
        res.json({ fecha: date })
    });
});

module.exports = router;
