const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();


app.use(express.static('./dist/comunicacao-perda'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/comunicacao-perda/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8081, () => {
  if (process.env.AMBIENTE == 'PRODUCAO') {
    fs.writeFile('src/assets/heroku-env.json', JSON.stringify(process.env), function (err) {
      if (err) return console.log(err);
      console.log('Arquivos de environment carregados.');
    })
  }
});
