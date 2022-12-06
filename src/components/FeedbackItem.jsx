import { useState } from "react";

function FeedbackItem() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("This is an example of Card Item");

  const handleClick = () => {
    //Directly Change the value
    setRating(10);
    //Saving the previous value and updating it
    setRating((prev) => {
      return prev + 1;
    });
  };

  return (
    <div className='card'>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
      <button onClick={handleClick}>Click to update state</button>
    </div>
  );
}

export default FeedbackItem;
