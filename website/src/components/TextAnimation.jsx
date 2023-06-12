import React, { useEffect, useRef } from "react";

export default function TextAnimation() {
  const textRef = useRef(null);
  const words = ["Abroad?", "in the USA?", "in the UK?", "in Canada?"];
  let currentWordIndex = 0;

  useEffect(() => {
    const textElement = textRef.current;
    let typingAnimation;
    let blinkingAnimation;

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
      blinkingAnimation = setInterval(() => {
        const caret = textElement.querySelector(".caret");
        caret.style.visibility =
          caret.style.visibility === "visible" ? "hidden" : "visible";
      }, 200);
    }

    startAnimation();

    return () => {
      clearInterval(typingAnimation);
      clearInterval(blinkingAnimation);
    };
  }, []);

  return (
    <span style={{ color: "#007FFF" }} id="changing-text" ref={textRef}>
      Abroad?
    </span>
  );
}
