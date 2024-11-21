import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import './PriorityPicker.css';

const PriorityPicker = ({ selectedValue = 'none', onChange }) => {
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
              className="priority-picker-form-control"
              control={
                <Radio
                  size="small"
                  checked={
                    selectedValue.toLowerCase() === option.value.toLowerCase()
                  }
                  className={`priority-picker-radio priority-picker-radio-${option.value}`}
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
