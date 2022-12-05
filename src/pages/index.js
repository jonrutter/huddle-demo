import React from 'react';
import { Helmet } from 'react-helmet';

// images
import Grow from 'assets/images/illustration-grow-together.svg';
import Conversation from 'assets/images/illustration-flowing-conversation.svg';
import Users from 'assets/images/illustration-your-users.svg';

// components
import HeroSection from 'components/layout/HeroSection';
import Section from 'components/layout/Section';
import CTABox from 'components/layout/CTABox';
import Footer from 'components/layout/Footer';

const IndexPage = () => {
  return (
    <div>
      <Helmet htmlAttributes={{ lang: 'en-us' }}>
        <title>Huddle | Home</title>
        <meta
          name="description"
          content="A demo landing page for a software company. Built with Gatsby and Tailwind CSS"
        />
        <meta name="author" content="Jon Rutter" />
      </Helmet>
      <HeroSection />
      <main className="pt-20 md:pt-40 px-6 bg-white">
        <Section title="Grow Together" image={Grow}>
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </Section>
        <Section title="Flowing Conversations" image={Conversation} reverse>
          You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </Section>
        <Section title="Your Users" image={Users}>
          It takes no time at all to integrate Huddle with your app's
          authentication solution. This means, once signed in to your app, your
          users can start chatting immediately.
        </Section>
        <div className="-mt-8">
          <CTABox />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
