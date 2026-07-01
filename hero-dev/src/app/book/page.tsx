"use client";
import { useState } from "react";

const packages = ["HeroS Bronze — One-Time Deep Clean", "HeroS Silver — Recurring Weekly/Bi-Weekly", "HeroS Gold — Premium Home Package", "HeroS Platinum — Corporate Contract"];
const areas = ["Gulshan", "Banani", "Uttara", "Mirpur", "Dhanmondi", "Bashundhara", "Mohakhali", "Baridhara DOHS", "Mohammadpur", "Shantinagar / Eskaton", "Other"];
const sizes = ["Studio / 1 Bedroom", "2 Bedrooms", "3 Bedrooms", "4+ Bedrooms", "Office (Small — under 1,000 sqft)", "Office (Medium — 1,000–3,000 sqft)", "Office (Large — 3,000+ sqft)"];

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", area: "", size: "", pkg: "",
    date: "", time: "", notes: "", addons: [] as string[],
  });

  const addOnOptions = ["Fridge Interior (+BDT 500)", "Oven Interior (+BDT 400)", "Balcony/Terrace (+BDT 500)", "Steam Clean Sofa/per seat (+BDT 300)", "Garage/Workshop Deep Clean"];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function toggleAddon(a: string) {
    setForm((f) => ({ ...f, addons: f.addons.includes(a) ? f.addons.filter((x) => x !== a) : [...f.addons, a] }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#f8fffe" }}>
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md text-center">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--hero-green)" }}>Booking Received!</h2>
          <p className="text-gray-600 mb-4">
            Thank you, <strong>{form.name}</strong>. Your HeroS booking request has been submitted.
            Our team will confirm via WhatsApp to <strong>{form.phone}</strong> within 24 hours.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-left text-sm text-gray-700 mb-6 space-y-1">
            <div><strong>Package:</strong> {form.pkg}</div>
            <div><strong>Area:</strong> {form.area}</div>
            <div><strong>Preferred Date:</strong> {form.date} at {form.time}</div>
            {form.addons.length > 0 && <div><strong>Add-ons:</strong> {form.addons.join(", ")}</div>}
          </div>
          <p className="text-xs text-gray-400">
            Remember: same-day booking available with +15% urgency fee. Questions? WhatsApp us directly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="py-16 text-white" style={{ background: "linear-gradient(135deg, #1a1a2e, #1a7a4a)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#86efac" }}>Quick & Easy</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book a HeroS Clean</h1>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.75)" }}>
            48-hour advance booking preferred. Same-day available with +15% urgency fee.
            Our Peer Leader will confirm your booking via WhatsApp within 24 hours.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            {/* Personal Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-bold text-lg text-gray-800 mb-5">Your Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input required name="name" value={form.name} onChange={handleChange}
                    placeholder="e.g. Fatima Rahman"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number *</label>
                  <input required name="phone" value={form.phone} onChange={handleChange}
                    placeholder="01XXXXXXXXX"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address (optional)</label>
                  <input name="email" value={form.email} onChange={handleChange}
                    placeholder="your@email.com" type="email"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-bold text-lg text-gray-800 mb-5">Service Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Choose Package *</label>
                  <select required name="pkg" value={form.pkg} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="">Select a package</option>
                    {packages.map((p) => <option key={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Area / Location *</label>
                  <select required name="area" value={form.area} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="">Select area</option>
                    {areas.map((a) => <option key={a}>{a}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Home / Office Size *</label>
                  <select required name="size" value={form.size} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="">Select size</option>
                    {sizes.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
                  <input required name="date" value={form.date} onChange={handleChange} type="date"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time *</label>
                  <select required name="time" value={form.time} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="">Select time slot</option>
                    {["8:00 AM – 11:00 AM", "10:00 AM – 1:00 PM", "12:00 PM – 3:00 PM", "2:00 PM – 5:00 PM", "4:00 PM – 7:00 PM"].map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Add-ons */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-bold text-lg text-gray-800 mb-1">Add-Ons (Optional)</h2>
              <p className="text-sm text-gray-500 mb-4">Not included in Bronze package by default. Available for all packages.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addOnOptions.map((a) => (
                  <label key={a} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" checked={form.addons.includes(a)} onChange={() => toggleAddon(a)}
                      className="w-4 h-4 rounded" style={{ accentColor: "var(--hero-green)" }} />
                    <span className="text-sm text-gray-700">{a}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-bold text-lg text-gray-800 mb-3">Special Instructions (Optional)</h2>
              <textarea name="notes" value={form.notes} onChange={handleChange} rows={3}
                placeholder="e.g. Elderly resident at home — please be gentle. Allergic to strong fragrances. Focus on master bathroom."
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none" />
            </div>

            <button type="submit"
              className="w-full py-4 rounded-full text-white text-lg font-bold transition-all hover:opacity-90"
              style={{ background: "var(--hero-green)" }}>
              Submit Booking Request →
            </button>
            <p className="text-xs text-gray-400 text-center">
              Our Peer Leader will confirm your booking via WhatsApp within 24 hours.
              No payment required upfront.
            </p>
          </form>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 className="font-bold text-gray-800 mb-3">What Happens Next?</h3>
              <ol className="space-y-3">
                {[
                  "Submit your booking request online",
                  "Our team confirms via WhatsApp within 24 hours",
                  "Peer Leader sends arrival confirmation 30 min before",
                  "HeroS team arrives, briefs you on the scope",
                  "Full clean completed to Kampus protocol",
                  "Digital report sent within 1 hour of completion",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold"
                      style={{ background: "var(--hero-green)" }}>{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl p-5" style={{ background: "#e8f5ee" }}>
              <h3 className="font-bold mb-2" style={{ color: "var(--hero-green)" }}>Booking Policies</h3>
              <ul className="space-y-2 text-xs text-gray-600">
                <li>✓ 48-hour advance booking preferred</li>
                <li>✓ Same-day available: +15% urgency fee</li>
                <li>✓ No payment upfront — pay after service</li>
                <li>✓ Same team assigned every recurring visit</li>
                <li>✓ Team changes only with client approval</li>
                <li>✓ 24-hour cancellation notice appreciated</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 className="font-bold text-gray-800 mb-2">Prefer WhatsApp?</h3>
              <p className="text-sm text-gray-600 mb-3">Send us your booking details directly on WhatsApp and our team will assist you.</p>
              <a href="https://wa.me/8801XXXXXXXXX"
                className="block text-center py-2.5 rounded-full text-white font-semibold text-sm"
                style={{ background: "#25D366" }}>
                💬 WhatsApp Us
              </a>
            </div>

            <div className="rounded-2xl p-5 border border-yellow-200 bg-yellow-50">
              <p className="text-xs font-semibold text-yellow-800 mb-1">🌟 Kampus Promotion</p>
              <p className="text-xs text-yellow-700">
                Your HeroS Peer Leader is a trained Kampus professional. Ask about Kampus courses
                for yourself, your family, or your staff — available at every visit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
