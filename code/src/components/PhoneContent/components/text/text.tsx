import React, { CSSProperties,  useEffect, useRef } from "react";
import styles from "./text.module.scss";
import { Directions, animations } from "../../../../animations/textAnimations";

const Text = ({
  content,
  style,
  animation,
}: {
  content: string;
  style: CSSProperties;
  animation?: {
    name: keyof typeof animations;
    delay: number | undefined;
    duration: number | undefined;
    direction: Directions | undefined;
  };
}) => {
  const textRef = useRef<HTMLParagraphElement | null>(null);

  const getAnimationConfig = (target: HTMLParagraphElement | null) => {
    if (animation && target)
      animations[animation?.name]?.(
        target,
        animation.delay,
        animation.duration,
        animation.direction
      );
  };

  useEffect(() => {
    getAnimationConfig(textRef.current);
  });

  return (
    <p className={styles.text} ref={textRef} style={style}>
      {content}
    </p>
  );
};

export default Text;
