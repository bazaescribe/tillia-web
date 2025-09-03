import Image from "next/image"

export default function SocialProof() {
  return (
    <section className="bg-white">
      <div className="py-12 container">
        <div>
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