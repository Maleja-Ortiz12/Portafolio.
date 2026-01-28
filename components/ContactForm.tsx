"use client";

import React, { useRef, useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ContactForm = () => {
    const { t } = useLanguage();
    const form = useRef<HTMLFormElement>(null);

    const countries = [
        { name: "Colombia", code: "+57", iso: "co" },
        { name: "USA", code: "+1", iso: "us" },
        { name: "España", code: "+34", iso: "es" },
        { name: "México", code: "+52", iso: "mx" },
        { name: "Argentina", code: "+54", iso: "ar" },
        { name: "Perú", code: "+51", iso: "pe" },
        { name: "Chile", code: "+56", iso: "cl" },
        { name: "Ecuador", code: "+593", iso: "ec" },
        { name: "Venezuela", code: "+58", iso: "ve" },
        { name: "Brasil", code: "+55", iso: "br" },
        { name: "Otro", code: "+", iso: "globe" }
    ];

    const [countryCode, setCountryCode] = useState(countries[0].code);
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSelect = (country: typeof countries[0]) => {
        setSelectedCountry(country);
        setCountryCode(country.code);
        setIsOpen(false);
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;
        setStatus("sending");
        const formData = new FormData(form.current);

        // Ensure country name is sent
        formData.set("user_country", selectedCountry.name);

        fetch("https://formsubmit.co/ajax/malejawork12@gmail.com", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    setStatus("success");
                    form.current?.reset();
                } else {
                    console.error("FAILED...", response);
                    setStatus("error");
                }
            })
            .catch((error) => {
                console.error("FAILED...", error);
                setStatus("error");
            });
    };

    return (
        <div className="w-full max-w-md mx-auto bg-slate-900/50 p-8 rounded-2xl border border-slate-800 shadow-2xl backdrop-blur-sm">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">{t.footer.form.name}</label>
                    <input
                        type="text"
                        name="user_name"
                        required
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-slate-600"
                        placeholder="..."
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">{t.footer.form.email}</label>
                    <input
                        type="email"
                        name="user_email"
                        required
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-slate-600"
                        placeholder="..."
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                        <label className="block text-sm font-medium text-slate-400 mb-2">{t.footer.form.country}</label>
                        {/* Custom Dropdown Trigger */}
                        <div
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white cursor-pointer flex items-center justify-between hover:border-slate-700 transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div className="flex items-center gap-2">
                                {selectedCountry.iso !== "globe" ? (
                                    <img
                                        src={`https://flagcdn.com/w20/${selectedCountry.iso}.png`}
                                        srcSet={`https://flagcdn.com/w40/${selectedCountry.iso}.png 2x`}
                                        width="20"
                                        alt={selectedCountry.name}
                                        className="rounded-sm object-cover"
                                    />
                                ) : (
                                    <span>🌍</span>
                                )}
                                <span className="truncate">{selectedCountry.name}</span>
                            </div>
                            <ChevronDown size={16} className={`text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                        </div>

                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-700 rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
                                {countries.map((c) => (
                                    <div
                                        key={c.iso}
                                        className="px-4 py-3 hover:bg-slate-800 cursor-pointer flex items-center gap-3 transition-colors"
                                        onClick={() => handleSelect(c)}
                                    >
                                        {c.iso !== "globe" ? (
                                            <img
                                                src={`https://flagcdn.com/w20/${c.iso}.png`}
                                                width="20"
                                                alt={c.name}
                                                className="rounded-sm"
                                            />
                                        ) : (
                                            <span>🌍</span>
                                        )}
                                        <span className="text-slate-200">{c.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                        {/* Hidden input for form submission */}
                        <input type="hidden" name="user_country" value={selectedCountry.name} />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">{t.footer.form.phone}</label>
                        <div className="relative">
                            <div className="absolute left-0 top-0 bottom-0 w-16 flex items-center justify-center bg-slate-800/30 border-r border-slate-800 rounded-l-lg">
                                <span className="text-slate-400 text-sm font-mono">{countryCode}</span>
                            </div>
                            <input
                                type="tel"
                                name="user_phone"
                                className="w-full pl-20 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-slate-600"
                                placeholder="300 123 4567"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">{t.footer.form.message}</label>
                    <textarea
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-slate-600 resize-none"
                        placeholder="..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "sending" || status === "success"}
                    className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 ${status === "success"
                        ? "bg-green-600 text-white cursor-default"
                        : "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-purple-500/25"
                        } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                    {status === "idle" && (
                        <>
                            {t.footer.form.send} <Send size={18} />
                        </>
                    )}
                    {status === "sending" && (
                        <>
                            {t.footer.form.sending} <Loader2 size={18} className="animate-spin" />
                        </>
                    )}
                    {status === "success" && (
                        <>
                            {t.footer.form.success} <CheckCircle size={18} />
                        </>
                    )}
                    {status === "error" && (
                        <>
                            {t.footer.form.error} <AlertCircle size={18} />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
