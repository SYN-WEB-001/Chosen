
import Card from "./Card.jsx";


export default function PhoneMockUp() {

    return (
        <>

            <div className="mockup-phone border-[#ff8938] rotate-9 shadow-2xl">
                <div className="mockup-phone-camera"></div>
                <div className="mockup-phone-display">

                    <div className="mockup-phone-display bg-base-100 pb-10">
                        <div className="h-full overflow-hidden">
                            <Card />
                        </div>
                    </div>

                </div>
            </div>

        </>

    );
}
