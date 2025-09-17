import React from "react";
import { motion } from "motion/react";

const HorizontalCard = () => {
  return (
    <section>
      <div className="section-scroll-images z-[7] bg-white h-[320vh] relative">
        <div class="sticky-horizontal-cards bg-[#e7e7e7] justify-start items-center min-h-screen flex sticky overflow-hidden top-0">
          <div className="horizontal-cards gap-x-[10vw] gap-y-[10vw] w-full max-w-[1580px] flex mx-auto px-8">
            <div className="h-cards-wrapper justify-start items-center w-[26vw] h-[55vh] flex relative">
              <div className="fr-1 z-[6] bg-white w-full h-full absolute overflow-hidden rounded-2xl inset-[0%_auto_auto_0%]">
                <img
                  src="/images/circleimage-1.avif"
                  className="object-cover self-stretch w-full h-full relative"
                />
              </div>
              <motion.div
                class="fr-2 z-[5] origin-[0%] bg-neutral-400 w-full h-full absolute overflow-hidden rounded-2xl inset-[0%_auto_auto_0%]"
                style={{
                  x: "27vw",
                  y: "0px",
                  scale: 1,
                  rotateX: 0,
                  rotateY: 0,
                  rotate: 0,
                  skewX: 0,
                  skewY: 0,

                  willChange: "transform",
                  transformStyle: "preserve-3d",
                }}
              >
                {" "}
                <img
                  src="/images/circleimage-2.avif"
                  className="object-cover self-stretch w-full h-full relative"
                />
              </motion.div>
              <motion.div
                class="fr-3 z-[4] origin-[0%] bg-neutral-400 w-full h-full absolute overflow-hidden rounded-2xl inset-[0%_auto_auto_0%]"
                style={{
                  x: "54vw",
                  y: "0px",
                  scale: 1,
                  rotateX: 0,
                  skewX: 0,
                  skewY: 0,

                  willChange: "transform",
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src="/images/circleimage-3.avif"
                  className="object-cover self-stretch w-full h-full relative"
                />
              </motion.div>
              <motion.div
                class="fer-4 z-[3] origin-[0%] bg-neutral-400 w-full h-full absolute overflow-hidden rounded-2xl inset-[0%_auto_auto_0%]"
                style={{
                  x: "81vw",
                  y: "0px",
                  scale: 1,
                  rotateX: 0,
                  rotateY: 0,
                  rotate: 0,
                  skewX: 0,
                  skewY: 0,

                  willChange: "transform",
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src="/images/circleimage-4.avif"
                  className="object-cover self-stretch w-full h-full relative"
                />
              </motion.div>
              <motion.div
                class="fr-5 z-[2] origin-[0%] bg-neutral-400 w-full h-full absolute overflow-hidden rounded-2xl inset-[0%_auto_auto_0%]"
                style={{
                  x: "107vw",
                  y: "0px",
                  scale: 1,
                  rotateX: 0,
                  rotateY: 0,
                  rotate: 0,
                  skewX: 0,
                  skewY: 0,
                  willChange: "transform",
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src="/images/circleimage-5.avif"
                  className="object-cover self-stretch w-full h-full relative"
                />
              </motion.div>
            </div>
            <motion.div
              class="h-cards-content justify-start items-center w-[40vw] flex"
              style={{
                opacity: 0,
                x: "35vw",
                y: "0px",
                scale: 1,
                rotateX: 0,
                rotateY: 0,
                rotate: 0,
                skewX: 0,
                skewY: 0,
                willChange: "opacity, transform",
                transformStyle: "preserve-3d",
              }}
            > <div class="h-xl tracking-[-0.033em] text-[5em] font-bold leading-[1.06] my-0 font-sans">Your mental wellness journey starts now</div></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalCard;
