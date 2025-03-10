import { use, useState } from "react";
import PropTypes from "prop-types";

StarRating.propTypes = {
  maximum: PropTypes.number,
  star_size: PropTypes.string,
};

export default function StarRating({
  currentRating,
  setCurrentRating,
  tempRating,
  setTempRating,
  maximum = 5,
  star_size = 20,
}) {
  const [stars, onStars] = useState(false);

  return (
    <div className="flex gap-2 items-center ">
      <div className="flex gap-2">
        {Array.from({ length: maximum }, (_, i) => (
          <Star
            id={i + 1}
            onRate={setCurrentRating}
            currentRating={currentRating}
            full={currentRating >= i + 1 || tempRating >= i + 1}
            tempRating={tempRating}
            setTempRating={setTempRating}
            stars={stars}
            onStars={onStars}
            star_size={star_size}
          />
        ))}
      </div>
      <div className=" ">
        <h1 className={`-my-3 text-[${star_size}px] font-bold`}>
          {tempRating || ""}
        </h1>
      </div>
    </div>
  );
}

function Star({ id, onRate, full, setTempRating, stars, onStars, star_size }) {
  const unfilled =
    "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z";
  const filled =
    "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z";
  return (
    <span
      key={id}
      id={id}
      onClick={(e) => {
        onRate(e.currentTarget.id);
        setTempRating(e.currentTarget.id);
        onStars(true);
      }}
      onMouseEnter={(e) => {
        onRate(e.currentTarget.id);
        setTempRating(e.currentTarget.id);
        onStars(false);
      }}
      onMouseLeave={(e) => {
        if (!stars) {
          setTempRating(0);
          onRate(0);
        }
      }}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${star_size}`}
          height={`${star_size}`}
          fill="currentColor"
          className="bi bi-star text-yellow-500 cursor-pointer"
          viewBox="0 0 16 16"
        >
          <path d={filled} />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${star_size}`}
          height={`${star_size}`}
          fill="currentColor"
          className="bi bi-star text-yellow-500 cursor-pointer"
          viewBox="0 0 16 16"
        >
          <path d={unfilled} />
        </svg>
      )}
    </span>
  );
}
