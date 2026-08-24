"use client";

import { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  BookOpen,
  GraduationCap,
  Users,
  Trophy,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const currYear = new Date().getFullYear();

  useEffect(() => {
    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFooterVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (footerRef.current) footerObserver.observe(footerRef.current);

    return () => {
      footerObserver.disconnect();
    };
  }, []);

  return (
    <footer className="relative min-h-screen bg-amber-500 overflow-hidden">
      {/* Animated Background Elements - matching navbar style */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-full h-full opacity-10"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse 60% 80% at 80% 20%, rgba(96, 165, 250, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse 100% 70% at 40% 80%, rgba(147, 197, 253, 0.1) 0%, transparent 50%)
            `,
            animation: "aurora 20s ease-in-out infinite alternate",
          }}
        />
      </div>
      {/* Floating Academic Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + i * 10}%`,
              transform: `rotate(${i * 45}deg)`,
              animation: `float ${10 + (i % 3)}s ease-in-out infinite ${
                i * 0.8
              }s`,
            }}
          >
            <div className="w-16 h-16 border border-amber-700/30 rounded-lg flex items-center justify-center">
              {i % 4 === 0 && <BookOpen className="w-8 h-8 text-amber-700" />}
              {i % 4 === 1 && (
                <GraduationCap className="w-8 h-8 text-amber-700" />
              )}
              {i % 4 === 2 && <Users className="w-8 h-8 text-amber-700" />}
              {i % 4 === 3 && <Trophy className="w-8 h-8 text-amber-700" />}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        {/* Header Section */}
        <div
          ref={footerRef}
          className={`text-center pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24 transform transition-all duration-2000 ease-out ${
            isFooterVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-4 bg-linear-to-r from-amber-800/20 via-amber-700/30 to-amber-800/20 blur-2xl rounded-full animate-pulse"></div>
            <span className="relative text-sm font-light text-amber-500 tracking-[0.3em] uppercase backdrop-blur-sm">
              Excellence in Business
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin leading-[0.9] mb-8 tracking-tight">
            <span className="inline-block bg-linear-to-r from-amber-600 via-amber-700 to-amber-600 bg-clip-text text-transparent">
              Join Our
            </span>
            <br />
            <span className="inline-block bg-linear-to-r from-white via-amber-100 to-white bg-clip-text text-transparent font-light">
              Community
            </span>
          </h2>

          <div className="w-32 h-0.5 bg-linear-to-r from-amber-800 via-amber-700 to-amber-800 mx-auto mb-12" />

          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            Ready to embark on an educational journey that shapes
            tomorrow&apos;s leaders? Connect with Push To Profit and experience
            excellence in learning.
          </p>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-16 md:pb-24">
          {/* School Info */}
          <div
            className={`space-y-8 transform transition-all duration-1800 ${
              isFooterVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-0.5 bg-linear-to-r from-amber-700 via-amber-600 to-amber-700" />
                <span className="text-xs font-medium text-amber-600 tracking-[0.2em] uppercase">
                  Our School
                </span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <Image
                  src="/logo-trans.png"
                  alt="Push to Profit"
                  width={96} // matches w-24 (24 * 4px = 96px)
                  height={96} // matches h-24
                  className="w-24 max-w-full h-24 object-contain rounded-lg"
                />
                {/* <div className="flex flex-col">
                  <h3 className="text-xl font-light text-white">
                    Push to Profit
                  </h3>
                  <span className="text-lg font-light text-white/80">
                    School
                  </span>
                </div> */}
              </div>

              <div className="w-16 h-0.5 bg-linear-to-r from-amber-700 via-amber-600 to-amber-700" />
            </div>
            <p className="text-white/70 text-base leading-relaxed font-light">
              Empowering entrepreneurs with practical training, personalized
              mentorship, and innovative strategies that build confidence, drive
              growth, and prepare business owners to compete globally.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                {
                  icon: Facebook,
                  name: "Facebook",
                  link: "https://www.facebook.com/profile.php?id=61566952406223",
                },
                { icon: Linkedin, name: "LinkedIn", link: "" },
                {
                  icon: Instagram,
                  name: "Instagram",
                  link: "https://www.instagram.com/push2profit/",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className="group p-3 bg-white/5 border border-white/10 text-white/70 hover:border-amber-700/50 hover:bg-amber-700/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <social.icon className="w-4 h-4 group-hover:text-amber-600 transition-colors duration-600" />
                </a>
              ))}
              <a
                href="https://wa.me/2348064657119"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/5 border border-white/10 text-white/70 hover:border-amber-700/50 hover:bg-amber-700/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
              >
                <Image
                  src="/whatsapp.svg"
                  alt="whatsapp"
                  width={16} // size-4 in Tailwind = 1rem = 16px
                  height={16}
                  className="size-4"
                />
              </a>
            </div>
          </div>

          {/* Academics */}
          <div
            className={`space-y-8 transform transition-all duration-1800 ${
              isFooterVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-0.5 bg-linear-to-r from-amber-700 via-amber-600 to-amber-700" />
                <span className="text-xs font-medium text-amber-600 tracking-[0.2em] uppercase">
                  Services
                </span>
              </div>

              <h3 className="text-2xl font-light text-white">
                Entrepreneur Programs
              </h3>

              <div className="w-16 h-0.5 bg-linear-to-r from-amber-700 via-amber-600 to-amber-700" />
            </div>

            <div className="space-y-4">
              {[
                "Business Workshops",
                "Coaching & Mentorship",
                "Networking & Collaboration",
                "Innovation & Technology",
                "Growth Strategies",
                "Entrepreneur Support",
              ].map((service) => (
                <a
                  key={service}
                  href="#"
                  className="group block text-white/70 hover:text-amber-600 transition-all duration-600 font-light"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-amber-700/70 rounded-full group-hover:w-2 group-hover:bg-amber-600 transition-all duration-600" />
                    <span>{service}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div
            className={`space-y-8 transform transition-all duration-1800 ${
              isFooterVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-0.5 bg-linear-to-r from-amber-700 via-amber-600 to-amber-700" />
                <span className="text-xs font-medium text-amber-600 tracking-[0.2em] uppercase">
                  Quick Links
                </span>
              </div>

              <h3 className="text-2xl font-light text-white">Navigate</h3>

              <div className="w-16 h-0.5 bg-linear-to-r from-amber-700 via-amber-600 to-amber-700" />
            </div>

            <div className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
                // { name: "Login", href: "/login" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group block text-white/70 hover:text-amber-600 transition-all duration-600 font-light"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-amber-700/70 rounded-full group-hover:w-2 group-hover:bg-amber-600 transition-all duration-600" />
                    <span>{link.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div
            className={`space-y-8 transform transition-all duration-1800 ${
              isFooterVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-0.5 bg-linear-to-r from-amber-700 via-amber-600 to-amber-700" />
                <span className="text-xs font-medium text-amber-600 tracking-[0.2em] uppercase">
                  Get In Touch
                </span>
              </div>

              <h3 className="text-2xl font-light text-white">Contact Us</h3>

              <div className="w-16 h-0.5 bg-linear-to-r from-amber-700 via-amber-600 to-amber-700" />
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-amber-800/20 border border-amber-700/30 rounded-lg backdrop-blur-sm">
                  <MapPin className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <p className="text-white/70 font-light leading-relaxed">
                    208 Obiwali Road, Rumuigbo Port Harcourt
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2 bg-amber-800/20 border border-amber-700/30 rounded-lg backdrop-blur-sm">
                  <Phone className="w-4 h-4 text-amber-600" />
                </div>
                <a
                  href="tel:+234"
                  className="text-white/70 hover:text-amber-600 transition-colors duration-600 font-light"
                >
                  +234 806 465 7119
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2 bg-amber-800/20 border border-amber-700/30 rounded-lg backdrop-blur-sm">
                  <Mail className="w-4 h-4 text-amber-600" />
                </div>
                <a
                  href="mailto:pushtoprofitcommunity@gmail.com"
                  className="text-white/70 hover:text-amber-600 transition-colors duration-600 font-light"
                >
                  pushtoprofitcommunity@gmail.com
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group rounded relative px-8 py-3 bg-white/5 border border-white/20 text-white/80 font-light text-base hover:border-amber-700/50 hover:bg-amber-700/10 transition-all duration-300 overflow-hidden w-full backdrop-blur-sm">
                <span
                  className="relative z-10 group-hover:text-amber-200 transition-colors duration-600"
                  style={{ fontWeight: "600", letterSpacing: "0.02em" }}
                >
                  Apply Now
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-8">
          <div
            className={`flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 transform transition-all duration-1800 ${
              isFooterVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="flex items-center space-x-4 opacity-40">
              <div className="w-2 h-2 bg-amber-700 rounded-full animate-pulse" />
              <div className="w-16 h-px bg-linear-to-r from-transparent via-amber-700/50 to-transparent" />
              <div className="w-1 h-1 bg-amber-600 rounded-full animate-pulse delay-800" />
              <div className="w-16 h-px bg-linear-to-r from-transparent via-amber-700/50 to-transparent" />
              <div className="w-2 h-2 bg-amber-700 rounded-full animate-pulse delay-1000" />
            </div>

            <div className="text-center">
              <p className="text-sm text-white/50 font-light">
                Copyright © <span id="year">{currYear}</span> Push to Profit.
                All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-4 opacity-40">
              <div className="w-2 h-2 bg-amber-700 rounded-full animate-pulse delay-1000" />
              <div className="w-16 h-px bg-linear-to-r from-transparent via-amber-700/50 to-transparent" />
              <div className="w-1 h-1 bg-amber-600 rounded-full animate-pulse delay-800" />
              <div className="w-16 h-px bg-linear-to-r from-transparent via-amber-700/50 to-transparent" />
              <div className="w-2 h-2 bg-amber-700 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
