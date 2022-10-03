import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import { FormController, RadioLabel, RadioBox } from './RadioButtonsGroup.styles';

interface RadioButtonsGroupProps {
  setState?: (value: string) => void,
  title: string,
  checked?: string,
  fields: string[],
}
export function RadioButtonsGroup({
  title, checked, fields, setState,
}: RadioButtonsGroupProps) {
  const [value, setValue] = useState('');

  // useEffect(() => {
  //   console.log(`Value: ${value}\nchecked: ${checked}`);
  // }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (setState) {
      setState((event.target as HTMLInputElement).value);
    } else {
      setValue((event.target as HTMLInputElement).value);
    }
  };

  return (
    <FormController>
      <RadioLabel>{ title }</RadioLabel>
      <RadioBox
        row
        defaultValue={fields[0]}
        value={value || checked}
        onChange={handleChange}
      >
        { fields.map((field) => (
          <FormControlLabel key={field} value={field} label={field} control={<Radio />} />
        )) }
      </RadioBox>
    </FormController>
  );
}
