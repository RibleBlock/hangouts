/* eslint-disable no-unused-vars */
declare interface Address {
  id_address: number,
  street: string,
  number: number,
  district: string,
  city: string,
  cep: string,
  complement?: string,
  id_user?: number,
}

declare interface User {
  id_user: number,
  name: string,
  phone: string,
  email: string,
  admin: boolean,
  is_active: boolean,
  created_at?: string,
  cart: [
    {
      id_cart: number,
      status: string | null,
    }
  ],
}
