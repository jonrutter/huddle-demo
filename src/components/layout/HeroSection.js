import React from 'react';

// images
import Image from 'assets/images/illustration-mockups.svg';

// components
import Header from 'components/layout/Header';
import BrandButton from 'components/buttons/BrandButton';

const HeroSection = () => {
  return (
    // bg wrappers
    <div className="bg-light">
      <div className="bg-hero-desktop bg-no-repeat bg-cover pt-7 md:pt-14 px-6 pb-10 md:pb-16">
        {/* content */}
        <div className="w-full max-w-screen-xl mx-auto">
          <Header />
          {/* hero grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:items-center lg:justify-items-start">
            <section className="text-dark max-w-lg text-center md:text-left mx-auto md:mx-0">
              <h1 className="text-3xl md:text-4xl font-bold font-heading mb-8">
                Build The Community Your Fans Will Love
              </h1>
              <p className="mb-8 text-lg">
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>
              <BrandButton>Get Started For Free</BrandButton>
            </section>
            <div>
              <img
                src={Image}
                alt="Illustration of a computer screen"
                className="w-full h-auto max-w-lg mx-auto md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
