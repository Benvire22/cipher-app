let encodedMessage = '';
let decodedMessage = '';

export const fileDb = {
    async addEncodeMessage(message: string) {
        encodedMessage = message;
    },
    async addDecodedMessage(message: string) {
        decodedMessage = message;
    },
    async getDecodedMessage() {
        return decodedMessage;
    },
    async getEncodedMessage() {
        return encodedMessage;
    },
};