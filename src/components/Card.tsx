interface CardProps {
  title: string;
  desc: string;
}

const Card = ({ title, desc }: CardProps) => {
  return (
    <div className="bg-[#EEEEEE] h-[auto] p-10 m-1">
      <h1 className="font-bold text-lg">{title}</h1>
      <p className="py-4 text-sm">{desc}</p>
    </div>
  );
};

export default Card;
