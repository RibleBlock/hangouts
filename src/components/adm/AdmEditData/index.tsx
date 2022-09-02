import { useState } from 'react';
import {
  Box, CameraIcon, H2, Label,
} from './AdmEditData.styles';

export function AdmEditData() {
  const [image, setImage] = useState<string>('');

  function getImage(e: any) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if (file) {
      // URL.revokeObjectURL(image);
      const url = URL.createObjectURL(file);
      setImage(url);
    } else {
      // undefined
      setImage('');
    }
  }

  return (
    <Box>
      <H2>MUSSARELA</H2>
      <Label style={{ backgroundImage: `url(${image})` }}>
        <input
          type="file"
          onChange={(e) => getImage(e)}
          accept="image/png, image/jpeg"
        />
        <CameraIcon weight="light" />
      </Label>
    </Box>
  );
}
