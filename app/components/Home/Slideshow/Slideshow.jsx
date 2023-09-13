"use client"

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getDocs, query, collection, orderBy } from "firebase/firestore";

import { useMenuStore } from "@/app/hooks/useMenuStore";
import { useSlideshowStore } from "@/app/hooks/useSlideShowStore";
import { db } from "@/app/firebase/config";

import { backgroundAnimationProps, slideAnimationProps } from "./animation";

export default function Slideshow({verticalUrls, horizontalUrls}) {
  const animationTime = 7500;
  const { isMenuVisible } = useMenuStore();
  const { currentSlide, setCurrentSlide } = useSlideshowStore();
  // const [verticalUrls, setVerticalUrls] = useState([]);
  // const [horizontalUrls, setHorizontalUrls] = useState([]);
  const [aspectRatio, setAspectRatio] = useState(0);

  const verticalRef = `${process.env.NEXT_PUBLIC_USER_ID}/featured/vertical`;
  const horizontalRef = `${process.env.NEXT_PUBLIC_USER_ID}/featured/horizontal`;

  // async function fetchImageUrls(ref, destinationSetter) {
  //   try {
  //     const querySnapshot = await getDocs(query(collection(db, ref), orderBy("createdAt", "desc")));
  //     querySnapshot.forEach((doc) => {
  //       destinationSetter((prevState) => [doc.data().url, ...prevState]);
  //     });
  //   } catch (error) {
  //     console.error("Error fetching image URLs:", error);
  //   }
  // };

  // useEffect(() => {
  //   const fetchUrls = async () => {
  //     await fetchImageUrls(verticalRef, setVerticalUrls);
  //     await fetchImageUrls(horizontalRef, setHorizontalUrls);
  //   };

  //   fetchUrls();
  // }, []);

  const checkAspectRatio = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return width / height;
  };

  useEffect(() => {
    const handleResize = () => {
      const newAspectRatio = checkAspectRatio();
      setAspectRatio(newAspectRatio);
    };

    handleResize();
    const totalSlides = aspectRatio > 0.85 ? horizontalUrls.length : verticalUrls.length;

    const interval = setInterval(() => {
      setCurrentSlide(
        totalSlides === 0 ? 0 : (currentSlide + 1) % totalSlides
      );
    }, animationTime);

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentSlide, horizontalUrls, verticalUrls]);

  return (
    <>
      <AnimatePresence>
        {!isMenuVisible && (
            <motion.div className="background" {...backgroundAnimationProps}>
              <motion.div className="slide-wrapper" {...slideAnimationProps} key={currentSlide}>
              <img
                src={
                  aspectRatio > 0.85
                    ? horizontalUrls[currentSlide]
                    : verticalUrls[currentSlide]
                }
                className="slide"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
