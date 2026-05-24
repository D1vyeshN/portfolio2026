"use client";

import React, { useState, useEffect } from "react";

interface TypeWriterProps {
  strings: string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  className?: string;
  cursorClassName?: string;
}

export const TypeWriter: React.FC<TypeWriterProps> = ({
  strings,
  speed = 100,
  deleteSpeed = 50,
  delay = 2000,
  className = "",
  cursorClassName = "",
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentString = strings[currentIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % strings.length);
      } else {
        timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, currentText.length - 1));
        }, deleteSpeed);
      }
    } else {
      if (currentText === currentString) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      } else {
        timer = setTimeout(() => {
          setCurrentText(currentString.slice(0, currentText.length + 1));
        }, speed);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, strings, speed, deleteSpeed, delay]);

  // Cursor blink animation
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`inline-block ${className}`}>
      {currentText}
      <span
        className={`inline-block w-[2px] h-[1em] bg-blue-600 dark:bg-blue-400 ml-1 align-middle transition-opacity duration-100 ${
          showCursor ? "opacity-100" : "opacity-0"
        } ${cursorClassName}`}
      />
    </span>
  );
};
