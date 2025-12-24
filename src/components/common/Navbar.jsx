import React, { useState, useEffect } from "react";
import { FaTh, FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Blog", path: "/blog" },
  ];

  const handlePricingClick = (e) => {
    if (isHomePage) {
      e.preventDefault();
      const pricingSection = document.getElementById("pricing");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full">
      {/* Desktop & Tablet */}
      <div
        className={`hidden md:block transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg shadow-lg"
            : "bg-white/80 backdrop-blur-md"
        } border-b border-gray-200/50`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo with Link */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="TeamFlow Home"
          >
            <div className="size-8 text-primary flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <FaTh className="text-xl" />
            </div>
            <h1 className="text-xl font-black tracking-tight text-text-main">
              TeamFlow
            </h1>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-semibold text-text-muted hover:text-primary transition-colors relative group"
                aria-current={
                  location.pathname === link.path ? "page" : undefined
                }
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ${
                    location.pathname === link.path ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            ))}

            {/* Pricing Link*/}
            {isHomePage && (
              <a
                href="#pricing"
                onClick={handlePricingClick}
                className="text-sm font-semibold text-text-muted hover:text-primary transition-colors relative group"
              >
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <button
              className="h-9 px-4 rounded-lg text-sm font-semibold text-text-muted hover:text-primary hover:bg-gray-50 transition-colors"
              aria-label="Log in to your account"
            >
              Log In
            </button>
            <button
              className="h-9 px-6 rounded-lg bg-primary text-sm font-bold text-white shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 flex items-center gap-2 group"
              aria-label="Start free trial"
            >
              Start Free Trial
              <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="TeamFlow Home"
          >
            <div className="size-8 text-primary flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <FaTh className="text-xl" />
            </div>
            <h1 className="text-xl font-black tracking-tight text-text-main">
              TeamFlow
            </h1>
          </Link>

          {/* Tablet Mode */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              className="h-9 px-6 rounded-lg bg-primary text-sm font-bold text-white shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 flex items-center gap-2 group"
              aria-label="Start free trial"
            >
              Start Free Trial
              <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Mode*/}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div
            className="bg-white border-t border-gray-200 px-4 py-6 animate-fadeIn"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            {/* Navigation Links */}
            <div className="flex flex-col space-y-3" role="none">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  role="menuitem"
                  className={`text-base font-semibold py-3 px-4 rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? "bg-blue-50 text-primary"
                      : "text-text-muted hover:text-primary hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={
                    location.pathname === link.path ? "page" : undefined
                  }
                >
                  {link.name}
                </Link>
              ))}

              {/* Pricing Link */}
              {isHomePage && (
                <a
                  href="#pricing"
                  role="menuitem"
                  onClick={(e) => {
                    handlePricingClick(e);
                    setIsMenuOpen(false);
                  }}
                  className="text-base font-semibold text-text-muted hover:text-primary hover:bg-gray-50 py-3 px-4 rounded-lg transition-colors"
                >
                  Pricing
                </a>
              )}
            </div>

            {/* Mobile CTA Buttons */}
            <div
              className="mt-6 pt-6 border-t border-gray-200 space-y-3"
              role="none"
            >
              <button
                className="w-full h-12 rounded-lg text-base font-semibold text-text-muted hover:text-primary hover:bg-gray-50 transition-colors"
                role="menuitem"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </button>
              <button
                className="w-full h-12 rounded-lg bg-primary text-base font-bold text-white shadow-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group"
                role="menuitem"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Free Trial
                <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            <div className="sm:hidden mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-text-muted text-center">
                No credit card required • 14-day free trial
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
