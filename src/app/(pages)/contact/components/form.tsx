'use client';

import Link from "next/link";
import { sendMessage } from "../api";
import { ContactFormData } from "../data";

const ContactForm = () => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };
        const result = await sendMessage(data as ContactFormData);
        console.log(result);
    };

    return (
        <div className="card card-border border-primary bg-base-300 text-neutral p-8 shadow-lg">
            <h3 className="mb-6">
                Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-neutral pb-2">Name</label>
                        <input type="text" id="name" name="name" placeholder="John Doe" className="input w-full" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-neutral pb-2">Email</label>
                        <input type="email" id="email" name="email" placeholder="you@example.com" className="input w-full" />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="block text-neutral pb-2">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Subject" className="input w-full" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-neutral pb-2">Message</label>
                    <textarea id="message" name="message" rows={5} placeholder="Your message here" className="textarea w-full" />
                </div>
                <button type="submit" className="btn btn-primary rounded-full">Send Message</button>
            </form>
        </div>
    );
}

export default ContactForm;