import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white pt-12 pb-6" style={{ background: "#1a1a2e" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold"
                style={{ background: "var(--hero-green)" }}>H</div>
              <div>
                <span className="font-bold text-lg text-white">HeroS</span>
                <span className="text-xs text-gray-400 block -mt-1">by Kampus Vertical</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Bangladesh's first branded, trained, and supervised cleaning team.
              Operating in residential and corporate settings across Dhaka.
            </p>
            <p className="text-gray-500 text-xs mt-3 italic">"Clean Space. Clear Mind. Real Heroes."</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services#bronze" className="hover:text-green-400 transition-colors">HeroS Bronze</Link></li>
              <li><Link href="/services#silver" className="hover:text-green-400 transition-colors">HeroS Silver</Link></li>
              <li><Link href="/services#gold" className="hover:text-green-400 transition-colors">HeroS Gold</Link></li>
              <li><Link href="/services#platinum" className="hover:text-green-400 transition-colors">HeroS Platinum</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 Banani, Dhaka 1213</li>
              <li>📞 WhatsApp Booking</li>
              <li>🌐 Live Eats Ltd.</li>
              <li>A Kampus Vertical Brand</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">© 2025 HeroS by Kampus Vertical — Live Ventures Pte. Ltd. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Version 1.0 | HeroS Operations Team</p>
        </div>
      </div>
    </footer>
  );
}
