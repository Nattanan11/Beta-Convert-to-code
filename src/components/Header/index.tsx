import React from "react";
import { Button, Text, Img } from "./..";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  return (
    <header {...props}>
      <Img src="images/img_header_logo.png" alt="headerlogo" className="h-[30px] w-[254px] object-cover" />
      <div className="flex items-center gap-10 sm:flex-col">
        <ul className="flex flex-wrap gap-10">
          <li>
            <a href="#">
              <Text size="xl" as="p" className="!font-inter">
                Home
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text size="xl" as="p" className="!font-inter">
                Our Service{" "}
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text size="xl" as="p" className="!font-inter">
                Portfolio
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text size="xl" as="p" className="!font-inter">
                About us
              </Text>
            </a>
          </li>
        </ul>
        <Button shape="round" className="min-w-[121px] font-inter sm:px-5">
          Contact
        </Button>
      </div>
    </header>
  );
}
