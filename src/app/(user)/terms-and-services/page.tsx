import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions – DMVJobs.ai",
  description: "Terms and Conditions for DMVJobs.ai",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary">
            Terms & Conditions –{" "}
            <span className="text-green-600">DMVJobs.ai</span>
          </h1>
          <p className="mt-2 text-muted-foreground">
            Last Updated: September 12, 2025
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-base leading-relaxed text-foreground">
            Welcome to DMVJobs.ai. By accessing or using our website and
            services, you agree to the following Terms & Conditions. Please read
            them carefully.
          </p>
        </section>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              1. Acceptance of Terms
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              By creating an account or using DMVJobs.ai, you agree to be bound
              by these Terms & Conditions, our Privacy Policy, and any
              additional guidelines we may publish. If you do not agree, you
              must stop using our services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              2. Services Provided
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              DMVJobs.ai is an online platform that connects job seekers with
              employers in Washington DC, Maryland, and Virginia through
              AI-powered job matching. We provide:
            </p>
            <ul className="mt-4 space-y-2 pl-6 text-base leading-relaxed text-foreground">
              <li className="list-disc">Job posting services for employers.</li>
              <li className="list-disc">
                Job search and application services for candidates.
              </li>
              <li className="list-disc">
                AI-based resume and job matching tools.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              3. User Accounts
            </h2>
            <ul className="mt-4 space-y-2 pl-6 text-base leading-relaxed text-foreground">
              <li className="list-disc">
                You must provide accurate and up-to-date information when
                creating an account.
              </li>
              <li className="list-disc">
                You are responsible for keeping your login credentials secure.
              </li>
              <li className="list-disc">
                You are responsible for all activity under your account.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              4. Use of Platform
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              You agree not to:
            </p>
            <ul className="mt-4 space-y-2 pl-6 text-base leading-relaxed text-foreground">
              <li className="list-disc">
                Post false, misleading, or fraudulent job listings.
              </li>
              <li className="list-disc">
                Upload resumes or profiles containing false information.
              </li>
              <li className="list-disc">
                Use our platform for illegal, harmful, or abusive purposes.
              </li>
              <li className="list-disc">
                Attempt to hack, disrupt, or misuse the website.
              </li>
            </ul>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              We reserve the right to suspend or terminate accounts that violate
              these rules.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              5. Employer Responsibilities
            </h2>
            <ul className="mt-4 space-y-2 pl-6 text-base leading-relaxed text-foreground">
              <li className="list-disc">
                Employers are responsible for the accuracy of job postings.
              </li>
              <li className="list-disc">
                Employers must comply with all applicable labor and employment
                laws.
              </li>
              <li className="list-disc">
                DMVJobs.ai is not responsible for employment agreements made
                outside the platform.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              6. Job Seeker Responsibilities
            </h2>
            <ul className="mt-4 space-y-2 pl-6 text-base leading-relaxed text-foreground">
              <li className="list-disc">
                Job seekers are responsible for the accuracy of their resumes
                and profiles.
              </li>
              <li className="list-disc">
                DMVJobs.ai does not guarantee employment or hiring outcomes.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              7. Fees & Payments
            </h2>
            <ul className="mt-4 space-y-2 pl-6 text-base leading-relaxed text-foreground">
              <li className="list-disc">
                Some services (such as job postings or premium features) may
                require payment.
              </li>
              <li className="list-disc">
                All fees are listed on the platform and are subject to change
                with notice.
              </li>
              <li className="list-disc">
                Payments are non-refundable unless otherwise stated.
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              8. Intellectual Property
            </h2>
            <ul className="mt-4 space-y-2 pl-6 text-base leading-relaxed text-foreground">
              <li className="list-disc">
                All content on DMVJobs.ai, including text, graphics, logos, and
                software, is our property or licensed to us.
              </li>
              <li className="list-disc">
                You may not copy, modify, or distribute our content without
                written permission.
              </li>
            </ul>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              9. Limitation of Liability
            </h2>
            <ul className="mt-4 space-y-2 pl-6 text-base leading-relaxed text-foreground">
              <li className="list-disc">
                DMVJobs.ai provides the platform &quot;as is&quot; without
                warranties of any kind.
              </li>
              <li className="list-disc">
                We are not responsible for hiring outcomes, employment disputes,
                or third-party actions.
              </li>
              <li className="list-disc">
                Our liability is limited to the maximum extent permitted by law.
              </li>
            </ul>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              10. Indemnification
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              You agree to indemnify and hold DMVJobs.ai harmless from any
              claims, damages, or losses resulting from your use of the platform
              or violation of these Terms.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              11. Third-Party Links
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              Our website may contain links to external websites. We are not
              responsible for the content or practices of third parties.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              12. Changes to Terms
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              We may update these Terms & Conditions at any time. Changes will
              be posted with the updated &quot;Last Updated&quot; date.
              Continued use of DMVJobs.ai means you accept the updated terms.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              13. Governing Law
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              These Terms & Conditions are governed by the laws of the United
              States and the state where DMVJobs.ai operates.
            </p>
          </section>

          {/* Contact Us */}
          <section className="border-t border-border pt-8">
            <h2 className="text-2xl font-bold text-primary">Contact Us</h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              If you have any questions about these Terms & Conditions, please
              contact us:
            </p>
            <ul className="mt-4 space-y-2 text-base leading-relaxed text-foreground">
              <li>
                <span className="font-semibold">Email:</span> support@dmvjobs.ai
              </li>
              <li>
                <span className="font-semibold">Address:</span> [Company
                Address]
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
