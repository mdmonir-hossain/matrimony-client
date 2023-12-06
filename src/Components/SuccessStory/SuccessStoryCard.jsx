import { Card } from "flowbite-react";


const SuccessStoryCard = ({ story }) => {
    const {
     
      image,
      star,
      review,
      marriageDate,
    } = story;
    return (
      <div>
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
      </div>
    );
};

export default SuccessStoryCard;