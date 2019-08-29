import React from 'react';
import ContentArea from './ContentArea';
import { Typography } from '@material-ui/core';



const Education = () => (
  <ContentArea title="Education">
    <Typography variant="h6" component="h3">
      The University of Texas at Arlington (2017)
    </Typography>
    <Typography>
      Software Engineering (B.S.)
    </Typography>
    <Typography>
      Music Media (B.M.)
    </Typography>
  </ContentArea>
)

export default Education