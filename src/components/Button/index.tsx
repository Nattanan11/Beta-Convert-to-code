import React from "react";

const shapes = {
  round: "rounded-[10px]",
} as const;
const variants = {
  fill: {
    gray_600: "bg-gray-600 text-white-A700",
    light_blue_A700: "bg-light_blue-A700 text-white-A700",
  },
} as const;
const sizes = {
  lg: "h-[56px] px-[35px] text-xl",
  sm: "h-[40px] px-8 text-[15px]",
  xs: "h-[30px] px-[13px] text-sm",
  md: "h-[48px] px-[26px] text-lg",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "light_blue_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer text-white-A700 font-medium ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
