import {
  useEffect, useState, useRef, useCallback,
} from 'react';
import { toast } from 'react-toastify';
import { Flavor } from '../../../interfaces/module';
import {
  Form, CameraIcon, H2, Label, GridBox, InputEdit,
} from './AdmEditData.styles';

import { RadioButtonsGroup } from '../../form/RadioButtonsGroup';
import { ButtonAction } from '../../form/ButtonAction';
import { useCreateFlavorMutation, useUpdateFlavorMutation } from '../../../services/api/Flavor';
import { admFlavorsEdit } from '../../../services/utils/validations/admFlavorEdit';

interface AdmEditDataProps {
  selectedFlavor: Flavor | null,
}
export function AdmEditData({ selectedFlavor }: AdmEditDataProps) {
  const [isloadingUpdateFlavor, setIsloadingUpdateFlavor] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('Novo Item');
  const [createFlavor] = useCreateFlavorMutation();
  const [updateFlavor] = useUpdateFlavorMutation();

  const [name, setName] = useState<string>('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [type, setType] = useState<{name: string, id: number}>({ id: 0, name: '' });
  const [category, setCategory] = useState<{name: string, id: number}>({ id: 0, name: '' });
  const [image, setImage] = useState<string>('');
  const imageRef = useRef<HTMLInputElement>(null);

  const getImage = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
    } else {
      // undefined
      setImage('');
    }
  };

  const reset = () => {
    URL.revokeObjectURL(image);
    if (imageRef.current) {
      imageRef.current.value = '';
    }
    setImage('');
  };

  useEffect(() => {
    reset();

    setName(selectedFlavor?.name! || '');
    setIngredients(selectedFlavor?.ingredients! || []);
    setType({ id: selectedFlavor?.id_flavor_type!, name: selectedFlavor?.flavor_type.name! || '' });
    setCategory({ id: selectedFlavor?.flavor_category.id_flavor_category!, name: selectedFlavor?.flavor_category.name! || '' });
    const imageLink = selectedFlavor?.image?.url_image;
    setImage(imageLink || '');
  }, [selectedFlavor]);

  const updateAndCreateFlavorAction = async () => {
    setIsloadingUpdateFlavor(true);
    try {
      const isValid = admFlavorsEdit({
        name,
        ingredients,
        type: type.name,
        category: category.name,
        image,
      });
      if (!isValid.isValid) {
        return toast.error(isValid.message);
      }
      if (selectedFlavor === null) {
        await createFlavor({
          name,
          ingredients,
          type: type.name,
          category: category.name,
          image,
        });

        // success
        return toast.success(isValid.message);
      }
      await updateFlavor({
        id_flavor: selectedFlavor?.id_flavor!,
        name,
        ingredients,
        type: type.name,
        category: category.name,
        image,
      }) as any;
      return toast.success('Dados atualizados');
    } catch (error: any) {
      return toast.error(error);
    } finally {
      setIsloadingUpdateFlavor(false);
    }
  };

  return (
    <Form>
      <H2>{selectedFlavor?.name || title}</H2>
      <Label style={{ backgroundImage: `url(${image})` }}>
        <input
          type="file"
          ref={imageRef}
          onChange={getImage}
          accept="image/*"
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
        { selectedFlavor && (
          <ButtonAction
            type="button"
            secundary
            action={() => alert('CANCELAR')}
          >
            Cancelar
          </ButtonAction>
        ) }
        <ButtonAction
          type="button"
          bcolor="#053C00"
          isLoading={isloadingUpdateFlavor}
          action={updateAndCreateFlavorAction}
        >
          Salvar
        </ButtonAction>
      </div>
    </Form>
  );
}
