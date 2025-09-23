import React from 'react';

const socialLinksData = [
  {
    name: 'github',
    href: 'https://github.com/rushilkag',
    iconSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/svgs/github-8.svg?',
    alt: 'github logo',
  },
  {
    name: 'twitter',
    href: 'https://x.com/Rushilkag',
    iconSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/svgs/x-9.svg?',
    alt: 'twitter logo',
  },
  {
    name: 'email',
    href: 'mailto:ksrushil@umich.edu',
    iconSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/svgs/gmail-10.svg?',
    alt: 'email logo',
  },
  {
    name: 'linkedIn',
    href: 'https://www.linkedin.com/in/rushilreddykagithala/',
    iconSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/svgs/linkdin-12.svg?',
    alt: 'linkedIn logo',
  },
];

const SocialLinks = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center w-full text-white">
      <h2 className="text-lg font-mono font-bold mb-4">LINKS.</h2>
      <div className="flex gap-3 justify-center items-center w-full">
        {socialLinksData.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center rounded-lg p-3 border border-white/20 bg-white/10 hover:bg-white/20 transition-all duration-200 aspect-square"
          >
            <img
              src={link.iconSrc}
              alt={link.alt}
              className="w-5 h-5 object-contain opacity-100 mb-1"
            />
            <p className="text-[8px] font-mono font-medium text-white/80">{link.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;