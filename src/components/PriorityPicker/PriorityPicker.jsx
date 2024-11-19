import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

const PriorityPicker = ({ selectedValue, onChange }) => {
  const options = [
    { value: 'none', label: 'Without', color: '#c9b7b7' },
    { value: 'low', label: 'Low', color: '#8fa1d0' },
    { value: 'medium', label: 'Medium', color: '#e09cb5' },
    { value: 'high', label: 'High', color: '#bedbb0' },
  ];

  return (
    <div>
      <FormControl>
        <RadioGroup
          aria-labelledby="priority-picker-label"
          name="priority-picker-group"
          value={selectedValue}
          onChange={event => onChange(event.target.value)}
          row
        >
          {options.map(option => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              sx={{
                '&.MuiFormControlLabel-root': {
                  marginLeft: 0,
                  marginRight: 0,
                },
              }}
              control={
                <Radio
                  size="small"
                  sx={{
                    '&.MuiRadio-root': {
                      position: 'relative',
                      padding: 0,
                      transform: 'scale(0.8)',
                      '&:before': {
                        position: 'absolute',
                        content: '""',
                        display: 'block',
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        backgroundColor: option.color,
                        border: `9px solid ${option.color}`,
                        zIndex: 5,
                      },
                    },
                    '&.Mui-checked': {
                      '&:before': {
                        display: 'none',
                      },
                      color: option.color,
                      transform: 'scale(0.9)',
                    },
                    '& .MuiTouchRipple-root': {
                      display: 'none',
                    },
                  }}
                />
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default PriorityPicker;
