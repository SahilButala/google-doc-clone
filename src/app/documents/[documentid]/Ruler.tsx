"use client";

import React, { useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
const markers = Array.from({ length: 83 }, (_, i) => i);

const Ruler = () => {
  const [leftMargine, setleftMargine] = useState(56);
  const [rightMargine, setrightMargine] = useState(56);
  const [isDraggingLeft, setisDraggingLeft] = useState(false);
  const [isDraggingRight, setisDraggingRight] = useState(false);

  const rulerRef = useRef<HTMLDivElement>(null);

  const handleleftMouseDown = () => {
    setisDraggingLeft(true);
  };
  const handleRightMouseDown = () => {
    setisDraggingRight(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if ((isDraggingLeft || isDraggingRight) && rulerRef.current) {
      const container = rulerRef.current.querySelector("#ruler-container");
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const relativeX = e.clientX - containerRect.left;
        const rewposition = Math.max(0, Math.min(816, relativeX));

        if (isDraggingLeft) {
          const maxLeftPosition = 816 - rightMargine - 100;
          const newLeftPosition = Math.min(rewposition, maxLeftPosition);
          setleftMargine(newLeftPosition); // TODO make collaborative
        } else if (isDraggingRight) {
          const maxRightPosition = 816 - (leftMargine + 100);
          const newRightPosition = Math.max(816 - rewposition, 0);
          const constrainRightPosition = Math.min(
            newRightPosition,
            maxRightPosition
          );

          setrightMargine(constrainRightPosition);
        }
      }
    }
  };

  const handleMouseUp = () => {
    setisDraggingLeft(false);
    setisDraggingRight(false);
  };

  const handleLeftDoubleClick = () => {
    setleftMargine(56);
  };
  const handleRightDoubleClick = () => {
    setrightMargine(56);
  };

  return (
    <div

      className="h-6   border-b border-gray-300 flex items-center relative print:hidden select-none"
      ref={rulerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        id="ruler-container"
        className="max-w-[816px] mx-auto w-full h-full relative"
      >
        <Marker
          position={leftMargine}
          isLeft={true}
          isDragging={isDraggingLeft}
          onMoseDown={handleleftMouseDown}
          onDoubleClick={handleLeftDoubleClick}
        />
        <Marker
          position={rightMargine}
          isLeft={false}
          isDragging={isDraggingRight}
          onMoseDown={handleRightMouseDown}
          onDoubleClick={handleRightDoubleClick}
        />
        <div className="absolute inset-x-0 bottom-0 h-full">
          <div className="relative h-full  w-[816px]">
            {markers.map((marker) => {
              const position = (marker * 816) / 82;
              return (
                <div
                  className="absolute bottom-0"
                  style={{ left: `${position}px` }}
                  key={marker}
                >
                  {marker % 10 === 0 && (
                    <>
                      <div className="absolute h-2 w-[1px] bottom-0 bg-neutral-500" />
                      <span className="absolute bottom-2 text-[10px] transform -translate-x-1/2 text-neutral-500">
                        {marker / 10 + 1}
                      </span>
                    </>
                  )}

                  {marker % 5 === 0 && marker % 10 !== 0 && (
                    <div className="absolute bottom-0 h-1.5 w-[1px] bg-neutral-500" />
                  )}

                  {marker % 5 !== 0 && (
                    <div className="absolute bottom-0 h-1 w-[1px] bg-neutral-500" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

interface MarkerProps {
  position: number;
  isLeft: boolean;
  isDragging: boolean;
  onMoseDown: () => void;
  onDoubleClick: () => void;
}

const Marker = ({
  position,
  isLeft,
  isDragging,
  onMoseDown,
  onDoubleClick,
}: MarkerProps) => {
  return (
    <div
      className="absolute top-0 w-4 h-full cursor-ew-resize z-10 group -ml-2"
      style={{ [isLeft ? "left" : "right"]: `${position}px` }}
      onMouseDown={onMoseDown}
      onDoubleClick={onDoubleClick}
    >
      <FaCaretDown className="absolute left-1/2 h-full fill-blue-500 transform -translate-x-1/2 " />

      <div className="absolute left-1/2 top-4  transform  -translate-x-1/2 transition-opacity duration-150"
      
      style={{
        height : "100vh",
        width : "2px",
        transform : "scaleX(0.5)",
        backgroundColor : "#3b72f1",
        display : isDragging ? "block" : "none"
      }}
      
      >
      
      </div>
    </div>
  );
};

export default Ruler;
