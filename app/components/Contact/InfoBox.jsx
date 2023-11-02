"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { infoBoxAnimationProps } from "./animation";

export default function InfoBox() {
  return (
      <motion.div className="info-box" {...infoBoxAnimationProps}>
        <h2>Luigi Simiani</h2>
        <h2>email@email.com</h2>
        <h2>Amsterdam, <span className="new-line">The Netherlands</span></h2>
        <div className="socials">
          <Link href={"https://www.instagram.com/greenmario.film/"}>
            <Instagram color="white" size={32}/>
          </Link>
          <Link href={"https://www.linkedin.com/in/luigi-simiani-65643b228/"}>
            <Linkedin color="white" size={32}/>
          </Link>
        </div>
      </motion.div>
  )
}
