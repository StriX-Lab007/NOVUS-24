"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Instagram, Twitter } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";

const socials = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter, label: "X", href: "#" },
];

export default function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="min-h-screen pt-28 pb-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <SectionHeading
                        title="Get In Touch"
                        subtitle="Have questions about the hackathon? Drop us a message and our team will get back to you shortly."
                    />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
                    {/* Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass rounded-2xl p-8"
                    >
                        <h3 className="text-text-primary font-semibold text-lg mb-6">
                            Send a Message
                        </h3>
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <FormInput
                                    label="Your Name"
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={setName}
                                    required
                                />
                                <FormInput
                                    label="Email Address"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={email}
                                    onChange={setEmail}
                                    required
                                />
                            </div>
                            <FormInput
                                label="Subject"
                                placeholder="What's this about?"
                                value={subject}
                                onChange={setSubject}
                            />
                            <div className="space-y-2">
                                <label className="text-text-primary text-sm font-medium">
                                    Message <span className="text-neon ml-1">*</span>
                                </label>
                                <textarea
                                    rows={5}
                                    placeholder="Write your message here..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border-subtle text-text-primary placeholder-text-secondary/50 text-sm resize-none focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/30 focus:shadow-[0_0_15px_rgba(0,255,102,0.1)] transition-all duration-300"
                                />
                            </div>
                            <Button type="submit">
                                <Send size={16} /> Send Message
                            </Button>
                        </form>
                    </motion.div>

                    {/* Info side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        {/* Venue */}
                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-text-primary font-semibold text-lg mb-4 flex items-center gap-2">
                                <MapPin size={18} className="text-neon" /> Venue Location
                            </h3>
                            <p className="text-text-secondary text-sm mb-4">
                                Malla Reddy Deemed to be University, Hyderabad, Telangana
                            </p>
                            {/* Map placeholder */}
                            <div className="w-full h-48 rounded-xl bg-bg-card border border-border-subtle flex items-center justify-center overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.0!2d78.5!3d17.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDMwJzAwLjAiTiA3OMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Venue Map"
                                />
                            </div>
                        </div>

                        {/* Contact info */}
                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-text-primary font-semibold text-lg mb-4 flex items-center gap-2">
                                <Mail size={18} className="text-neon" /> Contact Info
                            </h3>
                            <div className="space-y-3 text-text-secondary text-sm">
                                <p>
                                    <a
                                        href="mailto:contact@novus24.com"
                                        className="hover:text-neon transition-colors"
                                    >
                                        contact@novus24.com
                                    </a>
                                </p>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-text-primary font-semibold text-lg mb-4">
                                Follow Us
                            </h3>
                            <div className="flex gap-3">
                                {socials.map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        aria-label={s.label}
                                        className="w-11 h-11 rounded-xl bg-bg-card border border-border-subtle flex items-center justify-center text-text-secondary hover:text-neon hover:border-neon/30 hover:bg-neon/5 transition-all"
                                    >
                                        <s.icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
