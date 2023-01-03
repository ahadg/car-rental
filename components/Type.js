import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Located in the Islands of St. Thomas and St. John!",
          "A trusted way to make your car rental experience in the Virgin Islands, the best. Book Below!",
          
        ],
        autoStart: true,
        delay: 58,
        loop: false,
        deleteSpeed: 38,
      }}
    />
  );
}

export default Type;

