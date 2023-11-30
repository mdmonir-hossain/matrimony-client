import { useQuery } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";
import SixPremiumCard from "./SixPremiumCard";


const HomePremiumMemberCard = () => {
    const { isPending, data } = useQuery({
      queryKey: ["biodatas"],
      queryFn: async () => {
        const res = await fetch("http://localhost:5000/biodatas");
        return res.json();
      },
    });

    if (isPending) {
      return <Spinner aria-label="Default status example" />;
    }
    console.log(data);
    return (
      <div>
        <h1 className="text-center font-bold text-3xl">premium membership</h1>
        <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10">
          {data.map((sixCard) => (
            <SixPremiumCard sixCard={sixCard}></SixPremiumCard>
          ))}
        </div>
      </div>
    );
};

export default HomePremiumMemberCard;