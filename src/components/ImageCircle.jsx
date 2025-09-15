import React, { useEffect } from "react";
import { motion } from "motion/react";
import Header from "./Header";

const ImageCircle = () => {
  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      document.documentElement.classList.add("w-mod-touch");
    }
  }, []);
  return (
    <section className="z-[4] bg-white relative">
      <Header />
      <div className="flex flex-col justify-between items-stretch w-full h-[700vh] relative">
        <div className="main-spinner sticky overflow-hidden top-0">
          <div className="spinner-l-wrapper w-auto h-full block relative overflow-visible inset-[auto_0%_0%]">
            <motion.div
              className="spinner-container w-screen h-[100vw] flex relative"
              style={{
                willChange: "transform",
                transform:
                  "translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* animation start when this image div hit top of the page  */}
              <motion.div
                className="flex flex-col justify-between w-[16vw] h-[100vw] absolute mx-auto inset-[0%_0%_auto]"
                style={{ perspective: "2000px" }}
              >
                <div className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl">
                  <img
                    src="/images/circleimage-1.avif"
                    className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                  />
                </div>
                <motion.div
                  className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <img
                    src="/images/circleimage-2.avif"
                    className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                  />
                </motion.div>
              </motion.div>
              {/* this is right */}
              <motion.div
                className="spinner-c flex-col justify-between w-[16vw] h-[100vw] flex absolute mx-auto inset-[0%_0%_auto]"
                style={{
                  willChange: "transform",
                  transform:
                    "translate3d(-16.5vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  perspective: "2000px",
                }}
              >
                <motion.div
                  className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl"
                  style={{
                    perspectiveOrigin: "0 100%",
                    transformOrigin: "100% 100%",
                  }}
                >
                  <img
                    src="/images/circleimage-3.avif"
                    className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                  />
                </motion.div>
                <motion.div
                  className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl"
                  style={{
                    transform: "rotate(180deg)", // 👈 matches your inspector
                  }}
                >
                  <img
                    src="/images/circleimage-4.avif"
                    className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                className="spinner-c flex-col justify-between w-[16vw] h-[100vw] flex absolute mx-auto inset-[0%_0%_auto]"
                style={{
                  willChange: "transform",
                  transform:
                    "translate3d(-33vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  perspective: "2000px",
                }}
              >
                <motion.div
                  className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl"
                  style={{
                    perspectiveOrigin: "0 100%",
                    transformOrigin: "100% 100%",
                  }}
                >
                  <img
                    src="/images/circleimage-5.avif"
                    className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                  />
                </motion.div>
                <motion.div
                  className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <img
                    src="/images/circleimage-6.avif"
                    className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                className="spinner-c flex-col justify-between w-[16vw] h-[100vw] flex absolute mx-auto inset-[0%_0%_auto]"
                style={{
                  willChange: "transform",
                  transform:
                    "translate3d(-49.5vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  perspective: "2000px",
                }}
              >
                <motion.div
                  className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl"
                  style={{
                    perspectiveOrigin: "0 100%",
                    transformOrigin: "100% 100%",
                  }}
                >
                  <img
                    src="/images/circleimage-7.avif"
                    className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                  />
                </motion.div>
                <motion.div
                  className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <img
                    src="/images/circleimage-8.avif"
                    className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                className="spinner-c flex-col justify-between w-[16vw] h-[100vw] flex absolute mx-auto inset-[0%_0%_auto]"
                style={{
                  willChange: "transform",
                  transformStyle: "preserve-3d",
                  perspective: "2000px",
                }}
                animate={{
                  x: "49.5vw",
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                  rotateY: 0,
                  rotateZ: 0,
                  skew: "0deg, 0deg",
                }}
              >
                <motion.div
                  className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl"
                  style={{
                    perspectiveOrigin: "0 100%",
                    transformOrigin: "100% 100%",
                  }}
                >
                  <img
                    src="/images/circleimage-9.avif"
                    className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                  />
                </motion.div>
                <motion.div
                  className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <img
                    src="/images/circleimage-10.avif"
                    className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                  />
                </motion.div>
              </motion.div>
              {/* this is right */}
              <motion.div
                className="spinner-c  flex-col justify-between w-[16vw] h-[100vw] flex absolute mx-auto inset-[0%_0%_auto]"
                style={{
                  willChange: "transform",
                  transform:
                    "translate3d(33vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  perspective: "2000px",
                }}
              >
                <motion.div
                  className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl"
                  style={{
                    perspectiveOrigin: "0 100%",
                    transformOrigin: "100% 100%",
                  }}
                >
                  <img
                    src="/images/circleimage-11.avif"
                    className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                  />
                </motion.div>
                <motion.div
                  className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <img
                    src="/images/circleimage-12.avif"
                    className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                  />
                </motion.div>
              </motion.div>
              {/* this is right */}
              <motion.div
                className="spinner-c  flex-col justify-between w-[16vw] h-[100vw] flex absolute mx-auto inset-[0%_0%_auto]"
                style={{
                  willChange: "transform",
                  transform:
                    "translate3d(16.5vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  perspective: "2000px",
                }}
              >
                <motion.div
                  className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl"
                  style={{
                    perspectiveOrigin: "0 100%",
                    transformOrigin: "100% 100%",
                  }}
                >
                  <img
                    src="/images/circleimage-13.avif"
                    className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                  />
                </motion.div>
                <motion.div
                  className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <img
                    src="/images/circleimage-14.avif"
                    className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* circle spinner text */}
        <div className=" z-[2] flex-1 justify-end items-center flex flex-col relative">
          <div className="content-spinner text-center justify-start items-center w-[38vw] h-[52vw] flex relative flex-col">
            <div className="inner-heading-s z-[6] gap-x-6 gap-y-6 text-center justify-center items-center flex relative flex-col">
              <div className="bg-[#1313130f] text-sm font-medium px-4 py-1.5 rounded-[200px]">
                Personal Growth
              </div>
              <div
                className="tracking-[-0.02em] text-[3.4em] font-semibold leading-[1.2] my-0
  font-sans"
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

