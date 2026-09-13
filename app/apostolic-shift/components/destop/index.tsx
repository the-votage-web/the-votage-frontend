"use client";

import { useState } from "react";
import svgPaths from "./svg-1uc59bgq44";
import { CopyRow, VolunteerForm } from "../interactive";
import { RegisterModal } from "../register-modal";

/* Images live in /public/img/apostolic-shift (copied verbatim from the Figma export). */
const imgRectangle8 = "/img/apostolic-shift/4e616f1ec5ea9d74dda656a557100e3216e512e3.png";
const imgRectangle9 = "/img/apostolic-shift/8e610a06248a391654deb7db1c5c56bbc7b62148.png";
const imgRectangle10 = "/img/apostolic-shift/da2bb5b5e578afb9481bd2cc171cfbce15ba30c5.png";
const imgRectangle11 = "/img/apostolic-shift/4dee42c32038a55e2bb6e81ebf4af731291d9c02.png";
const imgRectangle12 = "/img/apostolic-shift/2e4f1cd0ac1cf902d56d2334271170008d597a27.png";
const imgRectangle13 = "/img/apostolic-shift/10335fd2b908493af4bd366a6973d17d3b62edd4.png";
const imgRectangle14 = "/img/apostolic-shift/76cc8d1d5d1af9b4c7aeb7f63200840d77c38a4c.png";
const imgRectangle15 = "/img/apostolic-shift/aea207c96f5bb3a9338539bd223489f1cba617a0.png";
const imgRectangle16 = "/img/apostolic-shift/136ea486872097fdc951b2d7d88efd8a89292bec.png";
const imgHeroSection = "/img/apostolic-shift/46a110685be4de114d24186039db4eb4af1ded4a.png";
const imgChatGptImageJan192026065255Pm1 = "/img/apostolic-shift/29fcaaaf990b37e9f81712729c82732ad77fb95a.png";
const imgFrame271 = "/img/apostolic-shift/0e86aa29068604ea20cfd8b71c27c4c9c346d409.png";
type ComponentProps = {
  className?: string;
  property1?: "open" | "default";
};

function Component({ className, property1 = "open" }: ComponentProps) {
  return (
    <div className={className || `h-[260px] relative ${property1 === "default" ? "w-[75px]" : "w-[402px]"}`}>
      <div className="absolute inset-0 rounded-[13px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle8} />
      </div>
    </div>
  );
}
type Component1Props = {
  className?: string;
  property1?: "Frame 309" | "Frame 310" | "Frame 311" | "Frame 312" | "Frame 313" | "Frame 314" | "Frame 315" | "Frame 316" | "Frame 317" | "Frame 318";
};

function Component1({ className, property1 = "Frame 309" }: Component1Props) {
  const isFrame309 = property1 === "Frame 309";
  const isFrame310OrFrame311OrFrame312OrFrame313OrFrame314OrFrame315Or = ["Frame 310", "Frame 311", "Frame 312", "Frame 313", "Frame 314", "Frame 315", "Frame 316", "Frame 317", "Frame 318"].includes(property1);
  return (
    <div className={className || "relative"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center relative size-full">
          <Component className={`h-[260px] relative shrink-0 ${isFrame310OrFrame311OrFrame312OrFrame313OrFrame314OrFrame315Or ? "w-[75px]" : "w-[402px]"}`} property1={isFrame310OrFrame311OrFrame312OrFrame313OrFrame314OrFrame315Or ? "default" : undefined} />
          {isFrame310OrFrame311OrFrame312OrFrame313OrFrame314OrFrame315Or && (
            <div className={`h-[260px] relative shrink-0 ${["Frame 311", "Frame 312", "Frame 313", "Frame 314", "Frame 315", "Frame 316", "Frame 317", "Frame 318"].includes(property1) ? "w-[75px]" : "w-[402px]"}`} data-name="Component 3">
              <div className="absolute inset-0 rounded-[13px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle11} />
              </div>
            </div>
          )}
          <div className={`h-[260px] relative shrink-0 ${property1 === "Frame 311" ? "w-[402px]" : "w-[75px]"}`} data-name="Component 4">
            <div className="absolute inset-0 rounded-[13px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle9} />
            </div>
          </div>
          <div className={`h-[260px] relative shrink-0 ${property1 === "Frame 312" ? "w-[402px]" : "w-[75px]"}`} data-name="Component 5">
            <div className="absolute inset-0 rounded-[13px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle10} />
            </div>
          </div>
          {isFrame310OrFrame311OrFrame312OrFrame313OrFrame314OrFrame315Or && (
            <>
              <div className={`h-[260px] relative shrink-0 ${property1 === "Frame 313" ? "w-[402px]" : "w-[75px]"}`} data-name="Component 6">
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle12} />
                </div>
              </div>
              <div className={`h-[260px] relative shrink-0 ${property1 === "Frame 314" ? "w-[402px]" : "w-[75px]"}`} data-name="Component 7">
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle13} />
                </div>
              </div>
              <div className={`h-[260px] relative shrink-0 ${property1 === "Frame 315" ? "w-[402px]" : "w-[75px]"}`} data-name="Component 8">
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle14} />
                </div>
              </div>
              <div className={`h-[260px] relative shrink-0 ${property1 === "Frame 316" ? "w-[402px]" : "w-[75px]"}`} data-name="Component 9">
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle15} />
                </div>
              </div>
              <div className={`h-[260px] relative shrink-0 ${property1 === "Frame 317" ? "w-[402px]" : "w-[75px]"}`} data-name="Component 10">
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle16} />
                </div>
              </div>
              <div className={`h-[260px] relative shrink-0 ${property1 === "Frame 318" ? "w-[402px]" : "w-[75px]"}`} data-name="Component 11">
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle9} />
                </div>
              </div>
            </>
          )}
          {isFrame309 && (
            <>
              <div className="h-[260px] relative shrink-0 w-[75px]" data-name="Component 3">
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle11} />
                </div>
              </div>
              <div className="h-[260px] relative shrink-0 w-[75px]" data-name="Component 6">
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle12} />
                </div>
              </div>
              <div className="h-[260px] relative shrink-0 w-[75px]" data-name="Component 7">
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle13} />
                </div>
              </div>
              <div className="h-[260px] relative shrink-0 w-[75px]" data-name="Component 8">
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle14} />
                </div>
              </div>
              <div className="h-[260px] relative shrink-0 w-[75px]" data-name="Component 9">
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle15} />
                </div>
              </div>
              <div className="h-[260px] relative shrink-0 w-[75px]" data-name="Component 10">
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle16} />
                </div>
              </div>
              <div className="h-[260px] relative shrink-0 w-[75px]" data-name="Component 11">
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle9} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function AkarIconsArrowRight() {
  return (
    <div className="h-[18px] relative shrink-0 w-[25px]" data-name="akar-icons:arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 25 18" width="25">
        <g id="akar-icons:arrow-right">
          <path d={svgPaths.p34482d00} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <a href="#volunteer" className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch cursor-pointer flex gap-[4px] items-center justify-center left-1/2 p-[10px] top-1/2 hover:opacity-80 transition-opacity">
      <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-left text-white whitespace-nowrap">{`Join us for a time of intense Prayer and Worship `}</p>
      <AkarIconsArrowRight />
    </a>
  );
}

function Banner() {
  return (
    <div className="bg-[#f80] h-[60px] overflow-clip relative shrink-0 w-[1440px]" data-name="Banner">
      <Frame24 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[24px] items-end justify-center mr-[-1px] relative shrink-0 w-[909px]" data-name="Container">
      <a href="#about" className="relative rounded-[16px] shrink-0 hover:opacity-80 transition-opacity">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[normal]">The Experience</p>
            </div>
          </div>
        </div>
      </a>
      <a href="#volunteer" className="relative rounded-[16px] shrink-0 hover:opacity-80 transition-opacity">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[10px] items-center justify-center p-[10px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[normal]">Volunteer</p>
            </div>
          </div>
        </div>
      </a>
      <a href="#give" className="relative rounded-[16px] shrink-0 hover:opacity-80 transition-opacity">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[normal]">Give</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function Frame23({ onRegisterClick }: { onRegisterClick: () => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 -ml-[200px]">
      <Container />
      <a className="flex h-[48px] items-center justify-center rounded-[36px] border border-white/70 border-solid px-[20px] font-['Poppins:Medium',sans-serif] text-[18px] text-white" href="/apostolic-shift/checkin">
        Checkin
      </a>
      <button className="bg-[#f80] cursor-pointer h-[48px] relative rounded-[36px] shrink-0 w-[160px]" data-name="CTA" onClick={onRegisterClick} type="button">
        <div aria-hidden className="absolute border border-[#9c9b9b] border-solid inset-0 pointer-events-none rounded-[36px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-left text-white whitespace-nowrap">
              <p className="leading-[24px]">Register Now</p>
            </div>
          </div>
        </div>
      </button>

    </div>
  );
}

function NavigationBar({ onRegisterClick }: { onRegisterClick: () => void }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none w-full">
      <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md content-stretch flex gap-[143px] h-[90px] items-center overflow-clip pointer-events-auto px-[80px] py-[12px] w-full max-w-[1440px] mx-auto" data-name="Navigation bar">
        <div className="relative shrink-0 size-[57px]" data-name="ChatGPT Image Jan 19, 2026, 06_52_55 PM 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImageJan192026065255Pm1} />
        </div>
        <Frame23 onRegisterClick={onRegisterClick} />
      </div>
    </div>
  );
}

function UiElementLogoaAndText() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="ui_element_logoa and text">
      <div className="relative shrink-0 size-[45px]" data-name="ChatGPT Image Jan 19, 2026, 06_52_55 PM 1" />
      <div className="[word-break:break-word] flex flex-col font-['Copperplate:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[0.48px] uppercase whitespace-nowrap">
        <p className="leading-[26px]">tHE VOTAGE CHURCH</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Copperplate:Bold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#f80] text-[84px] text-center tracking-[1.68px] uppercase">
        <p className="leading-[95px]">APOSTOLIC SHIFT</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-center px-[19px] py-[18px] relative shrink-0 w-[307px]">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white w-[487px]">
        <p className="leading-[normal]">22ND-23RD SEPTEMBER</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame21 />
      <div className="[word-break:break-word] flex flex-col font-['Copperplate:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[0.48px] uppercase w-[373px]">
        <p className="leading-[33px]">A conference like never before seen</p>
      </div>
      <Frame22 />
    </div>
  );
}

function Frame18() {
  return <div className="content-stretch flex gap-[24px] h-[54px] items-center justify-center relative shrink-0 w-full" />;
}

function Frame19() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[8px] items-center left-[calc(50%+0.5px)] top-[calc(50%+30.5px)] w-[761px]">
      <UiElementLogoaAndText />
      <Frame20 />
      <Frame18 />
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute h-[798px] left-0 overflow-clip top-[2px] w-[1440px]" data-name="Margin">
      <Frame19 />
    </div>
  );
}

function HeroSection({ onRegisterClick }: { onRegisterClick: () => void }) {
  return (
    <div className="h-[800px] overflow-clip relative shrink-0 w-[1440px]" data-name="Hero section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeroSection} />
        <div className="absolute bg-[rgba(0,0,0,0.75)] inset-0" />
      </div>
      <NavigationBar onRegisterClick={onRegisterClick} />
      <Margin />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f70] text-[14px] text-center tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">The experience</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-start p-[10px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[0] min-w-px not-italic relative text-[#262422] text-[16px]">
        <p className="leading-[normal] mb-0">There are moments in the spirit when everything changes; not gradually, but suddenly. Apostolic Shift is one of those moments.</p>
        <p className="leading-[normal] mb-0">{`A days power packed conference Where we gather to pray until the atmosphere yields, until stagnant situations move and heaven's agenda for this season takes root in the City of Benin and on earth. This is apostolic authority in operation: prayer that doesn't just ask, but commands change.`}</p>
        <p className="leading-[normal] mb-0">Join Apostle Arome Osayi, hosted by Rev Ohis and Pastor Anwinli Ojeikere as we contend for a fresh move of God in Benin city.</p>
        <p className="leading-[normal]">Your breakthrough has a date. Come and encounter the shift.</p>
      </div>
    </div>
  );
}

function AkarIconsArrowUp() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="akar-icons:arrow-up">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="akar-icons:arrow-up">
          <path d={svgPaths.pa571f80} id="Vector" stroke="#FF8800" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="text">
      <AkarIconsArrowUp />
      <div className="[word-break:break-word] flex-[1_0_0] font-['Poppins:Regular',sans-serif] h-[79px] leading-[0] min-w-px not-italic relative text-[16px] text-black">
        <p className="font-['Poppins:Medium',sans-serif] leading-[normal] mb-0">Impartation</p>
        <p className="leading-[normal] mb-0 text-[#262422]">Receiving a fresh measure of grace and authority for kingdom assignments .</p>
        <p className="leading-[normal]">​</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-6.67%]">
        <svg className="block size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
          <g id="Group">
            <path d={svgPaths.p2892c000} id="Vector" stroke="#FF8800" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p17051d80} id="Vector_2" stroke="#FF8800" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AkarIconsSun() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="akar-icons:sun">
      <Group />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="text">
      <AkarIconsSun />
      <div className="[word-break:break-word] flex-[1_0_0] font-['Poppins:Regular',sans-serif] h-[79px] leading-[0] min-w-px not-italic relative text-[16px] text-black">
        <p className="font-['Poppins:Medium',sans-serif] leading-[normal] mb-0">Prophetic Direction</p>
        <p className="leading-[normal] mb-0 text-[#262422]">Navigating personal and generational destinies under the guidance of the Spirit.</p>
        <p className="leading-[normal]">​</p>
      </div>
    </div>
  );
}

function AkarIconsArrowRight1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="akar-icons:arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="akar-icons:arrow-right">
          <path d={svgPaths.p3ddb6a80} id="Vector" stroke="#FF8800" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="text">
      <AkarIconsArrowRight1 />
      <div className="[word-break:break-word] flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[0] min-w-px not-italic relative text-[16px] text-black">
        <p className="leading-[normal] mb-0">Action</p>
        <p className="font-['Poppins:Regular',sans-serif] leading-[normal] text-[#262422]">We want you to experience real changes all around your life.</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[normal] min-w-px not-italic relative text-[16px] text-black whitespace-pre-wrap">{`Join us and if you are interested in volunteering  let us know by clicking the button below`}</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Text">
      <Text1 />
      <Text2 />
      <Text3 />
      <Frame27 />
      <a href="#volunteer" className="bg-[#f80] cursor-pointer h-[54px] relative rounded-[36px] shrink-0 w-[190px] flex items-center justify-center hover:opacity-90 transition-opacity" data-name="CTA">
        <div aria-hidden className="absolute border border-[#f70] border-solid inset-0 pointer-events-none rounded-[36px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-left text-white whitespace-nowrap">
              <p className="leading-[24px]">Volunteer</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] h-[642px] items-start justify-center relative shrink-0 w-[650px]">
      <Frame31 />
      <Frame28 />
      <Text />
    </div>
  );
}

function Frame26() {
  return (
    <div className="-translate-x-1/2 absolute flex h-[499.77px] items-center justify-center left-[calc(50%-10.37px)] top-0 w-[430.264px]">
      <div className="flex-none rotate-[-3.82deg]">
        <div className="bg-[rgba(255,136,0,0.75)] h-[474.2px] relative rounded-[29.375px] w-[399.554px]" />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="-translate-x-1/2 absolute flex h-[499.77px] items-center justify-center left-[calc(50%+10.37px)] top-[20.74px] w-[430.264px]">
      <div className="flex-none rotate-[-3.82deg]">
        <div className="h-[474.2px] relative rounded-[29.375px] w-[399.554px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[29.375px]">
            <img alt="" className="absolute h-full left-[-18.14%] max-w-none top-[-0.01%] w-[118.68%]" src={imgFrame271} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[520.506px] overflow-clip relative shrink-0 w-[451px]">
      <Frame26 />
      <Frame25 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3.456px] items-center leading-[normal] not-italic relative shrink-0 w-[295.483px]">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[27.648px] text-black w-full">Apostle Arome Osayi</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#535252] text-[20.736px] text-center w-full">Mininstering</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[21.867px] h-[642px] items-center relative shrink-0 w-[574px]">
      <Frame />
      <Frame30 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-center justify-between p-[80px] relative shrink-0 w-[1440px]">
      <Frame29 />
      <Frame55 />
    </div>
  );
}

function About() {
  return (
    <div id="about" className="bg-white content-stretch flex flex-col h-[802px] items-start overflow-clip relative shrink-0 w-[1440px] scroll-mt-[90px]" data-name="About">
      <Frame42 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f70] text-[16px] text-center tracking-[0.32px] whitespace-nowrap">
        <p className="leading-[14px]">Registration</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start justify-center leading-[normal] not-italic relative shrink-0 w-full">
      <p className="font-['Copperplate:Bold',sans-serif] relative shrink-0 text-[48px] text-black uppercase w-full">Save your seat for Apostolic Shift</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#5c5854] text-[16px] w-full">Registration is free and will only take a minute. It helps in planning seat arrangements, prayer teams and follow-up for everyone attending</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#5c5854] text-[16px] w-full">{`Can’t decide on a day yet? Register for both `}</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-w-px relative">
      <Frame32 />
      <Frame34 />
    </div>
  );
}

function Frame36() {
  return <div className="bg-white border-[#3e2100] border-[0.5px] border-solid h-[45px] relative shrink-0 w-full" />;
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#262422] text-[12px] w-full">Full name</p>
      <Frame36 />
    </div>
  );
}

function Frame38() {
  return <div className="bg-white border-[#3e2100] border-[0.5px] border-solid h-[45px] relative shrink-0 w-full" />;
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#262422] text-[12px] w-full">Phone number</p>
      <Frame38 />
    </div>
  );
}

function Frame43() {
  return <div className="bg-white border-[#3e2100] border-[0.5px] border-solid h-[45px] relative shrink-0 w-full" />;
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#262422] text-[12px] w-full">Email Address</p>
      <Frame43 />
    </div>
  );
}

function Frame46() {
  return <div className="bg-white border-[#3e2100] border-[0.5px] border-solid flex-[1_0_0] h-[45px] min-w-px relative" />;
}

function AkarIconsTriangleRightFill() {
  return (
    <div className="absolute flex items-center justify-center left-[578px] size-[18px] top-[14px]">
      <div className="flex-none rotate-90">
        <div className="relative size-[18px]" data-name="akar-icons:triangle-right-fill">
          <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
            <g id="akar-icons:triangle-right-fill">
              <path d={svgPaths.p366e1100} fill="#FF8800" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[5px] h-[45px] items-start relative shrink-0 w-full">
      <Frame46 />
      <AkarIconsTriangleRightFill />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#262422] text-[12px] w-[min-content]">Day attending</p>
      <Frame45 />
      <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#262422] text-[12px] top-[37px] whitespace-nowrap">Both days</p>
    </div>
  );
}

function Frame48() {
  return <div className="bg-white border-[#3e2100] border-[0.5px] border-solid h-[45px] relative shrink-0 w-full" />;
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#262422] text-[12px] w-[min-content]">Number of attending</p>
      <Frame48 />
      <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#262422] text-[12px] top-[37px] w-[356px]">1</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame35 />
      <Frame37 />
      <Frame39 />
      <Frame44 />
      <Frame47 />
    </div>
  );
}

function AkarIconsArrowRight2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[25px]" data-name="akar-icons:arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 25 18" width="25">
        <g id="akar-icons:arrow-right">
          <path d={svgPaths.p34482d00} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[#f80] content-stretch flex flex-col h-[45px] items-center justify-center pl-[14px] pr-[15px] py-[18px] relative rounded-[27px] shrink-0 w-[49px]" data-name="CTA">
      <AkarIconsArrowRight2 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Cta />
      <div className="bg-[#f80] h-[45px] relative rounded-[36px] shrink-0 w-[148px]" data-name="CTA">
        <div aria-hidden className="absolute border border-[#f70] border-solid inset-0 pointer-events-none rounded-[36px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
              <p className="leading-[24px]">Submit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-w-px relative">
      <Frame40 />
      <Frame57 />
    </div>
  );
}

function Register() {
  return (
    <div id="register" className="bg-[#fffaf7] content-stretch flex gap-[48px] items-start overflow-clip px-[80px] py-[40px] relative shrink-0 w-full scroll-mt-[90px]" data-name="Register">
      <Frame33 />
      <div className="relative h-[480px] min-w-px w-full flex-[1_0_0] overflow-hidden rounded-[30px]">
        <img alt="Apostolic Shift conference worship" className="absolute inset-0 size-full object-cover" src={imgHeroSection} />
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[18px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f70] text-[16px] text-center tracking-[0.32px] whitespace-nowrap">
        <p className="leading-[14px]">BFC</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start justify-center not-italic relative shrink-0 w-full">
      <div className="font-['Copperplate:Bold',sans-serif] leading-[0] relative shrink-0 text-[48px] text-black uppercase w-[633px]">
        <p className="leading-[normal] mb-0">A look back</p>
        <p className="leading-[normal]">at past confrences</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#5c5854] text-[16px] w-[min-content]">Benin Fire conference 2022, here’s a look at some of our favourite moments from the road.</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#5c5854] text-[16px] w-[min-content]">{`Can’t decide on day yet? Register for both `}</p>

    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[246px] items-start justify-center relative shrink-0 w-full">
      <Frame50 />
      <Frame51 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[#f80] h-[308px] overflow-clip relative rounded-[30px] shrink-0 w-full">
      <Component1 className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] top-1/2" />
    </div>
  );
}

function AkarIconsArrowRight3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[25px]" data-name="akar-icons:arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 25 18" width="25">
        <g id="akar-icons:arrow-right">
          <path d={svgPaths.p34482d00} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Cta1() {
  return (
    <div className="bg-[#f80] content-stretch flex flex-col h-[45px] items-center justify-center pl-[14px] pr-[15px] py-[18px] relative rounded-[27px] shrink-0 w-[49px]" data-name="CTA">
      <AkarIconsArrowRight3 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <a href="https://maps.google.com/?q=The+Winlow+Center+By+Ascend+School+Airport+Road+Extension+Benin+City" target="_blank" rel="noopener noreferrer" className="bg-[#f80] h-[45px] relative rounded-[36px] shrink-0 w-[148px] flex items-center justify-center hover:opacity-90 transition-opacity" data-name="CTA">
        <div aria-hidden className="absolute border border-[#f70] border-solid inset-0 pointer-events-none rounded-[36px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
              <p className="leading-[24px]">Visit</p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://maps.google.com/?q=The+Winlow+Center+By+Ascend+School+Airport+Road+Extension+Benin+City" target="_blank" rel="noopener noreferrer" className="bg-[#f80] h-[45px] relative rounded-[36px] shrink-0 flex items-center justify-center hover:opacity-90 transition-opacity" data-name="CTA">
        <div aria-hidden className="absolute border border-[#f70] border-solid inset-0 pointer-events-none rounded-[36px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
              <p className="leading-[21px]">The Winlow Center By Ascend School, Airport Road Extension, Benin City</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Cta1 />
      <Frame59 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] h-[810px] items-start overflow-clip p-[80px] relative shrink-0 w-full">
      <Frame49 />
      <Frame60 />
      <Frame58 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[18px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f70] text-[16px] text-center tracking-[0.32px] whitespace-nowrap">
        <p className="leading-[14px]">Serve</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start justify-center leading-[normal] not-italic relative shrink-0 w-full">
      <p className="font-['Copperplate:Bold',sans-serif] relative shrink-0 text-[48px] text-black uppercase w-full">Be A WORKER FOR APOSTOLIC SHIFT</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#5c5854] text-[16px] w-full">{`Someone has to hold the atmosphere while people encounter God. Every volunteer's assignment is the same: create room for God to move, and clear what would hinder it.`}</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame53 />
      <Frame54 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Poppins:Regular',sans-serif] gap-[5px] items-start leading-[normal] not-italic relative shrink-0 text-[14px] w-full">
      <p className="flex-[1_0_0] min-w-px relative text-[#242221]">{`Ushering & protocol`}</p>
      <p className="relative shrink-0 text-[#f70] whitespace-nowrap">Both days</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame66 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 626 1" width="626">
            <line id="Line 1" stroke="#FF8800" strokeOpacity="0.51" x2="626" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame65 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Poppins:Regular',sans-serif] gap-[5px] items-start leading-[normal] not-italic relative shrink-0 text-[14px] w-full">
      <p className="flex-[1_0_0] min-w-px relative text-[#242221]">{`Media & live stream`}</p>
      <p className="relative shrink-0 text-[#f70] whitespace-nowrap">Both days</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame69 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 626 1" width="626">
            <line id="Line 1" stroke="#FF8800" strokeOpacity="0.51" x2="626" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame68 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Poppins:Regular',sans-serif] gap-[5px] items-start leading-[normal] not-italic relative shrink-0 text-[14px] w-full">
      <p className="flex-[1_0_0] min-w-px relative text-[#242221]">Care team</p>
      <p className="relative shrink-0 text-[#f70] whitespace-nowrap">Both days</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame72 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 626 1" width="626">
            <line id="Line 1" stroke="#FF8800" strokeOpacity="0.51" x2="626" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame71 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Poppins:Regular',sans-serif] gap-[5px] items-start leading-[normal] not-italic relative shrink-0 text-[14px] w-full">
      <p className="flex-[1_0_0] min-w-px relative text-[#242221]">Choir</p>
      <p className="relative shrink-0 text-[#f70] whitespace-nowrap">Both days</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame75 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 626 1" width="626">
            <line id="Line 1" stroke="#FF8800" strokeOpacity="0.51" x2="626" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame74 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Poppins:Regular',sans-serif] gap-[5px] items-start leading-[normal] not-italic relative shrink-0 text-[14px] w-full">
      <p className="flex-[1_0_0] min-w-px relative text-[#242221]">Follow-up and registration desk</p>
      <p className="relative shrink-0 text-[#f70] whitespace-nowrap">Both days</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame78 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 626 1" width="626">
            <line id="Line 1" stroke="#FF8800" strokeOpacity="0.51" x2="626" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame77 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
      <Frame64 />
      <Frame67 />
      <Frame70 />
      <Frame73 />
      <Frame76 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame62 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[64px] items-start min-w-px relative">
      <Frame52 />
      <Frame61 />
    </div>
  );
}

function Frame83() {
  return <div className="bg-[#fafafa] border border-[#b3a79b] border-solid h-[45px] relative shrink-0 w-full" />;
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#242221] text-[12px] w-full">Full name</p>
      <Frame83 />
    </div>
  );
}

function Frame85() {
  return <div className="bg-[#fafafa] border border-[#b3a79b] border-solid h-[45px] relative shrink-0 w-full" />;
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#242221] text-[12px] w-full">Phone number</p>
      <Frame85 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame82 />
      <Frame84 />
    </div>
  );
}

function AkarIconsBox() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="akar-icons:box">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="akar-icons:box">
          <path d={svgPaths.p3a2bc380} id="Vector" stroke="#FF8800" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame87() {
  return (
    <div className="border border-[#b3a79b] border-solid content-stretch flex gap-[16px] h-[45px] items-center px-[12px] relative shrink-0 w-full">
      <AkarIconsBox />
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">{`Ushering & protocol`}</p>
    </div>
  );
}

function AkarIconsSun1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="akar-icons:sun">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="akar-icons:box">
          <path d={svgPaths.p3a2bc380} id="Vector" stroke="#FF8800" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame88() {
  return (
    <div className="border border-[#b3a79b] border-solid content-stretch flex gap-[16px] h-[45px] items-center px-[12px] relative shrink-0 w-full">
      <AkarIconsSun1 />
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">{`Media & live stream`}</p>
    </div>
  );
}

function AkarIconsBox1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="akar-icons:box">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="akar-icons:box">
          <path d={svgPaths.p3a2bc380} id="Vector" stroke="#FF8800" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame89() {
  return (
    <div className="border border-[#b3a79b] border-solid content-stretch flex gap-[16px] h-[45px] items-center px-[12px] relative shrink-0 w-full">
      <AkarIconsBox1 />
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Hospitality</p>
    </div>
  );
}

function AkarIconsBox2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="akar-icons:box">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="akar-icons:box">
          <path d={svgPaths.p3a2bc380} id="Vector" stroke="#FF8800" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame90() {
  return (
    <div className="border border-[#b3a79b] border-solid content-stretch flex gap-[16px] h-[45px] items-center px-[12px] relative shrink-0 w-full">
      <AkarIconsBox2 />
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Prayer team</p>
    </div>
  );
}

function AkarIconsBox3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="akar-icons:box">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="akar-icons:box">
          <path d={svgPaths.p3a2bc380} id="Vector" stroke="#FF8800" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame91() {
  return (
    <div className="border border-[#b3a79b] border-solid content-stretch flex gap-[16px] h-[45px] items-center px-[12px] relative shrink-0 w-full">
      <AkarIconsBox3 />
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Choir</p>
    </div>
  );
}

function AkarIconsBox4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="akar-icons:box">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="akar-icons:box">
          <path d={svgPaths.p3a2bc380} id="Vector" stroke="#FF8800" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame92() {
  return (
    <div className="border border-[#b3a79b] border-solid content-stretch flex gap-[16px] h-[45px] items-center px-[12px] relative shrink-0 w-full">
      <AkarIconsBox4 />
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Follow-up team</p>
    </div>
  );
}

function AkarIconsBox5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="akar-icons:box">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="akar-icons:box">
          <path d={svgPaths.p3a2bc380} id="Vector" stroke="#FF8800" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame93() {
  return (
    <div className="border border-[#b3a79b] border-solid content-stretch flex gap-[16px] h-[45px] items-center px-[12px] relative shrink-0 w-full">
      <AkarIconsBox5 />
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Anywhere needed</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#242221] text-[12px] w-full">Where would you like to serve?</p>
      <Frame87 />
      <Frame88 />
      <Frame89 />
      <Frame90 />
      <Frame91 />
      <Frame92 />
      <Frame93 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame81 />
      <Frame86 />
    </div>
  );
}

function AkarIconsArrowRight4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[25px]" data-name="akar-icons:arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 25 18" width="25">
        <g id="akar-icons:arrow-right">
          <path d={svgPaths.p34482d00} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Cta2() {
  return (
    <div className="bg-[#f80] content-stretch flex flex-col h-[45px] items-center justify-center pl-[14px] pr-[15px] py-[18px] relative rounded-[27px] shrink-0 w-[49px]" data-name="CTA">
      <AkarIconsArrowRight4 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Cta2 />
      <div className="bg-[#f80] h-[45px] relative rounded-[36px] shrink-0 w-[176px]" data-name="CTA">
        <div aria-hidden className="absolute border border-[#f70] border-solid inset-0 pointer-events-none rounded-[36px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
              <p className="leading-[24px]">Sign up to serve</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#5c5854] text-[12px] w-[min-content]">A team lead will reach out to confirm your role</p>
      <Frame95 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[579px] items-start relative shrink-0 w-[606px]">
      <Frame80 />
      <Frame94 />
    </div>
  );
}

function Volunteer() {
  return (
    <div id="volunteer" className="bg-[#fffaf7] content-stretch flex gap-[48px] h-[801px] items-start overflow-clip p-[80px] relative shrink-0 w-full scroll-mt-[90px]" data-name="Volunteer">
      <Frame63 />
      <VolunteerForm />
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[18px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f70] text-[16px] text-center tracking-[0.32px] whitespace-nowrap">
        <p className="leading-[14px]">Give</p>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start justify-center not-italic relative shrink-0 w-full">
      <p className="font-['Copperplate:Bold',sans-serif] leading-[normal] relative shrink-0 text-[48px] text-black uppercase w-full">SUPPORT Apostolic Shift</p>
      <div className="font-['Poppins:Regular',sans-serif] leading-[0] relative shrink-0 text-[#5c5854] text-[0px] w-full">
        <p className="leading-[normal] mb-0 text-[16px]">The Apostolic Shift is a gathering where God is set to break out and shift situations that seem permanent. As we contend for this shift, we are stepping out in faith, believing God for what He is set to do in our midst.</p>
        <p className="leading-[normal] mb-0 text-[16px]">We want to create room for heaven to move, and you can be part of making that happen.</p>
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] text-[16px] text-black">Join us./Plant/Sow</p>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-[631px]">
      <Frame97 />
      <Frame98 />
    </div>
  );
}

function Frame100() {
  return <div className="content-stretch flex flex-col h-[30px] items-start px-[14px] relative shrink-0 w-full" />;
}

function FaBank() {
  return (
    <div className="h-[16.495px] relative shrink-0 w-[17.673px]" data-name="fa:bank">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.4951" preserveAspectRatio="none" viewBox="0 0 17.6733 16.4951" width="17.6733">
        <g clipPath="url(#clip0_0_174)" id="fa:bank">
          <path d={svgPaths.p31108880} fill="black" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_174">
            <rect fill="white" height="16.4951" width="17.6733" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[9.426px] items-center justify-center relative shrink-0">
      <FaBank />
      <p className="[word-break:break-word] font-['Copperplate_Gothic_Light:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[11.782px] text-black text-center whitespace-nowrap">Bank Transfer</p>
    </div>
  );
}

function FaBank1() {
  return (
    <div className="h-[16.495px] relative shrink-0 w-[17.673px]" data-name="fa:bank">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.4951" preserveAspectRatio="none" viewBox="0 0 17.6733 16.4951" width="17.6733">
        <g clipPath="url(#clip0_0_152)" id="fa:bank">
          <path d={svgPaths.p1e567a00} fill="white" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_152">
            <rect fill="white" height="16.4951" width="17.6733" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[10.604px]">
      <div className="flex flex-col justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Arial:Regular',sans-serif] gap-[4.713px] items-start justify-center leading-[0] not-italic pr-[4.713px] relative size-full">
          <div className="flex flex-col justify-center relative shrink-0 text-[14.139px] text-white w-full">
            <p className="leading-[normal]">Local Payment(Nigerian)</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#f6f6f6] text-[9.426px] w-full">
            <p className="leading-[normal]">Direct bank transfer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#f80] h-[75.995px] relative rounded-[10.604px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.426px] items-center px-[14px] relative size-full">
          <FaBank1 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[9.426px] items-start leading-[0] min-w-px not-italic relative text-black">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center relative shrink-0 text-[9.426px] w-full">
        <p className="leading-[normal]">Bank Name</p>
      </div>
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center relative shrink-0 text-[11.782px] w-full">
        <p className="leading-[normal]">ACCESS BANK PLC</p>
      </div>
    </div>
  );
}

function SolarCopyBold() {
  return (
    <div className="relative shrink-0 size-[9.426px]" data-name="solar:copy-bold">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.42574" preserveAspectRatio="none" viewBox="0 0 9.42574 9.42574" width="9.42574">
        <g id="solar:copy-bold">
          <path d={svgPaths.pa210300} fill="black" id="Vector" />
          <path d={svgPaths.paab6200} fill="black" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Payment() {
  return (
    <div className="bg-white drop-shadow-[19.441px_22.386px_4.124px_rgba(0,0,0,0),12.371px_14.728px_3.829px_rgba(0,0,0,0.01),7.069px_8.248px_3.24px_rgba(0,0,0,0.05),2.946px_3.535px_2.356px_rgba(0,0,0,0.09),0.589px_1.178px_1.178px_rgba(0,0,0,0.1)] h-[75.995px] relative rounded-[10.604px] shrink-0 w-full" data-name="Payment">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[5.891px] items-center justify-center px-[14.139px] py-[5.891px] relative size-full">
          <Frame6 />
          <SolarCopyBold />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[9.426px] items-start leading-[0] min-w-px not-italic relative text-black">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center relative shrink-0 text-[9.426px] w-full">
        <p className="leading-[normal]">Account Name</p>
      </div>
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center relative shrink-0 text-[11.782px] w-full">
        <p className="leading-[normal]">THE VOTAGE CHURCH</p>
      </div>
    </div>
  );
}

function SolarCopyBold1() {
  return (
    <div className="relative shrink-0 size-[9.426px]" data-name="solar:copy-bold">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.42574" preserveAspectRatio="none" viewBox="0 0 9.42574 9.42574" width="9.42574">
        <g id="solar:copy-bold">
          <path d={svgPaths.p1b855700} fill="black" id="Vector" />
          <path d={svgPaths.pfd380} fill="black" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Payment1() {
  return (
    <div className="bg-white drop-shadow-[0px_27.688px_3.829px_rgba(0,0,0,0),0px_17.673px_3.535px_rgba(0,0,0,0.01),0px_10.015px_2.946px_rgba(0,0,0,0.05),0px_4.124px_2.062px_rgba(0,0,0,0.09),0px_1.178px_1.178px_rgba(0,0,0,0.1)] h-[75.995px] relative rounded-[10.604px] shrink-0 w-full" data-name="Payment">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[5.891px] items-center justify-center px-[14.139px] py-[5.891px] relative size-full">
          <Frame7 />
          <SolarCopyBold1 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[9.426px] items-start leading-[0] min-w-px not-italic relative text-black">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center relative shrink-0 text-[9.426px] w-full">
        <p className="leading-[normal]">Account Number</p>
      </div>
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center relative shrink-0 text-[14.139px] w-full">
        <p className="leading-[normal]">0796105815</p>
      </div>
    </div>
  );
}

function SolarCopyBold2() {
  return (
    <div className="relative shrink-0 size-[9.426px]" data-name="solar:copy-bold">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.42574" preserveAspectRatio="none" viewBox="0 0 9.42574 9.42574" width="9.42574">
        <g id="solar:copy-bold">
          <path d={svgPaths.pbb9ab00} fill="black" id="Vector" />
          <path d={svgPaths.p35619800} fill="black" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Payment2() {
  return (
    <div className="bg-[#ffffed] drop-shadow-[33.579px_40.649px_7.364px_rgba(234,234,169,0),21.208px_25.921px_6.775px_rgba(234,234,169,0.01),11.782px_14.728px_5.597px_rgba(234,234,169,0.05),5.302px_6.48px_4.124px_rgba(234,234,169,0.09),1.178px_1.767px_2.356px_rgba(234,234,169,0.1)] h-[75.995px] relative rounded-[10.604px] shrink-0 w-full" data-name="Payment">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[5.891px] items-center justify-center px-[14.139px] py-[5.891px] relative size-full">
          <Frame9 />
          <SolarCopyBold2 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <CopyRow value="ACCESS BANK PLC">
        <Payment />
      </CopyRow>
      <CopyRow value="THE VOTAGE CHURCH">
        <Payment1 />
      </CopyRow>
      <CopyRow value="0796105815">
        <Payment2 />
      </CopyRow>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#fafafa] relative rounded-[4.713px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex font-['Arial:Regular',sans-serif] items-center justify-between leading-[0] not-italic px-[14.139px] py-[5.891px] relative size-full text-[9.426px] text-black">
          <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative">
            <p className="leading-[normal]">Currency</p>
          </div>
          <div className="flex flex-[1_0_0] flex-col justify-center min-w-px relative text-right">
            <p className="leading-[normal]">NGN (Nigerian Naira)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white content-stretch drop-shadow-[14.139px_61.856px_8.837px_rgba(0,0,0,0),8.837px_39.47px_8.248px_rgba(0,0,0,0.01),5.302px_22.386px_6.775px_rgba(0,0,0,0.05),2.356px_10.015px_5.007px_rgba(0,0,0,0.09),0.589px_2.356px_2.651px_rgba(0,0,0,0.1)] flex flex-col gap-[14.139px] items-center justify-center px-[14.139px] py-[23.564px] relative rounded-[5.302px] shrink-0 w-full">
      <div aria-hidden className="absolute border-[#ffe0be] border-solid border-t inset-0 pointer-events-none rounded-[5.302px]" />
      <Frame3 />
      <Frame5 />
      <Frame8 />
      <CopyRow value="NGN (Nigerian Naira)">
        <Frame11 />
      </CopyRow>
    </div>
  );
}

function Frame99() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center justify-center py-[11px] relative rounded-[10px] shrink-0 w-[585px]">
      <Frame100 />
      <Frame10 />
    </div>
  );
}

function Give() {
  return (
    <div id="give" className="bg-gradient-to-t content-stretch flex from-[#fffaf7] gap-[48px] items-start overflow-clip p-[80px] relative shrink-0 to-[#fff3eb] w-full scroll-mt-[90px]" data-name="Give">
      <Frame96 />
      <Frame99 />
    </div>
  );
}

function SocialPLaceHolder() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0" data-name="Social pLace holder">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white w-full">Follow us</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full">
      <div className="relative shrink-0 size-[45px]" data-name="ChatGPT Image Jan 19, 2026, 06_52_55 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImageJan192026065255Pm1} />
      </div>
      <SocialPLaceHolder />
    </div>
  );
}

function SocialPLaceHolder1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Social pLace holder">
      <p className="[word-break:break-word] font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white w-full">On all our social media</p>
    </div>
  );
}

function RiInstagramFill() {
  return (
    <a href="https://www.instagram.com/wearethevotage" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[31px] hover:opacity-80 transition-opacity" data-name="ri:instagram-fill">
      <svg className="absolute block inset-0 size-full" fill="none" height="31" preserveAspectRatio="none" viewBox="0 0 31 31" width="31">
        <g id="ri:instagram-fill">
          <path d={svgPaths.pb01400} fill="white" id="Vector" />
        </g>
      </svg>
    </a>
  );
}

function UilYoutube() {
  return (
    <a href="https://youtube.com/@thevotage" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[31px] hover:opacity-80 transition-opacity" data-name="uil:youtube">
      <svg className="absolute block inset-0 size-full" fill="none" height="31" preserveAspectRatio="none" viewBox="0 0 31 31" width="31">
        <g id="uil:youtube">
          <path d={svgPaths.p1cc1a6f0} fill="white" id="Vector" />
        </g>
      </svg>
    </a>
  );
}

function IcOutlineFacebook() {
  return (
    <a href="https://www.facebook.com/share/17qGmvUop7/" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[31px] hover:opacity-80 transition-opacity" data-name="ic:outline-facebook">
      <svg className="absolute block inset-0 size-full" fill="none" height="31" preserveAspectRatio="none" viewBox="0 0 31 31" width="31">
        <g id="ic:outline-facebook">
          <path d={svgPaths.pac21780} fill="white" id="Vector" />
        </g>
      </svg>
    </a>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <RiInstagramFill />
      <UilYoutube />
      <IcOutlineFacebook />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[17px] items-start min-w-px py-[16px] relative">
      <Frame17 />
      <SocialPLaceHolder1 />
      <Frame1 />
    </div>
  );
}

function QuickLinl() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[211px]" data-name="Quick Linl">
      <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Quick links</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Arial:Regular',sans-serif] gap-[16px] h-[154px] items-start justify-center leading-[normal] min-w-px not-italic relative text-[16px] text-white whitespace-nowrap" data-name="Container">
      <a href="#about" className="relative shrink-0 hover:underline">About</a>
      <a href="#register" className="relative shrink-0 hover:underline">Schedule</a>
      <a href="#register" className="relative shrink-0 hover:underline">Register</a>
      <a href="#volunteer" className="relative shrink-0 hover:underline">Volunteer</a>
      <a href="#give" className="relative shrink-0 hover:underline">Give</a>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Container1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[23px] items-start justify-center min-w-px relative">
      <QuickLinl />
      <Frame16 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame13 />
    </div>
  );
}

function Container2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-white w-full" data-name="Container">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center relative shrink-0 text-[24px] w-full">
        <p className="leading-[36px]">{`Visit `}</p>
      </div>
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center relative shrink-0 text-[14px] w-full">
        <p className="leading-[21px] mb-0">The Winlow Center By Ascend School, Airport Road Extension, Benin City</p>
        <a href="tel:+2347069701744" className="leading-[21px] text-white hover:underline">0706 970 1744</a>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[0] min-w-px not-italic relative" data-name="Container">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-[31px]">Stay connected</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[#d9d9d9] text-[14px] w-full">
        <p className="leading-[19px] whitespace-pre-wrap">{`Subscribe  for updates, devotionals and event announcements`}</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="bg-[rgba(255,255,255,0.1)] flex-[1_0_0] h-full min-w-px relative flex items-center">
        <div className="content-stretch flex items-center justify-center px-[13px] relative size-full w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent border-none outline-none flex-[1_0_0] min-w-px font-['Arial:Regular',sans-serif] text-[#959595] text-[16px] w-full placeholder:text-[#959595]"
          />
        </div>
      </div>
    </div>
  );
}

function Box() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-name="Box">
      <Frame12 />
      <button className="bg-[#f80] relative rounded-[36px] shrink-0 w-[162px] cursor-pointer hover:opacity-90 transition-opacity" data-name="CTA" type="button">
        <div aria-hidden className="absolute border border-[#f70] border-solid inset-0 pointer-events-none rounded-[36px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
              <p className="leading-[24px]">Subscribe</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function EmailWriteUp() {
  return (
    <div className="content-stretch flex h-[54px] items-center py-[4px] relative rounded-[8px] shrink-0 w-full" data-name="Email write-up">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Box />
    </div>
  );
}

function Email() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Email">
      <div className="[word-break:break-word] flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[normal]">Email</p>
      </div>
      <EmailWriteUp />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Container3 />
      <Email />
    </div>
  );
}

function Subcription() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-end relative shrink-0 w-full" data-name="Subcription">
      <Container2 />
      <Frame101 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
      <Frame14 />
      <Subcription />
    </div>
  );
}

function Frame102() {
  return (
    <div className="border-[#959595] border-solid border-t content-stretch flex items-center justify-center py-[17px] relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-white">
        <p className="leading-[31px] whitespace-pre-wrap">{`@ 2026 The  VOTAGE. All rights reserved`}</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#010101] content-stretch flex flex-col gap-[48px] items-start overflow-clip pb-[20px] pt-[80px] px-[80px] relative shrink-0 w-[1440px]" data-name="Footer">
      <Frame15 />
      <Frame102 />
    </div>
  );
}

export default function Background() {
  const [registerOpen, setRegisterOpen] = useState(false);
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Background">
      <Banner />
      <HeroSection onRegisterClick={() => setRegisterOpen(true)} />
      <About />
      <Register />
      <Frame56 />
      <Volunteer />
      <Give />
      <Footer />
      <RegisterModal open={registerOpen} onClose={() => setRegisterOpen(false)} />
    </div>
  );
}