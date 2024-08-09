import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Cipher = () => {
  const [formData, setFormData] = useState({
    encode: '',
    decode: '',
    password: '',
  });

  const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const sendCipher = (type: string) => {
    console.log({...formData, type})
  };

  return (
    <Grid container maxWidth="sm" spacing={2} sx={{pt: 5}} direction="column">
      <Grid item>
        <TextField
          multiline
          minRows={4}
          label="Encode"
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
          onClick={() => sendCipher( 'encode')}
          sx={{mr: 1}}
          disabled={formData.decode === '' || formData.password === ''}
        >
          <ExpandLessIcon/>
        </Button>
        <Button
          variant="contained"
          onClick={() => sendCipher( 'decode')}
          disabled={formData.encode === '' || formData.password === ''}
        >
          <ExpandMoreIcon />
        </Button>
      </Grid>
      <Grid item>
        <TextField
          multiline
          minRows={4}
          label="Decode"
          onChange={onFieldChange}
          name="decode"
        />
      </Grid>
    </Grid>
  );
};

export default Cipher;