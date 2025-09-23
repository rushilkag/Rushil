import Image from "next/image";

const NarutoQuote = () => {
  return (
    <div className="flex flex-col items-start justify-end gap-1 text-white">
      <p className="text-sm">“I’m gonna be Hokage one day.”</p>
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/37649e7a-59b2-4342-8418-e9270f41745e-zzzzshawn-cloud/assets/images/next-455284-naruto.jpg?"
        alt="naruto"
        width={80}
        height={80}
        className="aspect-square w-[5rem] rounded-3xl object-cover"
      />
    </div>
  );
};

export default NarutoQuote;