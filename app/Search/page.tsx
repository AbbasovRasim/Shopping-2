"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredImages, setFilteredImages] = useState([]);
  const [mycart, setMyCart] = useState([]);
  const [addedToCart, setAddedToCart] = useState({});
  const [inputClicked, setInputClicked] = useState(false); // Yeni state
  const containerRef = useRef(null); // Referans yarat

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

  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    setMyCart(storedCart);

    const updatedAddedToCart = {};
    storedCart.forEach((item) => {
      updatedAddedToCart[item.id] = true;
    });
    setAddedToCart(updatedAddedToCart);
  }, []);

  const addToCart = (image) => {
    const currentCart = JSON.parse(sessionStorage.getItem("cart")) || [];

    const isAlreadyInCart = currentCart.some((item) => item.id === image.id);

    if (!isAlreadyInCart) {
      const newCart = [...currentCart, image];
      setMyCart(newCart);
      sessionStorage.setItem("cart", JSON.stringify(newCart));
      setAddedToCart((prev) => ({ ...prev, [image.id]: true }));
    }
  };

  // Inputdan kənarda tıkladıqda məhsulları gizlətmək üçün funksiya
  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setInputClicked(false);
    }
  };

  useEffect(() => {
    // Mousedown hadisəsini dinləyin
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="container py-5 flex flex-col items-center ">
      <input
        className="rounded-lg p-2 mb-4 w-1/3 border-none bg-gray-100 shadow-md"
        type="text"
        placeholder="Axtar..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        onClick={() => setInputClicked(true)} // Inputa tıklanınca state-i güncelle
      />

      {inputClicked && ( // Inputa tıklanıbsa nəticələri göstər
        <div
          ref={containerRef}
          className="grid grid-cols-4 gap-5 my-10 border bg-white p-4"
          style={{ maxHeight: "500px", overflowY: "auto" }} // Max hündürlük və scroll
        >
          {" "}
          {/* Bordered container */}
          {filteredImages.length > 0 ? (
            filteredImages.map((image, index) => (
              <div className="border" key={index}>
                <img src={image.url} alt={image.name} className="pb-5" />
                {
                  <Link href={`/Search/${image.id}`}>
                    <p className="cursor-pointer text-sm font-bold">
                      {image.name}
                    </p>
                  </Link>
                }
                <p className="text-red-500 font-extrabold">{image.price}</p>
                <button
                  onClick={() => addToCart(image)}
                  className={`${
                    addedToCart[image.id] ? "bg-green-500" : "bg-red-500"
                  } text-white hover:scale-105 transition-transform duration-200 rounded p-2 mt-2`}
                >
                  {addedToCart[image.id] ? "Səbətdə" : "Səbətə at"}
                </button>
              </div>
            ))
          ) : (
            <p>Heç bir məhsul tapılmadı</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
