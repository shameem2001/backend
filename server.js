const express = require('express');
const mongoose = require('mongoose');
const app = express();

// import routers / apis
const TasksRouter = require('./routes/tasks.js');
app.use(TasksRouter);

const PORT = 3000;
const DB_USERNAME = "admin";
const DB_PASSWORD = "test123";
const DB_NAME = "tasks";
const DB_URL = `mongodb+srv://admin:${DB_PASSWORD}@cluster0.dmarof6.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

// connect mongodb using mongoose
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});



// Serve react build
app.get('/', (req, res) => {
    res.send('I am the react app build');
})

app.get('/haha', (req, res) => {
    res.send('haha');
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server started at port ${PORT}`);
})