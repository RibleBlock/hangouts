/* eslint-disable no-unused-vars */
import { Token } from '../../store/Auth/reducer';

declare interface State {
  reducer: {
    user: Token,
  },
}

declare interface Pedido {
  category?: string | null,
  size: number | null,
  border: number,
  flavors: number[],
  comment?: string,
  id_cart: number,
}

declare interface CartPizza {
  id: number,
  id_pizza_size: number,
  id_pizza_border: number,
  comment: string,
  pizza_size: {
    id_pizza_size: number,
    name: string,
    price: number,
    quantidade_flavors: number
  },
  pizza_border: {
    id_pizza_border: number,
    name: string,
    price: number,
  },
  pizza_flavor: [
    {
      flavor: {
        id_flavor: number,
        name: string,
        id_flavor_type: number,
        id_flavor_category: number,
        id_image: number | null
      }
    },
    {
      flavor: {
        id_flavor: number,
        name: string,
        id_flavor_type: number,
        id_flavor_category: number,
        id_image: number | null,
        flavor_category: {
          name: string,
          price: number,
        }
      }
    }
  ]
}

declare interface CartCalzone {
  id_calzone: number,
  created_at: string,
  comment: string,
  id_calzone_flavor: number,
  calzone_flavor: {
    id_calzone_flavor: number,
    name: string,
    price: number,
    id_image: number | null,
  }
}
declare interface CartDrink {
  id_drink_cart: number,
  id_drink: number,
  id_drink_size: number,
  drink: {
    id_drink: number,
    name_drink: string,
  },
  drink_size: {
    id_drink_size: number,
    name_drink_size: string,
    price: number,
  }
}

declare interface Cart {
  pizza: CartPizza[],
  calzone: CartCalzone[],
  drink_cart: CartDrink[],
}

declare interface Menu {
  id_flavor_type: number,
  created_at: string,
  name: string,
  flavor: [
    {
      id_flavor: number,
      created_at: string,
      name: string,
      image: {
        url_image: string,
        alt: string,
      },
      flavor_ingredient: [
        {
          ingredient: {
            id_ingredient: number,
            created_at: string,
            name: string,
            quantidade: number,
          }
        },
      ]
    }
  ]
}

declare interface Flavor {
  id_flavor: number,
  created_at: string,
  name: string,
  id_flavor_type: number,
  id_flavor_category: number,
  report: {
    id_report: number,
    created_at: string,
    date: string,
    times_ordered: number,
    id_flavor: number | null,
    id_calzone_flavor: number | null,
  }[],
  image: {
    url_image: string,
    alt: string,
  }
}

declare interface FlavorDB {
  id_flavor_category: number,
  created_at: string,
  name: string,
  price: number,
  flavor: [
    {
      id_flavor: number,
      created_at: string,
      name: string,
      id_flavor_type: number,
      id_flavor_category: number,
      image: {
        url_image: string,
        alt: string,
      },
      flavor_type: {
        name: string,
        created_at: string,
      },
      flavor_ingredient: [
        {
          ingredient: {
            id_ingredient: number,
            created_at: string,
            name: string,
          }
        },
      ]
    },
  ]
}

declare interface CalzoneDB {
  id_calzone_flavor: number,
  created_at: string,
  name: string,
  id_comment: number | null,
  price: number,
  image: {
    url_image: string,
    alt: string,
  },
}

declare interface DrinkDB {
  id_drink_size: number,
  created_at: string,
  name_drink_size: string,
  price: number,
  drink_size_drink: [
    {
      drink: {
        id_drink: number,
        created_at: string,
        name_drink: string,
      }
    }
  ]
}

declare interface FlavorTypePizzaSize {
  pizza_size: {
    id_pizza_size: number,
    createdAt: string,
    name: string,
    price: number,
    quantidade_flavors: number,
  },
}

declare interface BorderDB {
  id_pizza_border: number,
  created_at: string,
  name: string,
  price: number,
}
