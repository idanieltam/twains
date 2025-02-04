import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/30 via-blue-500/20 to-transparent animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-cyan-400/5 to-transparent"></div>
      {/* Header */}
      <header className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold relative"><span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">Twain</span></h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">Celebrities</a></li>
              <li><a href="#" className="hover:text-blue-400">How it Works</a></li>
              <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20 text-center">
        <div className="relative animate-twin">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 text-transparent bg-clip-text animate-gradient-x relative animate-hologram">
            <span className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-30 blur-xl animate-pulse"></span>
            Meet Your Digital Twin Stars
          </h2>
        </div>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-scan hologram-card p-6">
          Experience the future of celebrity interaction with AI-powered digital twins. Chat, interact, and create unique experiences with hyper-realistic celebrity clones.
        </p>
        <div className="flex justify-center gap-6">
          <button className="relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-50 blur-xl group-hover:opacity-75 transition-opacity"></span>
            <span className="relative">
            Try Now</span>
          </button>
          <button className="relative border border-cyan-400 hover:border-cyan-300 text-cyan-400 hover:text-cyan-300 px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-50 transition-opacity blur-xl"></span>
            <span className="relative">
            Learn More</span>
          </button>
        </div>
      </main>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-sm border border-blue-500/20 p-6 rounded-2xl mb-4 inline-block">
              <svg className="w-10 h-10 text-blue-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Voice Cloning</h3>
            <p className="text-gray-400">Experience realistic conversations with AI-powered voice cloning technology.</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-sm border border-purple-500/20 p-6 rounded-2xl mb-4 inline-block">
              <svg className="w-10 h-10 text-purple-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Video Generation</h3>
            <p className="text-gray-400">Create personalized video content with your favorite celebrities.</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-pink-500/30 to-rose-500/30 backdrop-blur-sm border border-pink-500/20 p-6 rounded-2xl mb-4 inline-block">
              <svg className="w-10 h-10 text-pink-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Interactive Chat</h3>
            <p className="text-gray-400">Engage in natural conversations with AI-powered celebrity personalities.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
