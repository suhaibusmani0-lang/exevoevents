// pages/PrivacyPolicy.tsx
export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last Updated: June 19, 2025</p>

      <p className="mb-4">
        At <strong>Exevo Events</strong>, your privacy is important to us. This Privacy Policy outlines how we collect,
        use, and protect your information when you interact with our website or services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Name</li>
        <li>Email address</li>
        <li>Company name</li>
        <li>Event type and details</li>
      </ul>
      <p className="mb-4">This information is collected only through our contact form.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use the collected information to respond to your inquiries, provide proposals, improve services, and analyze
        web traffic via <strong>Google Analytics</strong>. We do not share your data with third parties.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Google Analytics</h2>
      <p className="mb-4">
        We use Google Analytics to understand visitor behavior. The data is anonymized and used for statistical
        purposes only.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We implement reasonable security measures to protect your data. However, no transmission over the internet is
        completely secure.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You may contact us at any time to request access, correction, or deletion of your data.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Contact Us</h2>
      <p>
        📧 <strong>praveen@exevoevents.in</strong><br />
        🏢 <strong>House No 469, Second Floor, Chirag Delhi, New Delhi (110017)</strong>
      </p>
    </div>
  );
}