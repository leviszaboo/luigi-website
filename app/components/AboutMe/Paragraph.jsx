"use client"

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Word from './Word';

export default function Paragraph({ text, paragraphNumber }) {

  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['0.15 0.9', 'start 0.25']
  })

  const words = text.text.split(" ");

  const len = words.length < 25 ? 25 : words.length

  return (
    <motion.div className="aboutme-textblock" >
      <motion.p 
        ref={element}
      >
        {
          words.map((word, i) => {
            const start = i / ( len );
            const end = start + (1 / ( len))

            return (
              <Word 
                key={i} 
                range={[start, end]} 
                progress={scrollYProgress} 
                color={text.color} 
                paragraphNumber={paragraphNumber}
              >
                {word} 
              </Word>
            )
          })
        }
      </motion.p>
    </motion.div>
  )
}

