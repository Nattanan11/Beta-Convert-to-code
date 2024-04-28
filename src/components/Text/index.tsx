import React from "react";

const sizes = {
  xs: "text-[13px] font-normal",
  lg: "text-base font-normal",
  s: "text-sm font-normal",
  "2xl": "text-xl font-medium",
  "3xl": "text-2xl font-normal md:text-[22px]",
  "4xl": "text-4xl font-medium md:text-[34px] sm:text-[32px]",
  xl: "text-lg font-medium",
  md: "text-[15px] font-medium",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "2xl",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-prompt ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
