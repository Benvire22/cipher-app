import express from 'express';
import encodeRouter from "./routers/encode";
import decodeRouter from "./routers/decode";
import cors, { CorsOptions } from 'cors';

const app = express();
const port = 8001;

const whitelist = ['http://localhost:5173'];
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (origin && whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(express.json());
app.use(cors(corsOptions));

app.use('/encode', encodeRouter);
app.use('/decode', decodeRouter);

app.listen(port, () => {
    console.log(`Server started on port localhost:${port}`);
});
