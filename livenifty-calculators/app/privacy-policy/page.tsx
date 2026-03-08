import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | LiveNifty",
  description: "Privacy policy explaining how LiveNifty collects, uses and protects user data.",
}

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At LiveNifty, accessible from https://livenifty.com, protecting
        the privacy of our visitors is one of our main priorities.
      </p>

      <h2 className="text-xl font-semibold mt-6">Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as email addresses,
        usage data, browser type, device information, and interaction
        behavior on the website.
      </p>

      <h2 className="text-xl font-semibold mt-6">How We Use Information</h2>
      <ul className="list-disc ml-6">
        <li>Improve website functionality</li>
        <li>Analyze traffic and user engagement</li>
        <li>Display relevant advertisements</li>
        <li>Improve financial calculator tools</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Google AdSense</h2>
      <p>
        Google uses cookies to serve ads to users based on their visits
        to this website and other websites.
      </p>

      <h2 className="text-xl font-semibold mt-6">Cookies</h2>
      <p>
        LiveNifty uses cookies to store user preferences and optimize
        user experience.
      </p>

      <h2 className="text-xl font-semibold mt-6">Consent</h2>
      <p>
        By using our website, you consent to our privacy policy.
      </p>

    </main>
  )
}