import React from "react";
import {
  FaCheckCircle,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="flex flex-col gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-8 text-center w-full max-w-3xl mx-auto relative">
            {/* Badge */}
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-semibold w-fit mx-auto group hover:bg-blue-100 transition-colors duration-300">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Trusted by 10,000+ teams worldwide
            </div>

            {/* Main Headline */}
            <div className="space-y-4 relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-text-main">
                Sync Your Team,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600">
                  Scale Your Business
                </span>
              </h1>

              <p className="text-lg text-text-muted max-w-2xl mx-auto px-4">
                The all-in-one platform for{" "}
                <span className="font-semibold text-primary">
                  startups, agencies, and remote teams
                </span>{" "}
                to plan, track, and deliver projects faster.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <button
                title="No credit card required"
                className="h-12 px-8 rounded-lg bg-primary text-white text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center group hover:scale-[1.02]"
              >
                14-Day Free Trial
                <FaArrowRight className="w-4 h-4 ml-3 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
              </button>

              <button
                title="Try Demo"
                className="h-12 px-8 rounded-lg bg-white text-text-main border border-gray-200 text-base font-bold shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex items-center hover:bg-gray-50"
              >
                Watch Product Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 text-sm text-text-muted ml-[30%] sm:ml-0">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="w-5 h-5 text-emerald-500" />
                <span>No credit card required</span>
              </div>
              <div className="hidden sm:block text-gray-300">•</div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="w-5 h-5 text-emerald-500" />
                <span>14-day free trial</span>
              </div>
              <div className="hidden sm:block text-gray-300">•</div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Setup in 5 minutes</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col items-center gap-4 mt-6">
              <div className="flex  items-center gap-4">
                <div className="flex -space-x-3">
                  {[
                    {
                      id: 1,
                      name: "Alex Chen",
                      image:
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                      role: "CTO at TechStart",
                    },
                    {
                      id: 2,
                      name: "Jordan Smith",
                      image:
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                      role: "Project Lead",
                    },
                    {
                      id: 3,
                      name: "Taylor Morgan",
                      image:
                        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                      role: "Agency Director",
                    },
                    {
                      id: 4,
                      name: "Morgan Lee",
                      image:
                        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                      role: "Remote Team Manager",
                    },
                  ].map((person) => (
                    <div key={person.id} className="relative group">
                      <img
                        loading="lazy"
                        src={person.image}
                        alt={person.name}
                        className="w-10 h-10 rounded-full border-2 border-white object-cover 
                                 transition-all duration-300 group-hover:scale-110 group-hover:z-10
                                 shadow-sm hover:shadow-md"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML = `
                            <div class="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-sm font-medium text-primary">
                              ${person.name.charAt(0)}
                            </div>
                          `;
                        }}
                      />
                      <div
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 
                                    bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-200 pointer-events-none whitespace-nowrap
                                    shadow-lg z-20"
                      >
                        <div className="font-semibold">{person.name}</div>
                        <div className="text-gray-300 text-[10px] mt-0.5">
                          {person.role}
                        </div>

                        {/* Tooltip arrow */}
                        <div
                          className="absolute top-full left-1/2 transform -translate-x-1/2 
                                      border-4 border-transparent border-t-gray-900"
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-text-main">
                    Join 10,000+ teams
                  </p>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                      />
                    ))}
                    <span className=" hidden sm:block ml-2 text-sm font-medium text-text-main">
                      4.9/5 from 2,000+ reviews
                    </span>
                  </div>
                  <div className="sm:hidden mt-1 text-sm font-medium text-text-main">
                    4.9/5 from 2,000+ reviews
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            {/* Image Container*/}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100/50 to-cyan-100/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>

              {/* Main Image Container */}
              <div
                className="relative w-full aspect-[16/10] bg-white overflow-hidden shadow-2xl border border-gray-100 
                transition-all duration-500 group-hover:scale-[1.01] group-hover:shadow-3xl group-hover:border-primary/20"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="TeamFlow Dashboard - Project management interface showing tasks, timelines, and team collaboration"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-[10%] left-[10%] w-[20%] h-[20%] bg-white/10 backdrop-blur-sm rounded-lg"></div>
                  <div className="absolute bottom-[10%] right-[10%] w-[20%] h-[20%] bg-gradient-to-br from-primary/20 to-cyan-600/20 backdrop-blur-sm rounded-lg"></div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
              </div>

              {/* Stats Card */}
              <div
                className="absolute top-[10%] left-[10%] w-[20%] h-[20%] bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-gray-200
               transition-all duration-500 group-hover:translate-x-1 group-hover:shadow-3xl flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">24/7</div>
                  <div className="text-xs font-medium text-text-main">
                    Support
                  </div>
                  <div className="text-[10px] text-text-muted mt-1">
                    LIVE CHAT
                  </div>
                </div>
              </div>

              {/* Bottom Right Stats Card */}
              <div
                className="absolute bottom-[10%] right-[10%] w-[20%] h-[20%] bg-gradient-to-br from-primary to-cyan-600 text-white rounded-xl p-4 shadow-2xl border border-white/20
               transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-3xl flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-lg font-bold">4.9★</div>
                  <div className="text-xs font-medium">Rating</div>
                  <div className="text-[10px] text-white/80 mt-1">
                    USER SCORE
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-gray-200
               transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-3xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">89%</div>
                  <div className="text-sm font-medium text-text-main">
                    Faster delivery
                  </div>
                  <div className="text-xs text-text-muted mt-1">
                    EFFICIENCY GAIN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
