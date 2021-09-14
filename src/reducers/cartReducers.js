import {
  CART_INCREMENT_ITEM,
  CART_DECREMENT_ITEM,
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  OPEN_CART,
  CLOSE_CART
} from "../constants/cartConstants";

export const cartReducer = (
  state = { cartOpen: false, cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_INCREMENT_ITEM:
      const iItem = state.cartItems.find((x) => x.product === action.payload.product);

      iItem.qty++

      return {
        ...state,
        cartItems: state.cartItems.map((x) =>
            x.product === iItem.product ? iItem : x
        ),
       }
    case CART_DECREMENT_ITEM:

      const dItem = state.cartItems.find((x) => x.product === action.payload.product);

      dItem.qty--

      return {
        ...state,
        cartItems: state.cartItems.map((x) =>
            x.product === dItem.product ? dItem : x
        ),
       }
    case OPEN_CART:
        return {
          ...state,
          cartOpen: true
        }
    case CLOSE_CART:
        return {
          ...state,
          cartOpen: false
        }
    case CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => {
          console.log(x.product, action.payload)
          console.log(x.product == action.payload)
          return x.product !== action.payload
        }),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };

    default:
      return state;
  }
};
