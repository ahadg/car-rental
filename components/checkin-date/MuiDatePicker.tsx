import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDateRangePicker({placeholder,setvalue})  {
    const [value, setValue] : any = React.useState([null, null]);

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={placeholder}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          setvalue(newValue)
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    );
}
