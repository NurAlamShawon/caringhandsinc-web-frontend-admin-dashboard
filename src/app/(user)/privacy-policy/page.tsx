import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – DMVJobs.ai",
  description: "Privacy Policy for DMVJobs.ai",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary">
            Privacy Policy – <span className="text-green-600">DMVJobs.ai</span>
          </h1>
          <p className="mt-2 text-muted-foreground">
            Last Updated: September 12, 2025
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-base leading-relaxed text-foreground">
            DMVJobs.ai (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
            values your privacy. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you use our
            website and services. By using DMVJobs.ai, you agree to the terms
            described below.
          </p>
        </section>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              1. Information We Collect
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              We may collect the following types of information:
            </p>
            <ul className="mt-4 space-y-2 pl-6 text-base leading-relaxed text-foreground">
              <li className="list-disc">
                <span className="font-semibold">Personal Information:</span>{" "}
                Name, email address, phone number, resume, and job application
                details.
              </li>
              <li className="list-disc">
                <span className="font-semibold">Account Information:</span>{" "}
                Username, password, and profile data.
              </li>
              <li className="list-disc">
                <span className="font-semibold">Usage Data:</span> IP address,
                browser type, device info, and activity on our site (via
                analytics and cookies).
              </li>
              <li className="list-disc">
                <span className="font-semibold">Employer Data:</span> Company
                information, job postings, and recruiter account details.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              2. How We Use Your Information
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              We use your information to:
            </p>
            <ul className="mt-4 space-y-2 pl-6 text-base leading-relaxed text-foreground">
              <li className="list-disc">
                Match job seekers with relevant job opportunities.
              </li>
              <li className="list-disc">
                Help employers connect with qualified candidates.
              </li>
              <li className="list-disc">
                Improve our AI-powered job matching tools.
              </li>
              <li className="list-disc">
                Send updates, job alerts, and promotional emails (with opt-out
                options).
              </li>
              <li className="list-disc">
                Protect our platform from fraudulent or unauthorized activities.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              3. Sharing of Information
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              We do not sell your data. We only share information when:
            </p>
            <ul className="mt-4 space-y-2 pl-6 text-base leading-relaxed text-foreground">
              <li className="list-disc">
                You apply to jobs and employers need your profile/resume.
              </li>
              <li className="list-disc">
                We use trusted third-party providers (hosting, analytics,
                payment, or email delivery).
              </li>
              <li className="list-disc">
                Required by law, regulation, or legal request.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              4. Cookies &amp; Tracking
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              We use cookies and similar technologies to:
            </p>
            <ul className="mt-4 space-y-2 pl-6 text-base leading-relaxed text-foreground">
              <li className="list-disc">Store preferences.</li>
              <li className="list-disc">
                Analyze traffic and site performance.
              </li>
              <li className="list-disc">
                Personalize your experience. You may disable cookies in your
                browser settings, but some site features may not work properly.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              5. Data Retention &amp; Security
            </h2>
            <ul className="mt-4 space-y-2 pl-6 text-base leading-relaxed text-foreground">
              <li className="list-disc">
                We keep your data as long as needed to provide our services.
              </li>
              <li className="list-disc">
                We apply industry-standard encryption and security measures.
              </li>
              <li className="list-disc">
                You may request deletion of your account and data at any time.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">6. Your Rights</h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              Depending on your location, you may have the right to:
            </p>
            <ul className="mt-4 space-y-2 pl-6 text-base leading-relaxed text-foreground">
              <li className="list-disc">
                Access, correct, or delete your personal data.
              </li>
              <li className="list-disc">
                Opt out of marketing communications.
              </li>
              <li className="list-disc">Request a copy of your stored data.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              7. Third-Party Links
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              Our site may include links to third-party websites. We are not
              responsible for their privacy practices.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              8. Children&apos;s Privacy
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              DMVJobs.ai is not intended for users under 16. We do not knowingly
              collect information from children.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              9. Policy Updates
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              We may update this Privacy Policy from time to time. Changes will
              be posted here with an updated &quot;Last Updated&quot; date.
            </p>
          </section>

          {/* Contact Us */}
          <section className="border-t border-border pt-8">
            <h2 className="text-2xl font-bold text-primary">Contact Us</h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              If you have questions about this Privacy Policy, please contact
              us:
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
