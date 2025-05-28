import { useState, useRef } from "react"
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/Models/Contact/ContactExperience";
import emailjs from '@emailjs/browser';
import DownloadPdfButton from "../components/DownloadPdfButton";

const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    // emailjs config
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
            setForm({
                name: "",
                email: "",
                message: ""
            })
        } catch(error){
            console.log('EmailJS Error: ', error);
        } finally {
            setLoading(false);
        }
    }

  return (
    <section id="contact" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader 
                title="Contact Me"
                sub="Contact Information"
            />
            <div className="mt-16 grid-12-cols">

            {/** Contact Form */}
                <div className="xl:col-span-5">
                    <div className="flex-center card-border rounded-xl p-10">
                        <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
                            <div className="mb-6">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows="5"
                                    required
                                />
                            </div>
                            <button type="submit" disabled={loading}>
                                <div className="cta-button group">
                                    <div className="bg-circle" />
                                        <p className="text">
                                            {loading ? "Sending..." : "Send Message"}
                                        </p>
                                        <div className="arrow-wrapper">
                                            <img src="/images/arrow-down.svg" alt="Arrow"/>
                                        </div>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>

                {/** 3D Canvas */}
                <div className="xl:col-span-7 min-h-96">
                    <div className="bg-[#69aed9] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                        <ContactExperience />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact