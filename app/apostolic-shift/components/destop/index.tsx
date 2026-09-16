"use client";

import { useState } from "react";
import svgPaths from "./svg-1uc59bgq44";
import { CopyRow, VolunteerForm, RegistrationForm } from "../interactive";
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
    <div className={className || `h-65 relative transition-all duration-300 ${property1 === "default" ? "w-18.75" : "w-100.5"}`}>
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
  const [activeFrame, setActiveFrame] = useState(property1);
  const isFrame309 = activeFrame === "Frame 309";
  const isFrame310OrFrame311OrFrame312OrFrame313OrFrame314OrFrame315Or = ["Frame 310", "Frame 311", "Frame 312", "Frame 313", "Frame 314", "Frame 315", "Frame 316", "Frame 317", "Frame 318"].includes(activeFrame);
  return (
    <div className={className || "relative"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-2 items-center relative size-full">
          <div className="cursor-pointer" onClick={() => setActiveFrame("Frame 309")} onMouseEnter={() => setActiveFrame("Frame 309")}>
            <Component className={`h-65 relative shrink-0 transition-all duration-300 ${isFrame310OrFrame311OrFrame312OrFrame313OrFrame314OrFrame315Or ? "w-18.75" : "w-100.5"}`} property1={isFrame310OrFrame311OrFrame312OrFrame313OrFrame314OrFrame315Or ? "default" : undefined} />
          </div>
          {isFrame310OrFrame311OrFrame312OrFrame313OrFrame314OrFrame315Or && (
            <div className={`h-65 relative shrink-0 cursor-pointer transition-all duration-300 ${["Frame 311", "Frame 312", "Frame 313", "Frame 314", "Frame 315", "Frame 316", "Frame 317", "Frame 318"].includes(activeFrame) ? "w-18.75" : "w-100.5"}`} data-name="Component 3" onClick={() => setActiveFrame("Frame 310")} onMouseEnter={() => setActiveFrame("Frame 310")}>
              <div className="absolute inset-0 rounded-[13px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle11} />
              </div>
            </div>
          )}
          <div className={`h-65 relative shrink-0 cursor-pointer transition-all duration-300 ${activeFrame === "Frame 311" ? "w-100.5" : "w-18.75"}`} data-name="Component 4" onClick={() => setActiveFrame("Frame 311")} onMouseEnter={() => setActiveFrame("Frame 311")}>
            <div className="absolute inset-0 rounded-[13px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle9} />
            </div>
          </div>
          <div className={`h-65 relative shrink-0 cursor-pointer transition-all duration-300 ${activeFrame === "Frame 312" ? "w-100.5" : "w-18.75"}`} data-name="Component 5" onClick={() => setActiveFrame("Frame 312")} onMouseEnter={() => setActiveFrame("Frame 312")}>
            <div className="absolute inset-0 rounded-[13px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle10} />
            </div>
          </div>
          {isFrame310OrFrame311OrFrame312OrFrame313OrFrame314OrFrame315Or && (
            <>
              <div className={`h-65 relative shrink-0 cursor-pointer transition-all duration-300 ${activeFrame === "Frame 313" ? "w-100.5" : "w-18.75"}`} data-name="Component 6" onClick={() => setActiveFrame("Frame 313")} onMouseEnter={() => setActiveFrame("Frame 313")}>
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle12} />
                </div>
              </div>
              <div className={`h-65 relative shrink-0 cursor-pointer transition-all duration-300 ${activeFrame === "Frame 314" ? "w-100.5" : "w-18.75"}`} data-name="Component 7" onClick={() => setActiveFrame("Frame 314")} onMouseEnter={() => setActiveFrame("Frame 314")}>
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle13} />
                </div>
              </div>
              <div className={`h-65 relative shrink-0 cursor-pointer transition-all duration-300 ${activeFrame === "Frame 315" ? "w-100.5" : "w-18.75"}`} data-name="Component 8" onClick={() => setActiveFrame("Frame 315")} onMouseEnter={() => setActiveFrame("Frame 315")}>
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle14} />
                </div>
              </div>
              <div className={`h-65 relative shrink-0 cursor-pointer transition-all duration-300 ${activeFrame === "Frame 316" ? "w-100.5" : "w-18.75"}`} data-name="Component 9" onClick={() => setActiveFrame("Frame 316")} onMouseEnter={() => setActiveFrame("Frame 316")}>
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle15} />
                </div>
              </div>
              <div className={`h-65 relative shrink-0 cursor-pointer transition-all duration-300 ${activeFrame === "Frame 317" ? "w-100.5" : "w-18.75"}`} data-name="Component 10" onClick={() => setActiveFrame("Frame 317")} onMouseEnter={() => setActiveFrame("Frame 317")}>
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle16} />
                </div>
              </div>
              <div className={`h-65 relative shrink-0 cursor-pointer transition-all duration-300 ${activeFrame === "Frame 318" ? "w-100.5" : "w-18.75"}`} data-name="Component 11" onClick={() => setActiveFrame("Frame 318")} onMouseEnter={() => setActiveFrame("Frame 318")}>
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle9} />
                </div>
              </div>
            </>
          )}
          {isFrame309 && (
            <>
              <div className="h-65 relative shrink-0 w-18.75 cursor-pointer transition-all duration-300" data-name="Component 3" onClick={() => setActiveFrame("Frame 309")} onMouseEnter={() => setActiveFrame("Frame 310")}>
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle11} />
                </div>
              </div>
              <div className="h-65 relative shrink-0 w-18.75 cursor-pointer transition-all duration-300" data-name="Component 6" onClick={() => setActiveFrame("Frame 313")} onMouseEnter={() => setActiveFrame("Frame 313")}>
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle12} />
                </div>
              </div>
              <div className="h-65 relative shrink-0 w-18.75 cursor-pointer transition-all duration-300" data-name="Component 7" onClick={() => setActiveFrame("Frame 314")} onMouseEnter={() => setActiveFrame("Frame 314")}>
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle13} />
                </div>
              </div>
              <div className="h-65 relative shrink-0 w-18.75 cursor-pointer transition-all duration-300" data-name="Component 8" onClick={() => setActiveFrame("Frame 315")} onMouseEnter={() => setActiveFrame("Frame 315")}>
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle14} />
                </div>
              </div>
              <div className="h-65 relative shrink-0 w-18.75 cursor-pointer transition-all duration-300" data-name="Component 9" onClick={() => setActiveFrame("Frame 316")} onMouseEnter={() => setActiveFrame("Frame 316")}>
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle15} />
                </div>
              </div>
              <div className="h-65 relative shrink-0 w-18.75 cursor-pointer transition-all duration-300" data-name="Component 10" onClick={() => setActiveFrame("Frame 317")} onMouseEnter={() => setActiveFrame("Frame 317")}>
                <div className="absolute inset-0 rounded-[13px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13px] size-full" src={imgRectangle16} />
                </div>
              </div>
              <div className="h-65 relative shrink-0 w-18.75 cursor-pointer transition-all duration-300" data-name="Component 11" onClick={() => setActiveFrame("Frame 318")} onMouseEnter={() => setActiveFrame("Frame 318")}>
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
    <div className="h-4.5 relative shrink-0 w-6.25" data-name="akar-icons:arrow-right">
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
    <a href="#register" className="cursor-pointer flex gap-2 items-center justify-center p-2.5 hover:opacity-80 transition-opacity">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        Join us for a time of intense Prayer and Worship
      </p>
      <AkarIconsArrowRight />
    </a>
  );
}

function Banner() {
  return (
    <div className="bg-[#f80] h-15 relative shrink-0 w-full z-40 flex items-center justify-center" data-name="Banner">
      <Frame24 />
    </div>
  );
}

function Container() {
  return (
    <div className="flex gap-8 items-center relative shrink-0" data-name="Container">
      <a href="#about" className="relative rounded-2xl shrink-0 hover:opacity-80 transition-opacity">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-2.5 relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[normal]">The Experience</p>
            </div>
          </div>
        </div>
      </a>
      <a href="#volunteer" className="relative rounded-2xl shrink-0 hover:opacity-80 transition-opacity">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-2.5 items-center justify-center p-2.5 relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[normal]">Volunteer</p>
            </div>
          </div>
        </div>
      </a>
      <a href="#give" className="relative rounded-2xl shrink-0 hover:opacity-80 transition-opacity">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-2.5 relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[normal]">Give</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function NavigationBar({ onRegisterClick }: { onRegisterClick: () => void }) {
  return (
    <div className="sticky top-0 left-0 right-0 z-50 w-full bg-[rgba(0,0,0,0.5)] backdrop-blur-md border-b border-white/10">
      <div className="flex h-22.5 items-center justify-between px-20 py-3 w-full max-w-360 mx-auto" data-name="Navigation bar">
        <a href="#" className="relative shrink-0 size-14.25 rounded-full overflow-hidden bg-white p-1 flex items-center justify-center" data-name="Logo">
          <img alt="The Votage Church" className="size-full object-contain" src={imgChatGptImageJan192026065255Pm1} />
        </a>
        <Container />
        <button
          className="flex h-12 items-center justify-center rounded-[36px] bg-[#f80] hover:bg-[#ff9500] px-7 font-['Poppins:Medium',sans-serif] text-[16px] text-white cursor-pointer transition-colors shadow-lg"
          data-name="CTA"
          onClick={onRegisterClick}
          type="button"
        >
          Register Now
        </button>
      </div>
    </div>
  );
}

function UiElementLogoaAndText() {
  return (
    <div className="flex items-center justify-center relative shrink-0" data-name="ui_element_logoa and text">
      <div className="flex flex-col font-['Copperplate:Bold',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[20px] text-center text-white tracking-[0.48px] uppercase whitespace-nowrap">
        <p className="leading-6.5">THE VOTAGE CHURCH</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Copperplate:Bold',sans-serif] justify-center leading-0 not-italic relative text-[#f80] text-[84px] text-center tracking-[1.68px] uppercase">
        <p className="leading-22.5 whitespace-nowrap">APOSTOLIC</p>
        <p className="leading-22.5 whitespace-nowrap">SHIFT</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-center px-6 py-4 relative shrink-0">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[24px] text-center text-white">
        <p className="leading-[normal]">22ND-23RD SEPTEMBER</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-center relative shrink-0 w-full">
      <Frame21 />
      <div className="[word-break:break-word] flex flex-col font-['Copperplate:Bold',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[24px] text-center text-white tracking-[0.48px] uppercase w-full">
        <p className="leading-8.25">A conference like never before seen</p>
      </div>
      <Frame22 />
    </div>
  );
}

function Frame18() {
  return <div className="content-stretch flex gap-6 h-5 items-center justify-center relative shrink-0 w-full" />;
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center w-full max-w-190.25">
      <UiElementLogoaAndText />
      <Frame20 />
      <Frame18 />
    </div>
  );
}

function HeroSection({ onRegisterClick }: { onRegisterClick: () => void }) {
  return (
    <div className="min-h-212.5 relative shrink-0 w-full bg-black overflow-hidden flex flex-col justify-between" data-name="Hero section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeroSection} />
        <div className="absolute bg-[rgba(0,0,0,0.75)] inset-0" />
      </div>
      <NavigationBar onRegisterClick={onRegisterClick} />
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 py-15 w-full max-w-360 mx-auto px-20">
        <Frame19 />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[#f70] text-[14px] text-center tracking-[0.28px] whitespace-nowrap">
        <p className="leading-3.5">The experience</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-start p-2.5 relative shrink-0 w-full">
      <div className="[word-break:break-word] flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-0 min-w-px not-italic relative text-[#262422] text-[16px]">
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
    <div className="relative shrink-0 size-4.5" data-name="akar-icons:arrow-up">
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
    <div className="content-stretch flex gap-2 items-start relative shrink-0 w-full" data-name="text">
      <AkarIconsArrowUp />
      <div className="[word-break:break-word] flex-[1_0_0] font-['Poppins:Regular',sans-serif] h-19.75 leading-0 min-w-px not-italic relative text-[16px] text-black">
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
    <div className="overflow-clip relative shrink-0 size-4.5" data-name="akar-icons:sun">
      <Group />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex gap-2 items-start relative shrink-0 w-full" data-name="text">
      <AkarIconsSun />
      <div className="[word-break:break-word] flex-[1_0_0] font-['Poppins:Regular',sans-serif] h-19.75 leading-0 min-w-px not-italic relative text-[16px] text-black">
        <p className="font-['Poppins:Medium',sans-serif] leading-[normal] mb-0">Prophetic Direction</p>
        <p className="leading-[normal] mb-0 text-[#262422]">Navigating personal and generational destinies under the guidance of the Spirit.</p>
        <p className="leading-[normal]">​</p>
      </div>
    </div>
  );
}

function AkarIconsArrowRight1() {
  return (
    <div className="relative shrink-0 size-4.5" data-name="akar-icons:arrow-right">
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
    <div className="content-stretch flex gap-2 items-start relative shrink-0 w-full" data-name="text">
      <AkarIconsArrowRight1 />
      <div className="[word-break:break-word] flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-0 min-w-px not-italic relative text-[16px] text-black">
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
    <div className="content-stretch flex flex-col gap-6 items-start justify-center relative shrink-0 w-full" data-name="Text">
      <Text1 />
      <Text2 />
      <Text3 />
      <Frame27 />
      <a href="#volunteer" className="bg-[#f80] cursor-pointer h-13.5 relative rounded-[36px] shrink-0 w-47.5 flex items-center justify-center hover:opacity-90 transition-opacity" data-name="CTA">
        <div aria-hidden className="absolute border border-[#f70] border-solid inset-0 pointer-events-none rounded-[36px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-2.5 relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[20px] text-left text-white whitespace-nowrap">
              <p className="leading-6">Volunteer</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-5.5 h-160.5 items-start justify-center relative shrink-0 w-162.5">
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
    <div className="h-[520.506px] overflow-clip relative shrink-0 w-112.75">
      <Frame26 />
      <Frame25 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3.456px] items-center leading-[normal] not-italic relative shrink-0 w-[295.483px]">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[27.648px] text-black w-full text-center">Apostle Arome Osayi</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#535252] text-[20.736px] text-center w-full">Ministering</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[21.867px] items-center relative shrink-0 w-143.5">
      <Frame />
      <Frame30 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-center justify-between px-20 py-20 relative shrink-0 w-full max-w-360 mx-auto">
      <Frame29 />
      <Frame55 />
    </div>
  );
}

function About() {
  return (
    <div id="about" className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full scroll-mt-22.5" data-name="About">
      <Frame42 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[#f70] text-[16px] text-center tracking-[0.32px] whitespace-nowrap">
        <p className="leading-3.5">Registration</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-2.5 items-start justify-center leading-[normal] not-italic relative shrink-0 w-full">
      <p className="font-['Copperplate:Bold',sans-serif] relative shrink-0 text-[48px] text-black uppercase w-full">Save your seat for Apostolic Shift</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#5c5854] text-[16px] w-full">Registration is free and will only take a minute. It helps in planning seat arrangements, prayer teams and follow-up for everyone attending</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#5c5854] text-[16px] w-full">{`Can’t decide on a day yet? Register for both `}</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-6 items-start justify-center min-w-px relative">
      <Frame32 />
      <Frame34 />
    </div>
  );
}

function Register() {
  return (
    <div id="register" className="bg-[#fffaf7] w-full scroll-mt-22.5" data-name="Register">
      <div className="content-stretch flex gap-12 items-start px-20 py-20 relative shrink-0 w-full max-w-360 mx-auto">
        <Frame33 />
        <div className="flex-[1_0_0] min-w-px w-full">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-3.5 py-1.5 relative rounded-[18px] shrink-0 border border-[#f70]">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[#f70] text-[14px] text-center tracking-[0.32px] whitespace-nowrap">
        <p className="leading-3.5">BFC</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-2.5 items-start justify-center not-italic relative shrink-0 w-full">
      <div className="font-['Copperplate:Bold',sans-serif] leading-[normal] relative shrink-0 text-[48px] text-black uppercase w-full">
        <p className="leading-[normal] mb-0">A look back</p>
        <p className="leading-[normal]">at past confrences</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#5c5854] text-[16px] w-min">Benin Fire conference 2022, here’s a look at some of our favourite moments from the road.</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#5c5854] text-[16px] w-min">{`Can’t decide on day yet? Register for both `}</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-5 items-start justify-center relative shrink-0 w-full">
      <Frame50 />
      <Frame51 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[#f80] h-77 overflow-clip relative rounded-[30px] shrink-0 w-full">
      <Component1 className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] top-1/2" />
    </div>
  );
}

function AkarIconsArrowRight3() {
  return (
    <div className="h-4.5 relative shrink-0 w-6.25" data-name="akar-icons:arrow-right">
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
    <div className="bg-[#f80] content-stretch flex flex-col h-11.25 items-center justify-center pl-3.5 pr-3.75 py-4.5 relative rounded-[27px] shrink-0 w-12.25" data-name="CTA">
      <AkarIconsArrowRight3 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <a href="https://maps.google.com/?q=The+Winlow+Center+By+Ascend+School+Airport+Road+Extension+Benin+City" target="_blank" rel="noopener noreferrer" className="bg-[#f80] h-11.25 relative rounded-[36px] px-6 flex items-center justify-center hover:opacity-90 transition-opacity" data-name="CTA">
        <div aria-hidden className="absolute border border-[#f70] border-solid inset-0 pointer-events-none rounded-[36px]" />
        <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-white whitespace-nowrap">
          The Winlow Center By Ascend School, Airport Road Extension, Benin City
        </p>
      </a>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-center gap-4 relative shrink-0">
      <Cta1 />
      <Frame59 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-white w-full py-20" data-name="Past Conferences">
      <div className="content-stretch flex flex-col gap-8 items-start px-20 relative shrink-0 w-full max-w-360 mx-auto">
        <Frame49 />
        <Frame60 />
        <Frame58 />
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-3 py-1.5 relative rounded-[18px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[#f70] text-[16px] text-center tracking-[0.32px] whitespace-nowrap">
        <p className="leading-3.5">Serve</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-2.5 items-start justify-center leading-[normal] not-italic relative shrink-0 w-full">
      <p className="font-['Copperplate:Bold',sans-serif] relative shrink-0 text-[48px] text-black uppercase w-full">Be A WORKER FOR APOSTOLIC SHIFT</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#5c5854] text-[16px] w-full">{`Someone has to hold the atmosphere while people encounter God. Every volunteer's assignment is the same: create room for God to move, and clear what would hinder it.`}</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-center relative shrink-0 w-full">
      <Frame53 />
      <Frame54 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Poppins:Regular',sans-serif] gap-1.25 items-start leading-[normal] not-italic relative shrink-0 text-[14px] w-full">
      <p className="flex-[1_0_0] min-w-px relative text-[#242221]">{`Ushering & protocol`}</p>
      <p className="relative shrink-0 text-[#f70] whitespace-nowrap">Both days</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
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
    <div className="[word-break:break-word] content-stretch flex font-['Poppins:Regular',sans-serif] gap-1.25 items-start leading-[normal] not-italic relative shrink-0 text-[14px] w-full">
      <p className="flex-[1_0_0] min-w-px relative text-[#242221]">{`Media & live stream`}</p>
      <p className="relative shrink-0 text-[#f70] whitespace-nowrap">Both days</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
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
    <div className="[word-break:break-word] content-stretch flex font-['Poppins:Regular',sans-serif] gap-1.25 items-start leading-[normal] not-italic relative shrink-0 text-[14px] w-full">
      <p className="flex-[1_0_0] min-w-px relative text-[#242221]">Care team</p>
      <p className="relative shrink-0 text-[#f70] whitespace-nowrap">Both days</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
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
    <div className="[word-break:break-word] content-stretch flex font-['Poppins:Regular',sans-serif] gap-1.25 items-start leading-[normal] not-italic relative shrink-0 text-[14px] w-full">
      <p className="flex-[1_0_0] min-w-px relative text-[#242221]">Choir</p>
      <p className="relative shrink-0 text-[#f70] whitespace-nowrap">Both days</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
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
    <div className="[word-break:break-word] content-stretch flex font-['Poppins:Regular',sans-serif] gap-1.25 items-start leading-[normal] not-italic relative shrink-0 text-[14px] w-full">
      <p className="flex-[1_0_0] min-w-px relative text-[#242221]">Follow-up and registration desk</p>
      <p className="relative shrink-0 text-[#f70] whitespace-nowrap">Both days</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-4 items-start min-w-px relative">
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-16 items-start min-w-px relative">
      <Frame52 />
      <Frame61 />
    </div>
  );
}

function Volunteer() {
  return (
    <div id="volunteer" className="bg-white w-full scroll-mt-22.5 py-20" data-name="Volunteer">
      <div className="content-stretch flex gap-12 items-start justify-between px-20 relative shrink-0 w-full max-w-360 mx-auto">
        <Frame63 />
        <VolunteerForm />
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-3 py-1.5 relative rounded-[18px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[#f70] text-[16px] text-center tracking-[0.32px] whitespace-nowrap">
        <p className="leading-3.5">Give</p>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-2.5 items-start justify-center not-italic relative shrink-0 w-full">
      <p className="font-['Copperplate:Bold',sans-serif] leading-[normal] relative shrink-0 text-[48px] text-black uppercase w-full">SUPPORT Apostolic Shift</p>
      <div className="font-['Poppins:Regular',sans-serif] leading-0 relative shrink-0 text-[#5c5854] text-[0px] w-full">
        <p className="leading-[normal] mb-0 text-[16px]">The Apostolic Shift is a gathering where God is set to break out and shift situations that seem permanent. As we contend for this shift, we are stepping out in faith, believing God for what He is set to do in our midst.</p>
        <p className="leading-[normal] mb-0 text-[16px]">We want to create room for heaven to move, and you can be part of making that happen.</p>
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] text-[16px] text-black">Join us./Plant/Sow</p>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-center relative shrink-0 w-157.75">
      <Frame97 />
      <Frame98 />
    </div>
  );
}

function DesktopBankIcon({ className = "w-8 h-8 text-black" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.5L2 6.5V8.5H22V6.5L12 1.5ZM4 10.5V18.5H6.5V10.5H4ZM8.75 10.5V18.5H11.25V10.5H8.75ZM13.5 10.5V18.5H16V10.5H13.5ZM18.25 10.5V18.5H20.75V10.5H18.25ZM2 20.5V22.5H22V20.5H2Z" />
    </svg>
  );
}

function DesktopCopyIcon({ className = "w-5 h-5 text-[#222]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function DesktopCheckIcon({ className = "w-5 h-5 text-emerald-600" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function DesktopPaymentItem({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async (e?: React.MouseEvent) => {
    e?.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={() => copy()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") copy();
      }}
      title={`Click to copy ${value}`}
      className={`group relative flex items-center justify-between rounded-[18px] px-6 py-4 cursor-pointer transition-all duration-200 select-none ${
        highlight
          ? "bg-[#fffee9] shadow-[0_6px_22px_rgba(0,0,0,0.05)] border border-[#fae8b2]/70 hover:shadow-[0_8px_26px_rgba(0,0,0,0.08)]"
          : "bg-white shadow-[0_6px_22px_rgba(0,0,0,0.05)] border border-black/4 hover:shadow-[0_8px_26px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="flex flex-col min-w-0 pr-3">
        <span className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#6b7280] leading-tight mb-1">
          {label}
        </span>
        <span
          className={`font-['Poppins:Bold',sans-serif] font-bold text-black truncate tracking-tight ${
            highlight ? "text-[18px]" : "text-[16px]"
          }`}
        >
          {value}
        </span>
      </div>

      <div className="flex items-center">
        <button
          type="button"
          onClick={(e) => copy(e)}
          aria-label={`Copy ${label}`}
          className={`relative flex size-9 shrink-0 items-center justify-center rounded-lg transition-all ${
            copied
              ? "text-emerald-600 bg-emerald-50"
              : "text-neutral-700 hover:text-black hover:bg-neutral-100"
          }`}
        >
          {copied ? <DesktopCheckIcon className="size-5 text-emerald-600" /> : <DesktopCopyIcon className="size-5 text-neutral-800" />}
        </button>
      </div>

      {copied && (
        <span className="absolute -top-3.5 right-5 z-20 rounded-md bg-neutral-900 px-3 py-0.5 font-['Poppins:Medium',sans-serif] text-[12px] font-medium text-white shadow-lg pointer-events-none animate-in fade-in zoom-in-95 duration-150">
          Copied!
        </span>
      )}
    </div>
  );
}

function DesktopWaysToGiveCard() {
  return (
    <div className="flex flex-col gap-4 w-146.25 shrink-0">
      <h3 className="font-['Poppins:SemiBold',sans-serif] text-[26px] font-semibold text-[#1a1a1a] tracking-tight">
        Ways to give
      </h3>

      <div className="bg-white rounded-[26px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-neutral-100 p-8 flex flex-col gap-5">
        {/* Centered Bank Icon + BANK TRANSFER */}
        <div className="flex flex-col items-center justify-center gap-1.5 pt-1 pb-1">
          <DesktopBankIcon className="w-9 h-9 text-black" />
          <span className="font-['Copperplate:Regular',sans-serif] text-[14px] tracking-[3px] text-black font-semibold uppercase mt-1">
            BANK TRANSFER
          </span>
        </div>

        {/* Orange Banner: Local Payment */}
        <div className="bg-[#ff8000] rounded-[18px] px-6 py-4.5 text-white flex items-center gap-4.5 shadow-sm">
          <DesktopBankIcon className="w-9 h-9 text-white shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="font-['Arial:Bold',sans-serif] font-bold text-[17px] leading-snug text-white">
              Local Payment(Nigerian)
            </span>
            <span className="font-['Arial:Regular',sans-serif] text-[13px] text-white/90 leading-tight mt-0.5">
              Direct bank transfer
            </span>
          </div>
        </div>

        {/* 3 Payment details rows */}
        <div className="flex flex-col gap-3.5">
          <DesktopPaymentItem label="Bank Name" value="ACCESS BANK PLC" />
          <DesktopPaymentItem label="Account Name" value="THE VOTAGE CHURCH" />
          <DesktopPaymentItem label="Account Number" value="0796105815" highlight />
        </div>

        {/* Currency row */}
        <div className="bg-[#f5f5f5] rounded-[14px] px-5 py-3.5 flex items-center justify-between font-['Poppins:Regular',sans-serif] text-[14px] text-neutral-600">
          <span>Currency</span>
          <span className="font-medium text-neutral-900">NGN (Nigerian Naira)</span>
        </div>
      </div>
    </div>
  );
}

function Give() {
  return (
    <div id="give" className="bg-linear-to-t from-[#fffaf7] to-[#fff3eb] w-full scroll-mt-22.5 py-20" data-name="Give">
      <div className="content-stretch flex gap-12 items-start justify-between px-20 relative shrink-0 w-full max-w-360 mx-auto">
        <Frame96 />
        <DesktopWaysToGiveCard />
      </div>
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
    <div className="content-stretch flex gap-4 items-end relative shrink-0 w-full">
      <div className="relative shrink-0 size-11.25" data-name="ChatGPT Image Jan 19, 2026, 06_52_55 PM 1">
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
    <a href="https://www.instagram.com/wearethevotage" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-7.75 hover:opacity-80 transition-opacity" data-name="ri:instagram-fill">
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
    <a href="https://youtube.com/@thevotage" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-7.75 hover:opacity-80 transition-opacity" data-name="uil:youtube">
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
    <a href="https://www.facebook.com/share/17qGmvUop7/" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-7.75 hover:opacity-80 transition-opacity" data-name="ic:outline-facebook">
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
    <div className="content-stretch flex gap-4 items-center relative shrink-0 w-full">
      <RiInstagramFill />
      <UilYoutube />
      <IcOutlineFacebook />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-4.25 items-start min-w-px py-4 relative">
      <Frame17 />
      <SocialPLaceHolder1 />
      <Frame1 />
    </div>
  );
}

function QuickLinl() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-52.75" data-name="Quick Linl">
      <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Quick links</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Arial:Regular',sans-serif] gap-4 h-38.5 items-start justify-center leading-[normal] min-w-px not-italic relative text-[16px] text-white whitespace-nowrap" data-name="Container">
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-5.75 items-start justify-center min-w-px relative">
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
    <div className="[word-break:break-word] content-stretch flex flex-col gap-4 items-start leading-0 not-italic relative shrink-0 text-white w-full" data-name="Container">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center relative shrink-0 text-[24px] w-full">
        <p className="leading-9">{`Visit `}</p>
      </div>
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center relative shrink-0 text-[14px] w-full">
        <p className="leading-5.25 mb-0">The Winlow Center By Ascend School, Airport Road Extension, Benin City</p>
        <a href="tel:+2347069701744" className="leading-5.25 text-white hover:underline">0706 970 1744</a>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-2 items-start leading-0 min-w-px not-italic relative" data-name="Container">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-7.75">Stay connected</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[#d9d9d9] text-[14px] w-full">
        <p className="leading-4.75 whitespace-pre-wrap">{`Subscribe  for updates, devotionals and event announcements`}</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="bg-[rgba(255,255,255,0.1)] flex-[1_0_0] h-full min-w-px relative flex items-center">
        <div className="content-stretch flex items-center justify-center px-3.25 relative size-full w-full">
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
    <div className="content-stretch flex flex-[1_0_0] gap-4 items-center min-w-px relative" data-name="Box">
      <Frame12 />
      <button className="bg-[#f80] relative rounded-[36px] shrink-0 w-40.5 cursor-pointer hover:opacity-90 transition-opacity" data-name="CTA" type="button">
        <div aria-hidden className="absolute border border-[#f70] border-solid inset-0 pointer-events-none rounded-[36px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-2.5 relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
              <p className="leading-6">Subscribe</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function EmailWriteUp() {
  return (
    <div className="content-stretch flex h-13.5 items-center py-1 relative rounded-lg shrink-0 w-full" data-name="Email write-up">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-lg" />
      <Box />
    </div>
  );
}

function Email() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-2 items-start min-w-px relative" data-name="Email">
      <div className="[word-break:break-word] flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[normal]">Email</p>
      </div>
      <EmailWriteUp />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex gap-4 items-start relative shrink-0 w-full">
      <Container3 />
      <Email />
    </div>
  );
}

function Subcription() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-end relative shrink-0 w-full" data-name="Subcription">
      <Container2 />
      <Frame101 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-center justify-center relative shrink-0 w-full">
      <Frame14 />
      <Subcription />
    </div>
  );
}

function Frame102() {
  return (
    <div className="border-[#959595] border-solid border-t content-stretch flex items-center justify-center py-4.25 relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Arial:Regular',sans-serif] justify-center leading-0 min-w-px not-italic relative text-[14px] text-white">
        <p className="leading-7.75 whitespace-pre-wrap">{`@ 2026 The  VOTAGE. All rights reserved`}</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#010101] w-full pb-5 pt-20" data-name="Footer">
      <div className="content-stretch flex flex-col gap-12 items-start px-20 relative shrink-0 w-full max-w-360 mx-auto">
        <Frame15 />
        <Frame102 />
      </div>
    </div>
  );
}

export default function Background() {
  const [registerOpen, setRegisterOpen] = useState(false);

  const handleRegisterClick = () => {
    const el = document.getElementById("register");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      setRegisterOpen(true);
    }
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full" data-name="Background">
      <Banner />
      <HeroSection onRegisterClick={handleRegisterClick} />
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