import { useState } from 'react';
import Modal from '../ModalWrapper/ModalWrapper.jsx';
import clsx from 'clsx';
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import s from "./Filter.module.css";

const radioButtons = [
  {
    label: "Without priority",
    color: "var(--third-text-color)",
    value: "without-priority"
  },
  {
    label: "Low",
    color: "var(--low)",
    value: "low"
  },
  {
    label: "Medium",
    color: "var(--medium)",
    value: "medium"
  },
  {
    label: "High",
    color: "var(--hight)",
    value: "high"
  }
];

const Filter = ({ open, handleClose }) => {
  const [selectedValue, setSelectedValue] = useState("without-priority");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };



  console.log("selectedValue", selectedValue);

  return (
    <Modal open={open} onClose={handleClose}>
      <h2 className={clsx(s.text, s.title)}>Filters</h2>
      <div className={s.wrapper}>
        <h3 className={clsx(s.text, s.subtitle)}>Filters</h3>
        <button className={s.button} type="button">Show all</button>
      </div>

      <FormControl>
        <RadioGroup
          name="filter-options"
          value={selectedValue}
          onChange={handleChange}
        >
          {radioButtons.map(({ label, color, value }) => {

            return (
              <FormControlLabel
                key={value}
                value={value}
                checked={selectedValue === value}
                control={
                  <Radio
                    color={color}
                    // sx={{
                    //   // fill: color,
                    //   '&.Mui-checked': {
                    //     color: color,
                    //   },
                    // }}
                    classes={{
                      root: clsx(s.radio, selectedValue === value && s.checked, s[`radio-${value}`], s[`radio-color-${value}`]),
                    }}
                  />
                }
                label={label}
                classes={{
                  root: s.label,
                  checked: s.checked,
                }}
              />
            );
          })}

        </RadioGroup>
      </FormControl>
    </Modal>
  );
};

export default Filter;
