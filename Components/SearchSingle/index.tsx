export const SearchSingle = ({ id, name, price, url, description }) => {
  return (
    <div className="product-details">
      <h2>Product ID: {id}</h2>
      <h1>{name}</h1>
      <p>Price: ${price}</p>
      <div className="image-gallery">
        <img src={url} alt="" />
      </div>
      <p>{description}</p>
      {/* Burada əlavə elementlər əlavə edə bilərsiniz */}
    </div>
  );
};
