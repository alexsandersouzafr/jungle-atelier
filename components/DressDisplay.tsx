import Image from "next/image";

interface Props {
  image: string;
  name: string;
  recommendation: string;
  collection: string;
}

export const DressDisplay = ({
  name,
  image,
  recommendation,
  collection,
}: Props) => {
  return (
    <div className="text-black grid">
      <Image src={image} alt={name} height="400" width="267" />
      <div className="py-2 text-2xl">{name}</div>
      <div>{recommendation}</div>
      <div>{collection}</div>
      <div className="underline py-4">Conheça</div>
    </div>
  );
};
