import express from "express";
import { Response, Request } from "express";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/health", (req: Request, res: Response) => {
    res.status(200).json({ message: "Server is running" });
});

const PORT = Number(process.env.PORT) || 8000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
