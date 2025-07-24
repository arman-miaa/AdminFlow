import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const useScrollAnimation = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
};

const RevenueForm = () => {
  const { ref, inView } = useScrollAnimation();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const revenueData = [
    { source: "From appointment", amount: 541, color: "#14b8a6" }, 
    { source: "From Test", amount: 245, color: "#3b82f6" }, 
    { source: "From Others", amount: 995, color: "#8b5cf6" }, 
  ];

  return (
    <div
      ref={ref}
      className="card bg-white/70 border-white/30 backdrop-blur-lg h-full shadow-lg rounded-2xl md:rounded-4xl p-6"
    >
      <h2 className="text-sm font-medium mb-6">Most revenue From</h2>

      {/* Rings */}
      <div className="flex justify-center items-center mb-8">
        <div className="relative w-36 h-36">
          {revenueData.map(({ color }, i) => {
            const radius = [56, 40, 24][i];
            const rotate = [20, 5, 20][i];
            const circumference = 2 * Math.PI * radius;
            return (
              <svg
                key={i}
                className="absolute top-0 left-0 w-full h-full"
                style={{ transform: `rotate(${rotate}deg)` }}
              >
                {/* Background circle */}
                <circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#d1d5db"
                  strokeWidth="6"
                  fill="transparent"
                />
                {/* Animated stroke circle */}
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke={color}
                  strokeWidth="6"
                  fill="transparent"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  variants={{
                    hidden: { strokeDashoffset: circumference },
                    visible: { strokeDashoffset: circumference * 0.3 },
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: i * 0.3,
                  }}
                />
              </svg>
            );
          })}
        </div>
      </div>

      {/* Revenue List */}
      <div className="space-y-3">
        {revenueData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`w-3 h-3 rounded-full ${
                  index === 0
                    ? "bg-teal-400"
                    : index === 1
                    ? "bg-blue-500"
                    : "bg-purple-500"
                }`}
              ></div>
              <span className="text-sm text-base-content/70">
                {item.source}
              </span>
            </div>
            <span className="font-semibold text-base-content">
              {item.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueForm;
