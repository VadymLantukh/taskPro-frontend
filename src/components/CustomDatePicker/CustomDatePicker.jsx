import dayjs from 'dayjs';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Icon from '../Icon/Icon';

import './CustomDatePicker.css';

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
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={dayjs(value)}
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
                endAdornment: <Icon className="icon" name="icon-arrowDown" />,
              },
              onClick: handleClick,
              onFocus: handleFocus,
            },
          }}
          minDate={dayjs().startOf('day')}
          maxDate={dayjs().add(31, 'year').endOf('year')}
        />
      </LocalizationProvider>
    </div>
  );
};

export default CustomDatePicker;
