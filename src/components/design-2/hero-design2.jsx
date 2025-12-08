import { Play } from "lucide-react";

const HeroDesign2 = () => {
  return (
    <div className="bg-[url('/bg-wrapper.jpg')] bg-no-repeat w-full bg-cover bg-center min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="text-white text-center lg:text-left flex-1">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4">
            WHY LEGALSIFTER
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            AI Powered Crypto Contract Review
            <span className="block italic font-medium mt-2">
              Built for the New Internet
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 text-gray-200">
            Streamline every agreement, from token deals to protocol
            integrations with intelligent automation, actionable risk insights
            and compliance you can rely on.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button
              type="button"
              className="bg-white/80 text-black font-semibold text-[17px] px-5 py-3 rounded-[50px] backdrop-blur-2xl shadow-[6px_6px_6px_rgba(0,0,0,0.3),inset_-4px_-10px_30px_rgba(144,173,255,0.8)] cursor-pointer w-full sm:w-auto"
            >
              Request Demo
            </button>

            <button className="flex items-center justify-center gap-2 border border-white/50 text-white font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition-all duration-300 w-full sm:w-auto cursor-pointer">
              <Play size={18} />
              Watch Overview
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center flex-1">
          <img
            alt="Glassy 3D icon of a document"
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto lg:h-[630px] object-contain drop-shadow-[10px_10px_20px_rgba(70,140,190,40)]"
            src="/Main-Image.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroDesign2;
