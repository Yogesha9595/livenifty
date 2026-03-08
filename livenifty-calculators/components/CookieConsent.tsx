"use client"

import { useState, useEffect } from "react"

export default function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) setShow(true)
  }, [])

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShow(false)
  }

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex justify-between items-center">

      <p>
        We use cookies to improve your experience.
      </p>

      <div className="space-x-3">
        <button
          onClick={reject}
          className="bg-gray-600 px-4 py-2 rounded"
        >
          Reject
        </button>

        <button
          onClick={accept}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          Accept
        </button>
      </div>

    </div>
  )
}