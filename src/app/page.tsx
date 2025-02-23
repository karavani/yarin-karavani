import Image from "next/image";
import HeroSection from "./sections/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 bg-transparent absolute w-full z-20 text-white">
        <div className="flex items-center">
          <Image
            src="/images/yk-logo.png"
            alt="YK Logo"
            width={80}
            height={60}
            className="mr-2"
          />  
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-300">Portfolio</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen bg-gray-900 text-white">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/images/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto pt-48 px-8">
          <span className="bg-accent px-3 py-1 rounded-full text-sm">VIDEOGRAPHER & STORYTELLER</span>
          <h1 className="text-6xl font-bold mt-6 mb-4">Creating Visual Stories</h1>
          <p className="text-2xl mb-4">That Leave a Lasting Impact</p>
          <p className="text-gray-200 mb-8 max-w-2xl text-lg">
            Specializing in commercial videography, brand storytelling, and creative content 
            that connects with your audience on a deeper level.
          </p>
          <div className="flex gap-4">
            <button className="bg-accent text-black px-8 py-4 rounded-full font-medium">VIEW WORK</button>
            <button className="flex items-center gap-2 text-white border border-white px-8 py-4 rounded-full">
              <span className="w-4 h-4">▶</span>
              Showreel
            </button>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project cards with hover effects */}
            {[1, 2, 3].map((index) => (
              <div key={index} className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer">
                <Image
                  src={`/images/project${index}.jpg`}
                  alt={`Project ${index}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-accent mb-2">Commercial</div>
                    <h3 className="text-xl font-bold">Project Title</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section className="max-w-6xl mx-auto py-12 px-8">
        <div className="grid grid-cols-3 gap-6">
          <article className="group cursor-pointer">
            <div className="relative aspect-[4/3] mb-4">
              <Image
                src="/images/article1.png"
                alt="Article thumbnail"
                fill
                className="object-cover rounded-lg"
              />
              <span className="absolute top-4 left-4 bg-yellow-400 px-3 py-1 rounded-full text-xs">
                BUSINESS
              </span>
            </div>
            <h3 className="font-bold mb-2 group-hover:text-blue-600">
              Rapture Adds to Board, Bank Account
            </h3>
            <p className="text-sm text-gray-500">17 min read</p>
          </article>
          {/* Add two more similar articles */}
        </div>
      </section>

      {/* Featured Story */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <span className="text-gray-500 uppercase tracking-wider">RAPTURE'S SPOTLIGHT</span>
          <div className="grid grid-cols-2 gap-12 mt-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                How To Be More Organized While Designing UI
              </h2>
              <p className="text-gray-600 mb-6">
                After working 5 years in the field of digital design, I got obsessed with relying too and
                got my productivity boosted by the creation of a systematic approach for designing user interfaces.
              </p>
              <button className="bg-pink-500 text-white px-6 py-2 rounded-full">
                READ NOW
              </button>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/spotlight.png"
                alt="Featured story"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-2xl font-serif italic mb-8">Featured Stories</h2>
          <div className="grid grid-cols-3 gap-6">
            {/* Story cards with dark background */}
          </div>
        </div>
      </section>
      {/* Featured Works section ... */}
      
      {/* Client Testimonials */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Trusted By Leading Brands</h2>
          
          {/* Logos Slider */}
          <div className="relative overflow-hidden">
            <div className="flex animate-slide">
              {/* First set of logos */}
              <div className="flex min-w-full justify-around items-center gap-8">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div key={`logo-${index}`} className="w-32 h-20 relative grayscale hover:grayscale-0 transition-all">
                    <Image
                      src={`/images/clients/client${index}.png`}
                      alt={`Client ${index}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
              {/* Duplicate set for infinite scroll */}
              <div className="flex min-w-full justify-around items-center gap-8">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div key={`logo-dup-${index}`} className="w-32 h-20 relative grayscale hover:grayscale-0 transition-all">
                    <Image
                      src={`/images/clients/client${index}.png`}
                      alt={`Client ${index}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="bg-black/30 p-8 rounded-lg">
              <p className="text-gray-300 mb-6">״הוידאו שירין יצר עבורנו העביר בדיוק את המסר שרצינו להעביר ללקוחות שלנו. מקצועי, יצירתי ומדויק.״</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-600"></div>
                <div>
                  <p className="font-bold">רון כהן</p>
                  <p className="text-sm text-gray-400">מנכ״ל, חברת ABC</p>
                </div>
              </div>
            </div>
            <div className="bg-black/30 p-8 rounded-lg">
              <p className="text-gray-300 mb-6">״התוצאה הסופית עלתה על כל הציפיות שלנו. ירין הצליח לתפוס את הרגעים המושלמים.״</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-600"></div>
                <div>
                  <p className="font-bold">מיכל לוי</p>
                  <p className="text-sm text-gray-400">סמנכ״לית שיווק, XYZ</p>
                </div>
              </div>
            </div>
            <div className="bg-black/30 p-8 rounded-lg">
              <p className="text-gray-300 mb-6">״עבודה מקצועית ברמה הגבוהה ביותר. ירין הוא כבר חלק בלתי נפרד מהצוות שלנו.״</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-600"></div>
                <div>
                  <p className="font-bold">דני אבידן</p>
                  <p className="text-sm text-gray-400">מייסד, סטארטאפ DEF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section ... */}
      <section className="py-20 bg-black text-white" id="contact">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">בואו ניצור משהו מיוחד</h2>
          <p className="text-xl text-gray-300 mb-12">
            מוכנים להפוך את החזון שלכם למציאות? אני כאן בשבילכם
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-right">
            <div>
              <h3 className="text-2xl font-bold mb-4">דברו איתי</h3>
              <div className="space-y-4">
                <p className="flex items-center justify-end gap-2">
                  <span>054-1234567</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                  </svg>
                </p>
                <p className="flex items-center justify-end gap-2">
                  <span>yarin@email.com</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"/>
                  </svg>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">עקבו אחרי</h3>
              <div className="flex justify-end gap-4">
                <a href="#" className="hover:text-accent">Instagram</a>
                <a href="#" className="hover:text-accent">YouTube</a>
                <a href="#" className="hover:text-accent">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/972541234567"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg 
          className="w-6 h-6" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
