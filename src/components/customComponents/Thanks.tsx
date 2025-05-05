'use client'

import { CheckCircle } from 'lucide-react'

export default function CongratulationsPage() {
  return (
    <>
    <div className="min-h-screen bg-black text-white">
      <header className="bg-gradient-to-r from-[#520000] via-[#710000] via-[#a50000] to-[#ce0000] text-center py-2">
        <p className="text-sm text-black font-bold">
          🎉 Congratulations!! Wohooo.... [Your Seat Has Been Confirmed!] ❤️
        </p>
      </header>
      <main className="flex flex-col items-center justify-center py-10 px-4">
        <h1 className="text-4xl font-bold mb-2">
        Congratulations, Future Creator! 🎉 <span role="img" aria-label="party">🥳</span>
        </h1>
        <h2 className="text-2xl font-bold mb-4 text-center">
          You've officially secured your seat for the Most Impactful 
          <span className="underline"> Summer Industrial training </span> <br/>Internship Program — a journey that thousands dream of, but only a few get to experience!❤️
        </h2>
        <p className="text-lg mb-6">
        🚨 This Summer Could Change Your Life Forever.
        From building real-world projects to working with cutting-edge tech — the next few weeks will open doors you never imagined.
        </p>
        <p>👉Please fill out this mandatory Google Form to complete your Registration</p>
        <a href="https://forms.gle/WXDGPuxEStyQGtTS7" className="bg-[#ff0000] hover:bg-[#ff0000] text-black font-bold py-2 px-4 rounded-lg mb-8">
            <>Fill the Form Now! <span role="img" aria-label="party">🥳</span></>
        </a>
        <div className="flex gap-4">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-400">📅 Program Start Date:</p>
            <p className="text-lg font-bold">
            2nd / 16th June, 2025</p>
          </div>
        </div>
      </main>

     {/* Message  */}
<div className="min-h-screen bg-black text-white p-8 pt-0">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-xl font-bold mb-4">
          <span className="italic underline"> A Message from Your Mentor – Mr. Vimal Daga:</span>
        </h1>
        <p className="mb-2">Welcome to a revolution in learning — where ideas come to life, skills get sharper, and creators are born. This summer, don't just learn — make your mark.
        </p>
        <p className="mb-2">🔥 Learn | Research | Implement | Build</p>
        <p className="mb-2">Work on LIVE Industry -Level Projects in</p>
        <p className="mb-2">⚡ Generative AIOps | ML & Data Science | AI | Cloud & DevOps | Full Stack | Python & more</p>
        <h2 className="text-lg font-bold mb-4 underline">What You'll Get:</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" />
            Internship + Project Certificate
          </li>
          <li className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" />
            Hands-on Experience on REAL Projects
          </li>
          <li className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" />
            100% Placement Assistance
          </li>
          <li className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" />
            Industry Exposure + Mentorship
          </li>
          <li className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" />
            A chance to land top product-based jobs
          </li>
        </ul>

        {/* Improved formatting for this section */}
        <div className="text-center mt-8 mb-4">
          <h2 className="text-2xl font-bold mb-2">
            🌟 This Isn't Just Another Internship…
          </h2>
          <p className="text-lg mb-2">
            It's your chance to Create. Build. Inspire.
          </p>
          <p className="text-lg font-bold">
            SHOW UP. STAND OUT.
          </p>
          <p className="text-lg">
            Because this summer, YOU become the creator.
          </p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}