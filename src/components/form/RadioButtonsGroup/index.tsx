import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import { FormController, RadioLabel, RadioBox } from './RadioButtonsGroup.styles';

interface RadioButtonsGroupProps {
  setState?: (value: any) => void,
  title: string,
  checked?: string | number,
  fields: string[],
}
export function RadioButtonsGroup({
  title, checked, fields, setState,
}: RadioButtonsGroupProps) {
  const [value, setValue] = useState<{id: any, name: any}>({ id: 0, name: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (setState) {
      setState((prevState: any) => ({
        ...prevState, name: (event.target as HTMLInputElement).value,
      }));
    } else {
      setValue((prevState: any) => ({
        ...prevState, name: (event.target as HTMLInputElement).value,
      }));
    }
  };

  return (
    <FormController>
      <RadioLabel>{ title }</RadioLabel>
      <RadioBox
        row
        defaultValue={fields[0]}
        value={checked} // value || checked
        onChange={handleChange}
      >
        { fields.map((field) => (
          <FormControlLabel key={field} value={field} label={field} control={<Radio />} />
        )) }
      </RadioBox>
    </FormController>
  );
}
