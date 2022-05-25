import React from 'react';
import format  from 'date-fns/format';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


  const mdate = ()=>{

      const today= new Date();
      console.log(today);
      const ondatechange =(date)=>{
        const formatdate=format(date, 'dd.MM.yyyy');
        console.log(formatdate);

      }

    return (
        
        <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        orientation="landscape"
        openTo="day"
        value={today}
        onChange={ondatechange}
       
      />
    </LocalizationProvider>
      );

  };
 
export default  mdate ;