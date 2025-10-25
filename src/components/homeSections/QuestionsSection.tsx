"use client";

import Container from "../shared/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QuestionsSection = () => {
  return (
    <div className="py-16 bg-bg-lightest">
      <Container>
        <div className="text-center mb-16 px-4 sm:px-6 md:px-0">
          <h1 className="section-title mb-4">Frequently Asked Questions</h1>
          <p className="text-md sm:text-base md:text-lg text-body">
            Everything you need to know about DMVJobs.ai
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-16">
          <Accordion
            type="single"
            collapsible
            className="bg-white p-4 drop-shadow-xs rounded-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base font-medium">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="text-body text-base">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion
            type="single"
            collapsible
            className="bg-white p-4 drop-shadow-xs rounded-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base font-medium">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="text-body text-base">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion
            type="single"
            collapsible
            className="bg-white p-4 drop-shadow-xs rounded-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base font-medium">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="text-body text-base">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion
            type="single"
            collapsible
            className="bg-white p-4 drop-shadow-xs rounded-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base font-medium">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="text-body text-base">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default QuestionsSection;
