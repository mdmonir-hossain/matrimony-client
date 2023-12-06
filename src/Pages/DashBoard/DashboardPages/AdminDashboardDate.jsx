import { useQuery } from "@tanstack/react-query";
import { Card, Spinner } from "flowbite-react";

const AdminDashboardDate = () => {
  const { isPendingmale, data: maleCounter } = useQuery({
    queryKey: ["male"],
    queryFn: async () => {
      const res = await fetch(
        "https://b8a12-server-side-six.vercel.app/maleCounter"
      );
      return res.json();
    },
  });
  const { isPendingfemale, data: femaleCounter } = useQuery({
    queryKey: ["female"],
    queryFn: async () => {
      const res = await fetch(
        "https://b8a12-server-side-six.vercel.app/femaleCounter"
      );
      return res.json();
    },
  });
  const { isPendingcompleted, data: completed } = useQuery({
    queryKey: ["completed"],
    queryFn: async () => {
      const res = await fetch(
        "https://b8a12-server-side-six.vercel.app/marriagesCompleted"
      );
      return res.json();
    },
  });
  const { isPendingpremium, data: premium } = useQuery({
    queryKey: ["premium"],
    queryFn: async () => {
      const res = await fetch(
        "https://b8a12-server-side-six.vercel.app/premiumCount"
      );
      return res.json();
    },
  });
  const { isPendingrevenue, data: revenue } = useQuery({
    queryKey: ["revenue"],
    queryFn: async () => {
      const res = await fetch(
        "https://b8a12-server-side-six.vercel.app/revenue"
      );
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
  if (isPendingpremium) {
    return <Spinner aria-label="Default status example" />;
  }
  if (isPendingrevenue) {
    return <Spinner aria-label="Default status example" />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md: grid-cols-2 gap-4">
        <Card className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Total Male Biodatas
          </h5>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {maleCounter?.length}
          </h5>
        </Card>
        <Card className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Total Female Biodatas
          </h5>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {femaleCounter?.length}
          </h5>
        </Card>
        <Card className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Marriages Completed
          </h5>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {completed?.length}
          </h5>
        </Card>
        <Card className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Premium Account
          </h5>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {premium?.length}
          </h5>
        </Card>
        <Card className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Total revenue
          </h5>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {revenue?.map((total) => (
              <div>{total.Payment}</div>
            ))}
          </h5>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboardDate;
