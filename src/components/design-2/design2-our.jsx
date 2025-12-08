import { ArrowRight } from "lucide-react";

const data = [
  {
    title: "LegalSifter AI",
    desc: "Your end-to-end contract intelligence platform for Web3, finance, security audits, vendor agreements, token contracts, and everything in between.",
    img: "/our.svg",
  },
  {
    title: "Sifter Assistant",
    desc: "An AI legal assistant that drafts, explains, translates, and reviews any contract - from SAFTs to NDAs to partnership deals. Built for founders, lawyers, developers and everyday crypto users.",
    img: "/our2.svg",
  },
];

const Design2Our = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full space-y-5 sm:space-y-6 lg:space-y-5">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-medium text-center">
          Our products
        </h1>
        <div className="flex flex-col md:flex-row justify-between w-full gap-6 md:gap-5">
          {data.map((item, index) => (
            <div key={index} className="space-y-4 sm:space-y-5 max-w-96 w-full">
              <img
                src={item.img}
                alt=""
                className="w-full h-auto object-contain"
              />
              <h1 className="text-xl sm:text-2xl lg:text-[25.3px] font-normal">
                {item.title}
              </h1>
              <p className="text-sm sm:text-base lg:text-[15.1px] font-normal">
                {item.desc}
              </p>
              <button
                className="backdrop-blur-2xl
    shadow-[6px_6px_6px_rgba(0,0,0,0.3),inset_-2px_-5px_20px_#90adff]
    bg-white
    px-5 sm:px-6 lg:px-7 py-[7px]
    rounded-xl
    font-normal
    text-sm sm:text-[15px] lg:text-[16px] leading-[150%] tracking-[-0.02em]
    text-black cursor-pointer flex items-center justify-center gap-2 border-2 border-white mt-5 sm:mt-6 lg:mt-7 w-full hover:bg-gray-100 transition-colors"
              >
                LEARN MORE <ArrowRight size={17} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Design2Our;
