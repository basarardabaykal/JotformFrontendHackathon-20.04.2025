export default function Card({index, title, price, description, image, quantity, updateQuantity}) {
    const decreaseQuantity = () => {
        if (quantity > 0) {
            updateQuantity(index, quantity - 1);
        }
    }

    const increaseQuantity = () => {
        updateQuantity(index, quantity + 1);
    }

    return (
        <div className="bg-white text-black mb-4 rounded-2xl p-2 h-[420px] shadow-2xl shadow-gray-600">
            <div className="flex flex-col justify-center">
                <section id="image" className="w-[320px] h-[240px] overflow-hidden flex justify-center items-center">
                    <img className="w-[150px]" src={image} alt="" />
                </section>
                <section id="text" className="h-[100px] flex flex-col items-center justify-center text-lg">
                    <p>{title}</p>
                    <p>{description}</p>
                    <p>{price}</p>
                </section>
                <section className="text-2xl flex flex-row items-center mx-auto">
                    <button onClick={decreaseQuantity}>-</button>
                    <p className="mx-2">{quantity}</p>
                    <button onClick={increaseQuantity}>+</button>
                </section>
            </div>
        </div>
    )
}