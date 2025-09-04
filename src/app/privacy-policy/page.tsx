export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At Brain Nourishment, your privacy matters. We only collect the minimum
        amount of information needed to provide you with our program and keep
        you updated on your journey.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">What We Collect</h2>
      <p className="mb-4">
        When you sign up, we ask for your email address. That’s it. We use your
        email only to send:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Daily reset emails and progress tools</li>
        <li>Program updates and new resources</li>
        <li>Important service announcements</li>
      </ul>
      <p className="mb-4">We never sell, rent, or share your information with third parties.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Your Control</h2>
      <p className="mb-4">
        You can unsubscribe at any time by clicking the link in our emails. Once
        unsubscribed, we’ll stop sending you updates immediately.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
      <p className="mb-4">
        We use secure systems to protect your information. While no method is
        100% foolproof, we take every reasonable step to keep your data safe.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about your privacy, email us at{" "}
        <a href="mailto:support@brainnourishment.com" className="text-blue-600 underline">
          support@brainnourishment.com
        </a>
        .
      </p>
    </div>
  );
}
