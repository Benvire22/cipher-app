import CircularProgress from '@mui/material/CircularProgress';
import { Grid } from '@mui/material';

const MySpinner = () => {
  return (
    <Grid position="absolute" sx={{
      bgcolor: 'rgba(0, 0, 0, 0.4)',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1111,
      pt: 50,
    }}
      container
      justifyContent="center"
    >
      <CircularProgress />
    </Grid>
  );
};

export default MySpinner;