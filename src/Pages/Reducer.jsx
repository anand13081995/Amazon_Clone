export const initialState = {
  basket: []
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
      case 'Add_to_cart':
          return {
              ...state,
              basket: [...state.basket, action.item]
          };

      case 'Remove_from_cart':
          const index = state.basket.findIndex(basketItem => basketItem.id === action.id);
          let newBasket = [...state.basket];
          if (index >= 0) {
              newBasket.splice(index, 1);
          } else {
              console.log("Nothing to delete");
          }
          return {
              ...state,
              basket: newBasket
          };

      default:
          return state;
  }
}

export default reducer;
