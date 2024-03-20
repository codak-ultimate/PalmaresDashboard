"use client"
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Grid, Typography } from '@mui/material';

export default function BarCharts() {
 return (
    <Grid container style={{ height: '100vh', marginTop: '10vw' }}>
      <Typography variant='h5' sx={{
        width: '100%',
        textAlign: 'center'
      }}>Products for Place</Typography>
      <Grid item xs={12} style={{ height: '100%'}}>
        <BarChart 
          series={[
            { data: [3, 4, 1, 6, 5], stack: 'A', label: 'Mural Prehistoria' },
            { data: [4, 3, 1, 5, 8], stack: 'A', label: 'Finca San Vicente' },
            { data: [4, 2, 5, 4, 1], stack: 'B', label: 'Casa Don Tomás' },
           
          ]}
          sx={{
            width: '100%',
            height: '90vh',
            
          }}
       
        />
      </Grid>
    </Grid>
 );
}
