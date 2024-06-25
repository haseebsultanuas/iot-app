const express = require('express');

const app = express();

app.use(express.static(__dirname));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const PORT = 3000;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/monitoring.html`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

function add(numbers) {
  return numbers
      .split(',')
      .map(x => parseInt(x))
      .reduce((a, b) => a + b)
}

exports.add = add;
