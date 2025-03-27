import { ProjectIntakeFormData } from "./project-intake-wizard"

interface ReviewStepProps {
    formData: ProjectIntakeFormData
}

const ReviewStep = ({ formData }: ReviewStepProps) => {
    // Helper function to format project type
    const formatProjectType = () => {
        switch (formData.projectType) {
            case "tech-expertise":
                return "Tech Expertise"
            case "innovation-modernization":
                return "Innovation & Modernization"
            case "automation":
                return "Automation"
            case "other":
                return `Other: ${formData.projectTypeOther}`
            default:
                return "Not specified"
        }
    }

    // Helper function to format timeline
    const formatTimeline = () => {
        switch (formData.timeline) {
            case "asap":
                return "As soon as possible"
            case "1-3-months":
                return "1-3 months"
            case "3-6-months":
                return "3-6 months"
            case "6-plus-months":
                return "6+ months"
            case "not-sure":
                return "Not sure yet"
            default:
                return "Not specified"
        }
    }

    // Helper function to format budget
    const formatBudget = () => {
        switch (formData.budget) {
            case "under-5k":
                return "Under $5,000"
            case "5k-10k":
                return "$5,000 - $10,000"
            case "10k-25k":
                return "$10,000 - $25,000"
            case "25k-50k":
                return "$25,000 - $50,000"
            case "50k-plus":
                return "$50,000+"
            case "not-sure":
                return "Not sure yet"
            default:
                return "Not specified"
        }
    }

    return (
        <div>
            <h3 className="mb-4">Review Your Information</h3>
            <div className="mb-6">
                Please review the information you&apos;ve provided before submitting. If anything needs to be changed, you can go
                back to the previous steps.
            </div>

            <div className="space-y-6">
                <div className="bg-base-200 p-4 rounded-lg">
                    <h4 className="text-neutral mb-2">Basic Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                        <div>
                            <span className="text-neutral/70">Name:</span>{" "}
                            <span className="font-medium">
                                {formData.firstName} {formData.lastName}
                            </span>
                        </div>
                        <div>
                            <span className="text-neutral/70">Email:</span> <span className="font-medium">{formData.email}</span>
                        </div>
                        <div>
                            <span className="text-neutral/70">Company:</span>{" "}
                            <span className="font-medium">{formData.company || "Not provided"}</span>
                        </div>
                        <div>
                            <span className="text-neutral/70">Role:</span>{" "}
                            <span className="font-medium">{formData.role || "Not provided"}</span>
                        </div>
                        <div>
                            <span className="text-neutral/70">Phone:</span>{" "}
                            <span className="font-medium">{formData.phone || "Not provided"}</span>
                        </div>
                        <div>
                            <span className="text-neutral/70">Referral Source:</span>{" "}
                            <span className="font-medium">{formData.referralSource || "Not provided"}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-base-200 p-4 rounded-lg">
                    <h4 className="text-neutral mb-2">Project Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                        <div>
                            <span className="text-neutral/70">Project Type:</span>{" "}
                            <span className="font-medium">{formatProjectType()}</span>
                        </div>
                        <div>
                            <span className="text-neutral/70">Timeline:</span> <span className="font-medium">{formatTimeline()}</span>
                        </div>
                        <div className="md:col-span-2">
                            <span className="text-neutral/70">Budget Range:</span>{" "}
                            <span className="font-medium">{formatBudget()}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-base-200 p-4 rounded-lg">
                    <h4 className="text-neutral mb-2">Project Description</h4>
                    <p className="whitespace-pre-line">{formData.projectDescription}</p>
                </div>

                {(formData.currentChallenges || formData.projectGoals || formData.additionalInfo) && (
                    <div className="bg-base-200 p-4 rounded-lg">
                        <h4 className="text-neutral mb-2">Additional Information</h4>

                        {formData.currentChallenges && (
                            <div className="mb-4">
                                <h5 className="font-medium text-neutral">Current Challenges:</h5>
                                <p className="whitespace-pre-line">{formData.currentChallenges}</p>
                            </div>
                        )}

                        {formData.projectGoals && (
                            <div className="mb-4">
                                <h5 className="font-medium text-neutral">Project Goals:</h5>
                                <p className="whitespace-pre-line">{formData.projectGoals}</p>
                            </div>
                        )}

                        {formData.additionalInfo && (
                            <div>
                                <h5 className="font-medium text-neutral">Additional Information:</h5>
                                <p className="whitespace-pre-line">{formData.additionalInfo}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ReviewStep;