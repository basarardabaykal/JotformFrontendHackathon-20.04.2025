import Card from "./Card.jsx"

export default function Items() {
    return(
        <div className="h-auto w-auto overflow-auto flex justify-center items-center">
            <div className="w-[1000px] flex flex-wrap gap-20 bg-gray-400 justify-center pt-80">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    )
}