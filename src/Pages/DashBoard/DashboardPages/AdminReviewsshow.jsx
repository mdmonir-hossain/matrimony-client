import { Card, Table } from "flowbite-react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const AdminReviewsshow = ({ story }) => {
  const [openModal, setOpenModal] = useState(false);
  const {
    email,
    image,
    SelfBiodataNumber,
    PartnerBiodataNumber,
    review,
    marriageDate,
    star,
  } = story;
  return (
    <div>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {SelfBiodataNumber}
        </Table.Cell>
        <Table.Cell>{PartnerBiodataNumber}</Table.Cell>
        <Table.Cell>
          <Button onClick={() => setOpenModal(true)}>View Story</Button>
        </Table.Cell>

        <Modal
          show={openModal}
          size="md"
          onClose={() => setOpenModal(false)}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <Card className="max-w-sm">
                <div className="flex justify-center gap-5 px-4 pt-4">
                  <div> Review Star:{star}</div>
                  <div>
                    <img src={image} className="w-12 rounded-full" />
                  </div>
                </div>
                <div className="flex flex-col items-center pb-10">
                  <div className="mt-4 flex space-x-3 lg:mt-6">
                    <div>Marriage Date: {marriageDate}</div>
                  </div>
                  <div className="mt-4 flex space-x-3 lg:mt-6">
                    <div>Reviews: {review} </div>
                  </div>
                </div>
              </Card>
              <div className="flex justify-center gap-4">
                <Button color="failure" onClick={() => setOpenModal(false)}>
                  {"Close"}
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </Table.Row>
    </div>
  );
};

export default AdminReviewsshow;
