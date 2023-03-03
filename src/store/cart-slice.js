const { createSlice, current } = require("@reduxjs/toolkit");

const itemSlice = createSlice({
  name: "item",
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemId === newItem.id
      );
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
