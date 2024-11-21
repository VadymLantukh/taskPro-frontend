import { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import clsx from 'clsx';
import Modal from '../ModalWrapper/ModalWrapper.jsx';
import { radioButtons } from './radioButtons.js';

import s from "./Filter.module.css";

const Filter = ({ open, handleClose }) => {
  const [selectedValue, setSelectedValue] = useState("without-priority");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <h2 className={clsx(s.text, s.title)}>Filters</h2>
      <div className={s.wrapper}>
        <h3 className={clsx(s.text, s.subtitle)}>Filters</h3>
        <button className={s.button} type="button">Show all</button>
      </div>
      <FormControl classes={{
        root: s.control
      }}>
        <RadioGroup
          name="filter-options"
          value={selectedValue}
          onChange={handleChange}
        >
          {radioButtons.map(({ label, value }) => {
            return (
              <FormControlLabel
                key={value}
                value={value}
                checked={selectedValue === value}
                control={
                  <Radio
                    color={value}
                    classes={{
                      root: clsx(s.radio, selectedValue === value && s.checked, s[`radio-${value}`], s[`radio-color-${value}`]),
                    }}
                  />
                }
                label={label}
                classes={{
                  root: clsx(s.label, selectedValue === value && s["checked-label"]),
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
