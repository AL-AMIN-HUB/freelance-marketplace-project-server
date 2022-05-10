const app = require("./index");
const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
  console.log(`Server is running in port no ${port}`);
});
