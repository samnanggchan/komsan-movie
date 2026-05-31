import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const ExplorePage = () => {
  const params = useParams();
  const [pageno, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageno,
        },
      });
      setData((prev) => [...prev, ...response.data.results]);
      setTotalPages(response.data.total_pages || 1);
    } catch (error) {
      console.log("Error", error);
    }
  }, [params.explore, pageno]);

  const handleScroll = useCallback(() => {
    const reachedBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;

    if (reachedBottom && pageno < totalPages) {
      setPageNo((prev) => prev + 1);
    }
  }, [pageno, totalPages]);

  useEffect(() => {
    setPageNo(1);
    setData([]);
    setTotalPages(1);
  }, [params.explore]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="py-16">
      <div className="container mx-auto px-3 sm:px-4">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">
          Popular {params.explore} Shows
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {data.map((exploreData) => {
            return (
              <Card
                data={exploreData}
                key={exploreData.id + "exploreSection"}
                media_type={params.explore}
                className="w-full max-w-none h-[250px] sm:h-[280px] md:h-[320px]"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
