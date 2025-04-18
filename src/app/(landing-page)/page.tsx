import Link from "next/link";
import { ArrowRight, Type, Image, Video, Calendar, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0f1729] text-white">
      {/* Navigation - Made Sticky */}
      <nav className="sticky top-0 z-50 border-b border-gray-800 bg-[#0f1729]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0f1729]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              PostCraft
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#features" className="text-gray-300 hover:text-white">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white">
              Pricing
            </Link>
            <Link href="/login" className="text-gray-300 hover:text-white">
              Sign in
            </Link>
            <Link
              href="/login"
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-4 py-2 rounded-md"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center relative z-10">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6">
            <span className="block">Best AI Writer for Creating</span>
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Social Media Posts
            </span>
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-5">
            Create SEO-optimized and plagiarism-free content for your blogs,
            ads, emails, and website 10X faster.
          </p>

          <div className="mt-10 max-w-md mx-auto">
            <Button className="w-full py-6 text-lg font-medium bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 rounded-full">
              Start Writing For Free
            </Button>
            <p className="mt-3 text-sm text-gray-400">
              No credit card required.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 bg-[#131b31]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Complete AI-Powered Social Media Solution
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
              Create, schedule, and manage your social media content with
              advanced AI technology
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-[#1c2944] rounded-xl p-8 transition-all hover:shadow-lg hover:shadow-purple-500/10">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white mb-5">
                <Type className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                AI Text Generation
              </h3>
              <p className="text-gray-300">
                Generate engaging captions, hashtags, and content that resonates
                with your audience using advanced AI.
              </p>
            </div>

            <div className="bg-[#1c2944] rounded-xl p-8 transition-all hover:shadow-lg hover:shadow-purple-500/10">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white mb-5">
                <Image
                  src="/features-image.jpg"
                  width={500}
                  height={300}
                  alt="Features section illustration"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                AI Image Creation
              </h3>
              <p className="text-gray-300">
                Create stunning visuals and graphics tailored for each social
                platform using AI image generation.
              </p>
            </div>

            <div className="bg-[#1c2944] rounded-xl p-8 transition-all hover:shadow-lg hover:shadow-purple-500/10">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white mb-5">
                <Video className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Video Generation
              </h3>
              <p className="text-gray-300">
                Transform your ideas into engaging video content with AI-powered
                video generation and editing.
              </p>
            </div>

            <div className="bg-[#1c2944] rounded-xl p-8 transition-all hover:shadow-lg hover:shadow-purple-500/10">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white mb-5">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Smart Scheduling
              </h3>
              <p className="text-gray-300">
                Schedule and automate your posts at optimal times for maximum
                engagement across all platforms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-24 bg-[#0f1729]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">
              Pricing
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Choose your credit package
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
              Flexible credit-based pricing for all your content generation
              needs
            </p>
          </div>

          {/* Credit Usage Guide */}
          <div className="mt-8 max-w-2xl mx-auto bg-[#1c2944] rounded-xl p-6 mb-12">
            <h3 className="text-xl font-semibold text-white mb-4">
              Credit Usage Guide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start space-x-3">
                <Type className="h-5 w-5 text-purple-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Text Post</p>
                  <p className="text-gray-300 text-sm">1 credit</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Image className="h-5 w-5 text-purple-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Image Generation</p>
                  <p className="text-gray-300 text-sm">5 credits</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Video className="h-5 w-5 text-purple-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Video Creation</p>
                  <p className="text-gray-300 text-sm">10 credits</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {/* Basic Plan */}
            <div className="bg-[#1c2944] rounded-2xl p-8 ring-1 ring-gray-800 hover:ring-purple-500 transition-all">
              <h3 className="text-2xl font-semibold text-white">Basic</h3>
              <p className="mt-4 text-gray-300">
                Perfect for individuals and small creators
              </p>
              <div className="mt-8">
                <span className="text-5xl font-extrabold text-white">$29</span>
                <span className="text-gray-300">/month</span>
              </div>
              <div className="mt-4 bg-[#131b31] rounded-lg p-4">
                <span className="text-2xl font-bold text-purple-400">200</span>
                <span className="text-gray-300"> credits/month</span>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">
                    Basic scheduling features
                  </span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">
                    Credits roll over for 30 days
                  </span>
                </li>
              </ul>
              <Button className="mt-8 w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                Get Started
              </Button>
            </div>

            {/* Pro Plan */}
            <div className="bg-[#1c2944] rounded-2xl p-8 ring-2 ring-purple-500 relative">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-2xl font-semibold text-white">Pro</h3>
              <p className="mt-4 text-gray-300">
                Ideal for businesses and professional creators
              </p>
              <div className="mt-8">
                <span className="text-5xl font-extrabold text-white">$79</span>
                <span className="text-gray-300">/month</span>
              </div>
              <div className="mt-4 bg-[#131b31] rounded-lg p-4">
                <span className="text-2xl font-bold text-purple-400">600</span>
                <span className="text-gray-300"> credits/month</span>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">
                    Advanced scheduling & analytics
                  </span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">
                    Credits roll over for 60 days
                  </span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">Priority support</span>
                </li>
              </ul>
              <Button className="mt-8 w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                Get Started
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-[#1c2944] rounded-2xl p-8 ring-1 ring-gray-800 hover:ring-purple-500 transition-all">
              <h3 className="text-2xl font-semibold text-white">Enterprise</h3>
              <p className="mt-4 text-gray-300">
                For large teams and organizations
              </p>
              <div className="mt-8">
                <span className="text-5xl font-extrabold text-white">$199</span>
                <span className="text-gray-300">/month</span>
              </div>
              <div className="mt-4 bg-[#131b31] rounded-lg p-4">
                <span className="text-2xl font-bold text-purple-400">2000</span>
                <span className="text-gray-300"> credits/month</span>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">
                    Custom AI model training
                  </span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">
                    Credits roll over for 90 days
                  </span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">API access</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">24/7 premium support</span>
                </li>
              </ul>
              <Button className="mt-8 w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                Contact Sales
              </Button>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-300">
              Need more credits? Additional credit packs available for purchase.
              Unused credits roll over based on your plan.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-[#131b31]">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to transform your social media?</span>
            <span className="block text-purple-400">
              Start creating amazing content today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Button className="px-8 py-6 text-base font-medium rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0c1324] border-t border-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                PostCraft
              </span>
              <p className="mt-2 text-sm text-gray-400">
                © 2023 PostCraft. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
