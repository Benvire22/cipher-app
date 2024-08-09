import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CipherApi, CipherData } from '../../types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchDecoded, fetchEncoded, sendCipher } from './cipherThunks';
import { selectCipherLoading, selectDecode, selectEncode } from './cipherSlice';
import MySpinner from './components/MySpinner';

const Cipher = () => {
  const [formData, setFormData] = useState<CipherData>({
    encode: '',
    decode: '',
    password: '',
  });

  const encodedMessage = useAppSelector(selectEncode);
  const decodedMessage = useAppSelector(selectDecode);
  const isLoading = useAppSelector(selectCipherLoading);
  const dispatch = useAppDispatch();

  const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const onSendCipher = async () => {
    try {
      const cipher: CipherApi = {
        message: formData.encode,
        password: formData.password,
      };

      await dispatch(sendCipher({
        type: 'encode',
        cipher,
      }));

      await dispatch(fetchEncoded());
      setFormData({...formData, decode: decodedMessage});
    } catch (e) {
      console.error(e);
    }
  };

  const onSendDecipher = async () => {
    try {
      const cipher: CipherApi = {
        message: formData.decode,
        password: formData.password,
      };

      await dispatch(sendCipher({
        type: 'decode',
        cipher,
      }));

      await dispatch(fetchDecoded());
      setFormData({...formData, encode: encodedMessage});
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Grid container maxWidth="sm" spacing={2} sx={{pt: 5}} direction="column">
      <Grid item>
        {isLoading && <MySpinner />}
        <TextField
          multiline
          minRows={4}
          label="Decoded Message"
          value={formData.encode}
          onChange={onFieldChange}
          name="encode"
        />
      </Grid>
      <Grid item container alignItems="center">
        <TextField
          label="password"
          onChange={onFieldChange}
          name="password"
          sx={{width: '70%', mr: 2}}
        />
        <Button
          variant="contained"
          onClick={onSendDecipher}
          sx={{mr: 1}}
          disabled={formData.decode === '' || formData.password === ''}
        >
          <ExpandLessIcon/>
        </Button>
        <Button
          variant="contained"
          onClick={onSendCipher}
          disabled={formData.encode === '' || formData.password === ''}
        >
          <ExpandMoreIcon/>
        </Button>
      </Grid>
      <Grid item>
        <TextField
          multiline
          minRows={4}
          label="Encoded Message"
          value={formData.decode}
          onChange={onFieldChange}
          name="decode"
        />
      </Grid>
    </Grid>
  );
};

export default Cipher;