const ttn = require('ttn');

const appID = 'samd21';
const accessKey = 'ttn-account-v2.opL3JvYztHyM4xWGyjFgMT8IlQ1W38PZIaGFbJqswVI';

ttn.data(appID, accessKey)
  .then(function (client) {
    client.on("uplink", function (devID, payload) {
      console.log("Received uplink from ", devID)
      console.log(payload)
    })
  })
  .catch(function (error) {
    console.error("Error", error)
    process.exit(1)
  })