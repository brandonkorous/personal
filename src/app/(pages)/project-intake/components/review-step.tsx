import { BUDGET_OPTIONS, PROJECT_TYPE_OPTIONS, ProjectIntakeFormData, TIMELINE_OPTIONS } from "../data"

interface ReviewStepProps {
    formData: ProjectIntakeFormData
}

const ReviewStep = ({ formData }: ReviewStepProps) => {
    const formatProjectType = () => {
        return PROJECT_TYPE_OPTIONS.find(opt => opt === formData.projectType)?.value;
    }

    const formatTimeline = () => {
        return TIMELINE_OPTIONS.find(opt => opt === formData.timeline)?.value;
    }

    const formatBudget = () => {
        return BUDGET_OPTIONS.find(opt => opt === formData.budget)?.value;
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