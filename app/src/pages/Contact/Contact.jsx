import Form from "../../Components/Form/Form.jsx";
import Map from "../../Components/map/Map.jsx";
import SubHeader from "../../Components/Headers/SubHeader.jsx";


export default function Contact() {
  return (
    <div>
      <SubHeader title="Contacto" imageUrl={"/images/subHeader-form.jpg"} />
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto px-4 py-8 mt-5">
        <div className="w-full md:w-1/2">
          <Form />
        </div>
        <div className="w-full md:w-1/2">
          <Map />
        </div>
      </div>
    </div>
  );
}

