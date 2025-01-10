import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image src="/assets/logo.png" alt="LOGO" width={100} height={20} />
    </div>
  );
};

export default Logo;
