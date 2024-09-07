const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect("mongodb+srv://shibrajdeb456:7OkFWG3UPNlqDCai@cluster0.yikgi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" || "mongodb://localhost/fitness-tracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB!')
}

);

module.exports = mongoose.connection;
