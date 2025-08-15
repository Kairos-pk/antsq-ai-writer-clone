import Image from "next/image";

const features = [
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee-antsq-com/assets/images/ant-8-3.png",
    imageAlt: "Ant illustration holding a wrench, representing empowerment.",
    title: "Empower",
    description: "Revolutionize your content creation with AI.antsq.com, the ultimate platform powered by GPT-3 and DALL·E for SEO-optimized auto-blogging with WordPress plugin support, unlocking unparalleled productivity and creativity.",
  },
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee-antsq-com/assets/images/ant-9-4.png",
    imageAlt: "Ant illustration using a laptop, representing transformation.",
    title: "Transform",
    description: "Elevate your content game with AI.antsq.com, the cutting-edge platform utilizing GPT-3 and DALL·E to unleash your creativity and productivity through SEO-optimized auto-blogging with seamless WordPress plugin integration.",
  },
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee-antsq-com/assets/images/ant-10-5.png",
    imageAlt: "Ant illustration with a paintbrush and palette, representing innovation.",
    title: "Innovate",
    description: "Experience the future of content creation with AI.antsq.com, the innovative platform leveraging GPT-3 and DALL·E to revolutionize your productivity and enhance your content through SEO-optimized auto-blogging with full WordPress plugin compatibility.",
  },
];

const FeatureCards = () => {
  return (
    <div className="container mx-auto px-4 -mt-24 md:-mt-32 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-coral-pink rounded-2xl p-8 text-center flex flex-col items-center shadow-card"
          >
            <h3 className="text-3xl font-bold text-dark-gray">{feature.title}</h3>
            <p className="mt-4 text-base text-dark-gray leading-relaxed">{feature.description}</p>
            <div className="mt-auto pt-8">
              <Image
                src={feature.imageSrc}
                alt={feature.imageAlt}
                width={128}
                height={121}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;