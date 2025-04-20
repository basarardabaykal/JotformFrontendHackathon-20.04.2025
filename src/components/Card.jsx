import temp from "../../public/temp.jpg"

export default function Card() {
    return (
        <div className="bg-white text-black mb-4">
            <div>
                <section id="image">
                    <img className="w-[400px]" src={temp} alt="" />
                </section>
                <section id="text">
                    <p>Temp Text</p>
                </section>
            </div>
            
        </div>
    )
}