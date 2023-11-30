import { useQuery } from "@tanstack/react-query";
import { Card, Spinner } from "flowbite-react";

const SuccessCounter = () => {
  const { isPendingmale, data:maleCounter } = useQuery({
    queryKey: ["male"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/maleCounter");
      return res.json();
    },
  });
  const { isPendingfemale, data: femaleCounter } = useQuery({
    queryKey: ["female"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/femaleCounter");
      return res.json();
    },
  });
  const { isPendingcompleted, data: completed } = useQuery({
    queryKey: ["completed"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/marriagesCompleted");
      return res.json();
    },
  });

  if (isPendingmale) {
    return <Spinner aria-label="Default status example" />;
  }
  if (isPendingfemale) {
    return <Spinner aria-label="Default status example" />;
  }
  if (isPendingcompleted) {
    return <Spinner aria-label="Default status example" />;
  }
  console.log(maleCounter.length);

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-center mt-10">
        Success Counter
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md: grid-cols-2">
        <Card className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Total Male Biodatas
          </h5>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {maleCounter.length}
          </h5>
        </Card>
        <Card className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Total Female Biodatas
          </h5>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {femaleCounter.length}
          </h5>
        </Card>
        <Card className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Marriages Completed
          </h5>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {completed.length}
          </h5>
        </Card>
      </div>
    </div>
  );
};

export default SuccessCounter;
