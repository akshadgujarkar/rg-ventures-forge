import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function MainSection() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Trading Firm", "A to Z", " industrial material","supplier"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="flex items-center justify-center flex-col">
        
        <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-bold font-regular font-mono">
              <span className="text-spektr-cyan-50  "> RG Ventures is entirely</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-4xl md:text-5xl lg:text-6xl "

                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>
    </div>
  );
}

export { MainSection };
