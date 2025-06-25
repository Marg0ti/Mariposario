export default function SubHeader({ title, imageUrl }) {
    return (
        <div style={{ backgroundImage: `url(${imageUrl})` }} className={`bg-cover bg-position-[center] h-64 flex items-center justify-center`}>

            <h1 className="text-h1 text-4xl font-bold text-center mb-6 bg-subHeaderBackground p-5 " >
                {title}
            </h1>
        </div> 
    )
}