
import Link from "next/link";
import { ProjectIntakeFormData } from "./project-intake-wizard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@awesome.me/kit-654a0ecbfd/icons/classic/solid";
import { faCalendar } from "@fortawesome/pro-solid-svg-icons";

interface SuccessStepProps {
    formData: ProjectIntakeFormData
}

export function SuccessStep({ formData }: SuccessStepProps) {
    return (
        <div className="text-center py-8">
            <div className="flex justify-center mb-6">
                <div className="h-20 w-20 rounded-full bg-success/10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-success" size="2x" />
                </div>
            </div>

            <h2 className="mb-4">
                Thank You, {formData.firstName}!
            </h2>

            <p className="mb-6 max-w-lg mx-auto">
                Your project information has been submitted successfully. I'll review the details and get back to you within 1-2
                business days to discuss next steps.
            </p>

            <div className="bg-beige/50 p-6 rounded-lg max-w-md mx-auto mb-8">
                <div className="font-medium text-neutral mb-2">What happens next?</div>
                <ol className="text-left space-y-2 text-neutral/80">
                    <li className="flex items-start">
                        <span className="bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                            1
                        </span>
                        <span>You&apos;ll receive an email confirmation</span>
                    </li>
                    <li className="flex items-start">
                        <span className="bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                            2
                        </span>
                        <span>I&apos;ll review your project details</span>
                    </li>
                    <li className="flex items-start">
                        <span className="bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                            3
                        </span>
                        <span>We&apos;ll schedule a call to discuss your project in detail</span>
                    </li>
                </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="btn btn-secondary btn-outline">Return to Homepage</Link>

                    <a href="https://calendly.com/brandonkorous/project-intake-call" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                        Schedule a Call Now
                    </a>
            </div>
        </div>
    )
}

