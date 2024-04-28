import React from "react";
import { Text, Button, Input, Img } from "./..";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props}>
      <div className="mt-3.5 flex w-[91%] flex-col items-start md:w-full">
        <div className="mx-auto flex w-full max-w-[1026px] md:flex-col md:p-5">
          <Img src="images/img_footer_logo.png" alt="footerlogo" className="h-[23px] w-[199px] object-cover" />
          <a href="#" className="ml-[284px] self-start md:ml-0">
            <Text size="md" as="p">
              Contact us
            </Text>
          </a>
          <a href="Product" target="_blank" rel="noreferrer" className="ml-[406px] self-start md:ml-0">
            <Text size="md" as="p">
              Product
            </Text>
          </a>
        </div>
        <Text size="s" as="p" className="relative z-[2] ml-[483px] text-center md:ml-0">
          Www.Aofity.co.th{" "}
        </Text>
        <div className="relative z-[3] flex w-[63%] flex-wrap justify-between gap-5 self-end md:w-full">
          <Text size="s" as="p" className="self-end">
            Aofity.co@gmail.com
          </Text>
          <Text size="s" as="p" className="self-start text-center">
            Enter your email to get notified about new solution{" "}
          </Text>
        </div>
        <div className="relative mr-[83px] mt-[-2px] flex w-[61%] items-center self-end md:mr-0 md:w-full md:flex-col">
          <Text size="s" as="p" className="self-end text-center">
            +66 98-999-888
          </Text>
          <Input
            size="xs"
            shape="round"
            name="email"
            placeholder={`Email Address`}
            className="ml-[373px] flex-grow !text-gray-600_01 md:ml-0 sm:pr-5"
          />
          <Button size="xs" className="ml-[9px] min-w-[60px] rounded-[5px] md:ml-0">
            SENT
          </Button>
        </div>
        <Text size="xs" as="p" className="mt-2 text-center">
          @2024 All rights reserved
        </Text>
      </div>
    </footer>
  );
}
