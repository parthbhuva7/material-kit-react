import PropTypes from 'prop-types';
import { Box, Modal} from '@mui/material';
import React from 'react';
import { portfolioImages } from '../../__mocks__/images';
import { CarouselImages } from '../carousel/carousel-images';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '10px',
  overflow: 'hidden',
  flexGrow: 1
};

export const PortfolioModal = ({ openState, handleClose, ...rest }) => {

  return(
    <Modal
      open={openState}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <CarouselImages images={portfolioImages} autoplay={false} />
      </Box>
    </Modal>
  );
}

PortfolioModal.propTypes = {
  openState: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};
