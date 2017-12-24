
const fs = require('fs');
const express = require('express');
const socketio = require('socket.io');
const path = require('path');

function image(path) {
  let response = [];
  fs.readdirSync(`${__dirname}/public${path}`).forEach(file => {
    response.push(`${path}/${file}`);
  });
  return response;
}

const server = express()
  .set('view engine', 'pug')
  .use(express.static(__dirname + '/public'))
  .use((req, res) => res.render(path.join(__dirname, 'index.pug'), {
      title: "openCluster",

      portfolio_active: image("/images")[0],
      portfolio: image("/images")
      /*,
      bath_active: image("/images/bath")[0],
      bath_pictures: image("/images/bath"),

      floor_active: image("/images/floor")[0],
      floor_pictures: image("/images/floor"),

      kitchen_active:image("/images/kitchen")[0],
      kitchen_pictures: image("/images/kitchen")
*/
    }))
  .listen(process.env.PORT, () => console.log(`[!] listening on ${process.env.PORT}`));
