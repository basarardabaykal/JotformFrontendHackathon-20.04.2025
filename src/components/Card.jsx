import temp from "../../public/temp.jpg"

export default function Card({title, price, description, image}) {
    return (
        <div className="bg-white text-black mb-4 rounded-2xl p-2 h-auto">
            <div>
                <section id="image">
                    <img className="w-[300px]" src={image} alt="" />
                </section>
                <section id="text">
                    <p>{title}</p>
                    <p>{description}</p>
                    <p>{price}</p>
                </section>
            </div>
            
        </div>
    )
}