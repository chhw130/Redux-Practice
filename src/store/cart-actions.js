import { itemActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

const BASE_URL =
  "https://react-movie-eb9a3-default-rtdb.firebaseio.com/cart.json";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(BASE_URL);

      const data = response.json();
      return data;
    };

    // await fetchData()
    //   .catch(() => {
    //     dispatch(
    //       uiActions.showNotification({
    //         status: "error",
    //         title: "Error",
    //         message: "Sending cart data faild",
    //       })
    //     );
    //   })
    //   .then((data) => dispatch(itemActions.replaceItem(data)));

    try {
      const itemData = await fetchData();
      dispatch(
        itemActions.replaceItem({
          items: itemData.items || [],
          totalQuantity: itemData.totalQuantity,
        })
      );
    } catch {
      uiActions.showNotification({
        status: "error",
        title: "Error",
        message: "Sending cart data faild",
      });
    }
  };
};

export const sendItemData = (item) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      await fetch(BASE_URL, {
        method: "PUT",
        body: JSON.stringify(item),
      });

      dispatch(
        uiActions.showNotification({
          status: "succeess",
          title: "Success!...",
          message: "Sent item data successfully!",
        })
      );
    };

    await sendRequest().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data faild",
        })
      );
    });
  };
};
