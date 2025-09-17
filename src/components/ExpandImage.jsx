import React from "react";
import { motion } from "motion/react";

const ExpandImage = () => {
  return (
    <section className="z-[4] bg-white relative">
      <div className="bg-white h-[400vh] relative rounded-[10px]">
        <div
          className="bg-[url(https://cdn.prod.website-files.com/675c8e4…/67f9e24…\_bg-cloud-71.avif)] bg-[50%] justify-center items-stretch max-w-[1880px] min-h-screen flex sticky overflow-hidden mx-auto top-0;
  flex-row"
        >
          <div
            className="justify-center items-center w-full flex relative
  flex-col"
          >
            <motion.div
              class="scale-wrapper _002  bg-[url(https://cdn.prod.website-files.com/675c8e4…/67f9e24…\_bg-cloud-71.avif)] bg-[50%] w-[90vw] rounded-3xl"
              style={{
                width: "33vw",
                opacity: 0,
                willChange: "width, height, opacity",
              }}
            >
              <div class="inner-scale a-left justify-end items-start">
                <div
                  class="content-s gap-x-3 gap-y-3 backdrop-blur-[10px]  bg-[#ffffffeb] justify-start items-start max-w-[420px] flex relative pt-10 pb-[60px] px-10 rounded-[18px]
  flex-col"
                > <div class="title-tag small bg-[#1313130f] md:text-sm font-medium text-xs px-4 py-1.5 rounded-[200px]">Personal Growth</div>
                <h2 class="h-m tracking-[-0.02em] text-[2.2em] font-semibold leading-[1.2] my-0">Feel more human every day</h2>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpandImage;
