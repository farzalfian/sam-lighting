import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="relative h-[60vh] md:h-[70vh] mb-12 rounded-lg shadow-xl overflow-hidden">
          <Image
            src="/images/about-hero.jpg"
            alt="About Us Hero"
            fill
            className="object-cover brightness-75 transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-gradient-to-b from-black/50 to-transparent">
            <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg">
              ABOUT US
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mt-4">
              Discover our story, mission, and the team that brings your events to life.
            </p>
          </div>
        </div>

        {/* Our Mission Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            At SAM-LIGHTING, we are passionate about creating unforgettable experiences. Our mission is to provide
            top-quality lighting and sound equipment that transforms any event into a spectacular moment. Whether it’s
            a wedding, concert, or corporate event, we are committed to delivering excellence and innovation.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/about-story.jpg"
              alt="Our Story"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Our Story</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Founded in 2015, SAM-LIGHTING started as a small rental service for community events. Over the years, 
              we’ve grown into a trusted partner for countless weddings, concerts, and corporate events. Our journey 
              has been fueled by our dedication to innovation, exceptional service, and a passion for helping clients 
              realize their visions.
            </p>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/images/team/member1.jpg"
                  alt="Team Member 1"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-yellow-400 font-bold text-xl mt-4">John Doe</h3>
              <p className="text-gray-300 text-sm">Founder & CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/images/team/member2.jpg"
                  alt="Team Member 2"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-yellow-400 font-bold text-xl mt-4">Jane Smith</h3>
              <p className="text-gray-300 text-sm">Event Manager</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/images/team/member3.jpg"
                  alt="Team Member 3"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-yellow-400 font-bold text-xl mt-4">Michael Lee</h3>
              <p className="text-gray-300 text-sm">Technical Specialist</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-8 rounded-lg shadow-xl">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Work with Us</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Have an upcoming event? Let SAM-LIGHTING illuminate your occasion with our premium services and equipment.
          </p>
          <Link href="/contact">
            <button className="py-3 px-8 bg-yellow-500 text-gray-900 font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
              Contact Us
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
}
