import React from 'react';
import { Banner } from "flowbite-react";
const BannerSection = () => {
    return (
      <div>
        <Banner>
          <img
            src="https://i.ibb.co/rxBJd43/banner.png"
            className="w-full"
            alt="Banner"
          />
        </Banner>
      </div>
    );
};

export default BannerSection;