import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("q") || "";

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get("/search/multi", {
        params: {
          query,
          page: page,
        },
      });
      setData((prev) => [...prev, ...response.data.results]);
      setTotalPages(response.data.total_pages || 1);
    } catch (error) {
      console.log("Error", error);
    }
  }, [page, query]);

  useEffect(() => {
    setPage(1);
    setData([]);
    setTotalPages(1);
  }, [query]);

  const handleScroll = useCallback(() => {
    const reachedBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;

    if (reachedBottom && page < totalPages) {
      setPage((prev) => prev + 1);
    }
  }, [page, totalPages]);

  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [fetchData, query]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="py-16">
      <div className="lg:hidden mt-2 mx-2 sticky top-[70px] z-30">
        <input
          type="text"
          placeholder="Search movies..."
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          value={query}
          className="px-4 py-2 text-base w-full bg-white rounded-full text-neutral-900"
        />
      </div>
      <div className="container mx-auto px-3 sm:px-4">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">
          Search Results
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {data.map((searchData) => {
            return (
              <Card
                data={searchData}
                key={searchData.id + "search"}
                media_type={searchData.media_type}
                className="w-full max-w-none h-[250px] sm:h-[280px] md:h-[320px]"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
