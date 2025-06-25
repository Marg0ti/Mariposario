import Tickets from "../../Components/Tickets/Tickets";
import SubHeader from "../../Components/Headers/SubHeader";
import Details from "../../Components/Tickets/Details";

export default function TicketsPage() {
  return (
    <>
      <SubHeader title="Entradas" imageUrl={"/images/subHeader-tickets.jpg"} />
      <div className="flex flex-col lg:flex-row justify-center items-start gap-6 px-4 lg:px-16 py-6">
        <div className="w-full lg:w-1/2 xl:w-[600px]">
          <Details />
        </div>
        <div className="w-full lg:w-1/2 xl:w-[600px]">
          <Tickets />
        </div>
      </div>
    </>
  );
}
