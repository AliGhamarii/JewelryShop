import Buttons from "../../components/button/Buttons";
import CartItem from "../../components/cartItem/CartItem";
import { Container } from "../../components/container/Container";
import { useShoppingcartContext } from "../../context/ShopingCartContext";

function Cart() {
  const { cartItems } = useShoppingcartContext();

  return (
    <div className="mt-10 w-full overflow-x-hidden">
      <Container>
        <div className="relative w-full max-w-full flex flex-col gap-6 lg:flex-row lg:justify-between">
          <div className="flex-1 space-y-4 break-words overflow-x-hidden">
            {cartItems.map((item, index) => (
              <CartItem key={index} {...item} />
            ))}
          </div>

          <div className="w-full lg:w-1/3 bg-gray-100 rounded-2xl p-6 flex flex-col items-end text-base sm:text-xl md:text-2xl break-words">
            <h2 className="mb-2 break-words">Total Price : 2000$</h2>
            <h2 className="mb-2 break-words">Discount : 10%</h2>
            <h2 className="mb-4 break-words">Final Price : 1800$</h2>
            <Buttons
              className="w-full sm:w-40 h-10 rounded-2xl cursor-pointer"
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
