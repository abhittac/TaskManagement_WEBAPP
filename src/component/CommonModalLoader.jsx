import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogContent, CircularProgress, Typography } from '@mui/material';

const CommonModalLoader = ({ open=true , message = 'Loading...' }) => {
  return (
    <Dialog open={open} aria-labelledby="modal-loader">
      <DialogContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <CircularProgress color='success' size={50} />

      </DialogContent>
    </Dialog>
  );
};

CommonModalLoader.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string,
};

export default CommonModalLoader;
