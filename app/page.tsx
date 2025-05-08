"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown, Code, Cpu, Database, ExternalLink, Globe, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import GlitchText from "@/components/glitch-text"
import ParallaxStar from "@/components/parallax-star"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/images/evosaka-logo.png" alt="Evosaka" width={180} height={50} className="h-10 w-auto" />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#services" className="text-white hover:text-[#e91e63] transition-colors">
            SERVICES
          </Link>
          <Link href="#about" className="text-white hover:text-[#e91e63] transition-colors">
            ABOUT
          </Link>
          <Link href="#projects" className="text-white hover:text-[#e91e63] transition-colors">
            PROJECTS
          </Link>
          <Link href="#contact" className="text-white hover:text-[#e91e63] transition-colors">
            CONTACT
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black border-l border-[#e91e63]/20 w-[300px] p-0">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-[#e91e63]/20">
                <Image src="/images/evosaka-logo.png" alt="Evosaka" width={150} height={40} className="h-8 w-auto" />
              </div>
              <div className="flex flex-col p-6 space-y-6">
                <Link
                  href="#services"
                  className="text-lg font-medium text-white hover:text-[#e91e63] transition-colors"
                >
                  SERVICES
                </Link>
                <Link href="#about" className="text-lg font-medium text-white hover:text-[#e91e63] transition-colors">
                  ABOUT
                </Link>
                <Link
                  href="#projects"
                  className="text-lg font-medium text-white hover:text-[#e91e63] transition-colors"
                >
                  PROJECTS
                </Link>
                <Link href="#contact" className="text-lg font-medium text-white hover:text-[#e91e63] transition-colors">
                  CONTACT
                </Link>
              </div>
              <div className="mt-auto p-6 border-t border-[#e91e63]/20">
                <div className="text-xs text-[#e91e63] font-mono">DISRUPT. EVOLVE. CREATE.</div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9))",
        }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70"></div>
          <Image
            src="/images/evosaka-banner.png"
            alt="Evosaka Background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        <ParallaxStar scrollY={scrollY} />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <GlitchText text="EVOSAKA" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl font-light mb-8 text-gray-300"
          >
            ENGINEERING THE FUTURE <span className="text-[#e91e63]">|</span> DISRUPTING THE PRESENT
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row justify-center items-center gap-4"
          >
            <Button className="bg-[#e91e63] hover:bg-[#e91e63]/80 text-white border-none px-8 py-6">OUR WORK</Button>
            <Button variant="outline" className="border-[#e91e63] text-white hover:bg-[#e91e63]/10 px-8 py-6">
              CONTACT US
            </Button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="h-8 w-8 text-[#e91e63]" />
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-16 relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
              <span className="text-[#e91e63]">/</span> OUR SERVICES
            </h2>
            <div className="h-px w-full md:w-1/3 bg-gradient-to-r from-[#e91e63] to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-10 w-10 text-[#e91e63]" />,
                title: "SOFTWARE DEVELOPMENT",
                description: "Custom solutions built with cutting-edge technologies to solve complex problems.",
              },
              {
                icon: <Globe className="h-10 w-10 text-[#e91e63]" />,
                title: "WEB APPLICATIONS",
                description: "Responsive, scalable web applications with immersive user experiences.",
              },
              {
                icon: <Database className="h-10 w-10 text-[#e91e63]" />,
                title: "DATA ENGINEERING",
                description: "Transform raw data into actionable insights with our advanced data solutions.",
              },
              {
                icon: <Cpu className="h-10 w-10 text-[#e91e63]" />,
                title: "SYSTEM ARCHITECTURE",
                description: "Designing robust, scalable system architectures for enterprise applications.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black border border-[#e91e63]/20 p-6 rounded-sm hover:border-[#e91e63]/50 transition-all group"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#e91e63] transition-colors">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Diagonal Split */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#e91e63]/5 transform -skew-y-6 z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-[#e91e63]">/</span> WHO WE ARE
              </h2>
              <div className="h-px w-2/3 bg-gradient-to-r from-[#e91e63] to-transparent mb-8"></div>

              <p className="text-gray-300 mb-6">
                Evosaka is a forward-thinking software engineering company that thrives on disruption and innovation. We
                don't just build software; we craft digital experiences that challenge conventions.
              </p>

              <p className="text-gray-300 mb-6">
                Our team of expert engineers and designers work at the intersection of technology and creativity,
                delivering solutions that are as visually striking as they are functionally powerful.
              </p>

              <div className="flex items-center space-x-4 mt-8">
                <div className="h-px w-12 bg-[#e91e63]"></div>
                <span className="text-[#e91e63] font-mono text-sm">DISRUPT. EVOLVE. CREATE.</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square relative overflow-hidden border border-[#e91e63]/20">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-[#e91e63]/20"></div>
                <Image
                  src="/images/evosaka-star.png"
                  alt="Evosaka Star"
                  width={400}
                  height={400}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 object-contain"
                />

                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-4 left-4 w-20 h-px bg-[#e91e63]/50"></div>
                  <div className="absolute top-4 left-4 w-px h-20 bg-[#e91e63]/50"></div>

                  <div className="absolute bottom-4 right-4 w-20 h-px bg-[#e91e63]/50"></div>
                  <div className="absolute bottom-4 right-4 w-px h-20 bg-[#e91e63]/50"></div>
                </div>
              </div>

              {/* Code-like decorative element */}
              <div className="absolute -bottom-4 -right-4 bg-black border border-[#e91e63]/20 p-3 font-mono text-xs text-[#e91e63]/70">
                <div>system.initialize()</div>
                <div>// disruption_mode: active</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-16 relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
              <span className="text-[#e91e63]">/</span> FEATURED PROJECTS
            </h2>
            <div className="h-px w-full md:w-1/3 bg-gradient-to-r from-[#e91e63] to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden border border-[#e91e63]/20 aspect-video"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 z-20"></div>

                <Image
                  src={`/placeholder.svg?height=400&width=600`}
                  alt={`Project ${item}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute bottom-0 left-0 p-6 z-30">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#e91e63] transition-colors">
                    Project {item}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 max-w-md">
                    A cutting-edge solution showcasing our expertise in software engineering and design.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-white hover:text-[#e91e63] p-0 h-auto">
                      View Details <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 font-mono text-xs text-[#e91e63] z-30">
                  PROJECT_{item.toString().padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#e91e63]/5 transform skew-y-6 z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-[#e91e63]">/</span> GET IN TOUCH
              </h2>
              <div className="h-px w-2/3 bg-gradient-to-r from-[#e91e63] to-transparent mb-8"></div>

              <p className="text-gray-300 mb-8">
                Ready to disrupt your industry? Let's collaborate on your next groundbreaking project.
              </p>

              <div className="space-y-4 font-mono">
                <div className="flex items-start space-x-4">
                  <div className="text-[#e91e63] mt-1">{">"}</div>
                  <div>
                    <div className="text-white">EMAIL</div>
                    <div className="text-gray-400">contact@evosaka.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-[#e91e63] mt-1">{">"}</div>
                  <div>
                    <div className="text-white">LOCATION</div>
                    <div className="text-gray-400">São Paulo, Brazil</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-[#e91e63] mt-1">{">"}</div>
                  <div>
                    <div className="text-white">FOLLOW US</div>
                    <div className="flex space-x-4 mt-2">
                      {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((social, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="border-[#e91e63]/30 hover:border-[#e91e63] hover:bg-[#e91e63]/10 text-xs"
                        >
                          {social}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/50 border border-[#e91e63]/20 p-6"
            >
              <h3 className="text-xl font-bold mb-6">Send us a message</h3>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black/50 border border-[#e91e63]/20 rounded-none px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#e91e63]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black/50 border border-[#e91e63]/20 rounded-none px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#e91e63]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-black/50 border border-[#e91e63]/20 rounded-none px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#e91e63]"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-[#e91e63] hover:bg-[#e91e63]/80 text-white">
                  SEND MESSAGE
                </Button>
              </form>

              <div className="mt-6 text-xs text-gray-500 font-mono">// All fields are required</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#e91e63]/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image src="/images/evosaka-logo.png" alt="Evosaka" width={120} height={30} className="h-6 w-auto" />
            </div>

            <div className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Evosaka. All rights reserved.</div>

            <div className="mt-4 md:mt-0 font-mono text-xs text-[#e91e63]">DISRUPT. EVOLVE. CREATE.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
