import { useEffect, useState } from 'react';
import { Flavor } from '../../../interfaces/module';
import {
  Form, CameraIcon, H2, Label, GridBox, InputEdit,
} from './AdmEditData.styles';

import { RadioButtonsGroup } from '../../form/RadioButtonsGroup';

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

  const [name, setName] = useState<string>('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [type, setType] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    setName(selectedFlavor?.name!);
    setIngredients(selectedFlavor?.ingredients!);
    setType(selectedFlavor?.flavor_type.name!);
    setCategory(selectedFlavor?.flavor_category.name!);
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
            onChange={(e) => {
              setTitle(e.target.value);
              setName(e.target.value);
            }}
            value={name}
            autoComplete="off"
          />
        </div>
        <div>
          <RadioButtonsGroup
            title="Tipo"
            checked={type}
            fields={['Salgada', 'Doce']}
          />
        </div>
        <div>
          <p>Ingredientes</p>
          <InputEdit
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients((e.target.value).split(','))}
            autoComplete="off"
          />
        </div>
        <div>
          <RadioButtonsGroup
            title="Categoria"
            checked={category}
            fields={['Tradicional', 'Especial']}
          />
        </div>
      </GridBox>
    </Form>
  );
}
