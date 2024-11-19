import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';

const CustomDatePicker = ({ value, onChange, disablePast = false }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleFocus = e => {
    e.target.select();
    e.target.setSelectionRange(0, 0);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        onChange={onChange}
        disablePast={disablePast}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        slotProps={{
          textField: {
            variant: 'standard',
            fullWidth: true,
            InputProps: {
              readOnly: true,
            },
            onClick: handleClick,
            onFocus: handleFocus,
            sx: {
              backgroundColor: 'transparent',
              cursor: 'pointer',
              border: 'none',
              padding: 0,
              boxShadow: 'none',
              '& .MuiInputBase-root': {
                padding: 0,
                userSelect: 'none',
                fontFamily: 'inherit',
              },
              '& input': {
                fontSize: '16px',
                color: '#BEDBB0',
                textAlign: 'left',
                cursor: 'pointer',
                padding: '0px',
                userSelect: 'none',
              },

              '& input::selection': {
                background: 'transparent',
                color: 'inherit',
              },

              '& .MuiInputAdornment-root': {
                display: 'none',
              },
              '& .MuiInputBase-root::before': {
                display: 'none',
              },
              '& .MuiInputBase-root::after': {
                display: 'none',
              },
            },
          },
          toolbar: { hidden: true },
          actionBar: { hidden: true },
          calendarHeader: { sx: { borderBottom: '1px solid red' } },
          yearButton: {
            sx: {
              color: '#1565c0',
              borderRadius: '2px',
              borderColor: '#2196f3',
              border: '1px solid',
              backgroundColor: '#90caf9',
            },
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
