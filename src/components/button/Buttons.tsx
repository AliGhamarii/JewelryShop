import type { ComponentProps } from "react";

type TVariant = "primary" | "secondary" | "warning" | "danger" | "success";

type TBtn = ComponentProps<"button"> & { variant: TVariant };
function Buttons({ children, variant, style, className, ...rest }: TBtn) {
  return (
    <button
      {...rest}
      className={className}
      style={{ ...style, ...changeVariant(variant) }}
    >
      {children}
    </button>
  );
}

export default Buttons;

function changeVariant(variant: TVariant) {
  if (variant === "primary") {
    return { backgroundColor: "orange", color: "white" };
  } else if (variant === "success") {
    return { backgroundColor: "green", color: "white" };
  } else if (variant === "danger") {
    return { backgroundColor: "red", color: "white" };
  } else if (variant === "secondary") {
    return { backgroundColor: "blue", color: "white" };
  }
}
