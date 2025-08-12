import React from 'react';
import { FaMagic, FaRobot, FaFileDownload, FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-base-100 text-base-content transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-content">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Create a Professional Resume <br /> in Minutes
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let our AI help you build a resume that gets noticed by employers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/generate-resume" 
              className="btn btn-secondary btn-lg"
            >
              Get Started - Free
            </Link>
            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<FaRobot className="text-primary text-3xl" />}
              title="AI-Powered"
              description="Smart technology builds your resume"
            />
            <FeatureCard 
              icon={<FaMagic className="text-primary text-3xl" />}
              title="Easy to Use"
              description="Simple interface, no experience needed"
            />
            <FeatureCard 
              icon={<FaFileDownload className="text-primary text-3xl" />}
              title="Instant Download"
              description="Get your resume in seconds"
            />
            <FeatureCard 
              icon={<FaUserTie className="text-primary text-3xl" />}
              title="Professional"
              description="Looks great to employers"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <Step 
              number="1"
              title="Enter Your Info"
              description="Tell us about your work and education"
            />
            <Step 
              number="2"
              title="AI Does the Work"
              description="Our system creates your perfect resume"
            />
            <Step 
              number="3"
              title="Download & Apply"
              description="Get your resume and start job hunting"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Testimonial 
              quote="Got my dream job in 2 weeks!"
              name="Sarah J."
              role="Marketing Manager"
            />
            <Testimonial 
              quote="Best resume builder I've used"
              name="Michael T."
              role="Software Engineer"
            />
            <Testimonial 
              quote="Made job hunting so much easier"
              name="Emily R."
              role="Recent Graduate"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Resume?</h2>
          <p className="text-xl opacity-90 mb-8">Start for free - no credit card needed</p>
          <Link 
            to="/generate-resume"
            className="btn btn-secondary btn-lg"
          >
            Create My Resume Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral text-neutral-content py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xl font-medium mb-2">Resume Builder Pro</p>
          <p className="opacity-80 mb-6">The smart way to create resumes</p>
          <div className="border-t border-neutral-focus pt-6 opacity-60">
            <p>© 2025 All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Reusable Components
const FeatureCard = ({ icon, title, description }) => (
  <div className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="card-body items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="card-title text-xl">{title}</h3>
      <p className="opacity-80">{description}</p>
    </div>
  </div>
);

const Step = ({ number, title, description }) => (
  <div className="flex items-start">
    <div className="bg-primary text-primary-content rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 text-lg font-bold">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="opacity-80">{description}</p>
    </div>
  </div>
);

const Testimonial = ({ quote, name, role }) => (
  <div className="card bg-base-100 shadow-sm">
    <div className="card-body">
      <p className="italic opacity-90 mb-4">"{quote}"</p>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm opacity-70">{role}</p>
      </div>
    </div>
  </div>
);

export default LandingPage;