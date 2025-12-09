import { motion } from "framer-motion";

const data = [
  "trusst1.svg",
  "trusst2.svg",
  "trusst3.svg",
  "trusst4.svg",
  "trusst5.svg",
  "trusst6.svg",
  "trusst7.svg",
  "trusst8.svg",
  "trusst9.svg",
  "trusst10.svg",
];

const Design2integrate = () => {
  // Datani 3 marta takrorlash uchun seamless loop yaratish
  const duplicatedData = [...data, ...data, ...data];

  return (
    <section className="">
      <div className="flex w-full justify-center mb-3">
        <h1 className="md:text-[40px] text-2xl px-4 font-normal text-white py-7">
          Trusted by millions of users worldwide
        </h1>
      </div>

      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [-200 * data.length, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedData.map((item, index) => (
            <div
              key={index}
              className="bg-[linear-gradient(180deg,#FFFFFF_0%,#5F617B_100%)] py-1 px-2 rounded-full shrink-0"
            >
              <img src={item} className="w-32 h-11 object-contain" alt="" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Design2integrate;

// <section className="">
//   <div className="flex w-full justify-center">
//     <h1 className="md:text-[40px] text-2xl px-4 font-normal text-white py-7">
//       Trusted by millions of users worldwide
//     </h1>
//   </div>
//   <div className="overflow-hidden">
//     <motion.div
//       className="flex gap-6"
//       animate={{
//         x: [0, -50 * data.length * 4], // Har bir element taxminan 200px (50*4) deb hisoblash
//       }}
//       transition={{
//         x: {
//           repeat: Infinity,
//           repeatType: "loop",
//           duration: 20,
//           ease: "linear",
//         },
//       }}
//     >
//       {duplicatedData.map((item, index) => (
//         <div
//           key={index}
//           className="bg-[linear-gradient(180deg,#FFFFFF_0%,#5F617B_100%)] py-1 px-2 w-fit rounded-full"
//         >
//           <img src={item} alt="" />
//         </div>
//       ))}
//     </motion.div>
//   </div>
// </section>
