import "./page.css";

import trust1 from "../trusted/trust1.svg";
import trust10 from "../trusted/trust10.svg";
import trust2 from "../trusted/trust2.svg";
import trust3 from "../trusted/trust3.svg";
import trust4 from "../trusted/trust4.svg";
import trust5 from "../trusted/trust5.svg";
import trust6 from "../trusted/trust6.svg";
import trust7 from "../trusted/trust7.svg";
import trust8 from "../trusted/trust8.svg";
import trust9 from "../trusted/trust9.svg";

const logos = [
  trust1,
  trust2,
  trust3,
  trust4,
  trust5,
  trust6,
  trust7,
  trust8,
  trust9,
  trust10,
];

const TrustedBy = () => {
  return (
    <section className="trusted-section">
      <div className="trusted-container">
        <h2 className="trusted-title">
          Trusted by millions of users worldwide
        </h2>

        <div className="marquee-wrapper">
          <div className="marquee">
            {/* Bir marta asl logolar + bir marta duplicate = cheksiz marquee */}
            <div className="marquee-content">
              {logos.map((logo, index) => (
                <div key={`logo-${index}`} className="logo-item">
                  <img
                    src={logo}
                    alt={`Trusted partner ${index + 1}`}
                    className="logo-img"
                    loading="lazy" // tezlik uchun
                  />
                </div>
              ))}

              {/* Takroriy qism – animatsiya silliq bo‘lishi uchun */}
              {logos.map((logo, index) => (
                <div key={`logo-duplicate-${index}`} className="logo-item">
                  <img
                    src={logo}
                    alt={`Trusted partner ${index + 1}`}
                    className="logo-img"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
