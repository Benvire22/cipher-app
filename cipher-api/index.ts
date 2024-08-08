import express from 'express';
import encodeRouter from "./routers/encode";
import decodeRouter from "./routers/decode";

const app = express();
const port = 8001;

app.use(express.json());

app.use('/encode', encodeRouter);
app.use('/decode', decodeRouter);

app.listen(port, () => {
    console.log(`Server started on port localhost:${port}`);
});
