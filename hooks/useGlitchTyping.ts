import { useState, useEffect, useRef } from 'react';

interface UseGlitchTypingOptions {
  text: string;
  typingSpeed?: number;
  glitchChance?: number;
  glitchChars?: string;
}

export const useGlitchTyping = ({
  text,
  typingSpeed = 100,
  glitchChance = 0.3,
  glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`',
}: UseGlitchTypingOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const currentIndexRef = useRef(0);
  const isGlitchingRef = useRef(false);

  useEffect(() => {
    if (currentIndexRef.current >= text.length) {
      setIsComplete(true);
      return;
    }

    const typeNextChar = () => {
      const shouldGlitch = Math.random() < glitchChance;

      if (shouldGlitch && !isGlitchingRef.current) {
        // Glitch effect
        isGlitchingRef.current = true;
        const glitchDuration = Math.floor(Math.random() * 3) + 1;
        let glitchCount = 0;

        const glitchInterval = setInterval(() => {
          const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
          setDisplayText(text.substring(0, currentIndexRef.current) + randomChar);
          glitchCount++;

          if (glitchCount >= glitchDuration) {
            clearInterval(glitchInterval);
            isGlitchingRef.current = false;
            currentIndexRef.current++;
            setDisplayText(text.substring(0, currentIndexRef.current));
            
            if (currentIndexRef.current < text.length) {
              setTimeout(typeNextChar, typingSpeed);
            } else {
              setIsComplete(true);
            }
          }
        }, 50);
      } else {
        // Normal typing
        currentIndexRef.current++;
        setDisplayText(text.substring(0, currentIndexRef.current));
        
        if (currentIndexRef.current < text.length) {
          setTimeout(typeNextChar, typingSpeed);
        } else {
          setIsComplete(true);
        }
      }
    };

    const initialTimeout = setTimeout(typeNextChar, typingSpeed);

    return () => clearTimeout(initialTimeout);
  }, [text, typingSpeed, glitchChance, glitchChars]);

  return { displayText, isComplete };
};
