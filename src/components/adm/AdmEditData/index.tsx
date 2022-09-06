import { useEffect, useState } from 'react';
import { Flavor } from '../../../interfaces/module';
import {
  Form, CameraIcon, H2, Label, GridBox, InputEdit,
} from './AdmEditData.styles';

import imgteste from '../../../assets/images/logo.png';

interface AdmEditDataProps {
  selectedFlavor: Flavor | null,
}
export function AdmEditData({ selectedFlavor }: AdmEditDataProps) {
  const [title, setTitle] = useState<string>('Novo Item');
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

  useEffect(() => {
    const imageLink = selectedFlavor?.image?.url_image;
    setImage(imageLink || '');
  }, [selectedFlavor]);

  return (
    <Form>
      <H2>{selectedFlavor?.name || title}</H2>
      <Label style={{ backgroundImage: `url(${image})` }}>
        <input
          type="file"
          onChange={(e) => getImage(e)}
          accept="image/png, image/jpeg"
        />
        <CameraIcon weight="light" style={{ color: image && '#fff' }} />
      </Label>
      <GridBox>
        <div>
          <p>Nome</p>
          <InputEdit
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder={selectedFlavor?.name || 'Nome'}
            autoComplete="off"
          />
        </div>
        <div>
          <p>Tipo</p>
          <InputEdit type="text" placeholder="Tipo" autoComplete="off" />
        </div>
        <div>
          <p>Ingredientes</p>
          <InputEdit
            type="text"
            // value={selectedFlavor?.ingredients || ''} // nao funciona
            placeholder="Ingredientes"
            autoComplete="off"
          />
        </div>
        <div>
          <p>Categoria</p>
          <InputEdit type="text" placeholder="Categoria" autoComplete="off" />
        </div>
      </GridBox>
    </Form>
  );
}
