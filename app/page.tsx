import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Smartphone, BarChart3, ShoppingBag, ArrowRight, Star } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <header className="relative overflow-hidden bg-[#FFFDF9] py-12 md:py-24">
          <div className="absolute inset-0 bg-[#FFFDF9] z-0"></div>
          <div className="container relative z-10">
            <div className="flex flex-col items-center gap-12 text-center">
              <div className="flex flex-col items-center gap-6 max-w-3xl">
                {/* <Badge className="bg-[#BAFFFC] text-[#6A03CB] hover:bg-[#BAFFFC]/80">
                  AI-Powered Retail Solution
                </Badge> */}
                <h1 className="text-5xl md:text-7xl lg:text-12xl font-bold tracking-tight text-[#4BA5C5]">
                  Run your business from your phone
                </h1>
                <p className="text-lg text-gray-600">
                  Tillia turns any smartphone into a smart Point-of-Sale. Manage your shop, track your sales, and get
                  business insights to grow, without hiring a tech team.
                </p>
                <div className="flex flex-col-reverse sm:flex-row gap-4 mt-4">
                  <Button size="lg" variant="ghost">
                    See How It Works
                  </Button>
                  <Button size="lg" className="text-white">
                    Start Free
                    <ArrowRight/>
                  </Button>
                </div>
              </div>
              <div className="relative w-full max-w-6xl">
                <div className="relative w-full" style={{ paddingBottom: '64%' }}>
                  <Image
                    src="/market.png?height=800"
                    alt="Tillia app on smartphone showing point-of-sale interface"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Trusted By Section */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="text-center mb-8">
              <p className="text-gray-600 font-medium">Trusted by hundreds of retail businesses across Latin America</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
              {["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5"].map((brand, index) => (
                <div key={index} className="h-8 flex items-center">
                  <span className="text-gray-400 font-bold text-xl">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#BAFFFC] text-[#6A03CB] hover:bg-[#BAFFFC]/80">Simple & Powerful</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Tillia Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Three simple steps to transform your retail business with AI-powered insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Smartphone className="h-10 w-10 text-[#6A03CB]" />,
                  title: "Create an account",
                  description: "For free, no credit card requred, no need to buy any hardware.",
                },
                {
                  icon: <ShoppingBag className="h-10 w-10 text-[#6A03CB]" />,
                  title: "Add your products",
                  description:
                    "Quickly add your inventory with our camera-based scanning system or import from spreadsheets.",
                },
                {
                  icon: <BarChart3 className="h-10 w-10 text-[#6A03CB]" />,
                  title: "Start selling & growing",
                  description:
                    "Process sales, track inventory, and receive AI-powered insights to boost your business.",
                },
              ].map((step, index) => (
                <Card
                  key={index}
                  className="p-8 border border-gray-200 hover:border-[#6A03CB]/30 hover:shadow-md transition-all"
                >
                  <div className="mb-6 p-4 bg-[#BAFFFC]/20 rounded-full w-fit">{step.icon}</div>
                  <p className="text-xl font-bold mb-3">{step.title}</p>
                  <p className="text-gray-600">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Benefits Section */}
        <section id="benefits" className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#BAFFFC] text-[#6A03CB] hover:bg-[#BAFFFC]/80">AI-Powered Insights</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Tools for Growing Businesses</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Tillia's AI analyzes your sales data to help you make smarter business decisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-6">
                  {[
                    {
                      title: "Smart Pricing Suggestions",
                      description:
                        "Get AI-powered recommendations on optimal pricing based on your sales history, local market, and customer behavior.",
                    },
                    {
                      title: "Inventory Predictions",
                      description:
                        "Anticipate stock needs before they happen with AI that learns your business patterns and seasonal trends.",
                    },
                    {
                      title: "Customer Insights",
                      description:
                        "Understand what drives your customers' purchases and create targeted promotions that actually work.",
                    },
                    {
                      title: "Growth Opportunities",
                      description:
                        "Identify untapped revenue streams and optimization opportunities specific to your business.",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <CheckCircle className="h-6 w-6 text-[#6A03CB] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6A03CB]/10 to-[#BAFFFC]/20 z-10 rounded-xl"></div>
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Tillia app showing analytics dashboard with AI insights"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#BAFFFC] text-[#6A03CB] hover:bg-[#BAFFFC]/80">Success Stories</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">From Our Community</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how retail businesses like yours are growing with Tillia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Maria Gonzalez",
                  business: "Boutique Bella, Mexico City",
                  quote:
                    "Since using Tillia, we've increased our average transaction value by 22%. The pricing suggestions are like having a retail expert on staff.",
                  stars: 5,
                },
                {
                  name: "Carlos Mendoza",
                  business: "Electro Shop, Bogotá",
                  quote:
                    "We expanded from 1 to 3 locations in just 8 months with Tillia helping us manage inventory across stores. The AI insights are game-changing.",
                  stars: 5,
                },
                {
                  name: "Luisa Vargas",
                  business: "Moda Express, Lima",
                  quote:
                    "As a non-tech person, I was worried about adopting new software. Tillia is so intuitive that my entire team was comfortable using it on day one.",
                  stars: 4,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="p-8 border border-gray-200">
                  <div className="flex gap-1 mb-4">
                    {Array(testimonial.stars)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#6A03CB] text-[#6A03CB]" />
                      ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"></div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.business}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#BAFFFC] text-[#6A03CB] hover:bg-[#BAFFFC]/80">Simple Pricing</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Plans That Grow With You</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Affordable options for businesses of all sizes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "Free",
                  description: "Perfect for new businesses just getting started",
                  features: ["1 device", "Basic sales tracking", "Up to 100 products", "Standard support"],
                  cta: "Start Free",
                  popular: false,
                },
                {
                  name: "Growth",
                  price: "$29",
                  period: "/month",
                  description: "For established businesses ready to optimize",
                  features: [
                    "Up to 3 devices",
                    "Advanced analytics",
                    "Unlimited products",
                    "AI pricing suggestions",
                    "Priority support",
                  ],
                  cta: "Start 14-Day Trial",
                  popular: true,
                },
                {
                  name: "Scale",
                  price: "$79",
                  period: "/month",
                  description: "For multi-location businesses",
                  features: [
                    "Up to 10 devices",
                    "Multi-location management",
                    "Advanced AI insights",
                    "Custom reports",
                    "Dedicated support",
                  ],
                  cta: "Contact Sales",
                  popular: false,
                },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={`p-8 border ${plan.popular ? "border-[#6A03CB] ring-1 ring-[#6A03CB]" : "border-gray-200"} relative`}
                >
                  {plan.popular && <Badge className="absolute top-4 right-4 bg-[#6A03CB]">Most Popular</Badge>}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-gray-600">{plan.period}</span>}
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#6A03CB]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-[#6A03CB] hover:bg-[#5502a3]" : "bg-white text-[#6A03CB] border border-[#6A03CB] hover:bg-[#6A03CB]/10"}`}
                  >
                    {plan.cta}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA Section */}
        <section className="py-64 bg-[#6A03CB]">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-5xl font-bold mb-6 text-white">
                Join hundreds of stores already growing smarter with Tillia
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Start free today and see how Tillia can transform your retail business
              </p>
              <Button size="lg" className="bg-white text-[#6A03CB] hover:bg-gray-100">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <span className="text-[#6A03CB] font-bold">T</span>
                </div>
                <span className="font-bold text-xl text-white">Tillia</span>
              </div>
              <p className="text-gray-400 mb-4">AI-powered retail solutions for growing businesses</p>
              <div className="flex gap-4">
                {["Twitter", "Facebook", "Instagram", "LinkedIn"].map((social, index) => (
                  <Link key={index} href="#" className="text-gray-400 hover:text-white">
                    {social}
                  </Link>
                ))}
              </div>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Integrations", "Updates", "Roadmap"],
              },
              {
                title: "Resources",
                links: ["Help Center", "Guides", "API Docs", "Community", "Partners"],
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Blog", "Press", "Contact"],
              },
            ].map((column, index) => (
              <div key={index}>
                <h3 className="font-bold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <Link href="#" className="text-gray-400 hover:text-white">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Tillia. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
