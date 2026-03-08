export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <p className="mb-6">
        If you have any questions or feedback, feel free to contact us.
      </p>

      <form className="space-y-4">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
        />

        <textarea
          placeholder="Message"
          rows={5}
          className="w-full border p-3 rounded"
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded">
          Send Message
        </button>

      </form>

    </main>
  )
}