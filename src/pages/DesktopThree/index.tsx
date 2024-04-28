import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Radio, RadioGroup, Input, Img, Heading, SelectBox } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const data = [
  { image: "images/img_business_chart_visual.png", Data: "ซอฟต์แวร์สำหรับการจัดการธุรกิจ" },
  { image: "images/img_homepage_seen_on.png", Data: "บริการออกแบบเว็บไซต์" },
  { image: "images/img_analyzing_document.png", Data: "โซลูชันการตลาดดิจิทัล" },
];
const data1 = [
  {
    description:
      "<>เว็บไซต์ธุรกิจ<br />เว็บไซต์อีคอมเมิร์ซ <br />เว็บไซต์ข่าว <br />เว็บไซต์บล็อก <br />เว็บไซต์สื่อสารมวลชน <br />เว็บไซต์องค์กรไม่แสวงหาผลกำไร <br />เว็บไซต์องค์กรไม่แสวงหาผลกำไร <br />เว็บไซต์รัฐบาล <br />เว็บไซต์การศึกษา <br />เว็บไซต์ส่วนตัว <br />เว็บไซต์สมาคมสมาชิก</>",
  },
  {
    description:
      "<>ระบบปฏิบัติการ<br />ซอฟต์แวร์ประยุกต์<br />ซอฟต์แวร์ระบบ<br />ซอฟต์แวร์สำหรับนักพัฒนา<br />ซอฟต์แวร์ด้านความปลอดภัย<br />ซอฟต์แวร์สำหรับงานกราฟิก<br />ซอฟต์แวร์สำหรับงานออกแบบเว็บ<br />ซอฟต์แวร์สำหรับงานวิศวกรรม<br />ซอฟต์แวร์สำหรับงานดนตร<br />ซอฟต์แวร์สำหรับงานการศึกษา</>",
  },
  {
    description:
      "<>การตลาดออนไลน์<br />การตลาดแบบดั้งเดิม <br />การตลาดเนื้อหา<br />การตลาดผ่านโซเชียลมีเดีย <br />การตลาดแบบมีอิทธิพล <br />การตลาดแบบอีเมล<br />การตลาดแบบค้นหา<br />การตลาดแบบแสดงผล<br />การตลาดแบบพันธมิตร<br />การตลาดแบบเน้นเนื้อหาท้องถิ่น</>",
  },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function DesktopThreePage() {
  return (
    <>
      <Helmet>
        <title>Test01</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* main layout section */}
      <div className="w-full">
        {/* header section */}
        <div className="flex flex-col items-end bg-white-A700 py-9 shadow-xs sm:py-5">
          <div className="mb-[79px] flex w-[92%] flex-col gap-[39px] md:w-full md:p-5">
            <Header className="flex w-[92%] items-center justify-between gap-5 md:w-full md:flex-col" />
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <div className="flex w-[42%] flex-col items-start self-end md:w-full">
                <div className="flex flex-col items-start">
                  <Heading size="lg" as="h1" className="bg-gradient1 bg-clip-text !text-transparent">
                    Aofity Corporation
                  </Heading>
                  <Text size="4xl" as="p" className="!font-inter">
                    ผู้นำด้านโซลูชันนวัตกรรม
                  </Text>
                </div>
                <Text size="xl" as="p" className="mt-[9px] w-full !font-light !text-gray-800">
                  <>
                    มุ่งมั่นที่จะนำเสนอโซลูชันนวัตกรรมแก่ลูกค้าของเรา
                    <br />
                    เรามีทีมงานวิศวกรและนักออกแบบที่มีประสบการณ์สูง <br />
                    ซึ่งทุ่มเทเพื่อพัฒนาผลิตภัณฑ์และบริการที่ตอบสนองความต้องการของลูกค้า
                  </>
                </Text>
                <Heading size="md" as="h2" className="mt-7">
                  ซอฟต์แวร์สำหรับการจัดการธุรกิจ |
                </Heading>
                <div className="mt-[25px] flex gap-[17px]">
                  <Button color="gray_600" shape="round" className="min-w-[180px] font-inter sm:px-5">
                    Details
                  </Button>
                  <Button shape="round" className="min-w-[180px] font-inter sm:px-5">
                    Contact
                  </Button>
                </div>
                <div className="mt-[37px] flex w-[79%] md:w-full">
                  <div className="flex w-full flex-col items-center">
                    <div className="relative z-[1] flex w-[89%] items-start justify-between gap-5 md:w-full">
                      <Img src="images/img_frame.svg" alt="image" className="mb-[9px] h-[57px] w-[57px]" />
                      <Img src="images/img_frame_black_900.svg" alt="image" className="h-[57px] w-[14%]" />
                      <Img src="images/img_frame_black_900_57x57.svg" alt="image" className="h-[57px] w-[57px]" />
                    </div>
                    <div className="relative mt-[-4px] flex flex-wrap justify-between gap-5 self-stretch">
                      <Heading as="h3" className="self-end">
                        1,000K
                      </Heading>
                      <Heading as="h4" className="self-start">
                        500{" "}
                      </Heading>
                      <Heading as="h5">4.9/5</Heading>
                    </div>
                    <div className="mt-[7px] flex items-center justify-between gap-5 self-stretch">
                      <div className="flex w-[63%] flex-wrap justify-between gap-5">
                        <Text as="p" className="self-start !font-inter">
                          Total Customer
                        </Text>
                        <Text as="p" className="self-end !font-inter">
                          Project
                        </Text>
                      </div>
                      <Text as="p" className="self-start !font-inter">
                        Review
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_job_5382501_1920.png"
                alt="job5382501"
                className="mb-[7px] h-[554px] w-[50%] rounded-[40px] object-cover md:w-full"
              />
            </div>
          </div>
        </div>

        {/* services section */}
        <div className="flex flex-col items-center gap-[39px] bg-white-A700 pb-5">
          <div className="flex gap-px self-stretch bg-blue_gray-900_01 md:flex-col">
            {data.map((d, index) => (
              <div key={"service" + index} className="relative h-[120px] w-full bg-green-600 md:h-auto md:p-5">
                <Img src={d.image} alt="image" className="h-[120px] w-full object-cover opacity-0.3" />
                <Text
                  as="p"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max !font-normal !text-white-A700"
                >
                  {d.Data}
                </Text>
              </div>
            ))}
          </div>
          <div className="flex w-[30%] flex-col items-center gap-[15px] rounded-[10px] border border-solid border-black-900_e5 bg-white-A700 p-5 shadow-sm md:w-full">
            <Text as="p">บริการออกแบบเว็บไซต์</Text>
            <div className="mb-[26px] flex w-[77%] flex-col items-center md:w-full">
              <SelectBox
                color="white_A700_7f"
                shape="round"
                indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" className="h-[15px] w-[15px]" />}
                name="arrowdown"
                placeholder={`เลือกบริการ`}
                options={dropDownOptions}
                className="gap-px self-stretch border border-solid border-black-900_7f sm:px-5"
              />
              <SelectBox
                shape="round"
                indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" className="h-[15px] w-[15px]" />}
                name="arrowdown_one"
                placeholder={`ประเภท`}
                options={dropDownOptions}
                className="mt-4 gap-px self-stretch border border-solid border-black-900 sm:px-5"
              />
              <SelectBox
                shape="round"
                indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" className="h-[15px] w-[15px]" />}
                name="arrowdown_two"
                placeholder={`เเพคเก็จ`}
                options={dropDownOptions}
                className="mt-4 gap-px self-stretch border border-solid border-black-900 sm:px-5"
              />
              <div className="mt-4 flex self-stretch rounded-[3px] border border-solid border-black-900 bg-white-A700 p-[19px]">
                <Text size="lg" as="p" className="ml-[15px] mt-1.5 w-[69%] md:ml-0">
                  <>
                    ค่าบริการ 10,000 THB
                    <br />
                    hosting 1000/ปี THB
                    <br />
                    Domain 500/ปี THB
                    <br />
                    <br />
                    <br />
                    รวม 15,000 THB
                  </>
                </Text>
              </div>
              <Radio
                value="br"
                name="input"
                label="สามารถวางเค้าโครงและจัดรูปแบบของเอกสารโดยไม่ต้องใช้เนื้อหาจริง 
ช่วยให้มุ่งเน้นไปที่การออกแบบโดยไม่ต้องกังวลว่าเนื้อหา"
                className="mt-[15px] self-stretch text-[10px] font-light text-black-900"
              />
              <Button
                size="lg"
                className="mt-[22px] min-w-[180px] rounded-[5px] border border-solid border-gray-200 font-inter sm:px-5"
              >
                Payment
              </Button>
            </div>
          </div>
        </div>

        {/* partners section */}
        <div className="flex flex-col gap-[22px] bg-white-A700 pb-3.5">
          <div className="flex items-start justify-between gap-5 bg-white-A700 p-8 md:flex-col sm:p-5">
            <div className="ml-[13px] flex w-[32%] justify-center md:ml-0 md:w-full sm:flex-col">
              <Img src="images/img_group_52.svg" alt="image" className="h-[48px] w-[59%] sm:w-full" />
              <Img
                src="images/img_television.svg"
                alt="television"
                className="ml-[34px] h-[48px] w-[27%] sm:ml-0 sm:w-full"
              />
              <Img src="images/img_logo.svg" alt="logo" className="ml-[49px] h-[48px] w-[48px] sm:ml-0 sm:w-full" />
            </div>
            <div className="flex w-[46%] justify-center md:w-full md:flex-col">
              <Img src="images/img_group_53.svg" alt="image" className="h-[48px] w-[31%] md:w-full" />
              <Img src="images/img_group_57.svg" alt="image" className="ml-[50px] h-[48px] w-[18%] md:ml-0 md:w-full" />
              <Img
                src="images/img_vector_blue_gray_900_02.svg"
                alt="vector"
                className="ml-[50px] h-[48px] w-[25%] md:ml-0 md:w-full"
              />
              <Img
                src="images/img_logo_blue_gray_900_03.svg"
                alt="logo"
                className="ml-[38px] h-[48px] w-[26%] self-start md:ml-0 md:w-full"
              />
            </div>
            <Img src="images/img_settings.svg" alt="settings" className="h-[48px] w-[5%] md:w-full" />
            <Img src="images/img_vector.svg" alt="vector" className="mr-3.5 h-[43px] w-[4%] md:mr-0 md:w-full" />
          </div>

          {/* portfolio section */}
          <div className="mx-auto flex w-full max-w-[1398px] flex-col items-center gap-[18px] md:p-5">
            <Heading size="md" as="h2" className="w-[11%] text-center !text-light_blue-A700 md:w-full">
              <span className="font-medium text-black-900">
                <>
                  Portfolio
                  <br />
                </>
              </span>
              <span className="text-xl font-light text-black-900">คลิ๊กเพื่อดูตัวอย่าง</span>
            </Heading>
            <div className="flex gap-6 self-stretch md:flex-col">
              {data1.map((d, index) => (
                <div
                  key={"listdescription" + index}
                  className="flex w-full flex-col items-end rounded-[10px] border border-solid border-black-900_7f bg-white-A700 p-8 shadow-xs sm:p-5"
                >
                  <Text size="3xl" as="p" className="mb-12 mt-9 w-[87%] !text-black-900_e5 md:w-full">
                    {d.description}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* about section */}
        <div className="flex flex-col items-center gap-[22px] bg-white-A700">
          <Heading size="xs" as="h2" className="mt-[47px] w-[66%] text-center md:w-full md:p-5">
            <span className="text-[32px] font-medium text-black-900">
              <>
                About us
                <br />
              </>
            </span>
            <span className="text-lg font-light text-black-900">
              <>
                บริษัท Aofity Corporation ก่อตั้งขึ้นในปี 2550 มุ่งมั่นที่จะนำเสนอโซลูชันนวัตกรรมแก่ลูกค้าของเรา <br />
                เรามีทีมงานวิศวกรและนักออกแบบที่มีประสบการณ์สูง
                ซึ่งทุ่มเทเพื่อพัฒนาผลิตภัณฑ์และบริการที่ตอบสนองความต้องการของลูกค้า
              </>
            </span>
          </Heading>
          <div className="flex self-stretch md:flex-col">
            <Img
              src="images/img_low_angle_shot_of.png"
              alt="lowangleshot"
              className="h-[466px] w-[25%] object-cover md:w-full"
            />
            <div className="relative h-[466px] flex-1 md:h-auto md:w-full md:flex-none md:self-stretch md:p-5">
              <Img
                src="images/img_close_up_of_businessman.png"
                alt="closeupof"
                className="h-[466px] w-full object-cover"
              />
              <Text
                size="3xl"
                as="p"
                className="absolute left-0 right-0 top-[44%] m-auto w-max text-center !font-medium !text-white-A700"
              >
                ซอฟต์แวร์ของเราใช้งานง่าย ช่วยให้คุณประหยัดเวลาและเงิน
              </Text>
            </div>
            <Img
              src="images/img_group_of_diverse.png"
              alt="image"
              className="h-[466px] w-[25%] object-cover md:w-full"
            />
          </div>
          <Img src="images/img_maximize.svg" alt="maximize" className="h-[39px] w-[6%]" />
          <Text size="s" as="p" className="text-center">
            รางวัล &quot;บริษัทนวัตกรรมแห่งปี&quot; จากนิตยสาร Business Today
          </Text>
          <Text size="3xl" as="p" className="text-center !font-medium">
            Contact Us Or Get More Info
          </Text>
        </div>

        {/* contact section */}
        <div className="flex flex-col items-center gap-10 bg-white-A700 pt-3">
          <div className="relative h-[598px] w-[50%] md:h-auto">
            <div className="mb-[113px] ml-[120px] h-[120px] w-[49%] border border-solid border-black-900 bg-gray-100 md:ml-0" />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full justify-center rounded-[10px] bg-gray-600 p-[41px] md:p-5">
              <div className="mb-6 flex w-[77%] flex-col items-start md:w-full">
                <Input shape="round" type="text" name="name" placeholder={`Name`} className="w-[48%] sm:pr-5" />
                <Input
                  shape="round"
                  type="number"
                  name="phoneNumber"
                  placeholder={`Phone Number `}
                  className="mt-7 w-[48%] sm:pr-5"
                />
                <div className="mt-7 flex gap-3 self-stretch sm:flex-col">
                  <Input
                    shape="round"
                    type="text"
                    name="name"
                    placeholder={`Company Name`}
                    className="w-full sm:w-full sm:pr-5"
                  />
                  <Input
                    shape="round"
                    type="email"
                    name="email"
                    placeholder={`Email Address`}
                    className="w-full sm:w-full sm:pr-5"
                  />
                </div>
                <div className="mt-7 flex w-[48%] flex-col gap-[3px] md:w-full">
                  <Input shape="round" name="type_of_enquiry" placeholder={`Type of Enquiry`} className="sm:pr-5" />
                  <div className="flex flex-col gap-[3px]">
                    <RadioGroup name="group31" className="flex flex-col">
                      <Radio
                        value="input3"
                        label="ซอฟต์แวร์สำหรับการจัดการธุรกิจ"
                        className="flex-1 text-center text-[15px] text-black-900"
                      />
                      <Radio
                        value="input4"
                        label="บริการออกแบบเว็บไซต์"
                        className="mr-[63px] flex-1 text-center text-[15px] text-black-900 md:mr-0"
                      />
                    </RadioGroup>
                    <Radio
                      value="input2"
                      name="input1"
                      label="โซลูชันการตลาดดิจิทัล"
                      className="w-[70%] text-center text-[15px] text-black-900"
                    />
                  </div>
                </div>
                <Text size="s" as="p" className="ml-[26px] mt-[18px] text-center !text-gray-600_02 md:ml-0">
                  message
                </Text>
                <Button size="sm" className="mt-[91px] min-w-[121px] rounded-[5px] sm:px-5">
                  SUMMIT
                </Button>
              </div>
            </div>
          </div>

          {/* footer section */}
          <Footer className="flex items-end justify-center self-stretch bg-gradient" />
        </div>
      </div>
    </>
  );
}
