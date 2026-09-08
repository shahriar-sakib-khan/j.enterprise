import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.businessName}`,
};

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="bg-[#0A192F] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl prose prose-lg text-blue-700">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

            <h2>Introduction</h2>
            <p>
              {siteConfig.businessName} (operating as {siteConfig.shortName}) respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul>
              <li><strong>Identity Data:</strong> includes first name, last name, and company name.</li>
              <li><strong>Contact Data:</strong> includes email address, telephone numbers, and business address.</li>
              <li><strong>Enquiry Data:</strong> includes details about vessels, equipment requirements, and other information provided via our contact forms.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul>
              <li>To respond to your enquiries and provide information about our marine equipment and services.</li>
              <li>To manage our relationship with you or your company.</li>
              <li>Where it is necessary for our legitimate business interests in providing marine services.</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.
            </p>

            <h2>Contact Details</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p>
              <strong>{siteConfig.businessName}</strong><br />
              Email: {siteConfig.email}<br />
              Address: {siteConfig.locations[0].address}, {siteConfig.locations[0].street}, {siteConfig.locations[0].city}, {siteConfig.locations[0].country}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
