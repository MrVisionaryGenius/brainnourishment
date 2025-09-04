"use client"

import type React from "react"
import { Heart, Mail, Shield } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1f1b] text-[#f0e9d9] py-12" >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-[#ca6e3f]  ">Brain Nourishment</h3>
            <p className="text-[#f1eada] mb-4">
              Helping you reclaim your life from phone addiction and build the future you deserve.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-sm">
              <Heart className="w-4 h-4 text-[#ca6e3f]" />
              <span>Made with purpose for your freedom</span>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h4 className="text-lg font-bold mb-4 text-[#ca6e3f]  ">Get Support</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4 text-[#ca6e3f]" />
                <span className="text-[#f1eada]">support@brainnourishment.com</span>
              </div>
              <p className="text-sm text-[#f1eada]">Questions? We&apos;re here to help you succeed.</p>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold mb-4 text-[#ca6e3f]  ">Our Promise</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Shield className="w-4 h-4 text-[#ca6e3f]" />
                <span className="text-[#f1eada]">94% success rate or your money back</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#ca6e3f]/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[#f1eada]">© 2025 Strawhat Developers. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-[#f1eada] hover:text-[#ca6e3f] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-[#f1eada] hover:text-[#ca6e3f] transition-colors">
                Terms of Service
              </a>
              <a href="/refund-policy" className="text-[#f1eada] hover:text-[#ca6e3f] transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
