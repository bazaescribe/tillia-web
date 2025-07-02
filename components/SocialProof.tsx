import Image from "next/image"

export default function SocialProof() {
  return (
    <section className="pt-40 bg-white">
      <div className="container">
        <div>
          <p className="text-sm text-center text-gray-500 mb-6 font-medium">
            Impulsados por gigantes. Trabajamos para todos.
          </p>
          <div className="flex items-center justify-center flex-wrap gap-8">
            <div className="flex items-center">
              <Image
                src="/logos/google-for-startups.png"
                alt="Google for Startups"
                width={80}
                height={20}
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="flex items-center">
              <Image
                src="/logos/microsoft-for-startups.png"
                alt="Microsoft for Startups"
                width={88}
                height={20}
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 