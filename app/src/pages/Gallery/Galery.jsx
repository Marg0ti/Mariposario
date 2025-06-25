import ListaMariposas from "../../Components/Gallery/ListaMariposas.jsx";
import SubHeader from "../../Components/Headers/SubHeader.jsx";


export default function Galery() {
  return (
    <>
      <SubHeader title="Galería" imageUrl={"/images/subHeader-gallery.jpg"} />
      <ListaMariposas></ListaMariposas>
    </>
  );
}

