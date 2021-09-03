import React from 'react';

const Section = ({ title, image, reverse, children }) => {
  return (
    <section className="w-full max-w-screen-xl mx-auto rounded-2xl shadow-top  mb-10 px-6 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-center md:text-left">
      <div className={reverse ? 'order-2' : 'order-2 md:order-1'}>
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 max-w-lg mx-auto md:mx-none">
          {title}
        </h2>
        <p className="text-lg text-grey max-w-lg mx-auto md:mx-none">
          {children}
        </p>
      </div>
      <div className={reverse ? 'order-1' : 'md:order-2'}>
        <img
          src={image}
          alt="Illustration of people together, enjoying Huddle"
          className="w-full max-w-sm mx-auto"
        />
      </div>
    </section>
  );
};

export default Section;
