import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/test.utils";
import CartIcon from "../cart-icon.component";

describe("Cart Icon Test", () => {
  test("User preloaded state to render", () => {
    const initialCartItem = [
      { id: 1, name: "Item A", imageUrl: "test", price: 10, quantity: 1 },
      { id: 2, name: "Item B", imageUrl: "test", price: 10, quantity: 2 },
    ];

    renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItem,
        },
      },
    });

    const cartIconElement = screen.getByText("3");
    expect(cartIconElement).toBeInTheDocument();
  });
});
