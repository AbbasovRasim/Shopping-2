"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const allImages = products.flatMap((product) => product.images);
      const filtered = allImages.filter((image) =>
        image.name.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredImages(filtered);
    }
  }, [filter, products]);

  return (
    <div className="">
      <input
        className="border-gray-300  rounded-lg p-2 mb-4 w-1/3"
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="grid grid-cols-6 gap-2 text-center">
        {filteredImages.length > 0 ? (
          filteredImages.map((image, index) => (
            <div key={index}>
              <img src={image.url} alt={image.name} className="" />
              <Link href={`/products/${image.id}`}>
                <p className="cursor-pointer">{image.name}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No images found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
