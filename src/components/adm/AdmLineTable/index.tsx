/* eslint-disable camelcase */
import { TR, TD } from './AdmLineTable.styles';

interface AdmLineTableProps {
  fields: Array<any> | User[],
  head?: boolean,
}
export function AdmLineTable({ fields, head }: AdmLineTableProps) {
  return (
    <>
      { head ? (
        <TR style={{ fontWeight: 'bold' }}>
          { fields && fields.map((value) => (
            <TD key={value}>{value}</TD>
          )) }
          {/**/}
        </TR>
      ) : (
        <>
          { fields && fields.map(({
            name, id, email, phone, admin, created_at,
          }: User) => (
            <TR key={id}>
              <TD>{id}</TD>
              <TD>{created_at?.slice(0, 10)}</TD>
              <TD>{name}</TD>
              <TD>{email}</TD>
              <TD>{phone || 'Não definido'}</TD>
              <TD>{admin ? 'True' : 'False'}</TD>
            </TR>
          )) }
          {/**/}
        </>
      ) }
      {/**/}
    </>
  );
}
