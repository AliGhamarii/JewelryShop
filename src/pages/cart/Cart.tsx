import { useContext } from "react";
import Buttons from "../../components/button/Buttons";
import CartItem from "../../components/cartItem/CartItem";
import { Container } from "../../components/container/Container";
import { ShoppingCartContext } from "../../context/ShopingCartContext";

function Cart() {
  const { handleIncreaseProductQty, handleDecreaseProductQty } =
    useContext(ShoppingCartContext);
  return (
    <div>
      <Container>
        <div className="relative">
          <div>
            <CartItem />
            <CartItem />
          </div>
          <div className="flex flex-col flex-auto items-end text-3xl py-2 bg-gray-100 rounded-2xl mt-3">
            <h2>Total Price : 2000$</h2>
            <h2>Discount : 10%</h2>
            <h2>Final Price : 1800$</h2>
            <Buttons
              className="w-50 h-10 rounded-2xl cursor-pointer mt-5"
              variant="success"
            >
              Order
            </Buttons>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
