import React from 'react';

const socialLinksData = [
  {
    name: 'github',
    href: 'https://github.com/zzzzshawn',
    iconSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/svgs/github-8.svg?',
    alt: 'github logo',
  },
  {
    name: 'x.com',
    href: 'https://x.com/zzzzshawn',
    iconSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/svgs/x-9.svg?',
    alt: 'x.com logo',
  },
  {
    name: 'gmail',
    href: 'mailto:shawndsilva.mail@gmail.com',
    iconSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/svgs/gmail-10.svg?',
    alt: 'gmail logo',
  },
  {
    name: 'discord',
    href: 'https://discordapp.com/users/816919689350742026',
    iconSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/svgs/discord-11.svg?',
    alt: 'discord logo',
  },
  {
    name: 'linkedIn',
    href: 'https://www.linkedin.com/in/zzshawndsilva/',
    iconSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/svgs/linkdin-12.svg?',
    alt: 'linkedIn logo',
  },
];

const SocialLinks = () => {
  return (
    <div className="h-full flex flex-col justify-start gap-3 items-center w-full text-white max-sm:gap-2">
      <h2 className="text-4xl font-mono font-bold max-sm:w-full">
        LIN
        <br />
        KS.
      </h2>
      <div className="w-full h-full grid grid-cols-2 grid-rows-3 gap-2 auto-rows-fr">
        {socialLinksData.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col h-full w-full items-center justify-center rounded-xl p-1 border border-zinc-800 bg-[#2a2a2a] hover:bg-[#333333] transition-all duration-200"
          >
            <img
              src={link.iconSrc}
              alt={link.alt}
              className="w-1/2 aspect-square object-contain opacity-100"
            />
            <p className="text-[10px] font-mono font-medium text-zinc-300">{link.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;