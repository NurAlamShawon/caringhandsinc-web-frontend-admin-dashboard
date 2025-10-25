"use client";

import { useEffect, useState } from "react";
import Container from "../shared/Container";
import Image from "next/image";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "Software Engineer",
    image: "/p-1.jpg",
    rating: 5,
    text: '"Thanks to DMVJobs.ai, I landed my dream role in just 2 weeks! The AI matching was incredibly accurate - every job recommendation was relevant to my skills and career goals."',
  },
  {
    id: 2,
    name: "Maya Patel",
    role: "HR Manager",
    image: "/p-2.jpg",
    rating: 5,
    text: '"The AI matching saved me hours of searching. I found the right fit fast and the application process was seamless. Best job search platform I\'ve used!"',
  },
  {
    id: 3,
    name: "Chris Rodriguez",
    role: "Hiring Manager",
    image: "/p-3.jpg",
    rating: 5,
    text: '"Thanks to DMVJobs.ai, I landed my dream role in just 2 weeks! The AI matching was incredibly accurate - every job recommendation was relevant to my skills and career goals."',
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Product Manager",
    image: "/p-2.jpg",
    rating: 5,
    text: '"Outstanding platform! The job recommendations were spot-on and helped me transition into a new industry smoothly. Highly recommended!"',
  },
  {
    id: 5,
    name: "Michael Chen",
    role: "Data Scientist",
    image: "/p-1.jpg",
    rating: 5,
    text: '"The matching algorithm is impressive. I found positions that aligned perfectly with my background and aspirations. Great experience overall!"',
  },
];

const WhatJobSeekersAndEmployersSay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Update items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerView
  );
  return (
    <div className="mb-40">
      <Container>
        <div className="flex items-baseline justify-between mb-16">
          <div className="text-left px-4 sm:px-6 md:px-0">
            <h1 className="section-title mb-4">
              What Job Seekers & Employers Say
            </h1>
            <p className="text-base sm:text-base md:text-lg text-body">
              Real success stories from our community
            </p>
          </div>

          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted w-4 hover:bg-muted-foreground"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-6 bg-bg-lightest rounded-lg hover:shadow-lg transition-shadow duration-300">
                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    width={64}
                    height={64}
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover bg-muted"
                  />
                  <div className="flex-1">
                    <h3 className="text-title text-2xl font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-lg text-body font-medium mb-2">
                      {testimonial.role}
                    </p>
                    {/* Rating */}
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-[#F8C807] text-[#F8C807]"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-caption text-base leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatJobSeekersAndEmployersSay;
