import Image from "next/image";

interface FreeStuffProps {
  image: string;
  title: string;
  description: string;
}

const FreeStuff: React.FC<FreeStuffProps> = ({ image, title, description }) => {
  return (
    <div className="w-full max-w-xs bg-secondary shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-center overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={1770}
          height={1314}
          className="object-cover object-center w-full h-50"
          style={{ transform: "scale(1.01)" }}
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-primary">{description}</p>
      </div>
    </div>
  );
};

export default FreeStuff;
