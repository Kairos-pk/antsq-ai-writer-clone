import Image from 'next/image';

const logos = [
  { 
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee-antsq-com/assets/images/px-Samsung_Logologos-11.webp", 
    alt: "Samsung logo", 
    width: 135,
    height: 45
  },
  { 
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee-antsq-com/assets/images/px-Group-48095472logos-12.webp", 
    alt: "Anking On logo", 
    width: 178,
    height: 40
  },
  { 
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee-antsq-com/assets/images/px-Google-Cloud-Logos-brands-and-logotypes-2logos-13.webp", 
    alt: "Google logo",
    width: 115,
    height: 38
  },
  { 
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee-antsq-com/assets/images/px-Amazon_logologos-14.webp", 
    alt: "Amazon logo",
    width: 118,
    height: 36
  },
  { 
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee-antsq-com/assets/images/px-Google-Cloud-Logologos-15.webp", 
    alt: "Google Cloud logo",
    width: 170,
    height: 28
  },
  { 
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee-antsq-com/assets/images/px-6554796_previewlogos-16.webp", 
    alt: "Google logo",
    width: 115,
    height: 38
  },
];

const UserReviews = () => {
  return (
    <section>
      <div className="container">
        <h2 className="text-center text-4xl font-bold text-dark-gray mb-16">
          Users Reviews
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 md:gap-x-16 lg:gap-x-20">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="filter grayscale object-contain"
              style={{ height: 'auto', maxHeight: '45px' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserReviews;