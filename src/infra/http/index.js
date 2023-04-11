const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/users", userRoutes);


app.use(async (err, req, res, next) => {
  return res.status(500).json({ error: "Internal server error" });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
