import { useEffect, useState } from "react";
import Card from "./Card.jsx";

export default function Items() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = "2b572f7dd359b9d363a9143d3fcb4250";
    const formID = "251073478653967";
    const endpoint = `https://api.jotform.com/form/${formID}/payment-info?apiKey=${apiKey}`;

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        const fetchedProducts = data.content.products;
        setProducts(fetchedProducts);
        console.log(fetchedProducts);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError(err.message);
      });
  }, []);

  return (
    <div className="w-3/5 flex flex-wrap gap-8 bg-gray-400 justify-center py-20 px-8">
      {error && <p className="text-red-600 w-full text-center">{error}</p>}

      {products.length > 0 ? (
        products.map((product, index) => (
          <Card
            key={index}
            title={product.name}
            price={product.price}
            description={product.description}
            image={JSON.parse(product.images)[0]}
          />
        ))
      ) : (
        // Loading placeholders
        <>
          <Card />
          <Card />
          <Card />
        </>
      )}
    </div>
  );
}
