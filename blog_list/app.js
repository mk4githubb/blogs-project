const config = require('./src/utils/config');
const express = require('express');
const bodyParser = require('body-parser');
const blogsRouter = require('./src/controllers/slashBlogsRouter');
const ratingRouter = require("./src/controllers/slashRatingRouter");
const userRouter = require('./src/controllers/slashUsersRouter');
const loginRouter = require('./src/controllers/loginRouter');
const viewsRouter = require('./src/controllers/slashViews');
const cors = require('cors');
const mongoose = require('mongoose');
const middleware = require('./src/utils/middleware');

mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true})
    .then(() => console.log('Connected to Database'))
    .catch(() => console.log(('Error connecting to Database')));


const app = express();
app.use(cors());
// app.use(express.static(__dirname + '/build'));
app.use(bodyParser.json());
app.use(middleware.tokenExtractor)
app.use(middleware.requestLogger);
app.use('/api/login', loginRouter);
app.use('/api/blogs', blogsRouter);
app.use('/api/users', userRouter);
app.use('/api/pageviews', viewsRouter);
app.use('/api/ratings', ratingRouter);

app.use(middleware.errorHandler);

module.exports = app;

