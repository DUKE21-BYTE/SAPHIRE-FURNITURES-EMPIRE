"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-[#fcfbf9] dark:bg-[#1C1917] min-h-screen font-display">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 dark:text-white mb-6 tracking-tight">
            Design. Build. <span className="text-[#B48E43]">Love.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
            Saphire Furnitures Empire is redefining how you experience custom furniture. 
            We combine modern design with traditional craftsmanship to create pieces that 
            are uniquely yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1000&auto=format&fit=crop"
              alt="Craftsman working on wood"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 dark:text-white mb-3">
                Our Story
              </h2>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                Founded with a passion for quality and individuality, Saphire started as a small workshop 
                dedicated to the art of woodworking. Today, we've grown into a destination for those who refuse 
                to settle for mass-produced furniture. We believe that your home should tell your story, 
                and every piece of furniture should be a chapter in that narrative.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-stone-900 dark:text-white mb-3">
                Sustainability Commitment
              </h2>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                We source our timber responsibly, prioritizing reclaimed wood and FSC-certified forests. 
                Our finishes are eco-friendly and non-toxic, ensuring that your furniture is safe for your 
                home and kind to the planet. By building durable, modular pieces, we encourage longevity 
                over disposable consumption.
              </p>
            </div>
            <div className="pt-4">
              <div className="flex gap-8">
                <div>
                  <span className="block text-3xl font-bold text-[#B48E43] mb-1">5+</span>
                  <span className="text-sm font-medium text-stone-500 uppercase tracking-wider">Years of Experience</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-[#B48E43] mb-1">1000+</span>
                  <span className="text-sm font-medium text-stone-500 uppercase tracking-wider">Happy Customers</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-[#B48E43] mb-1">100%</span>
                  <span className="text-sm font-medium text-stone-500 uppercase tracking-wider">Handcrafted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
