const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const session = require("express-session");

// 라우터 목록
const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/userRouter");
const recentPostRouter = require("./routes/postRouter/recentPostRouter/recentPostIndex");
const protectPostRouter = require("./routes/postRouter/protectPostRouter/protectPostIndex");
const myPageRouter = require("./routes/myPageRouter");
const myInfoModifyRouter = require("./routes/myPageRouter/modifyInfo");
const kakaoRouter = require("./routes/loginRouter/kakaoRouter");
const kakaoCallbackRouter = require("./routes/loginRouter/kakaoCallbackRouter");

const app = express();
// view 경로 설정
app.set("views", `${__dirname}/views`);

// 화면 구성 엔진을 ejs로 설정
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

// 세션 사용
app.use(
  session({
    secret: "ras",
    resave: true,
    secure: false,
    saveUninitialized: false,
  })
);

app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 라우터 추가하기

app.use("/", indexRouter);
app.use("/users", userRouter);

app.use("/recentPosts", recentPostRouter); //근황게시판
app.use("/protectPosts", protectPostRouter); //보호게시판
app.use("/myPage", myPageRouter); //마이페이지
app.use("/myPage/modify", myInfoModifyRouter); //내 정보변경 페이지
app.use("/auth/kakao", kakaoRouter);
app.use("/auth/kakao/callback", kakaoCallbackRouter);

module.exports = app;
