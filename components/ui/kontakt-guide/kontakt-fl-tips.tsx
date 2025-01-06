import Image from "next/image";

export default function KontaktFLTips() {
  return (
    <>
      Coming Soon...
      <div className="hidden flex-col items-center space-y-4">
        <div>Here are some helpful tips</div>
        <Image
          src="/library-guide-images/image.png"
          alt="Helpful Tips"
          width={300}
          height={200}
          className="rounded-lg"
        />
      </div>
    </>
  );
}
