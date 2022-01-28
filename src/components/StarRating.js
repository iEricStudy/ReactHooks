import React from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [
    ...Array(length)
  ];
  
  function Star({ selected = false, onSelect }) {
    return <FaStar color={selected ? 'red' : 'gray'} onClick={onSelect}/>
  }
  
  function StarRating({ totalStars = 5 }) {
    const [selectedStars, setSelectedStars] = useState(0);
    return (
      <>
        {
          createArray(totalStars).map((n, key) => (
            <Star key={key} selected={selectedStars > key}
              onSelect={() => setSelectedStars(key + 1)}/>
          ))
        }
        <p>{selectedStars} of {totalStars}</p>
      </>
    )
  }