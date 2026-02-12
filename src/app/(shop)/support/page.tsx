"use client";
import { useState } from "react";

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#fcfbf9] dark:bg-[#1C1917] min-h-screen font-display">
      <div className="bg-[#1c1917] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6">How can we help you?</h1>
            <div className="max-w-2xl mx-auto relative">
                <input 
                    type="text" 
                    placeholder="Search for answers..." 
                    className="w-full py-4 pl-12 pr-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#B48E43] focus:bg-white/20 transition-all backdrop-blur-sm"
                />
                <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">search</span>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white dark:bg-stone-800 p-8 rounded-xl shadow-lg border border-stone-100 dark:border-stone-700 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-[#B48E43]/10 text-[#B48E43] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-icons">local_shipping</span>
                </div>
                <h3 className="font-bold text-lg text-stone-900 dark:text-white mb-2">Order Status</h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm">Track your package or view order history.</p>
            </div>
            <div className="bg-white dark:bg-stone-800 p-8 rounded-xl shadow-lg border border-stone-100 dark:border-stone-700 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-[#B48E43]/10 text-[#B48E43] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-icons">assignment_return</span>
                </div>
                <h3 className="font-bold text-lg text-stone-900 dark:text-white mb-2">Returns & Exchanges</h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm">Start a return or check our policy.</p>
            </div>
            <div className="bg-white dark:bg-stone-800 p-8 rounded-xl shadow-lg border border-stone-100 dark:border-stone-700 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-[#B48E43]/10 text-[#B48E43] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-icons">build</span>
                </div>
                <h3 className="font-bold text-lg text-stone-900 dark:text-white mb-2">Assembly Guides</h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm">Download instructions for your furniture.</p>
            </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
            <div>
                <h2 className="text-2xl font-bold text-stone-900 dark:text-white mb-8 flex items-center gap-2">
                    <span className="w-8 h-1 bg-[#B48E43] rounded-full"></span>
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    <details className="group bg-white dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 overflow-hidden">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-stone-900 dark:text-white group-open:bg-stone-50 dark:group-open:bg-stone-700/50 transition-colors">
                            <span>How long does shipping take?</span>
                            <span className="material-icons transition group-open:rotate-180">expand_more</span>
                        </summary>
                        <div className="text-stone-600 dark:text-stone-300 p-4 pt-0 mt-4 leading-relaxed text-sm">
                            Standard shipping typically takes 3-5 business days within Nairobi and its environs. Upcountry deliveries may take 5-7 business days. Custom orders have a production time of 2-3 weeks before shipping.
                        </div>
                    </details>
                    <details className="group bg-white dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 overflow-hidden">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-stone-900 dark:text-white group-open:bg-stone-50 dark:group-open:bg-stone-700/50 transition-colors">
                            <span>Do you offer assembly services?</span>
                            <span className="material-icons transition group-open:rotate-180">expand_more</span>
                        </summary>
                        <div className="text-stone-600 dark:text-stone-300 p-4 pt-0 mt-4 leading-relaxed text-sm">
                            Yes! We offer professional assembly services for all our furniture within Nairobi for a small fee. For DIY enthusiasts, all our products come with detailed, easy-to-follow instructions and necessary tools.
                        </div>
                    </details>
                    <details className="group bg-white dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 overflow-hidden">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-stone-900 dark:text-white group-open:bg-stone-50 dark:group-open:bg-stone-700/50 transition-colors">
                            <span>What is your return policy?</span>
                            <span className="material-icons transition group-open:rotate-180">expand_more</span>
                        </summary>
                        <div className="text-stone-600 dark:text-stone-300 p-4 pt-0 mt-4 leading-relaxed text-sm">
                            We want you to love your Saphire furniture. If you're not completely satisfied, you can return standard items within 14 days of delivery for a full refund (minus shipping costs), provided they are in original condition. Custom-made items are non-refundable unless there is a manufacturing defect.
                        </div>
                    </details>
                    <details className="group bg-white dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 overflow-hidden">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-stone-900 dark:text-white group-open:bg-stone-50 dark:group-open:bg-stone-700/50 transition-colors">
                            <span>Where do you source your wood?</span>
                            <span className="material-icons transition group-open:rotate-180">expand_more</span>
                        </summary>
                        <div className="text-stone-600 dark:text-stone-300 p-4 pt-0 mt-4 leading-relaxed text-sm">
                            Sustainability is core to our mission. We source our timber from certified sustainable forests and use reclaimed wood wherever possible to minimize our environmental footprint.
                        </div>
                    </details>
                </div>
            </div>

            <div id="contact-form">
                <h2 className="text-2xl font-bold text-stone-900 dark:text-white mb-8 flex items-center gap-2">
                    <span className="w-8 h-1 bg-[#B48E43] rounded-full"></span>
                    Send us a Message
                </h2>
                <div className="bg-white dark:bg-stone-800 p-6 md:p-8 rounded-xl shadow-lg border border-stone-100 dark:border-stone-700">
                    {submitted ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="material-icons text-3xl">check</span>
                            </div>
                            <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2">Message Sent!</h3>
                            <p className="text-stone-500 dark:text-stone-400">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                            <button 
                                onClick={() => setSubmitted(false)}
                                className="mt-6 text-[#B48E43] font-bold hover:underline"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Your Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:outline-none focus:ring-2 focus:ring-[#B48E43] transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:outline-none focus:ring-2 focus:ring-[#B48E43] transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Subject</label>
                                <select 
                                    id="subject" 
                                    name="subject" 
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:outline-none focus:ring-2 focus:ring-[#B48E43] transition-all"
                                >
                                    <option value="" disabled>Select a topic</option>
                                    <option value="order">Order Inquiry</option>
                                    <option value="custom">Custom Design Quote</option>
                                    <option value="return">Returns & Refunds</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows={4} 
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:outline-none focus:ring-2 focus:ring-[#B48E43] transition-all"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full py-4 bg-[#B48E43] text-white font-bold rounded-lg hover:bg-[#96752E] transition-all shadow-lg shadow-[#B48E43]/20 active:scale-[0.98]"
                            >
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
