"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useMenuStore } from "@/app/hooks/useMenuStore";

import ContactForm from "@/app/components/Contact/ContactForm";
import ContactLabel from "@/app/components/Contact/ContactLabel";
import InfoBox from "@/app/components/Contact/InfoBox";
import Signature from "@/app/components/Contact/Signature";
import { fadeInAnimationProps } from "./animation";
import { useEffect } from "react";

export default function ContactPage() {
  const { isMenuVisible } = useMenuStore();

  return (
    <AnimatePresence>
      {!isMenuVisible && (
        <motion.div {...fadeInAnimationProps}>
          <ContactLabel />
          <div className="contact-wrapper">
            <ContactForm />
            <InfoBox />
          </div>
          <Signature />
        </motion.div>
      )}
    </AnimatePresence>
  )
}