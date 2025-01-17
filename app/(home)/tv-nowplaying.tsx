"use client";
import Card2 from "@/components/card2";
import { tvNowPlayingUrl } from "@/server/config";
import useGetApi from "@/server/custom-hooks/use-get-api";

import React from "react";

interface TvNowPlaying {
  results: {
    id: number;
    title: string;
    poster_path: string;
    media_type: string;
    name: string;
    release_date: string;
    first_air_date: string;
  }[];
}

const TvNowPlaying = () => {
  const { data } = useGetApi<TvNowPlaying>(tvNowPlayingUrl);

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-2 ">
      {data?.results.slice(0, 10).map((film) => (
        <div key={film.id}>
          <Card2
            key={film.id}
            id={film.id}
            name={film.name || film.title}
            image={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                : "https://placehold.co/500x750?text=No+Image"
            }
            date={film.release_date || film.first_air_date || "N/A"}
            filmType={"tv"}
            fallbackSrc="https://placehold.co/500x750?text=No+Image"
          />
        </div>
      ))}
    </div>
  );
};

export default TvNowPlaying;
