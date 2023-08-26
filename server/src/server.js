const http = require("http");

const app = require("./app");
const { loadPlanetsData } = require("./models/planets.models");
const PORT = process.env.PORT || 8000;

const server = http.createServer();

async function startServer() {
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`listining on port ${PORT}...`);
  });
}

startServer();
