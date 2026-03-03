const express = require("express");
const cors = require("cors");

const debugRoutes = require("./routes/debugRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/debug", debugRoutes);

app.listen(3001, () => {
  console.log("Backend running on port 3001");
});
