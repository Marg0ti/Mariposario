import { GoogleMap, Marker, LoadScript} from "@react-google-maps/api"


export default function Map() {
    const containerStyle = {
        width: '100%',
        height: '500px'
    };

    const address = {
        lat: 28.370512,
        lng: -16.716442
    }
    const api_key = import.meta.env.VITE_MAPS_API_KEY;

    return (
        <div className="map max-w-xl mx-auto">
            <p className=" text-center mb-6 text-address">Mariposario del Drago, P.º Nicolas Estevez Borges, 38430 Icod de los Vinos, Santa Cruz de Tenerife, España</p>

            <div className="mt-6">
                <LoadScript api_key >
                    <GoogleMap mapContainerStyle={containerStyle} center={address} zoom={15} >
                        <Marker position={address} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    )

    
}
