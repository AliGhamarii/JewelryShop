import Buttons from "../../components/button/Buttons";
import CartItem from "../../components/cartItem/CartItem";
import { Container } from "../../components/container/Container";
import { useShoppingcartContext } from "../../context/ShopingCartContext";

function Cart() {
  const { cartItems, getTotalPrice } = useShoppingcartContext();

  return (
    <div className="mt-10 w-full overflow-x-hidden">
      <Container>
        <div className="relative w-full max-w-full flex flex-col gap-6 lg:flex-row lg:justify-between">
          <div className="flex-1 space-y-4 break-words">
            {cartItems.map((item, index) => (
              <CartItem key={index} {...item} />
            ))}
          </div>
          {cartItems.length != 0 && (
            <div className="w-full lg:w-1/3 p-6 bg-gray-100 rounded-2xl flex flex-col items-center justify-center text-base sm:text-xl md:text-2xl mx-5">
              <div>
                <h2 className="mb-2">
                  Total Price : {getTotalPrice().toFixed(2)}
                </h2>
                <h2 className="mb-2">Discount : 10%</h2>
                <h2 className="mb-4">
                  Final Price : {(getTotalPrice() * (1 - 10 / 100)).toFixed(2)}
                </h2>
              </div>
              <Buttons
                className="w-20 sm:w-40 h-10 rounded-2xl cursor-pointer"
                variant="success"
              >
                Order
              </Buttons>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Cart;
