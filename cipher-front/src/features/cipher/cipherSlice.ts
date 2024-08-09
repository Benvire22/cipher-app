import { createSlice } from '@reduxjs/toolkit';
import { fetchDecoded, fetchEncoded, sendCipher } from './cipherThunks';

export interface CipherState {
  encode: string;
  decode: string;
  isLoading: boolean;
}

export const initialState: CipherState = {
  encode: '',
  decode: '',
  isLoading: false,
};

export const cipherSlice = createSlice({
  name: "cipher",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendCipher.pending, (state) => {
      state.isLoading = true;
    }).addCase(sendCipher.fulfilled, (state) => {
      state.isLoading = false;
    }).addCase(sendCipher.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(fetchEncoded.pending, (state) => {
      state.isLoading = true;
    }).addCase(fetchEncoded.fulfilled, (state, {payload: encoded}) => {
      state.decode = encoded;
      state.isLoading = false;
    }).addCase(fetchEncoded.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(fetchDecoded.pending, (state) => {
      state.isLoading = true;
    }).addCase(fetchDecoded.fulfilled, (state, {payload: decoded}) => {
      state.encode = decoded;
      state.isLoading = false;
    }).addCase(fetchDecoded.rejected, (state) => {
      state.isLoading = false;
    });
  },
  selectors: {
    selectEncode: (state) => state.encode,
    selectDecode: (state) => state.decode,
    selectCipherLoading: (state) => state.isLoading,
  },
});

export const cipherReducer = cipherSlice.reducer;

export const {
  selectEncode,
  selectDecode,
  selectCipherLoading,
} = cipherSlice.selectors;