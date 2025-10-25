"use client";
import CustomFormField from "@/components/FormField";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import z from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CustomSelectField from "@/components/CustomSelect";
import CustomTextareaField from "@/components/CustomTextareaField";
import Container from "@/components/shared/Container";

export const contactSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  subject: z.string().min(1, "Subject is required"),
  email: z.string().email("Enter a valid email"),
  topic: z.string().min(1, "Topic is required"),
  message: z.string().min(4, "Message is required"),
});

export default function Contact() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      subject: "",
      email: "",
      topic: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof contactSchema>) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div className="overflow-hidden">
      {/* =================== HERO SECTION =================== */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16 sm:py-20 lg:py-24">
          {/* Left Content */}
          <div className="flex flex-col justify-center w-full text-center lg:text-left px-2 sm:px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              Have questions? We&apos;re here to help employers and job
              <br />
              seekers in the DMV area.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end px-2 sm:px-4">
            <div className="relative w-full max-w-[600px] aspect-[14/9] rounded-2xl overflow-hidden">
              <Image
                src="/contact.png"
                alt="Professional team meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* =================== CONTACT FORM SECTION =================== */}
      <div className="flex flex-col md:flex-row w-full md:space-x-8 justify-center items-start px-6 sm:px-10 gap-10 py-10 sm:py-16 lg:py-20">
        {/* Form */}
        <div className="text-left w-full md:w-1/2 max-w-xl mx-auto md:mx-0">
          <h4 className="md:text-h2  font-bold mb-6 text-center md:text-left">
            Send us a Message
          </h4>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="text-title space-y-4">
              <CustomFormField
                control={form.control}
                name="fullName"
                label="Full Name"
                placeholder="John"
              />

              <CustomFormField
                control={form.control}
                name="email"
                label="Email"
                placeholder="email@gmail.com"
              />

              <CustomSelectField
                control={form.control}
                name="subject"
                label="Subject"
                placeholder="Select a topic"
                options={[
                  { label: "Support", value: "support" },
                  { label: "Feedback", value: "feedback" },
                  { label: "Partnership", value: "partnership" },
                  { label: "Other", value: "other" },
                ]}
              />

              <CustomTextareaField
                control={form.control}
                name="message"
                label="Message"
                placeholder="Write your message here..."
                rows={6}
              />

              <Button
                type="submit"
                className="my-4 w-full text-lg font-medium py-6 rounded-md bg-primary hover:bg-primary/90">
                Submit
              </Button>

              <span className="text-lg text-title font-medium block text-center md:text-left">
                We&apos;ll respond within 1-2 business days.
              </span>
            </form>
          </Form>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/2 max-w-xl mx-auto md:mx-0 text-center md:text-left">
          <div>
            <h4 className="text-h4 font-semibold mb-6">Contact Information</h4>
            <div className="space-y-6 md:ml-8">
              <div>
                <h5 className="font-semibold">Email:</h5>
                <p className="text-title break-words">Support@gmail.com</p>
              </div>
              <div>
                <h5 className="font-semibold">Phone:</h5>
                <p className="text-title">1-800-DMV-JOBS</p>
              </div>
              <div>
                <h5 className="font-semibold">Address:</h5>
                <p className="text-title">
                  1234 Business Ave Washington, DC 20001
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d30560.701936195244!2d-77.03810060032252!3d38.91073608395273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x89b7b80288c28f3d%3A0x851f8ad0ff54eae2!2sWashington%2C%20DC%2020001%2C%20USA!3m2!1d38.912068!2d-77.0190228!5e1!3m2!1sen!2sbd!4v1761126944568!5m2!1sen!2sbd"
              className="w-full h-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      {/* =================== QUICK HELP SECTION =================== */}
      <div className="text-center px-4 py-10">
        <h2 className="text-h2 text-black font-semibold mb-6">Quick Help</h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-5xl mx-auto space-y-6"
          defaultValue="item-1">
          {[
            "How do I post a job?",
            "How do I manage my account?",
            "How do I contact support?",
          ].map((question, i) => (
            <AccordionItem
              key={i}
              value={`item-${i + 1}`}
              className="border rounded-lg border-[#D1D6DB] px-4">
              <AccordionTrigger className="text-2xl text-black">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-lg flex flex-col gap-4 text-left text-body">
                <p>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* CTA Section */}
      <section className="px-2 sm:px-4 py-12 sm:py-16 md:py-24 bg-secondary text-center mt-10 sm:mt-16 lg:mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Looking to Post a Job?
          </h2>
          <p className="text-base sm:text-lg text-teal-50 mb-6 sm:mb-8">
            Connect with qualified candidates in the DMV area today.
          </p>
          <Button className="bg-white text-primary hover:bg-slate-100 px-8 py-5 sm:py-6 text-base font-semibold">
            Post a Job Now
          </Button>
        </div>
      </section>
    </div>
  );
}
