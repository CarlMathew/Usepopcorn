import { useState } from "react";

function Body({ height, tempMovieData, tempWatchedData, isLoading }) {
  return (
    <div className={`flex flex-row justify-center items-center h-[90%] gap-10`}>
      <ListBox tempMovieData={tempMovieData} isLoading={isLoading} />
      <WatchedBox tempWatchedData={tempWatchedData} />
    </div>
  );
}

function ListBox({ tempMovieData, isLoading }) {
  const [show, setShow] = useState(true);
  return (
    <div className="h-[80%] bg-gray-800 rounded w-[25%] shadow-2xl p-2 overflow-x-auto">
      <div className="flex justify-end">
        <button
          className="font-bold bg-gray-950 py-[5px] px-[10px] rounded-full"
          onClick={() => setShow(!show)}
        >
          {show ? "-" : "+"}
        </button>
      </div>
      {show &&
        (isLoading ? (
          <div className="w-full text-center font-bold mt-5">Loading...</div>
        ) : (
          <Movies tempMovieData={tempMovieData} />
        ))}
    </div>
  );
}

function Movies({ tempMovieData }) {
  return (
    <div className="flex flex-col gap-8 flex-shrink-0 mt-4 px-4">
      {tempMovieData.map((movies) => (
        <div className="flex flex-row gap-5">
          <img src={movies.Poster} alt={movies.Title} width={70} />
          <div className="mt-4">
            <h1 className="">{movies.Title}</h1>
            <h1 className="flex mt-2 gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 28 28"
              >
                <g fill="none">
                  <path
                    fill="url(#fluentColorCalendar280)"
                    d="M25 21.75A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V9l11-1l11 1z"
                  />
                  <path
                    fill="url(#fluentColorCalendar281)"
                    d="M25 21.75A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V9l11-1l11 1z"
                  />
                  <g filter="url(#fluentColorCalendar284)">
                    <path
                      fill="url(#fluentColorCalendar282)"
                      d="M8.749 17.502a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m5.254 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m-5.254-5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m5.254 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m5.255 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"
                    />
                  </g>
                  <path
                    fill="url(#fluentColorCalendar283)"
                    d="M21.75 3A3.25 3.25 0 0 1 25 6.25V9H3V6.25A3.25 3.25 0 0 1 6.25 3z"
                  />
                  <defs>
                    <linearGradient
                      id="fluentColorCalendar280"
                      x1="17.972"
                      x2="11.828"
                      y1="27.088"
                      y2="8.803"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#b3e0ff" />
                      <stop offset="1" stop-color="#b3e0ff" />
                    </linearGradient>
                    <linearGradient
                      id="fluentColorCalendar281"
                      x1="16.357"
                      x2="19.402"
                      y1="14.954"
                      y2="28.885"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#dcf8ff" stop-opacity="0" />
                      <stop
                        offset="1"
                        stop-color="#ff6ce8"
                        stop-opacity="0.7"
                      />
                    </linearGradient>
                    <linearGradient
                      id="fluentColorCalendar282"
                      x1="12.821"
                      x2="15.099"
                      y1="11.636"
                      y2="26.649"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0078d4" />
                      <stop offset="1" stop-color="#0067bf" />
                    </linearGradient>
                    <linearGradient
                      id="fluentColorCalendar283"
                      x1="3"
                      x2="21.722"
                      y1="3"
                      y2="-3.157"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0094f0" />
                      <stop offset="1" stop-color="#2764e7" />
                    </linearGradient>
                    <filter
                      id="fluentColorCalendar284"
                      width="15.676"
                      height="10.167"
                      x="6.165"
                      y="11.835"
                      color-interpolation-filters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy=".667" />
                      <feGaussianBlur stdDeviation=".667" />
                      <feColorMatrix values="0 0 0 0 0.1242 0 0 0 0 0.323337 0 0 0 0 0.7958 0 0 0 0.32 0" />
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_378174_9797"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_378174_9797"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </g>
              </svg>
              <span>{movies.Year}</span>
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}

function WatchedBox({ tempWatchedData }) {
  const [showMoviesWatched, setShowMoviesWatched] = useState(true);

  return (
    <div className="h-[80%] bg-gray-800 rounded w-[25%] shadow-2xl">
      <div className="bg-gray-700 p-4 font-bold">
        <TitleWatchedBox
          showMoviesWatched={showMoviesWatched}
          setShowMoviesWatched={setShowMoviesWatched}
        />
        <Statistics tempWatchedData={tempWatchedData} />
      </div>
      <WatchedMovies
        tempWatchedData={tempWatchedData}
        showMoviesWatched={showMoviesWatched}
      />
    </div>
  );
}

function TitleWatchedBox({ showMoviesWatched, setShowMoviesWatched }) {
  return (
    <div className=" flex justify-between">
      <h1>MOVIES YOU WATCHED</h1>
      <button
        className="font-bold bg-gray-950 py-[5px] px-[10px] rounded-full text-[sm]"
        onClick={() => setShowMoviesWatched(!showMoviesWatched)}
      >
        {showMoviesWatched ? "-" : "+"}
      </button>
    </div>
  );
}

function Statistics({ tempWatchedData }) {
  let avgImdbRating = 0;
  let avgUserRating = 0;
  let avgRuntime = 0;

  tempWatchedData.forEach((element) => {
    avgImdbRating += element.imdbRating;
    avgUserRating += element.userRating;
    avgRuntime += element.runtime;
  });

  avgImdbRating = avgImdbRating / tempWatchedData.length;
  avgUserRating = avgUserRating / tempWatchedData.length;
  avgRuntime = avgRuntime / tempWatchedData.length;
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <g fill="none">
            <path
              fill="#504f4f"
              d="m26.215 16.502l.753-7.03l.497.053l-.753 7.03zM10.46 21.46a5.46 5.46 0 1 0 0-10.92a5.46 5.46 0 0 0 0 10.92"
            />
            <path
              fill="url(#unjsNanotar0)"
              d="M10.46 18.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
            />
            <path
              stroke="#eee"
              stroke-miterlimit="10"
              stroke-width="0.235"
              d="M10.46 20.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Z"
              opacity="0.2"
            />
            <path
              stroke="#eee"
              stroke-miterlimit="10"
              stroke-width="0.25"
              d="M10.46 19.655a3.655 3.655 0 1 0 0-7.31a3.655 3.655 0 0 0 0 7.31Z"
              opacity="0.2"
            />
            <path
              fill="#504f4f"
              d="M22.46 20.288a4.288 4.288 0 1 0 0-8.576a4.288 4.288 0 0 0 0 8.576"
            />
            <path
              fill="url(#unjsNanotar1)"
              d="M22.46 18.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
            />
            <path
              stroke="#eee"
              stroke-miterlimit="10"
              stroke-width="0.25"
              d="M22.46 19.383a3.383 3.383 0 1 0 0-6.765a3.383 3.383 0 0 0 0 6.765Z"
              opacity="0.2"
            />
            <path
              fill="#595858"
              d="M1 8v16a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m9 11.5c0 .275-.225.5-.5.5H5c-.553 0-2-1.79-2-4s1.447-4 2-4h4.5c.275 0 .5.225.5.5zm17 .5h-4.5a.5.5 0 0 1-.5-.5v-7c0-.275.225-.5.5-.5H27c.552 0 2 1.79 2 4s-1.448 4-2 4"
            />
            <path
              fill="#787676"
              d="M2.962 9.537h26v.5h-26zm0 1h26v.5h-26zM3 22h26v.5H3zm0 1h26v.5H3zm0-2h26v.5H3z"
            />
            <path
              fill="#424242"
              d="M20.5 12c.275 0 .5.225.5.5v7c0 .275-.225.5-.5.5h-9a.5.5 0 0 1-.5-.5v-7c0-.275.225-.5.5-.5zm0-.5h-9a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1"
              opacity="0.2"
            />
            <path
              fill="url(#unjsNanotar2)"
              d="M21 12.5c0-.275-.225-.5-.5-.5h-9c-.275 0-.5.225-.5.5V14h10z"
            />
            <path
              fill="url(#unjsNanotar3)"
              d="M11 14v5.5c0 .275.225.5.5.5h9c.275 0 .5-.225.5-.5V14z"
            />
            <path
              fill="#bdbdbd"
              d="M19.25 16.5h-6.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25h6.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25m0 2h-6.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25h6.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25"
            />
            <path
              fill="#424242"
              d="M16 7H1.973A.97.97 0 0 0 1 7.973v3.065h1.183l.014-2h27.635l-.015 2H31V7.97a.97.97 0 0 0-.97-.97z"
            />
            <defs>
              <radialGradient
                id="unjsNanotar0"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="rotate(180 5.23 6.604)scale(5.353)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#eee" />
                <stop offset="1" stop-color="#bdbdbd" />
              </radialGradient>
              <radialGradient
                id="unjsNanotar1"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="rotate(180 11.271 6.667)scale(5.2515)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#eee" />
                <stop offset="1" stop-color="#bdbdbd" />
              </radialGradient>
              <radialGradient
                id="unjsNanotar2"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="translate(15.875 12.125)scale(5.461)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#ef5350" />
                <stop offset="1" stop-color="#e53935" />
              </radialGradient>
              <radialGradient
                id="unjsNanotar3"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="translate(15.833 13.792)scale(7.101)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fafafa" />
                <stop offset="1" stop-color="#eee" />
              </radialGradient>
            </defs>
          </g>
        </svg>
        <h1 className="self-center">{tempWatchedData.length} Movies</h1>
      </div>
      <div className="flex gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 36 36"
        >
          <path
            fill="#ffac33"
            d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.97 1.97 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.98 1.98 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.96 1.96 0 0 1-1.16.379"
          />
        </svg>
        <h1 className="self-center">{avgImdbRating}</h1>
      </div>
      <div className="flex gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 36 36"
        >
          <path
            fill="#ffac33"
            d="M28.84 17.638c-.987 1.044-1.633 3.067-1.438 4.493l.892 6.441c.197 1.427-.701 2.087-1.996 1.469l-5.851-2.796c-1.295-.62-3.408-.611-4.7.018l-5.826 2.842c-1.291.629-2.193-.026-2.007-1.452l.843-6.449c.186-1.427-.475-3.444-1.47-4.481l-4.494-4.688c-.996-1.037-.655-2.102.755-2.365l6.37-1.188c1.41-.263 3.116-1.518 3.793-2.789L16.762.956c.675-1.271 1.789-1.274 2.473-.009L22.33 6.66c.686 1.265 2.4 2.507 3.814 2.758l6.378 1.141c1.412.252 1.761 1.314.774 2.359z"
          />
          <path
            fill="#ffd983"
            d="M9.783 2.181c1.023 1.413 2.446 4.917 1.717 5.447c-.728.531-3.607-1.91-4.63-3.323s-.935-2.668-.131-3.254c.804-.587 2.02-.282 3.044 1.13m19.348 2.124C28.109 5.718 25.23 8.16 24.5 7.627c-.729-.53.695-4.033 1.719-5.445C27.242.768 28.457.463 29.262 1.051c.803.586.89 1.841-.131 3.254M16.625 33.291c-.001-1.746.898-5.421 1.801-5.421c.897 0 1.798 3.675 1.797 5.42c0 1.747-.804 2.712-1.8 2.71c-.994.002-1.798-.962-1.798-2.709m16.179-9.262c-1.655-.539-4.858-2.533-4.579-3.395c.277-.858 4.037-.581 5.69-.041c1.655.54 2.321 1.605 2.013 2.556c-.308.95-1.469 1.42-3.124.88M2.083 20.594c1.655-.54 5.414-.817 5.694.044c.276.857-2.928 2.854-4.581 3.392c-1.654.54-2.818.07-3.123-.88c-.308-.95.354-2.015 2.01-2.556"
          />
        </svg>
        <h1 className="self-center">{avgUserRating}</h1>
      </div>
      <div className="flex gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 36 36"
        >
          <path
            fill="#aab8c2"
            d="M18 0C8.611 0 1 7.611 1 17h.029v17c0 1.1.9 2 2 2H33c1.1 0 2-.9 2-2V17c0-9.389-7.611-17-17-17"
          />
          <circle cx="18" cy="17" r="14" fill="#fff" />
          <path
            fill="#66757f"
            d="M18 4c7.18 0 13 5.82 13 13s-5.82 13-13 13S5 24.18 5 17S10.82 4 18 4m0-2C9.729 2 3 8.729 3 17s6.729 15 15 15s15-6.729 15-15S26.271 2 18 2"
          />
          <path
            fill="#292f33"
            d="M19 6a1 1 0 0 0-2 0v1a1 1 0 0 0 2 0zm0 21a1 1 0 0 0-2 0v1a1 1 0 0 0 2 0zM8 16H7a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m21 0h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m-2.293 8.293L26 23.586A.999.999 0 1 0 24.586 25l.707.707a.999.999 0 1 0 1.414-1.414M10 23.586l-.707.707a.999.999 0 1 0 1.414 1.414l.707-.707A.999.999 0 1 0 10 23.586M9.293 9.707l.707.707A.999.999 0 1 0 11.414 9l-.707-.707a.999.999 0 1 0-1.414 1.414M26 10.414l.707-.707a.999.999 0 1 0-1.414-1.414L24.586 9A.999.999 0 1 0 26 10.414"
          />
          <path
            fill="#dd2e44"
            d="M8.915 13.839a1 1 0 0 1 1.325-1.288l8.154 3.51a1 1 0 0 1-.791 1.837l-8.154-3.51a1 1 0 0 1-.534-.549"
          />
        </svg>
        <h1 className="self-center">{avgRuntime} min</h1>
      </div>
    </div>
  );
}

function WatchedMovies({ tempWatchedData, showMoviesWatched }) {
  return (
    <>
      {showMoviesWatched && (
        <ul className="flex flex-col p-5 gap-10 h-[80%] overflow-y-auto">
          {tempWatchedData.map((movie) => (
            <li className="flex gap-4 flex-shrink-0">
              <img src={movie.Poster} width={70} alt={movie.Title} />
              <div>
                <h1 className="font-bold mt-4">{movie.Title}</h1>
                <div className="flex gap-8 mt-2">
                  <h1 className="font-bold flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 36 36"
                    >
                      <path
                        fill="#ffac33"
                        d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.97 1.97 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.98 1.98 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.96 1.96 0 0 1-1.16.379"
                      />
                    </svg>
                    <span>{movie.imdbRating}</span>
                  </h1>
                  <h1 className="flex items-center gap-1">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 36 36"
                    >
                      <path
                        fill="#ffac33"
                        d="M28.84 17.638c-.987 1.044-1.633 3.067-1.438 4.493l.892 6.441c.197 1.427-.701 2.087-1.996 1.469l-5.851-2.796c-1.295-.62-3.408-.611-4.7.018l-5.826 2.842c-1.291.629-2.193-.026-2.007-1.452l.843-6.449c.186-1.427-.475-3.444-1.47-4.481l-4.494-4.688c-.996-1.037-.655-2.102.755-2.365l6.37-1.188c1.41-.263 3.116-1.518 3.793-2.789L16.762.956c.675-1.271 1.789-1.274 2.473-.009L22.33 6.66c.686 1.265 2.4 2.507 3.814 2.758l6.378 1.141c1.412.252 1.761 1.314.774 2.359z"
                      />
                      <path
                        fill="#ffd983"
                        d="M9.783 2.181c1.023 1.413 2.446 4.917 1.717 5.447c-.728.531-3.607-1.91-4.63-3.323s-.935-2.668-.131-3.254c.804-.587 2.02-.282 3.044 1.13m19.348 2.124C28.109 5.718 25.23 8.16 24.5 7.627c-.729-.53.695-4.033 1.719-5.445C27.242.768 28.457.463 29.262 1.051c.803.586.89 1.841-.131 3.254M16.625 33.291c-.001-1.746.898-5.421 1.801-5.421c.897 0 1.798 3.675 1.797 5.42c0 1.747-.804 2.712-1.8 2.71c-.994.002-1.798-.962-1.798-2.709m16.179-9.262c-1.655-.539-4.858-2.533-4.579-3.395c.277-.858 4.037-.581 5.69-.041c1.655.54 2.321 1.605 2.013 2.556c-.308.95-1.469 1.42-3.124.88M2.083 20.594c1.655-.54 5.414-.817 5.694.044c.276.857-2.928 2.854-4.581 3.392c-1.654.54-2.818.07-3.123-.88c-.308-.95.354-2.015 2.01-2.556"
                      />
                    </svg>{" "}
                    <span> {movie.userRating}</span>
                  </h1>
                  <h1 className="flex gap-1 justify-center items-center">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 36 36"
                    >
                      <path
                        fill="#aab8c2"
                        d="M18 0C8.611 0 1 7.611 1 17h.029v17c0 1.1.9 2 2 2H33c1.1 0 2-.9 2-2V17c0-9.389-7.611-17-17-17"
                      />
                      <circle cx="18" cy="17" r="14" fill="#fff" />
                      <path
                        fill="#66757f"
                        d="M18 4c7.18 0 13 5.82 13 13s-5.82 13-13 13S5 24.18 5 17S10.82 4 18 4m0-2C9.729 2 3 8.729 3 17s6.729 15 15 15s15-6.729 15-15S26.271 2 18 2"
                      />
                      <path
                        fill="#292f33"
                        d="M19 6a1 1 0 0 0-2 0v1a1 1 0 0 0 2 0zm0 21a1 1 0 0 0-2 0v1a1 1 0 0 0 2 0zM8 16H7a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m21 0h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m-2.293 8.293L26 23.586A.999.999 0 1 0 24.586 25l.707.707a.999.999 0 1 0 1.414-1.414M10 23.586l-.707.707a.999.999 0 1 0 1.414 1.414l.707-.707A.999.999 0 1 0 10 23.586M9.293 9.707l.707.707A.999.999 0 1 0 11.414 9l-.707-.707a.999.999 0 1 0-1.414 1.414M26 10.414l.707-.707a.999.999 0 1 0-1.414-1.414L24.586 9A.999.999 0 1 0 26 10.414"
                      />
                      <path
                        fill="#dd2e44"
                        d="M8.915 13.839a1 1 0 0 1 1.325-1.288l8.154 3.51a1 1 0 0 1-.791 1.837l-8.154-3.51a1 1 0 0 1-.534-.549"
                      />
                    </svg>
                    <span>{movie.runtime}</span>
                  </h1>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default Body;
