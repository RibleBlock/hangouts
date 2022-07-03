/* eslint-disable no-unused-vars */
declare interface User {
  id: number,
  name: string,
  phone: string,
  email: string,
  admin: boolean,
}

declare interface Pedido {
  category: string | null;
  size: string | null;
  border: string | null;
  flavors: string[];
  comment?: string;
  id_user: number | null;
}
