import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Header from "./Header";

const ImageCircle = () => {
  const sectionRef = useRef(null);

  // Track scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to spinner transforms
  const spinner1X = useTransform(scrollYProgress, [0, 1], ["0vw", "-16.5vw"]);
  const spinner2X = useTransform(scrollYProgress, [0, 1], ["-16.5vw", "-33vw"]);
  const spinner3X = useTransform(scrollYProgress, [0, 1], ["-33vw", "-49.5vw"]);
  const spinner4X = useTransform(scrollYProgress, [0, 1], ["49.5vw", "0vw"]);
  const spinner5X = useTransform(scrollYProgress, [0, 1], ["33vw", "16.5vw"]);

  const spinnerRotate = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"]);

  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      document.documentElement.classList.add("w-mod-touch");
    }
  }, []);

  return (
    <section ref={sectionRef} className="z-[4] bg-white relative">
      <Header />
      <div className="flex flex-col justify-between items-stretch w-full h-[700vh] relative">
        <div className="main-spinner sticky overflow-hidden top-0">
          <div className="spinner-l-wrapper w-auto h-full block relative overflow-visible">
            <motion.div
              className="spinner-container w-screen h-[100vw] flex relative"
              style={{
                willChange: "transform",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Spinner 1 */}
              <motion.div
                className="spinner-c flex-col justify-between w-[16vw] h-[100vw] flex absolute mx-auto inset-[0%_0%_auto]"
                style={{
                  x: spinner1X,
                  rotateZ: spinnerRotate,
                  perspective: "2000px",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl">
                  <img
                    src="/images/circleimage-1.avif"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div
                  className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <img
                    src="/images/circleimage-2.avif"
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>

              {/* Spinner 2 */}
              <motion.div
                className="spinner-c flex-col justify-between w-[16vw] h-[100vw] flex absolute mx-auto inset-[0%_0%_auto]"
                style={{
                  x: spinner2X,
                  rotateZ: spinnerRotate,
                  perspective: "2000px",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl">
                  <img
                    src="/images/circleimage-3.avif"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div
                  className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <img
                    src="/images/circleimage-4.avif"
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>

              {/* Spinner 3 */}
              <motion.div
                className="spinner-c flex-col justify-between w-[16vw] h-[100vw] flex absolute mx-auto inset-[0%_0%_auto]"
                style={{
                  x: spinner3X,
                  rotateZ: spinnerRotate,
                  perspective: "2000px",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl">
                  <img
                    src="/images/circleimage-5.avif"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div
                  className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <img
                    src="/images/circleimage-6.avif"
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>

              {/* Spinner 4 */}
              <motion.div
                className="spinner-c flex-col justify-between w-[16vw] h-[100vw] flex absolute mx-auto inset-[0%_0%_auto]"
                style={{
                  x: spinner4X,
                  rotateZ: spinnerRotate,
                  perspective: "2000px",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl">
                  <img
                    src="/images/circleimage-9.avif"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div
                  className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <img
                    src="/images/circleimage-10.avif"
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>

              {/* Spinner 5 */}
              <motion.div
                className="spinner-c flex-col justify-between w-[16vw] h-[100vw] flex absolute mx-auto inset-[0%_0%_auto]"
                style={{
                  x: spinner5X,
                  rotateZ: spinnerRotate,
                  perspective: "2000px",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl">
                  <img
                    src="/images/circleimage-11.avif"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div
                  className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <img
                    src="/images/circleimage-12.avif"
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* circle spinner text */}
        <div className="z-[2] flex-1 justify-end items-center flex flex-col relative">
          <div className="content-spinner text-center justify-start items-center w-[38vw] h-[52vw] flex relative flex-col">
            <div className="inner-heading-s z-[6] gap-x-6 gap-y-6 text-center justify-center items-center flex relative flex-col">
              <div className="bg-[#1313130f] text-sm font-medium px-4 py-1.5 rounded-[200px]">
                Personal Growth
              </div>
              <div
                className="tracking-[-0.02em] text-[3.4em] font-semibold leading-[1.2] my-0 font-sans"
              >
                A gentle space to understand yourself
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCircle;


