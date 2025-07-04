import Buttons from "../../components/button/Buttons";
import { Container } from "../../components/container/Container";

export const Product = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-12 px-10  h-auto shadow rounded-xl mt-5">
          <div className="col-span-2 my-10 cursor-pointer flex flex-col items-center">
            <video
              className=" rounded-2xl w-100 h-auto object-cover"
              src="/products/Hailuo_Video_A thick citrus leaf liquid ele_350733755252772866.mp4"
              autoPlay
              loop
              muted
            ></video>

            <Buttons
              variant="success"
              className="mt-8 bg-orange-600 text-white rounded-2xl py-3 px-20 cursor-pointer whitespace-nowrap"
            >
              Add To Cart
            </Buttons>
          </div>
          <div className="col-span-10 flex flex-col">
            <h1 className="text-center text-5xl my-5 text-orange-600">
              CHANEL - The Iconic N°5
            </h1>
            <p className="text-center text-orange-800 px-50 mt-20 text-2xl ">
              {" "}
              Experience the essence of elegance with Chanel N°5.{"\n"}A
              luscious citrus leaf liquid cascades gracefully, enveloping the
              perfume bottle with a shimmering glow.{"\n"}
              Delicate flower petals drift softly in the air, creating an
              ethereal aura.{"\n"}
              Let this masterpiece elevate your senses and captivate your soul.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
