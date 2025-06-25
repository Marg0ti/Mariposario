import Parque from "../../Components/Parque/Parque.jsx";
import SubHeader from "../../Components/Headers/SubHeader.jsx";

export default function Park() {
    return (
        <>
        <SubHeader title={"El parque"} imageUrl={"/images/subHeader-parque.jpg"}></SubHeader>
            <Parque />
        </>
    )
}