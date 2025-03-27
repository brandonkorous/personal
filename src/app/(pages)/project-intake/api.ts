'use server';
import { Resend } from "resend";
import { ProjectIntakeFormData } from "./data";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export const submitProjectIntake = async (data: ProjectIntakeFormData) => {
    try {

        const formatProjectType = () => {
            switch (data.projectType) {
                case "tech-expertise":
                    return "Tech Expertise";
                case "innovation-modernization":
                    return "Innovation & Modernization";
                case "automation":
                    return "Automation";
                case "other":
                    return `Other - ${data.projectTypeOther}`;
                default:
                    return "Not Specified";
            }
        }

        const formatTimeLine = () => {
            switch (data.timeline) {
                case "asap":
                    return "As soon as possible";
                case "1-3-months":
                    return "1-3 months";
                case "3-6-months":
                    return "3-6 months";
                case "6-plus-months":
                    return "6+ months";
                case "not-sure":
                    return "Not sure yet";
                default:
                    return "Not Specified";
            }
        }

        const formatBudget = () => {
            switch (data.budget) {
                case "under-10k":
                    return "Under $10,000";
                case "10-50k":
                    return "$10,000 - $50,000";
                case "50-100k":
                    return "$50,000 - $100,000";
                case "100-500k":
                    return "$100,000 - $500,000";
                case "500k-plus":
                    return "$500,000+";
                default:
                    return "Not Specified";
            }
        }

        const htmlContent = `
                <h1>New Project Intake Submission</h1>
                <p>You have received a new project intake submission from ${data.firstName} ${data.lastName}.</p>

                <h2>Contact Information</h2>
                <ul>
                    <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
                    <li><strong>Email:</strong> ${data.email}</li>
                    <li><strong>Phone:</strong> ${data.phone || "Not provided"}</li>
                    <li><strong>Company:</strong> ${data.company || "Not provided"}</li>
                    <li><strong>Role:</strong> ${data.role || "Not provided"}</li>
                    <li><strong>Referral Source:</strong> ${data.referralSource || "Not provided"}</li>
                </ul>

                <h2>Project Information</h2>
                <ul>
                    <li><strong>Project Type:</strong> ${formatProjectType()}</li>
                    <li><strong>Timeline:</strong> ${formatTimeLine()}</li>
                    <li><strong>Budget Range:</strong> ${formatBudget()}</li>
                </ul>
                
                <h2>Project Description</h2>
                <p>${data.projectDescription.replace(/\n/g, "<br>")}</p>
                
                ${data.currentChallenges && `
                    <h2>Current Challenges</h2>
                    <p>${data.currentChallenges.replace(/\n/g, "<br>")}</p>
                    `
            }

                ${data.projectGoals && `
                    <h2>Project Goals</h2>
                    <p>${data.projectGoals.replace(/\n/g, "<br>")}</p>
                    `
            }

                ${data.additionalInfo && `
                    <h2>Additional Information</h2>
                    <p>${data.additionalInfo.replace(/\n/g, "<br>")}</p>
                    `
            }
                `;

        const textContent = `
                    New Project Intake Submission
                    
                    Contact Information:
                    Name: ${data.firstName} ${data.lastName}
                    Email: ${data.email}
                    Phone: ${data.phone || "Not provided"}
                    Company: ${data.company || "Not provided"}
                    Role: ${data.role || "Not provided"}
                    Referral Source: ${data.referralSource || "Not provided"}

                    Project Information:
                    Project Type: ${formatProjectType()}
                    Timeline: ${formatTimeLine()}
                    Budget Range: ${formatBudget()}

                    Project Description:
                    ${data.projectDescription}

                    ${data.currentChallenges && `
                        Current Challenges:
                        ${data.currentChallenges}
                        `
            }

                    ${data.projectGoals && `
                        Project Goals:
                        ${data.projectGoals}
                        `
            }

                    ${data.additionalInfo && `
                        Additional Information:
                        ${data.additionalInfo}
                        `
            }
                    `;

        if (process.env.RESEND_API_KEY) {
            const { result, error } = await resend.emails.send({
                from: process.env.RESEND_EMAIL_PROJECT_FROM as string,
                to: [process.env.RESEND_EMAIL_TO as string],
                subject: `New Project Intake Submission from ${data.firstName} ${data.lastName} - ${formatProjectType()}`,
                html: htmlContent,
                text: textContent,
                replyTo: data.email,
            });

            if (error) {
                console.error("Error sending project intake email:", error);
                return {
                    success: false,
                    message: "There was an eerror submitting your information.  Please try again later."
                }
            }
            console.log("Email sent scuccessfully:", data);
        } else {
            console.log("Email not sent.  RESEND_API_KEY not set.");
            console.log("Email would be sent with the following content:");
            console.log("Email Subject:", `New Project Intake Submission from ${data.firstName} ${data.lastName} - ${formatProjectType()}`);
            console.log('Email HTML Content:', htmlContent);
            console.log('Email Text Content:', textContent);
        }

        if (process.env.RESEND_API_KEY) {
            const { result, error } = await resend.emails.send({
                from: process.env.RESEND_EMAIL_FROM as string,
                to: [data.email],
                subject: "Thank you for your project inquery",
                html: `
                                <h1>Thank You, ${data.firstName}!</h1>
                                <p>Your project information has been submitted successfully.  I'll review the details and get back to you within 1-2 business days to discuss next steps.</p>
                                <div>
                                    <h2>What happens next?</h2>
                                    <ol>
                                        <li>I'll review your project details</li>
                                        <li>You'll receive an email confirmation</li>
                                        <li>We'll schedule a call to discuss your project in detail</li>
                                    </ol>
                                </div>
                                <div>
                                    <a href="https://calendly.com/brandonkorous/project-intake-call" target="_blank" rel="noopener noreferrer">Schedule a Call Now</a>
                                </div>
                                `
            });

            if (error) {
                console.error("Error sending project intake email:", error);
                return {
                    success: false,
                    message: "There was an error submitting your information.  Please try again later."
                }
            };

            return {
                success: true,
                message: "Your project intake form has been submitted successfully!"
            }
        }
    } catch (error) {
        console.error("Error submitting project intake:", error);
        return {
            success: false,
            message: "There was an error submitting your information.  Please try again later."
        }
    }
};