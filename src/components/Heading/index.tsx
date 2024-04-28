import React from "react";

const sizes = {
  s: "text-[32px] font-bold md:text-3xl sm:text-[28px]",
  md: "text-4xl font-semibold md:text-[34px] sm:text-[32px]",
  xs: "text-xl font-semibold",
  lg: "text-5xl font-bold md:text-[44px] sm:text-[38px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "s",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
