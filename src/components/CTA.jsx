import React, { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginSchemas from "../schemas/LoginSchemas.js";

const InputField = ({ label, type = "text", register, error }) => (
    <div>
        <input
            type={type}
            placeholder={label}
            {...register(label.toLowerCase(), { onChange: () => trigger(label.toLowerCase()) })}
            className="w-full bg-white text-gray-800 placeholder:text-gray-400 border-none p-4 rounded-xl focus:ring-2 focus:ring-amber-400 outline-none"
        />
        {error && <p className="text-yellow-300 text-sm">{error.message}</p>}
    </div>
);

const CTA = forwardRef((props, ref) => {
    const { register, handleSubmit, formState: { errors }, reset, trigger } = useForm({
        resolver: yupResolver(LoginSchemas),
        mode: "all",
    });

    const submitHandler = (data) => {
        alert(`Vielen Dank für deine Registrierung, wir melden uns bei dir.\n
Deine Angaben:\nName: ${data.name}\nE-Mail: ${data.email}\nInteressen: ${data.interests}`);
        reset();
    };

    return (
        <div ref={ref} className="max-w-6xl mx-auto my-10">
            <header className="text-center mt-40 mb-10">
                <h1 className="text-2xl md:text-4xl font-bold">
                    Wenn du dabei sein willst jetzt anmelden, bevor die letzten Plätze weg sind.
                </h1>
                <p className="text-xl font-bold mt-2">
                    Wir befinden uns mitten in der Testphase. Die Nachfrage ist hoch, sichere dir einen der letzten freien Plätze.
                </p>
            </header>

            <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-6 md:p-10 lg:p-12 rounded-3xl shadow-2xl border-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="flex flex-col space-y-6">
                        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Early Access sichern!</h1>
                        <h2 className="text-4xl mt-2">Werde eine*r der ersten Nutzer*innen.</h2>
                        <div className="text-lg md:text-xl opacity-90">
                            <p className="mb-4">
                                Wir verbringen mehr Zeit online als je zuvor – und trotzdem fühlen sich viele Menschen isolierter an.
                                <strong className="block mt-2 text-white">CHOSEN bringt die echten Begegnungen zurück.</strong>
                            </p>
                            <p>Die App zeigt dir Menschen, die zur gleichen Zeit am gleichen Ort sind wie du. Kein Swipen. Kein Bot. Einfach echt.</p>
                        </div>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-pink-500 to-purple-600/70 rounded-2xl">
                        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col space-y-4">
                            <InputField label="Name" register={register} error={errors.name} />
                            <InputField label="Email" type="email" register={register} error={errors.email} />
                            <InputField label="Interests" register={register} error={errors.interests} />
                            <button
                                type="submit"
                                className="w-full text-lg font-bold text-white bg-gradient-to-br from-pink-500 to-purple-600/70 py-4 rounded-xl shadow-lg uppercase tracking-wider hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all duration-200"
                            >
                                Jetzt Registrieren
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default CTA;
