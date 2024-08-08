import {Cipher} from '../types';
import express from 'express';
import {fileDb} from "../fileDb";
import vigenereCipher from "./vigenereLib";

const decodeRouter = express.Router();

decodeRouter.get('/', async (req, res) => {
    res.send(fileDb.getDecodedMessage());
});

decodeRouter.post('/', async (req, res) => {
    if (req.body.message !== undefined && req.body.message !== '') {
        const message: Cipher = {
            message: req.body.message,
            password: req.body.password,
        };

        const decodedMessage = vigenereCipher(message.message, message.password, false);
        await fileDb.addDecodedMessage(decodedMessage);

        res.send({
            decoded: decodedMessage
        });
    } else {
        res.send('Invalid request 404!');
    }
});

export default decodeRouter;