"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  Users,
  Globe,
  Coffee,
  ArrowRight,
  Clock,
  Trophy,
  Code,
  Gift
} from "lucide-react";
import CyberButton from "../components/CyberButton";
import HolographicCard from "../components/HolographicCard";
import TerminalCard from "../components/TerminalCard";
import Countdown from "../components/Countdown";
import SectionHeading from "../components/SectionHeading";
import Accordion from "../components/Accordion";

/* ── Animated Counter ── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-neon tabular-nums font-mono-cyber">
      {count}{suffix}
    </span>
  );
}

/* ── Data ── */
const stats = [
  { label: "Prize Pool", value: "₹1L+", target: 100000, suffix: "+", icon: Trophy },
  { label: "Participants", value: "500+", target: 500, suffix: "+", icon: Users },
  { label: "Hours of Hacking", value: "24", target: 24, suffix: "h", icon: Clock },
  { label: "Lines of Code", value: "∞", target: 9999, suffix: "+", icon: Code },
];

const features = [
  {
    title: "24h Hackathon",
    desc: "Non-stop building, learning, and creating.",
    icon: Clock,
  },
  {
    title: "Networking",
    desc: "Connect with like-minded builders and innovators.",
    icon: Users,
  },
  {
    title: "Food & Drinks",
    desc: "Gourmet meals and midnight snacks provided.",
    icon: Coffee,
  },
  {
    title: "Swag Kits",
    desc: "Exclusive merchandise for all participants.",
    icon: Gift,
  },
  {
    title: "Certificates",
    desc: "Official participation certificates for all.",
    icon: Globe,
  },
  {
    title: "Prize Pool",
    desc: "Competing for a total prize pool of ₹1,00,000+.",
    icon: Trophy,
  },
];

const roadmap = [
  { time: "09:00 AM", title: "Check-in", desc: "Registration, Team Formation, and Swag Distribution." },
  { time: "11:00 AM", title: "Hacking Begins", desc: "Problem Statements Released & Coding Starts." },
  { time: "04:00 PM", title: "Progress Check", desc: "First round of mentoring and progress review." },
  { time: "10:00 AM", title: "Submission", desc: "Final code submission and project demos (Next Day)." },
];


const faqItems = [
  { question: "What is the recommended team size?", answer: "Teams can consist of 2 to 4 members. Individual registration is allowed, and we'll help you find a team during the kickoff." },
  { question: "What are the prizes and judging criteria?", answer: "Judging focuses on Innovation, Technical Complexity, and Feasibility. Prizes include cash, hardware, and internship opportunities." },
  { question: "Is there a registration fee?", answer: "Yes, a nominal fee of ₹1700 per team covers food, swag, and logistics for the entire 24-hour event." },
];

/* ── Particle effect ── */
function Particles() {
  const [particles, setParticles] = useState<Array<{ left: string, top: string, duration: number, delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 3,
    }));
    const timer = setTimeout(() => setParticles(newParticles), 0);
    return () => clearTimeout(timer);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-neon/30 rounded-full"
          style={{
            left: p.left,
            top: p.top,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

export default function HomePage() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
        <Particles />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary/95 pointer-events-none" />

        {/* Floating gradient orbs */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/10 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -40, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative z-10 text-center px-6 pt-20 pb-16 max-w-5xl mx-auto flex flex-col items-center">

          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, duration: 1.5 }}
            className="mb-8 relative"
          >
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-neon/20 blur-[100px] rounded-full" />
              <Image src="/logo.webp" priority alt="NOVUS Logo" width={192} height={192} className="w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_30px_rgba(0,255,102,0.4)] relative z-10" />
            </motion.div>
            <div className="absolute inset-0 bg-neon/20 blur-3xl rounded-full scale-150 animate-pulse-slow pointer-events-none" />
          </motion.div>

          {/* Date Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs text-neon font-mono-cyber font-medium mb-8 uppercase tracking-widest border border-neon/20 hover:border-neon/50 transition-colors">
              <span className="w-2 h-2 bg-neon rounded-full animate-pulse shadow-[0_0_10px_#00ff66]" />
              7th March 2026 • Hyderabad
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-tight tracking-tighter"
          >
            Build the <span className="text-stroke-neon text-transparent">Future</span>
            <br />
            <span className="neon-text drop-shadow-[0_0_20px_rgba(0,255,102,0.4)]">in 24 Hours</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-text-secondary text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed font-light"
          >
            The ultimate hackathon experience at <span className="text-text-primary font-semibold">Malla Reddy (MR) Deemed to be University</span>.
            Join the elite circle of builders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 mb-12"
          >
            <Countdown />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto"
          >
            <CyberButton href="/register" className="w-full sm:w-auto text-lg px-10 py-4">
              Register Now <ArrowRight size={20} className="ml-2" />
            </CyberButton>
            <CyberButton variant="secondary" href="#schedule" className="w-full sm:w-auto text-lg px-10 py-4">
              View Schedule
            </CyberButton>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-secondary/50 flex flex-col items-center gap-2 pointer-events-none font-mono-cyber text-[10px]"
        >
          <span className="uppercase tracking-widest">Scroll to Begin</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-neon/50 to-transparent" />
        </motion.div>
      </section>

      {/* ═══ INTEL / ABOUT ═══ */}
      <section className="py-24 px-6 relative" id="about">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon/5 blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Mission Briefing" subtitle="Protocol: NOVUS_24" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp} className="order-2 md:order-1">
              <TerminalCard header="BRIEFING_DATA">
                <p className="text-text-secondary text-lg leading-relaxed mb-6 font-light">
                  <strong className="text-white">NOVUS&apos;24</strong> is a high-octane 24-hour journey where
                  thinkers, creators, and engineers converge. We are building a collaborative ecosystem
                  powered by mentorship, cutting-edge tech, and the drive to innovate at speed.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm font-mono-cyber text-neon">
                    <span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse" />
                    <span>Real-world Problem Statements</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-mono-cyber text-neon">
                    <span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse" />
                    <span>24-Hour Continuous Access</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-mono-cyber text-neon">
                    <span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse" />
                    <span>Top-tier Industry Mentors</span>
                  </div>
                </div>
              </TerminalCard>
            </motion.div>

            <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <HolographicCard className="text-center py-8">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                    <p className="text-text-secondary text-xs uppercase tracking-widest mt-2">{stat.label}</p>
                  </HolographicCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SPONSORS ═══ */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-bg-card/30 relative" id="sponsors">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Our Sponsors" subtitle="Trusted organizations supporting NOVUS'24" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-neon/5 rounded-xl blur-xl group-hover:bg-neon/20 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                <div className="bg-bg-card/40 border border-white/5 p-8 rounded-xl flex items-center justify-center h-48 hover:border-neon/50 transition-all duration-500 backdrop-blur-sm relative z-10">
                  <Image
                    src="/logo.webp"
                    alt={`Sponsor ${i}`}
                    width={96}
                    height={96}
                    className="w-24 h-24 object-contain opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-125 drop-shadow-[0_0_15px_rgba(0,255,102,0.5)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 scan-lines opacity-5 pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="System Modules" subtitle="Everything you need for the journey." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="bg-bg-card/40 border border-white/5 p-6 rounded-xl hover:bg-bg-card/60 hover:border-neon/30 transition-all group h-full">
                  <div className="w-12 h-12 rounded-lg bg-neon/10 flex items-center justify-center mb-4 group-hover:bg-neon group-hover:text-bg-primary transition-all text-neon">
                    <f.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{f.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MISSION STATUS (STATS) ═══ */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group p-6 bg-bg-card/30 border border-white/5 rounded-xl hover:border-neon/30 transition-all"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-neon/10 flex items-center justify-center border border-neon/30 group-hover:border-neon group-hover:shadow-[0_0_20px_rgba(0,255,102,0.4)] transition-all duration-300">
                    <stat.icon size={28} className="text-neon" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-white mb-2 font-mono-cyber">
                  {stat.value}
                </h3>
                <p className="text-text-secondary text-sm uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ROADMAP ═══ */}
      <section className="py-24 px-6 relative overflow-hidden" id="schedule">
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionHeading title="Event Roadmap" subtitle="Synchronized Timeline" />

          <div className="relative border-l-2 border-neon/20 ml-6 md:ml-12 space-y-12 my-16">
            {roadmap.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-8 md:pl-12"
              >
                <div className="absolute -left-[9px] md:-left-[9px] top-0 w-4 h-4 rounded-full bg-bg-primary border-2 border-neon shadow-[0_0_10px_#00ff66]" />
                <div className="bg-bg-card/40 border border-white/5 p-6 rounded-xl hover:bg-bg-card/60 hover:border-neon/30 transition-all group">
                  <span className="inline-block px-3 py-1 bg-neon/10 text-neon text-xs font-mono-cyber mb-2 rounded border border-neon/20">
                    {item.time}
                  </span>
                  <h3 className="text-xl font-bold text-text-primary mb-2 flex items-center gap-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <CyberButton variant="secondary" href="/schedule" className="px-8">
              Open Full Command Center
            </CyberButton>
          </div>
        </div>
      </section>

      {/* ═══ FAQ PREVIEW ═══ */}
      <section className="py-24 px-6 bg-bg-card/20" id="faq">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="Common Inquiries" />
          <Accordion items={faqItems} />
          <div className="text-center mt-12">
            <CyberButton variant="secondary" href="/faq">
              Access Knowledge Base
            </CyberButton>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-neon/5 blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div {...fadeUp}>
            <TerminalCard className="p-12 border-neon/50 shadow-[0_0_40px_rgba(0,255,102,0.1)]">
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight">
                Ready to <span className="neon-text">Build</span>?
              </h2>
              <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto font-light">
                Secure your spot at NOVUS&apos;24 and join the most intense hackathon experience.
                System capacity is limited.
              </p>
              <CyberButton href="/register" variant="glitch" className="px-12 py-5 text-xl">
                Register Your Team <ArrowRight size={24} className="ml-2" />
              </CyberButton>
            </TerminalCard>
          </motion.div>
        </div>
      </section>
    </>
  );
}
