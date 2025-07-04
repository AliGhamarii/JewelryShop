import { useRef } from "react";

function ProductItem() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  return (
    <div className="max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500">
      <div
        className="group relative overflow-hidden rounded-3xl cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="rounded-3xl object-cover w-full h-100 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
          src="/public/products/fernando-andrade-potCPE_Cw8A-unsplash.jpg"
          alt="Product"
          loading="lazy"
        />
        <video
          ref={videoRef}
          src="/public/products/Hailuo_Video_A thick citrus leaf liquid ele_350733755252772866.mp4"
          className="absolute top-0 left-0 w-full h-100 object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
          autoPlay
          loop
          muted
        ></video>
      </div>

      <div className="px-6 py-5">
        <h3 className="text-orange-600 font-extrabold text-xl mb-2 tracking-wide drop-shadow-md">
          New Arrival! CHANEL - The Iconic N°5
        </h3>
        <span className="text-orange-700 font-semibold text-lg italic shadow-sm">
          $499 — Luxury Edition
        </span>
        <p className="mt-4 text-orange-800 text-sm leading-relaxed font-light whitespace-pre-line drop-shadow-sm line-clamp-2">
          Experience the essence of elegance with Chanel N°5.{"\n"}A luscious
          citrus leaf liquid cascades gracefully, enveloping the perfume bottle
          with a shimmering glow.{"\n"}
          Delicate flower petals drift softly in the air, creating an ethereal
          aura.{"\n"}
          Let this masterpiece elevate your senses and captivate your soul.
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
