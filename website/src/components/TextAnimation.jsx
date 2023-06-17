import React, { useEffect, useRef } from "react";

export default function TextAnimation() {
  const textRef = useRef(null);
  const words = ["in the USA?", "in the UK?", "in Canada?", "in Australia?", "in Scotland?", "in Ireland?", "in Germany?"];
  let currentWordIndex = 0;

  useEffect(() => {
    const textElement = textRef.current;
    let typingAnimation;

    function typeWord(word) {
      let letters = word.split("");
      let output = "";
      for (let i = 0; i < letters.length; i++) {
        const delay = i * 400; // Adjust the delay to control typing speed
        output += `<span style="animation-delay:${delay}ms">${letters[i]}</span>`;
      }
      textElement.innerHTML = output;
    }

    function changeWord() {
      typeWord(words[currentWordIndex]);
      currentWordIndex = (currentWordIndex + 1) % words.length;
    }

    function startAnimation() {
      typingAnimation = setInterval(changeWord, 4000);
    }

    startAnimation();

    return () => {
      clearInterval(typingAnimation);
    };
  }, []);

  return (
    <div style={{ color: "#007FFF" }} ref={textRef}>
      Abroad?
    </div>
  );
}
