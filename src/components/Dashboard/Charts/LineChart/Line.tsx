"use client"
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Typography, Grid, Stack } from '@mui/material';
import "./styles/line.css"
export default function Line() {
 return (
    <Stack sx={{
      display:'flex',
      flexDirection:'column',
      gap:'20px',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <Typography className="anun" variant='h3'>Our Sales</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <LineChart className='charts'
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
              
            ]}
            height={300}
          />
        </Grid>
      </Grid>
    </Stack>
 );
}