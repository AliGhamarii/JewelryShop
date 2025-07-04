import Buttons from "../button/Buttons";
import { Container } from "../container/Container";

function CartItem() {
  return (
    <div>
      <Container>
        <div className="h-auto flex gap-5 border-b-2 py-6">
          <div>
            <img
              className="w-40 h-60 rounded-2xl object-cover"
              src="/public/products/fernando-andrade-potCPE_Cw8A-unsplash.jpg"
              alt=""
            />
          </div>
          <div className="flex  flex-col items-end w-full">
            <h2 className="mb-10 text-2xl font-bold ">product title</h2>
            <div className="flex flex-col gap-3 items-center">
              <Buttons
                className="w-20 h-10 rounded-2xl cursor-pointer"
                variant="secondary"
              >
                -
              </Buttons>
              <div className="w-20 h-5 rounded-2xl text-center ">2</div>
              <Buttons
                className="w-20 h-10 rounded-2xl cursor-pointer"
                variant="secondary"
              >
                +
              </Buttons>
              <Buttons
                className="w-20 h-10 rounded-2xl cursor-pointer"
                variant="danger"
              >
                Remove
              </Buttons>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CartItem;
