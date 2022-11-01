import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Flavor } from '../../../interfaces/module';
import {
  Form, CameraIcon, H2, Label, GridBox, InputEdit,
} from './AdmEditData.styles';

import { RadioButtonsGroup } from '../../form/RadioButtonsGroup';
import { ButtonAction } from '../../form/ButtonAction';

interface AdmEditDataProps {
  selectedFlavor: Flavor | null,
}
export function AdmEditData({ selectedFlavor }: AdmEditDataProps) {
  const [title, setTitle] = useState<string>('Novo Item');

  const [name, setName] = useState<string>('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [type, setType] = useState<{name: string, id: number}>({ id: 0, name: '' });
  const [category, setCategory] = useState<{name: string, id: number}>({ id: 0, name: '' });
  const [image, setImage] = useState<string>(''); /// ///////

  const getImage = (e: any) => {
    console.log('FUNCAO Chamada');
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if (file) {
      const url = URL.createObjectURL(file);

      setImage(url);
    } else {
      // undefined
      setImage('');
    }
  };

  useEffect(() => {
    setName(selectedFlavor?.name! || '');
    setIngredients(selectedFlavor?.ingredients! || []);
    setType({ id: selectedFlavor?.id_flavor_type!, name: selectedFlavor?.flavor_type.name! || '' });
    setCategory({ id: selectedFlavor?.flavor_category.id_flavor_category!, name: selectedFlavor?.flavor_category.name! || '' });
    const imageLink = selectedFlavor?.image?.url_image;
    setImage('');
    setImage(imageLink || '');
  }, [selectedFlavor]);

  const updateFlavor = async () => {
    try {
      console.log({
        id_flavor: selectedFlavor?.id_flavor,
        name,
        ingredients,
        type,
        category,
        image,
      });
      return toast.success('Dados atualizados');
    } catch (error: any) {
      if (error?.data.error) {
        return toast.error(error.data.error);
      }
      return toast.error(error);
    }
  };

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
            placeholder="Nome"
            autoComplete="off"
          />
        </div>
        <div>
          <RadioButtonsGroup
            title="Tipo"
            checked={type.name}
            fields={['Salgada', 'Doce']}
            setState={setType}
          />
        </div>
        <div>
          <p>Ingredientes</p>
          <InputEdit
            type="text"
            onChange={(e) => setIngredients((e.target.value).split(','))}
            value={ingredients}
            placeholder="ingredientes"
            autoComplete="off"
          />
        </div>
        <div>
          <RadioButtonsGroup
            title="Categoria"
            checked={category.name}
            fields={['Tradicional', 'Especial']}
            setState={setCategory}
          />
        </div>
      </GridBox>
      <div style={{ display: 'flex', gap: '5rem' }}>
        <ButtonAction
          type="button"
          secundary
          action={() => alert('CANCELAR')}
        >
          Cancelar
        </ButtonAction>
        <ButtonAction
          type="button"
          bcolor="#053C00"
          action={updateFlavor}
        >
          Salvar
        </ButtonAction>
      </div>
    </Form>
  );
}
