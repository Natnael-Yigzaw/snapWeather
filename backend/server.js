import express from "express";
import https from "https";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/", (req, res) => {
  const query = req.body.cityName;
  const apiKey = process.env.API_KEY;
  const units = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    units +
    "";
  https.get(url, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("data", (data) => {
      const weatherdata = JSON.parse(data);
      const temp = weatherdata.main.temp;
      const weatherMain = weatherdata.weather[0].main;
      const description = weatherdata.weather[0].description;
      const icon = weatherdata.weather[0].icon;
      const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      const weatherResponse = {
        temperature: temp,
        weatherMain: weatherMain,
        description: `The weather is currently ${description}.`,
        imageUrl: imageUrl,
      };

      res.json(weatherResponse);
    });
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
