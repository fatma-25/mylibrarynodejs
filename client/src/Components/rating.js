import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function Ratingbook() {
  const [value, setValue] = React.useState(2);

  return (
    <div>

      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating value={value} readOnly />
      </Box>
  
    </div>
  );
}