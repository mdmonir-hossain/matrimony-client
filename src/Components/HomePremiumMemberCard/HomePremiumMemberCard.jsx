import { useQuery } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";


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
    return <div>Home Premium Member Card</div>;
};

export default HomePremiumMemberCard;