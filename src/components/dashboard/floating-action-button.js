import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { WhatsApp, Call } from '@mui/icons-material';
import Link from 'next/link';

const actions = [
  { icon: <WhatsApp />, name: 'Whatsapp', onClick: whatsappAction },
  { icon: <Call />, name: 'Call', onClick: callAction }
];

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
  height: 320, transform: 'translateZ(0px)', flexGrow: 1
};

function whatsappAction() {
  window.open('https://wa.me/919974777797?text=I%20am%20interested%20in%20Kalpataru')
}

function callAction() {
  let phoneNumber = ''; 
 
  let isIOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  if (isIOS) {
    phoneNumber = 'telprompt:+919974777797';
  } else {
    phoneNumber = 'tel:+919974777797';
  }

  window.open(phoneNumber)
}

export default function FloatingActionButton() {
  return (
    <Box sx={style}>
      <SpeedDial
        ariaLabel="Contact"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<Call />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            sx={{background:"black"}}
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}