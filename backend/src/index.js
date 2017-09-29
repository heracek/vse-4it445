import express from 'express';
import bodyParser from 'body-parser';
let app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

function getActualTime() {
  return Date.now();
}

const feedback = async (req, res) => {
  console.log("POST", req.url);
  console.log(getActualTime());
  console.log();
  console.log(req.headers);
  console.log();
  console.log(req.body);
  console.log("=".repeat(50));

  return setTimeout(() => res.json(req.body), 500);
};

const people = {
	"people": {
    "sales": [
      {
        "id": 1,
        "name": "Karel Karamel",
        "email": "karamel@example.com"
      },
      {
        "id": 2,
        "name": "Ota Lopata",
        "email": "lopata@example.com"
      }
    ],
    "marketing": [
      {
        "id": 3,
        "name": "Karel Karamel",
        "email": "karamel@example.com"
      }
    ]
  }
};

app.get('/', function (req, res) {
    res.send('Welcome to E-shop API!');
});

app.get("/people", async (req, res) => {
  return res.json(people);
});

app.post("/claims", feedback);

app.use((req, res, next) => {
    res.status(400);
    res.send('404: File Not Found');
});

app.listen(3000, () => {
  console.log('E-shop backend listening on port 3000!')
});
