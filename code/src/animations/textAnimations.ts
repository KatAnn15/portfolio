export enum TextAnimations {
  ScrollHorizontally = "scrollHorizontally",
  InfiniteHorizontalScroll = "infiniteHorizontalScroll",
  Scale = "scale",
}

export enum Directions {
  Left = "left",
  Right = "right",
}

const animations = {
  [TextAnimations.ScrollHorizontally]: (
    element: HTMLElement,
    delay: number | undefined = 0,
    duration: number | undefined = 3
  ) => {
    element.style.transition = `transform ${duration}s linear ${delay}s`;
    element.style.transform = `translateX(-100px)`;
  },
  [TextAnimations.InfiniteHorizontalScroll]: (
    element: HTMLElement,
    delay: number | undefined = 0,
    duration: number | undefined = 100,
    direction: Directions | undefined
  ) => {
    let offset = 0;
    setTimeout(() => {
      const intervalId = setInterval(() => {
        element.style.transform = `translateX(${
          direction === Directions.Left ? offset-- : offset++
        }px)`;
        if (
          direction === Directions.Left &&
          offset < element.offsetWidth * -1
        ) {
          offset =
            element.parentElement?.offsetWidth || 0 + element.offsetWidth;
        }
        if (direction === Directions.Right && offset > element.offsetWidth) {
          offset = element.offsetWidth * -1;
        }
      }, duration);

      setTimeout(() => {
        clearInterval(intervalId);
      }, 4000);
    }, delay);
  },
  [TextAnimations.Scale]: (
    element: HTMLElement,
    delay: number | undefined = 0,
    duration: number | undefined = 3
  ) => {
    element.style.transition = `scale ${duration}s linear ${delay}`;
    element.style.scale = "3";
  },
};

export { animations };
