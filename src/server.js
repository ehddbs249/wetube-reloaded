import express from "express";
import morgan from "morgan";
const PORT = 4000;

// express 서버 생성
const app = express();
const logger = morgan("dev");

const home = (req, res) => {
  console.log("I will respond.");
  return res.send("Hello");
};
const login = (req, res) => {
  return res.send("login");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);

// 서버 실행 시 콘솔 출력
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}🚀`);
// 서버 실행
app.listen(PORT, handleListening);
