import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('male');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" style={{marginLeft: 60, padding:10}}>Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="male" control={<Radio />} label="Male" style={{marginLeft: 60}}/>
        <FormControlLabel value="female" control={<Radio />} label="Female" style={{marginLeft: 60}} />
        <FormControlLabel value="other" control={<Radio />} label="Other" style={{marginLeft: 60}}/>
      </RadioGroup>
    </FormControl>
  );
}