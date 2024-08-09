import { createAsyncThunk } from '@reduxjs/toolkit';
import { CipherApi } from '../../types';
import axiosApi from '../../axiosApi';

export interface SendCipherArg {
  cipher: CipherApi;
  type: string;
}

export const sendCipher = createAsyncThunk<void, SendCipherArg>(
  'cipher/fetchCipher',
  async ({cipher, type}) => {
    await axiosApi.post(`/${type}`, {
      password: cipher.password,
      message: cipher.message,
    });
  },
);

export const fetchEncoded = createAsyncThunk<string, void>(
  'cipher/fetchEncoded',
  async () => {
    const {data: response} = await axiosApi.get<string>(`/encode`);
    return response;
  },
);

export const fetchDecoded = createAsyncThunk<string, void>(
  'cipher/fetchDecoded',
  async () => {
    const {data: response} = await axiosApi.get<string>(`/decode`);
    return response;
  },
);