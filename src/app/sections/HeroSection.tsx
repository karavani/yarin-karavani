import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="object-cover w-full h-full"
          poster="/images/hero-fallback.jpg"
        >
          <source src="/videos/showreel.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Telling Stories Through the Lens
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Bringing visuals to life with creativity and impact. Specializing in cinematic storytelling, 
          brand videos, and digital content creation.
        </p>
        <div className="flex gap-4">
          <Link 
            href="#showreel" 
            className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Watch Showreel
          </Link>
          <Link 
            href="#contact" 
            className="border-2 border-white px-8 py-3 rounded-full hover:bg-white/10 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}