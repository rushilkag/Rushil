import Image from "next/image";

const FooterClouds = () => {
  const elipseSvg = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/svgs/elipse-13.svg?";
  const bigCloudPng = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/images/bigCloud-5.png?";
  const cloudCropPng = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/images/next-642865-cloudCrop.png?";
  const cloudPng = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/images/cloud-7.png?";

  return (
    <div
      role="button"
      aria-label="Draggable element"
      className="relative flex w-full rounded-xl border border-border transform-gpu bg-background/20 cursor-grab sm:col-start-1 sm:col-end-9 sm:row-start-5 sm:row-end-6 [box-shadow:0_0px_35px_-10px_#ffffff1a_inset] z-[9] max-sm:h-[8rem] p-0.5"
    >
      <div className="w-full h-full">
        <div className="relative flex items-center justify-center size-full group text-white border border-border rounded-xl">
          <p className="font-extrabold text-2xl group-hover:tracking-[0.5rem] group-hover:text-3xl transition-all duration-300 z-10">
            peace out.
          </p>

          <Image
            alt="elipse shape"
            width={300}
            height={300}
            src={elipseSvg}
            className="absolute bottom-[-1rem] left-[-2rem] object-cover h-[25rem] w-[15rem] scale-150 rotate-[-109deg] opacity-60 invert z-0"
          />

          <Image
            alt="big cloud"
            width={200}
            height={200}
            src={bigCloudPng}
            className="absolute bottom-[-10rem] right-[5rem] translate-y-[-10rem] opacity-30 scale-[2] z-0"
          />

          <Image
            alt="cloud crop"
            width={1920}
            height={1080}
            src={cloudCropPng}
            className="absolute bottom-0 right-[-10rem] w-full h-[60rem] object-cover opacity-20 z-0"
          />
          
          <Image
            alt="small cloud"
            width={200}
            height={200}
            src={cloudPng}
            className="absolute bottom-[-5rem] left-[5rem] translate-y-[-5rem] opacity-20 scale-[0.5] z-0"
          />

          <Image
            alt="small cloud"
            width={200}
            height={200}
            src={cloudPng}
            className="absolute bottom-[-2rem] right-[10rem] translate-y-[-5rem] opacity-20 scale-50 z-0"
          />
        </div>
      </div>
      <div className="pointer-events-none h-0 absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"></div>
      <div className="pointer-events-none h-0 absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-800/10"></div>
    </div>
  );
};

export default FooterClouds;