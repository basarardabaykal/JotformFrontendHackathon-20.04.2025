import { useEffect, useState } from "react";
import Card from "./Card.jsx";

export default function Items() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const formID = import.meta.env.VITE_FORM_ID;
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
        
        // Initialize quantities with 0 for each product
        const initialQuantities = {};
        fetchedProducts.forEach((product, index) => {
          initialQuantities[index] = 0;
        });
        setQuantities(initialQuantities);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError(err.message);
      });
  }, []);

  const updateQuantity = (index, newQuantity) => {
    setQuantities(prev => ({
      ...prev,
      [index]: newQuantity
    }));
  };

  const calculateTotal = () => {
    return products.reduce((total, product, index) => {
      const quantity = quantities[index] || 0;
      return total + (product.price * quantity);
    }, 0).toFixed(2);
  };

  const handleBuy = () => {
    const order = {
      items: products
        .map((product, index) => ({
          id: index,
          name: product.name,
          description: product.description,
          price: product.price,
          quantity: quantities[index] || 0
        }))
        .filter(item => item.quantity > 0),
      total: calculateTotal(),
      date: new Date().toISOString()
    };

        alert(`Thanks for the order!`);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-3/5 flex flex-wrap gap-8 bg-white shadow-2xl shadow-gray-600 rounded-2xl my-4 justify-center py-20 px-8">
        {error && <p className="text-red-600 w-full text-center">{error}</p>}

        {products.length > 0 ? (
          products.map((product, index) => (
            <Card
              key={index}
              index={index}
              title={product.name}
              price={product.price}
              description={product.description}
              image={JSON.parse(product.images)[0]}
              quantity={quantities[index] || 0}
              updateQuantity={updateQuantity}
            />
          ))
        ) : (
          <>
            <Card />
            <Card />
            <Card />
          </>
        )}
      </div>

      <div className="w-3/5 bg-white shadow-2xl shadow-gray-600 rounded-2xl my-4 p-8 text-black">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        
        {products.map((product, index) => {
          const quantity = quantities[index] || 0;
          if (quantity > 0) {
            return (
              <div key={index} className="flex justify-between mb-2">
                <span>
                  {product.name}
                </span>
                <span>
                  x {quantity} = ${(product.price * quantity).toFixed(2)}
                </span>
              </div>
            );
          }
          return null;
        })}

        <div className="mt-4 pt-4 border-t border-gray-300">
          <p className="font-semibold text-right">
            Total: ${calculateTotal()}
          </p>
        </div>

        {Object.values(quantities).some(qty => qty > 0) && (
          <button 
            onClick={handleBuy}
            className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Buy Now
          </button>
        )}
      </div>
    </div>
  );
}