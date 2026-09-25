"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import "./Stats.css";

const stats = [
  { value: 7900, prefix: "", suffix: "+", label: "Projects delivered", hasComma: true },
  { value: 25000, prefix: "", suffix: "+", label: "Employees globally", hasComma: true },
  { value: 13, prefix: "$", suffix: "B+", label: "Annual revenue", hasComma: false },
  { value: 130, prefix: "", suffix: "+", label: "Years of experience", hasComma: false },
];

function formatNumber(num, hasComma) {
  if (!hasComma) return Math.floor(num).toString();
  return Math.floor(num).toLocaleString("en-US");
}

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4);
}

function AnimatedNumber({ value, prefix, suffix, hasComma, animate }) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);
  const duration = 2000;

  const tick = useCallback(
    (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      setDisplay(eased * value);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    },
    [value]
  );

  useEffect(() => {
    if (animate) {
      startTimeRef.current = null;
      rafRef.current = requestAnimationFrame(tick);
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate, tick]);

  return (
    <p className="stats__number">
      {prefix}
      {formatNumber(display, hasComma)}
      {suffix}
    </p>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

function Stats() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section className="stats" ref={sectionRef}>
      <motion.h2
        className="stats__heading"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        SNS Construction in numbers
      </motion.h2>

      <motion.div
        className="stats__grid"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {stats.map((stat) => (
          <motion.div className="stats__card" key={stat.label} variants={cardVariants}>
            <AnimatedNumber
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              hasComma={stat.hasComma}
              animate={isInView}
            />
            <p className="stats__label">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Stats;
