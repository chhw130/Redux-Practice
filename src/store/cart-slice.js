const { createSlice } = require("@reduxjs/toolkit");

const itemSlice = createSlice({
  name: "item",
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    replaceItem(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },

    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemId === newItem.id
      );
      /**리덕스 tollkit은 proxy기반이므로 저장값을 확인하기 위해서는 current를 사용해야 한다. */
      //   console.log("existingItem", current(state.items));
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      console.log(state.items);
      const existingItem = state.items.find((item) => {
        return item.itemId === id;
      });
      state.totalQuantity--;
      console.log(existingItem);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.itemId !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const itemActions = itemSlice.actions;

export default itemSlice;
