"use client";

import { useState } from "react";
import svgPaths from "./svg-6q7qvt1dvg";

/* Images live in /public/img/apostolic-shift (copied verbatim from the Figma export). */
const imgHeroSection = "/img/apostolic-shift/46a110685be4de114d24186039db4eb4af1ded4a.png";
const imgChatGptImageJan192026065255Pm1 = "/img/apostolic-shift/29fcaaaf990b37e9f81712729c82732ad77fb95a.png";
const imgFrame271 = "/img/apostolic-shift/0e86aa29068604ea20cfd8b71c27c4c9c346d409.png";

import { CopyRow, VolunteerForm, RegistrationForm } from "../interactive";
import { RegisterModal } from "../register-modal";

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

function Frame23() {
  return (
    <a href="#register" className="content-stretch flex gap-1.5 items-center justify-center p-1.5 relative shrink-0">
      <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-normal not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">{`Join us for a time of intense Prayer and Worship `}</p>
      <AkarIconsArrowRight />
    </a>
  );
}

function Banner() {
  return (
    <div className="bg-[#f80] content-stretch flex flex-col items-center justify-center py-2.5 px-4 relative shrink-0 w-full z-40" data-name="Banner">
      <Frame23 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Copperplate:Bold',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.28px] uppercase whitespace-nowrap">
        <p className="leading-6.5">THE VOTAGE CHURCH</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Copperplate:Bold',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[#f80] text-[40px] text-center tracking-[1px] uppercase w-full">
        <p className="leading-11.5 whitespace-nowrap">APOSTOLIC</p>
        <p className="leading-11.5 whitespace-nowrap">SHIFT</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-center px-4.75 py-3.5 relative shrink-0">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
        <p className="leading-normal">22ND-23RD SEPTEMBER</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Copperplate:Bold',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.28px] uppercase w-full max-w-60">
        <p className="leading-8.25">A conference like never before seen</p>
      </div>
      <Frame21 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-9 items-center relative shrink-0 w-full">
      <Frame20 />
      <Frame25 />
    </div>
  );
}

function Frame17() {
  return <div className="content-stretch flex gap-6 h-5 items-center justify-center relative shrink-0 w-full" />;
}

function Frame18({ onRegisterClick }: { onRegisterClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-5 items-center w-full max-w-78.75 z-10">
      <Frame24 />
      <Frame19 />
      <button
        className="bg-[#f80] hover:bg-[#ff9500] cursor-pointer h-13 rounded-[36px] px-9 flex items-center justify-center shadow-lg transition-colors mt-2"
        data-name="CTA"
        onClick={onRegisterClick}
        type="button"
      >
        <p className="font-['Poppins:Medium',sans-serif] text-[18px] text-white whitespace-nowrap">Register Now</p>
      </button>
    </div>
  );
}

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 left-0 right-0 z-50 w-full bg-[rgba(0,0,0,0.5)] backdrop-blur-md border-b border-white/10">
      <div className="flex h-16.25 items-center justify-between px-5 py-3 w-full" data-name="Navigation bar">
        <a href="#" className="relative shrink-0 size-10 rounded-full overflow-hidden bg-white p-1 flex items-center justify-center">
          <img alt="The Votage Church" className="size-full object-contain" src={imgChatGptImageJan192026065255Pm1} />
        </a>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="cursor-pointer p-2 text-white hover:opacity-80 transition-opacity"
        >
          <svg className="size-6" fill="none" height="14" viewBox="0 0 20 14" width="20">
            <path d="M1 1H19M9 7H19M4 13H19" stroke="white" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="bg-black/95 border-b border-white/10 px-6 py-5 flex flex-col gap-4 text-white font-['Poppins:Medium',sans-serif] text-[15px]">
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-[#f80] transition-colors py-1">The Experience</a>
          <a href="#volunteer" onClick={() => setMenuOpen(false)} className="hover:text-[#f80] transition-colors py-1">Volunteer</a>
          <a href="#give" onClick={() => setMenuOpen(false)} className="hover:text-[#f80] transition-colors py-1">Give</a>
          <a href="#register" onClick={() => setMenuOpen(false)} className="bg-[#f80] text-center text-white py-2.5 rounded-full font-medium mt-2">Register Now</a>
        </div>
      )}
    </div>
  );
}

function HeroSection({ onRegisterClick }: { onRegisterClick: () => void }) {
  return (
    <div className="min-h-175 overflow-hidden relative shrink-0 w-full bg-black flex flex-col justify-between" data-name="Hero section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 size-full object-cover" src={imgHeroSection} />
        <div className="absolute bg-[rgba(0,0,0,0.75)] inset-0" />
      </div>
      <NavigationBar />
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 py-15 px-5">
        <Frame18 onRegisterClick={onRegisterClick} />
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="col-1 flex h-[289.224px] items-center justify-center ml-0 mt-0 relative row-1 w-[90%] max-w-62.25">
      <div className="flex-none rotate-[-3.82deg]">
        <div className="bg-[rgba(255,136,0,0.75)] h-[274.426px] relative rounded-[17px] w-[231.228px]" />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="col-1 flex h-[289.224px] items-center justify-center ml-3 mt-3 relative row-1 w-[90%] max-w-62.25">
      <div className="flex-none rotate-[-3.82deg]">
        <div className="h-[274.426px] relative rounded-[17px] w-[231.228px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[17px]">
            <img alt="" className="absolute h-full left-[-18.14%] max-w-none top-[-0.01%] w-[118.68%]" src={imgFrame271} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-0 place-items-start relative shrink-0">
      <Frame27 />
      <Frame26 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-0.5 items-center leading-normal not-italic relative shrink-0 w-full max-w-42.75">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[16px] text-black w-full text-center">Apostle Arome Osayi</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#535252] text-[12px] text-center w-full">Ministering</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center justify-center p-2.5 relative shrink-0 w-full">
      <div className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-0 not-italic relative shrink-0 text-[#262422] text-[16px] w-full">
        <p className="leading-normal mb-0">There are moments in the spirit when everything changes, not gradually, but suddenly. Apostolic Shift is one of those moments.</p>
        <p className="leading-normal mb-0">{`A days power packed conference Where we gather to pray until the atmosphere yields, until stagnant situations move and heaven's agenda for this season takes root in the City of Benin and on earth. This is apostolic authority in operation: prayer that doesn't just ask, but commands change.`}</p>
        <p className="leading-normal mb-0">Join Apostle Arome Osayi, hosted by Rev Ohis and Pastor Anwinli Ojeikere as we contend for a fresh move of God in Benin city.</p>
        <p className="leading-normal">Your breakthrough has a date. Come and encounter the shift.</p>
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
      <div className="[word-break:break-word] font-['Poppins:Regular',sans-serif] h-19.75 leading-0 not-italic relative shrink-0 text-[16px] text-black w-full">
        <p className="font-['Poppins:Medium',sans-serif] leading-normal mb-0">Impartation</p>
        <p className="leading-normal mb-0 text-[#262422]">Receiving a fresh measure of grace and authority for kingdom assignments .</p>
        <p className="leading-normal">​</p>
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
      <div className="[word-break:break-word] font-['Poppins:Regular',sans-serif] h-19.75 leading-0 not-italic relative shrink-0 text-[16px] text-black w-full">
        <p className="font-['Poppins:Medium',sans-serif] leading-normal mb-0">Prophetic Direction</p>
        <p className="leading-normal mb-0 text-[#262422]">Navigating personal and generational destinies under the guidance of the Spirit.</p>
        <p className="leading-normal">​</p>
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
      <div className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-0 not-italic relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-normal mb-0">Action</p>
        <p className="font-['Poppins:Regular',sans-serif] leading-normal text-[#262422]">We want you to experience real changes all around your life.</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-center p-2.5 relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-normal not-italic relative shrink-0 text-[16px] text-black w-full whitespace-pre-wrap">{`Join us and if you are interested in volunteering  let us know by clicking the button below`}</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-center justify-center relative shrink-0 w-full" data-name="Text">
      <Text1 />
      <Text2 />
      <Text3 />
      <Frame28 />
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

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-5.5 items-center relative shrink-0 w-full">
      <Frame29 />
      <Text />
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute content-stretch flex flex-col gap-4 items-center left-5 top-10 w-[90%] max-w-93">
      <Group1 />
      <Frame31 />
      <Frame30 />
    </div>
  );
}

function About() {
  return (
    <div id="about" className="bg-white min-h-284.75 overflow-clip relative shrink-0 w-full scroll-mt-20" data-name="About">
      <Frame43 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[#f70] text-[14px] text-center tracking-[0.28px] whitespace-nowrap">
        <p className="leading-3.5">Registration</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-2.5 items-start justify-center leading-normal not-italic relative shrink-0 w-full">
      <p className="font-['Copperplate:Bold',sans-serif] relative shrink-0 text-[28px] text-black uppercase w-full">Save your seat for Apostolic Shift</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#5c5854] text-[14px] w-full">Registration is free and will only take a minute. It helps in planning seat arrangements, prayer teams and follow-up for everyone attending</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-center relative shrink-0 w-full">
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function Register() {
  return (
    <div id="register" className="bg-[#fffaf7] content-stretch flex flex-col gap-8 items-start overflow-clip px-5 py-10 relative shrink-0 w-full scroll-mt-20" data-name="Register">
      <Frame34 />
      <div className="w-full">
        <RegistrationForm compact />
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[#f70] text-[14px] text-center tracking-[0.28px] whitespace-nowrap">
        <p className="leading-3.5">Serve</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-2.5 items-start justify-center leading-normal not-italic relative shrink-0 w-full">
      <p className="font-['Copperplate:Bold',sans-serif] relative shrink-0 text-[28px] text-black uppercase w-full">Be A WORKER FOR APOSTOLIC SHIFT</p>
      <p className="font-['Poppins:Regular',sans-serif] min-w-full relative shrink-0 text-[#5c5854] text-[14px] w-min">{`Someone has to hold the atmosphere while people encounter God. Every volunteer's assignment is the same: create room for God to move, and clear what would hinder it.`}</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-center relative shrink-0 w-full">
      <Frame50 />
      <Frame51 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Poppins:Regular',sans-serif] gap-1.25 items-start leading-normal not-italic relative shrink-0 text-[14px] w-full">
      <p className="flex-[1_0_0] min-w-px relative text-[#242221]">{`Ushering & protocol`}</p>
      <p className="relative shrink-0 text-[#f70] whitespace-nowrap">Both days</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
      <Frame56 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 372 1" width="372">
            <line id="Line 1" stroke="#FF8800" strokeOpacity="0.51" x2="372" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame55 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Poppins:Regular',sans-serif] gap-1.25 items-start leading-normal not-italic relative shrink-0 text-[14px] w-full">
      <p className="flex-[1_0_0] min-w-px relative text-[#242221]">{`Media & live stream`}</p>
      <p className="relative shrink-0 text-[#f70] whitespace-nowrap">Both days</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
      <Frame59 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 372 1" width="372">
            <line id="Line 1" stroke="#FF8800" strokeOpacity="0.51" x2="372" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame58 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Poppins:Regular',sans-serif] gap-1.25 items-start leading-normal not-italic relative shrink-0 text-[14px] w-full">
      <p className="flex-[1_0_0] min-w-px relative text-[#242221]">Care team</p>
      <p className="relative shrink-0 text-[#f70] whitespace-nowrap">Both days</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
      <Frame62 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 372 1" width="372">
            <line id="Line 1" stroke="#FF8800" strokeOpacity="0.51" x2="372" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame61 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Poppins:Regular',sans-serif] gap-1.25 items-start leading-normal not-italic relative shrink-0 text-[14px] w-full">
      <p className="flex-[1_0_0] min-w-px relative text-[#242221]">Follow-up and registration desk</p>
      <p className="relative shrink-0 text-[#f70] whitespace-nowrap">Both days</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
      <Frame65 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 372 1" width="372">
            <line id="Line 1" stroke="#FF8800" strokeOpacity="0.51" x2="372" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame64 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
      <Frame53 />
      <Frame57 />
      <Frame60 />
      <Frame63 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start relative shrink-0 w-full">
      <Frame54 />
      <VolunteerForm compact />
    </div>
  );
}

function Volunteer() {
  return (
    <div id="volunteer" className="bg-white content-stretch flex flex-col gap-16 items-start overflow-clip px-5 py-10 relative shrink-0 w-full scroll-mt-20" data-name="Volunteer">
      <Frame49 />
      <Frame52 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center px-3.5 py-1.5 relative rounded-[18px] shrink-0 border border-[#f70] bg-white">
        <p className="font-['Poppins:Medium',sans-serif] text-[#f70] text-[14px] text-center tracking-[0.28px]">Give</p>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-2.5 items-start justify-center not-italic relative shrink-0 w-full">
      <p className="font-['Copperplate:Bold',sans-serif] leading-normal relative shrink-0 text-[28px] text-black uppercase w-full">SUPPORT Apostolic Shift</p>
      <div className="font-['Poppins:Regular',sans-serif] leading-relaxed relative shrink-0 text-[#5c5854] text-[14px] w-full flex flex-col gap-2">
        <p>The Apostolic Shift is a gathering where God is set to break out and shift situations that seem permanent. As we contend for this shift, we are stepping out in faith, believing God for what He is set to do in our midst.</p>
        <p>We want to create room for heaven to move, and you can be part of making that happen.</p>
        <p className="font-['Poppins:SemiBold',sans-serif] text-black font-semibold">Join us. / Plant / Sow</p>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-center relative shrink-0 w-full">
      <Frame80 />
      <Frame81 />
    </div>
  );
}

function BankIcon({ className = "w-7 h-7 text-black" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.5L2 6.5V8.5H22V6.5L12 1.5ZM4 10.5V18.5H6.5V10.5H4ZM8.75 10.5V18.5H11.25V10.5H8.75ZM13.5 10.5V18.5H16V10.5H13.5ZM18.25 10.5V18.5H20.75V10.5H18.25ZM2 20.5V22.5H22V20.5H2Z" />
    </svg>
  );
}

function CopyIcon({ className = "w-4.5 h-4.5 text-[#222]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon({ className = "w-4.5 h-4.5 text-emerald-600" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function PaymentItem({
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
      className={`group relative flex items-center justify-between rounded-2xl px-5 py-3.5 cursor-pointer transition-all duration-200 select-none ${
        highlight
          ? "bg-[#fffee9] shadow-[0_6px_20px_rgba(0,0,0,0.05)] border border-[#fae8b2]/60 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
          : "bg-white shadow-[0_6px_20px_rgba(0,0,0,0.05)] border border-black/4 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="flex flex-col min-w-0 pr-2">
        <span className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#6b7280] leading-tight mb-1">
          {label}
        </span>
        <span
          className={`font-['Poppins:Bold',sans-serif] font-bold text-black truncate tracking-tight ${
            highlight ? "text-[16px] sm:text-[17px]" : "text-[15px] sm:text-[16px]"
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
          className={`relative flex size-8 shrink-0 items-center justify-center rounded-lg transition-all ${
            copied
              ? "text-emerald-600 bg-emerald-50"
              : "text-neutral-700 hover:text-black hover:bg-neutral-100"
          }`}
        >
          {copied ? <CheckIcon className="size-4.5 text-emerald-600" /> : <CopyIcon className="size-4.5 text-neutral-800" />}
        </button>
      </div>

      {copied && (
        <span className="absolute -top-3 right-4 z-20 rounded-md bg-neutral-900 px-2.5 py-0.5 font-['Poppins:Medium',sans-serif] text-[11px] font-medium text-white shadow-lg pointer-events-none animate-in fade-in zoom-in-95 duration-150">
          Copied!
        </span>
      )}
    </div>
  );
}

function WaysToGiveCard() {
  return (
    <div className="flex flex-col gap-3.5 w-full max-w-100 mx-auto">
      <h3 className="font-['Poppins:SemiBold',sans-serif] text-[24px] font-semibold text-[#1a1a1a] tracking-tight">
        Ways to give
      </h3>

      <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-neutral-100 p-6 sm:p-7 flex flex-col gap-4">
        {/* Sub-header: Bank Transfer */}
        <div className="flex flex-col items-center justify-center gap-1 py-1">
          <BankIcon className="w-8 h-8 text-black" />
          <span className="font-['Copperplate:Regular',sans-serif] text-[13px] tracking-[2.5px] text-black font-semibold uppercase mt-0.5">
            BANK TRANSFER
          </span>
        </div>

        {/* Orange Banner: Local Payment */}
        <div className="bg-[#ff8000] rounded-2xl px-5 py-4 text-white flex items-center gap-3.5 shadow-sm">
          <BankIcon className="w-8 h-8 text-white shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="font-['Arial:Bold',sans-serif] font-bold text-[15px] leading-snug text-white">
              Local Payment(Nigerian)
            </span>
            <span className="font-['Arial:Regular',sans-serif] text-[12px] text-white/90 leading-tight mt-0.5">
              Direct bank transfer
            </span>
          </div>
        </div>

        {/* 3 Payment details rows */}
        <div className="flex flex-col gap-3">
          <PaymentItem label="Bank Name" value="ACCESS BANK PLC" />
          <PaymentItem label="Account Name" value="THE VOTAGE CHURCH" />
          <PaymentItem label="Account Number" value="0796105815" highlight />
        </div>

        {/* Currency row */}
        <div className="bg-[#f5f5f5] rounded-xl px-4 py-3 flex items-center justify-between font-['Poppins:Regular',sans-serif] text-[13px] text-neutral-600">
          <span>Currency</span>
          <span className="font-medium text-neutral-900">NGN (Nigerian Naira)</span>
        </div>
      </div>
    </div>
  );
}

function Give() {
  return (
    <div id="give" className="bg-linear-to-t content-stretch flex flex-col from-[#fffaf7] gap-10 items-center overflow-clip px-5 py-12 relative shrink-0 to-[#fff3eb] w-full scroll-mt-20" data-name="Give">
      <div className="w-full max-w-97.5">
        <Frame79 />
      </div>
      <WaysToGiveCard />
    </div>
  );
}

function SocialPLaceHolder() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0" data-name="Social pLace holder">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-normal not-italic relative shrink-0 text-[24px] text-white w-full">Follow us</p>
    </div>
  );
}

function Frame16() {
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
      <p className="[word-break:break-word] font-['Arial:Regular',sans-serif] leading-normal not-italic relative shrink-0 text-[14px] text-white w-full">On all our social media</p>
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

function Frame() {
  return (
    <div className="content-stretch flex gap-4 items-center relative shrink-0 w-full">
      <RiInstagramFill />
      <UilYoutube />
      <IcOutlineFacebook />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-4.25 items-start py-4 relative shrink-0 w-full">
      <Frame16 />
      <SocialPLaceHolder1 />
      <Frame />
    </div>
  );
}

function QuickLinl() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-52.75" data-name="Quick Linl">
      <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-normal not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Quick links</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Arial:Regular',sans-serif] gap-4 h-38.5 items-start justify-center leading-normal min-w-px not-italic relative text-[16px] text-white whitespace-nowrap" data-name="Container">
      <a href="#about" className="relative shrink-0 hover:underline">About</a>
      <a href="#register" className="relative shrink-0 hover:underline">Schedule</a>
      <a href="#register" className="relative shrink-0 hover:underline">Register</a>
      <a href="#volunteer" className="relative shrink-0 hover:underline">Volunteer</a>
      <a href="#give" className="relative shrink-0 hover:underline">Give</a>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Container1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-5.75 items-start justify-center relative shrink-0 w-full">
      <QuickLinl />
      <Frame15 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame12 />
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
    <div className="[word-break:break-word] content-stretch flex flex-col gap-2 items-start leading-0 not-italic relative shrink-0 text-white w-full" data-name="Container">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-7.75">Stay connected</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[#d9d9d9] text-[14px] w-full">
        <p className="leading-4.75 whitespace-pre-wrap">{`Subscribe  for updates, devotionals and event announcements`}</p>
      </div>
    </div>
  );
}

function Frame11() {
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
      <Frame11 />
      <button className="bg-[#f80] relative rounded-[36px] shrink-0 w-23.5 cursor-pointer hover:opacity-90 transition-opacity" data-name="CTA" type="button">
        <div aria-hidden className="absolute border border-[#f70] border-solid inset-0 pointer-events-none rounded-[36px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-2.5 relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
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
    <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full" data-name="Email">
      <div className="[word-break:break-word] flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-0 not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-normal">Email</p>
      </div>
      <EmailWriteUp />
    </div>
  );
}

function Subcription() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-end relative shrink-0 w-full" data-name="Subcription">
      <Container2 />
      <Container3 />
      <Email />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex items-center justify-center py-4.25 relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#959595] border-solid border-t inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Arial:Regular',sans-serif] justify-center leading-0 min-w-px not-italic relative text-[14px] text-white">
        <p className="leading-7.75 whitespace-pre-wrap">{`@ 2026 The  VOTAGE. All rights reserved`}</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-10 items-center justify-center left-5 top-10 w-[90%] max-w-93">
      <Frame13 />
      <Subcription />
      <Frame84 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#010101] min-h-222.75 overflow-clip relative shrink-0 w-full" data-name="Footer">
      <Frame14 />
    </div>
  );
}

export default function AndroidCompact() {
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
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Android Compact - 1">
      <Banner />
      <HeroSection onRegisterClick={handleRegisterClick} />
      <About />
      <Register />
      <Volunteer />
      <Give />
      <Footer />
      <RegisterModal open={registerOpen} onClose={() => setRegisterOpen(false)} />
    </div>
  );
}