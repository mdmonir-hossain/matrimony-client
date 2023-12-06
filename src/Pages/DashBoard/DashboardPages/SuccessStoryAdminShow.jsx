import { Spinner, Table } from "flowbite-react";

import { useQuery } from "@tanstack/react-query";
import AdminReviewsshow from "./AdminReviewsshow";

const SuccessStoryAdminShow = () => {
  const { isPendingcompleted, data: reviews } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await fetch(
        "https://b8a12-server-side-six.vercel.app/reviews"
      );
      return res.json();
    },
  });
  if (isPendingcompleted) {
    return <Spinner aria-label="Default status example" />;
  }
  return (
    <div className="overflow-x-auto">
      
              
<div className="overflow-x-auto">
      <Table>
         <Table.Head>
          <Table.HeadCell>Male Biodata Id</Table.HeadCell>
          <Table.HeadCell>Female Biodata Id</Table.HeadCell>
          <Table.HeadCell>View Story</Table.HeadCell>
          
        </Table.Head>
   
        <Table.Body className="divide-y">
          {reviews?.map((story) => (
            <AdminReviewsshow story={story}></AdminReviewsshow>
          ))}
        </Table.Body>
      </Table>
          </div>
          </div>
  );
};

export default SuccessStoryAdminShow;
