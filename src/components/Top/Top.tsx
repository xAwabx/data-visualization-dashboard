import { FC } from "react";

interface TopProps {}
interface CardType {
  title: string;
  value: number;
}

const Top: FC<TopProps> = ({}) => {
  const cardData: CardType[] = [
    {
      title: "Surrender Request",
      value: 21,
    },
    {
      title: "Loan Request",
      value: 42,
    },
    {
      title: "Total Users Enrolled",
      value: 300,
    },
    {
      title: "Open Requests",
      value: 15,
    },
    {
      title: "Closed Requests",
      value: 25,
    },
    {
      title: "Memberships Requests",
      value: 35,
    },
  ];

  return (
    <div className="flex flex-row gap-2  w-full bg-gray-300">
      {cardData.map((obj, i) => (
        <div
          key={i}
          className="bg-white h-[20vh] w-[20vw] rounded-lg shadow-sm flex flex-col justify-evenly shadow-black p-3"
        >
          <div className="">LOGO</div>
          <div className="flex flex-row justify-between items-center">
            <div className="font-semi w-[50%] text-md">{obj.title}</div>
            <div className="font-bold text-3xl">{obj.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Top;
