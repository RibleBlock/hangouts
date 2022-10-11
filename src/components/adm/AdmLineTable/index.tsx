/* eslint-disable camelcase */
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { useUpdateDataUserMutation } from '../../../services/api/Auth';
import { ButtonAction } from '../../form/ButtonAction';
import { TR, TD, TH } from './AdmLineTable.styles';

interface AdmLineTableProps {
  fields: Array<any> | User[],
  setFields?: (value: Array<any> | User[]) => void,
  head?: boolean,
  isAdmin?: boolean,
}
export function AdmLineTable({
  fields, setFields, head, isAdmin,
}: AdmLineTableProps) {
  const [updateUser] = useUpdateDataUserMutation();
  const [isLoadingButton, setIsLoadingButton] = useState(false);

  const updateFunction = useCallback(async ({
    id, field, value, isAdmin,
  }: {
    id: number, field: string, value: string | number | boolean, isAdmin?: boolean,
   }) => {
    setIsLoadingButton(true);
    try {
      const { data } = await updateUser({
        id, field, value, isAdmin,
      }) as {data: User};

      // console.log();
      setFields!(fields.map((value) => (value.id_user === id ? data : value)));
      return toast.success('sucesso');
    } catch (error: any) {
      if (error?.data.error) {
        return toast.error(error.data.error);
      }
      return toast.error(error);
    } finally {
      setIsLoadingButton(false);
    }
  }, [fields]);

  return (
    <>
      { head ? (
        <TR>
          { fields && fields.map((value) => (
            <TH key={value}>{value}</TH>
          )) }
        </TR>
      ) : (
        <>
          { fields && fields.map(({
            name, id_user, email, phone, admin, created_at, is_active,
          }: User) => (
            <TR key={id_user} style={{ backgroundColor: !is_active ? '#ffc7c7' : '' }}>
              <TD>{id_user}</TD>
              <TD>{created_at?.slice(0, 10)}</TD>
              <TD>{name}</TD>
              <TD>{email}</TD>
              <TD>{phone || 'Não definido'}</TD>
              <TD className="onstart">
                <ButtonAction
                  type="button"
                  small="5"
                  color="#505050"
                  bcolor="#a9a9a9"
                  isLoading={isLoadingButton}
                  action={() => updateFunction({
                    id: id_user, field: 'admin', value: !admin, isAdmin,
                  })}
                >
                  {admin ? ('True') : ('False')}
                </ButtonAction>
              </TD>
              <TD className="onstart">
                <ButtonAction
                  type="button"
                  small="5"
                  color="#505050"
                  bcolor="#a9a9a9"
                  isLoading={isLoadingButton}
                  action={() => updateFunction({
                    id: id_user, field: 'is_active', value: !is_active, isAdmin,
                  })}
                >
                  {is_active ? ('True') : ('False')}
                </ButtonAction>
              </TD>
            </TR>
          )) }
          {/**/}
        </>
      ) }
      {/**/}
    </>
  );
}
