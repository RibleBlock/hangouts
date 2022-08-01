/* eslint-disable no-unused-vars */
declare interface User {
  id: number,
  name: string,
  phone: string,
  email: string,
  admin: boolean,
  cart: [
    {
      id_cart: number,
      status: string | null,
    }
  ],
}
