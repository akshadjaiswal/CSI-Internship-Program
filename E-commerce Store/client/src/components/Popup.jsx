// Popup.jsx
import React, { useState, useRef, useEffect } from "react";

const Popup = ({ to, label, popupContent, links, onHover,id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleMouseLeave = () => {
      const timeoutId = setTimeout(() => {
        setPopupVisible(false);
      }, 300);

      return () => clearTimeout(timeoutId);
    };

    if (popupRef.current) {
      popupRef.current.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        popupRef.current.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [popupRef]);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => {
        setIsHovered(true);
        setPopupVisible(true);
        // Invoke the onHover callback with the label

        if(id!=="account"){
          onHover(label);

        }
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={to} className="text-black px-2 cursor-pointer hover:underline text-[17px] decoration-red-400 decoration-4">
        {label}
      </a>

      {isHovered && popupVisible && (
        <div className="z-[90000]" ref={popupRef}>
          {popupContent}
          <ul className="mt-2 text-start text-sm">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.to}
                  className="text-black text-xs hover:underline"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Popup;
