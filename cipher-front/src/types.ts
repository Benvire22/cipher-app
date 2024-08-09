export interface CipherData {
  encode: string;
  decode: string;
  password: string;
}

export interface CipherApi {
  message: string;
  password: string;
}

export interface CipherResponse {
  encoded: string
}
export interface DecipherResponse {
  decoded: string
}