import * as React from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

export default function BasicDateRangePicker({ setcalendopen, calendopen,setmuiDateValue }) {
    const [value, setValue] : any = React.useState([null, null]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} localeText={{ start: 'Pick-up Date', end: 'Return Date' }}>
            <DateRangePicker
                value={value}
                onChange={newValue => {
                    setValue(newValue);
                    setmuiDateValue(newValue)
                }}
                onOpen={() => {
                    console.log('onpeend');
                    setcalendopen(!calendopen);
                }}
                renderInput={(startProps, endProps) => (
                    <React.Fragment>
                        <TextField {...startProps} />
                        {/* <Box sx={{ mx: 2 }}>To</Box> */}
                        <TextField {...endProps} />
                    </React.Fragment>
                )}
            />
        </LocalizationProvider>
    );
}
