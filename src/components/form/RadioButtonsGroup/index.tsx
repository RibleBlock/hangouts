import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useEffect, useState } from 'react';
import { FormController, RadioLabel, RadioBox } from './RadioButtonsGroup.styles';

interface RadioButtonsGroupProps {
  title: string,
  checked?: string,
  fields: string[],
}
export function RadioButtonsGroup({ title, checked, fields }: RadioButtonsGroupProps) {
  const [value, setValue] = useState('');

  useEffect(() => {
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  console.log(checked);

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
