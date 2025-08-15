"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "How can I use AI.antsq.com to generate content?",
    answer:
      "You can use AI.antsq.com by accessing the writing app on their website and utilizing its features, which go beyond simple text generation, to create high-quality written content with stunning visuals and SEO optimization capabilities.",
  },
  {
    question: "Can AI.antsq.com help me with optimizing my content for SEO",
    answer:
      "Yes, AI.antsq.com can help you optimize your content for SEO by generating high-quality written content that is relevant and engaging to your target audience, which can improve your search engine rankings.",
  },
  {
    question:
      "What are the specific features of AI.antsq.com that go beyond simple text generation?",
    answer:
      "AI.antsq.com offers features that go beyond simple text generation, including the ability to generate visuals, optimize content for SEO, and seamlessly integrate with WordPress plugins. It is a comprehensive tool designed to enhance creativity, productivity, and content quality for bloggers, content creators, and digital marketers.",
  },
  {
    question: "AI.antsq.com powered by artificial intelligence?",
    answer:
      "Yes, AI.antsq.com is powered by advanced technologies like GPT-3 and DALL·E, which are artificial intelligence models designed for text generation and image generation respectively.",
  },
  {
    question: "Can AI.antsq.com replace human content creators?",
    answer:
      "AI.antsq.com is designed to augment human creativity and productivity, but it is not meant to replace human content creators. It is a tool that can assist in content creation, but human creativity and expertise are still essential in producing high-quality content.",
  },
];

const PlusMinusIcon = () => (
  <div className="relative h-4 w-4 flex-shrink-0">
    <div className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 rounded-full bg-dark-gray transition-all duration-300" />
    <div className="absolute top-0 left-1/2 h-full w-[2px] -translate-x-1/2 rounded-full bg-dark-gray transition-all duration-300 group-data-[state=open]:opacity-0" />
  </div>
);

const FAQ = () => {
  return (
    <section className="bg-light-pink py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <p className="text-center text-primary-red font-bold text-lg mb-2">
          FAQ
        </p>
        <h2 className="text-center text-dark-gray text-4xl font-bold mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-4xl mx-auto space-y-4"
          defaultValue="item-0"
        >
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#FDECEC] border-none rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
            >
              <AccordionTrigger
                className="group flex w-full items-center justify-between p-6 text-left text-lg font-bold text-dark-gray hover:no-underline [&>svg]:hidden"
              >
                <span className="pr-4">{item.question}</span>
                <PlusMinusIcon />
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0 text-base text-gray">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;