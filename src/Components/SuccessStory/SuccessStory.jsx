import { Spinner } from "flowbite-react";
import SuccessStoryCard from "./SuccessStoryCard";
import { useQuery } from "@tanstack/react-query";

const SuccessStory = () => {
  const { isPendingcompleted, data: completed } = useQuery({
    queryKey: ["completed"],
    queryFn: async () => {
      const res = await fetch(
        "https://b8a12-server-side-six.vercel.app/marriagesCompleted"
      );
      return res.json();
    },
  });
  if (isPendingcompleted) {
    return <Spinner aria-label="Default status example" />;
  }
  return (
    <div className="mt-[100px]">
      <h1 className="text-3xl font-extrabold text-center ">Success Story</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {completed?.map((story) => (
          <SuccessStoryCard story={story}></SuccessStoryCard>
        ))}
      </div>
    </div>
  );
};

export default SuccessStory;
