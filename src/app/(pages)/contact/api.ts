'use server';
import { Resend } from "resend";
import { ContactFormData } from "./data";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export const sendMessage = async (data: ContactFormData) => {
    try {
        const htmlContent = `
                <h1>New Message Sent</h1>
                <p>You have received a new mesage from ${data.name}.</p>

                <h2>Contact Information</h2>
                <p>Name: ${data.name}</p>
                <p>Email: ${data.email}</p>

                <h2>Subject</h2>
                <p>${data.subject}</p>
                
                <h2>Message</h2>
                <p>${data.message}</p>

                `;

        const textContent = `
                    New Message Sent
                    
                    Contact Information:
                    Name: ${data.firstName} ${data.lastName}
                    Email: ${data.email}

                    Subject:
                    ${data.subject}

                    Message:
                    ${data.message}

                    `;

        if (process.env.RESEND_API_KEY) {
            const { result, error } = await resend.emails.send({
                from: process.env.RESEND_EMAIL_PROJECT_FROM as string,
                to: [process.env.RESEND_EMAIL_TO as string],
                subject: `New Message from ${data.name}`,
                html: htmlContent,
                text: textContent,
                replyTo: data.email,
            });

            if (error) {
                console.error("Error sending contact email:", error);
                return {
                    success: false,
                    message: "There was an error sending your message.  Please try again later."
                }
            }
            console.log("Email sent scuccessfully:", data);
        } else {
            console.log("Email not sent.  RESEND_API_KEY not set.");
            console.log("Email would be sent with the following content:");
            console.log("Email Subject:", `New Contact Message from ${data.name}`);
            console.log('Email HTML Content:', htmlContent);
            console.log('Email Text Content:', textContent);
        }

        if (process.env.RESEND_API_KEY) {
            const { result, error } = await resend.emails.send({
                from: process.env.RESEND_EMAIL_FROM as string,
                to: [data.email],
                subject: "Thank you for reaching out",
                html: `
                                <h1>Thank You, ${data.name}!</h1>
                                <p>Your message was sent successfully.</p>
                                <p>I'll review the details and get back to you within 1-2 business days.</p>
                                <div>
                                    <a href="https://calendly.com/brandonkorous/project-intake-call" target="_blank" rel="noopener noreferrer">Schedule a Call Now</a>
                                </div>
                                `
            });

            if (error) {
                console.error("Error sending contact email:", error);
                return {
                    success: false,
                    message: "There was an error sending your message.  Please try again later."
                }
            };

            return {
                success: true,
                message: "Your message was sent successfully!"
            }
        }
    } catch (error) {
        console.error("Error sending message:", error);
        return {
            success: false,
            message: "There was an error sending your message.  Please try again later."
        }
    }
};