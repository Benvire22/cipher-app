import {Cipher} from '../types';
import express from 'express';
import {fileDb} from "../fileDb";
import vigenereCipher from "./vigenereLib";

const encodeRouter = express.Router();

encodeRouter.get('/', async (req, res) => {
    res.send(fileDb.getEncodedMessage());
});

encodeRouter.post('/', async (req, res) => {
    if (req.body.message !== undefined && req.body.message !== '') {
        const message: Cipher = {
            message: req.body.message,
            password: req.body.password,
        };

        const encodedMessage = vigenereCipher(message.message, message.password, true);
        await fileDb.addEncodeMessage(encodedMessage);

        res.send({
            encoded: encodedMessage
        });

    } else {
        res.send('Invalid request 404!');
    }
});

export default encodeRouter;