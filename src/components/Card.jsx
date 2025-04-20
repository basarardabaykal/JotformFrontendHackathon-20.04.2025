import temp from "../../public/temp.jpg"

export default function Card({title, price, description, image}) {
    return (
        <div className="bg-white text-black mb-4 rounded-2xl p-2 h-[400px] shadow-2xl shadow-gray-600">
            <div>
                <section id="image" className="w-[320px] h-[240px] overflow-hidden flex justify-center items-center">
                    <img className="w-[150px]" src={image} alt="" />
                </section>
                <section id="text" className="h-[100px]">
                    <p>{title}</p>
                    <p>{description}</p>
                    <p>{price}</p>
                </section>
            </div>
            
        </div>
    )
}