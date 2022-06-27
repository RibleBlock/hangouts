/* eslint-disable no-unused-vars */
declare interface User {
  id: number,
  name: string,
  email: string,
}

declare interface Pedido {
  category: string | null;
  size: string | null;
  border: string | null;
  flavors: string[];
  comment?: string;
  id_user: number | null;
}
