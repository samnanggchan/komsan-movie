import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

const Card = ({ data, trending, index, media_type, className = "" }) => {
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const mediaType = data.media_type ?? media_type;
  const releaseDate = data?.release_date || data?.first_air_date;

  return (
    <Link
      to={"/" + mediaType + "/" + data.id}
      className={`w-[150px] sm:w-[180px] md:w-[210px] lg:w-[230px] h-[240px] sm:h-[280px] md:h-[320px] overflow-hidden block rounded relative hover:scale-[1.02] transition-transform snap-start shrink-0 ${className}`}
    >
      {data?.poster_path ? (
        <img
          src={imageURL + data?.poster_path}
          alt={data?.title || data?.name || "Movie poster"}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="bg-neutral-800 h-full w-full flex justify-center items-center text-sm text-neutral-300 text-center px-3">
          No image found
        </div>
      )}

      <div className="absolute top-4">
        {trending && (
          // <div className='py-1 px-4 bg-black/60 backdrop-blur-3xl rounded-r-full overflow-hidden'>
          //     {/* #{index} Trending */}
          // </div>
          <div></div>
        )}
      </div>
      <div className="absolute bottom-0 h-16 sm:h-[72px] backdrop-blur-3xl w-full bg-black/70 p-2">
        <h2 className="text-ellipsis line-clamp-1 text-sm sm:text-base md:text-lg font-semibold">
          {data?.title || data?.name}
        </h2>
        <div className="text-xs sm:text-sm text-neutral-300 flex justify-between items-center gap-2">
          <p className="line-clamp-1">{releaseDate ? moment(releaseDate).format("MMM Do YYYY") : "N/A"}</p>
          <p className="px-1 rounded-full text-xs sm:text-sm text-white whitespace-nowrap">
            Rating : {Number(data.vote_average).toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
