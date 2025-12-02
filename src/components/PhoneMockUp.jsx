
import Card from "./Card.jsx";
import { useState } from 'react'

export default function PhoneMockUp() {

    return (
        <>


            <div className="mockup-phone border-[#ff8938] rotate-5 shadow-2xl">
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
