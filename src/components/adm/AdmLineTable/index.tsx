/* eslint-disable camelcase */
import { useUpdateDataUserMutation } from '../../../services/api/Auth';
import { TR, TD, TH } from './AdmLineTable.styles';

interface AdmLineTableProps {
  fields: Array<any> | User[],
  head?: boolean,
  isAdmin?: boolean,
}
export function AdmLineTable({ fields, head, isAdmin }: AdmLineTableProps) {
  const [updateUser] = useUpdateDataUserMutation();

  async function updateFunction({
    id, field, value, isAdmin,
  }: {
    id: number, field: string, value: string | number | boolean, isAdmin?: boolean,
   }) {
    await updateUser({
      id, field, value, isAdmin,
    });
  }

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
            name, id, email, phone, admin, created_at, is_active,
          }: User) => (
            <TR key={id} style={{ backgroundColor: !is_active ? '#ffc7c7' : '' }}>
              <TD>{id}</TD>
              <TD>{created_at?.slice(0, 10)}</TD>
              <TD>{name}</TD>
              <TD>{email}</TD>
              <TD>{phone || 'Não definido'}</TD>
              <TD>
                <button
                  type="button"
                  onClick={() => updateFunction({
                    id, field: 'admin', value: !admin, isAdmin,
                  })}
                >
                  {admin ? ('True') : ('False')}
                </button>
              </TD>
              <TD>
                <button
                  type="button"
                  onClick={() => updateFunction({
                    id, field: 'is_active', value: !is_active, isAdmin,
                  })}
                >
                  {is_active ? ('True') : ('False')}
                </button>
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
