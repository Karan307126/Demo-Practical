import Image from "next/image";

const Card = ({
  name,
  image_url,
  location,
  dob,
}: {
  name: string;
  image_url: string;
  location: string;
  dob: Date;
}) => {
  return (
    <div className="flex flex-col justify-center items-center p-4 border-4 border-blue-800 rounded-lg shadow-md bg-blue-100">
      <div>
        <Image
          src={image_url}
          className="rounded-full mb-2"
          alt={`${name}'s avatar image`}
          width={100}
          height={100}
        />
      </div>
      <div className="font-semibold text-lg">{name}</div>
      <div className="text-sm text-gray-500 truncate">{location}</div>
      <div className="text-sm">{dob.toLocaleDateString()}</div>
    </div>
  );
};

export default Card;
