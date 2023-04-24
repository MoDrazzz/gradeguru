"use client";

import classNames from "classnames";
import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface ChildProps {
  currentSlide: number;
}

interface Props {
  children: React.ReactNode;
  length: number;
}

export default function Slideshow({ children, length }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const intervalFn = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1 < length ? prev + 1 : 0));
  }, [length]);

  const handleChangeSlide = (newSlideNumber: number) => {
    const interval = intervalRef.current;

    if (!interval) return;

    setCurrentSlide(newSlideNumber);
    // Restart interval.
    clearInterval(interval);
    intervalRef.current = setInterval(intervalFn, 5000);
  };

  useEffect(() => {
    const interval = setInterval(intervalFn, 5000);

    intervalRef.current = interval;

    return () => clearInterval(interval);
  }, [intervalFn]);

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement<ChildProps>(child)) {
      return cloneElement(child, {
        currentSlide,
      });
    }
    return child;
  });

  return (
    <div className="flex flex-col items-center gap-3">
      {childrenWithProps}
      <div className="flex gap-2">
        {Array.from({ length }).map((_, i) => (
          <span
            key={i}
            className={classNames("h-2 w-2 cursor-pointer rounded-full", {
              "bg-blue-50": currentSlide === i,
              "bg-blue-300": !(currentSlide === i),
            })}
            onClick={() => handleChangeSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}
