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
        <div
          className="justify-between items-stretch w-full h-[700vh] flex relative;
  flex-flow: column"
        >
          <div className="sticky overflow-hidden top-0">
            <div className="w-auto h-full block relative overflow-visible inset-[auto_0%_0%]">
              <motion.div
                className="spinner-container w-screen h-[100vw] flex relative"
                style={{
                  willChange: "transform", // 👈 matches inline style
                  transformStyle: "preserve-3d", // 👈 matches inline style
                }}
                animate={{
                  rotateZ: 360, // rotates infinitely
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear",
                }}
              >
                <div
                  className="spinner-c flex-col justify-between w-[16vw] h-[100vw] flex absolute mx-auto inset-[0%_0%_auto];
          perspective: 2000px"
                >
                  <div className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl">
                    <img
                      src="/images/circleimage-2.avif"
                      className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                    />
                  </div>
                  <motion.div
                    className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl"
                    style={{
                      rotate: 180, // 👈 same as transform: rotate(180deg)
                    }}
                  >
                    <img
                      src="/images/circleimage-9.avif"
                      className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                    />
                  </motion.div>
                </div>
                <motion.div
                  className="spinner-c flex-col justify-between w-[16vw] h-[100vw] flex absolute mx-auto inset-[0%_0%_auto];
          perspective: 2000px"
                  style={{
                    willChange: "transform", // 👈 exactly as in CSS
                    transformStyle: "preserve-3d", // 👈 exactly as in CSS
                  }}
                  animate={{
                    x: "-16.5vw", // 👈 translate3d(-16.5vw, 0px, 0px)
                    scale: 1, // 👈 scale3d(1,1,1)
                    rotateX: 0,
                    rotateY: 0,
                    rotateZ: 0,
                    skewX: 0,
                    skewY: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}

                >
                  <div className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl">
                    <img
                      src="/images/circleimage-3.avif"
                      className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                    />
                  </div>
                  <div className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl">
                    <img
                      src="/images/circleimage-4.avif"
                      className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                    />
                  </div>
                </motion.div>
                <div
                  className="spinner-c flex-col justify-between w-[16vw] h-[100vw] flex absolute mx-auto inset-[0%_0%_auto];
          perspective: 2000px"
                >
                  <div className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl">
                    <img
                      src="/images/circleimage-1.avif"
                      className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                    />
                  </div>
                  <div className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl">
                    <img
                      src="/images/circleimage-2.avif"
                      className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                    />
                  </div>
                </div>
                <div
                  className="spinner-c flex-col justify-between w-[16vw] h-[100vw] flex absolute mx-auto inset-[0%_0%_auto];
          perspective: 2000px"
                >
                  <div className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl">
                    <img
                      src="/images/circleimage-1.avif"
                      className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                    />
                  </div>
                  <div className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl">
                    <img
                      src="/images/circleimage-2.avif"
                      className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                    />
                  </div>
                </div>
                <div
                  className="spinner-c flex-col justify-between w-[16vw] h-[100vw] flex absolute mx-auto inset-[0%_0%_auto];
          perspective: 2000px"
                >
                  <div className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl">
                    <img
                      src="/images/circleimage-1.avif"
                      className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                    />
                  </div>
                  <div className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl">
                    <img
                      src="/images/circleimage-2.avif"
                      className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                    />
                  </div>
                </div>
                <div
                  className="spinner-c flex-col justify-between w-[16vw] h-[100vw] flex absolute mx-auto inset-[0%_0%_auto];
          perspective: 2000px"
                >
                  <div className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl">
                    <img
                      src="/images/circleimage-1.avif"
                      className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                    />
                  </div>
                  <div className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl">
                    <img
                      src="/images/circleimage-2.avif"
                      className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                    />
                  </div>
                </div>
                <div
                  className="spinner-c flex-col justify-between w-[16vw] h-[100vw] flex absolute mx-auto inset-[0%_0%_auto];
          perspective: 2000px"
                >
                  <div className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl">
                    <img
                      src="/images/circleimage-1.avif"
                      className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                    />
                  </div>
                  <div className="spinner-card z-[3] w-full h-[16vw] relative overflow-hidden rounded-3xl">
                    <img
                      src="/images/circleimage-2.avif"
                      className="object-cover self-stretch relative w-full h-full align-middle max-w-full inline-block"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ImageCircle;

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// const ImageCircle = ({ images }) => {
//   const containerRef = useRef(null);

//   // default: 14 images from /public/images (change if needed)
//   const circleImages =
//     images && images.length
//       ? images
//       : Array.from({ length: 14 }, (_, i) => `/images/circleimage-${i + 1}.avif`);

//   useEffect(() => {
//     const root = containerRef.current;
//     if (!root) return;

//     const ctx = gsap.context(() => {
//       const imgs = root.querySelectorAll(".animated-img");
//       const n = imgs.length;
//       if (!n) return;

//       // Helper: wait for all <img> to finish loading so sizes are accurate
//       const waitForImages = () =>
//         Promise.all(
//           Array.from(imgs).map(
//             (img) =>
//               new Promise((res) => {
//                 if (img.complete && img.naturalWidth !== 0) return res();
//                 img.onload = () => res();
//                 img.onerror = () => res(); // resolve on error so app won't hang
//               })
//           )
//         );

//       const setupAnimation = async () => {
//         await waitForImages();

//         const viewport = root.querySelector(".row-viewport");
//         const wrapperWidth = viewport.clientWidth;

//         // --- sizing / spacing (tweak these numbers to match your target)
//         const imageInitialSize = Math.min(140, Math.max(90, Math.floor(wrapperWidth / 6)));
//         const spacing = Math.floor(imageInitialSize * 0.75); // gap between images in the horizontal row
//         const centerIndex = (n - 1) / 2;

//         // Put images in a centered horizontal row (relative to container center)
//         gsap.set(imgs, {
//           width: imageInitialSize,
//           height: imageInitialSize,
//           borderRadius: "12px", // slightly rounded initially
//           transformOrigin: "center center",
//           x: (i) => (i - centerIndex) * spacing,
//           y: 0,
//           autoAlpha: 1,
//         });

//         // radius for final circle (responsive)
//         const radius = Math.min(wrapperWidth * 0.45, 260);
//         const finalSize = Math.floor(imageInitialSize * 0.72);

//         // Animate to circle when section top hits top of viewport.
//         // pin: true keeps the section pinned while the user scrolls through the animation
//         gsap.to(imgs, {
//           x: (i) => {
//             const angle = (i / n) * Math.PI * 2 - Math.PI / 2; // start at top (shift -90deg)
//             return Math.cos(angle) * radius;
//           },
//           y: (i) => {
//             const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
//             return Math.sin(angle) * radius;
//           },
//           width: finalSize,
//           height: finalSize,
//           borderRadius: "50%",
//           ease: "none",
//           overwrite: true,
//           scrollTrigger: {
//             trigger: root,
//             start: "top top",     // <-- animation starts when section top reaches viewport top
//             end: "+=600",         // distance over which the morph happens; tweak to taste
//             scrub: true,          // ties animation to scrollbar
//             pin: true,            // pins the section while animating (like the zuno example)
//             pinSpacing: false,    // if you don't want extra blank space added
//             anticipatePin: 1,
//           },
//         });
//       };

//       setupAnimation();
//     }, containerRef);

//     return () => ctx.revert();
//   }, [circleImages]);

//   return (
//     <section ref={containerRef} className="w-full flex justify-center">
//       {/* Row viewport: controls how many images are visible (use max-w to show ~5 center + halves) */}
//       <div className="row-viewport relative w-full max-w-[1100px] overflow-hidden h-[380px] flex items-center">
//         <div className="relative w-full h-full flex items-center justify-center">
//           {circleImages.map((src, i) => (
//             <img
//               key={i}
//               src={src}
//               alt={`img-${i + 1}`}
//               className="animated-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
//               style={{ willChange: "transform, width, height, borderRadius" }}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ImageCircle;
