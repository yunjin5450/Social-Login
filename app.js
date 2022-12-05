const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-Parser');
const express = require('express');
const app = express();
const port = 3000;
//const SECRET_KEY = 'YunJinKey';
const path = require('path') // X
const cors = require('cors') // O

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "views")))

app.use(
  cors({
    origin: "*",
  })
);

app.listen(port, () => {
  console.log(port, '소셜로그인 하장!');
});