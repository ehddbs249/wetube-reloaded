import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";
const PORT = 4000;

// express 서버 생성
const app = express();
const logger = morgan("dev");
app.use(logger);

// 라우터 사용
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/", globalRouter);

// 서버 실행 시 콘솔 출력
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}🚀`);
// 서버 실행
app.listen(PORT, handleListening);
