import { IPageProps } from "@/interfaces";
import { Single } from "@/Components/Single";

async function getSearchSingle(id) {
  const res = await fetch(`http://localhost:5000/products/${id}`);

  // Server cavabını yoxlayın
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();
  return data; // data burada { products: [...] } formatında olacaq
}

export default async function SearchSingle({ params }: IPageProps) {
  const { id } = await params; // params-ı await edin
  const project = await getSearchSingle(id);

  // products array-indən ilk obyekti götürürük
  const product = project.products[0]; // products array-indən ilk məhsulu alırıq

  return (
    <div className="">
      <Single
        id={product.images[0].id} // İlk şəkil ID'sini götür
        name={product.images[0].name} // İlk şəkil adını götür
        url={product.images[0].url} // İlk şəkil URL'sini götür
        price={product.images[0].price} // İlk şəkil qiymətini götür
      />
    </div>
  );
}
