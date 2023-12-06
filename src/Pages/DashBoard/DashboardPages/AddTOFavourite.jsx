import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddTOFavourite = ({ addfavourite }) => {
  const { _id, BiodataId, Name, Occupation, PermanentDivisionName } =
    addfavourite;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      fetch(`https://b8a12-server-side-six.vercel.app/Delete/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Success!",
              text: "Favourite Deleted Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });

      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your Favourite has been deleted.", "success");
      }
    });
  };
  return (
    <div className="overflow-x-auto">
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell>{Name}</Table.Cell>
        <Table.Cell>{BiodataId}</Table.Cell>
        <Table.Cell>{Occupation}</Table.Cell>
        <Table.Cell>{PermanentDivisionName}</Table.Cell>
        <Table.Cell>
          <Link>
            <Button onClick={() => handleDelete(_id)}>Delete</Button>
          </Link>
        </Table.Cell>
      </Table.Row>
    </div>
  );
};

export default AddTOFavourite;
