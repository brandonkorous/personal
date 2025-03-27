"use client"

import { ProjectIntakeFormData } from "../data"

interface AdditionalInfoStepProps {
    formData: ProjectIntakeFormData
    updateFormData: (data: Partial<ProjectIntakeFormData>) => void
}

export function AdditionalInfoStep({ formData, updateFormData }: AdditionalInfoStepProps) {
    return (
        <div>
            <h3 className="mb-4">Additional Information</h3>
            <div className="mb-6">Help me understand your project better by providing some additional context. This information will help me prepare for our discussion.</div>

            <div className="space-y-6">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg">Current Challenges</legend>
                    <div className="mb-2 text-lg">What challenges or pain points are you currently facing that led you to seek help?</div>
                    <textarea
                        id="currentChallenges"
                        className="textarea w-full bg-base-200"
                        placeholder="Describe any challenges or problems you're trying to solve..."
                        value={formData.currentChallenges}
                        onChange={(e) => updateFormData({ currentChallenges: e.target.value })}
                        rows={4}
                    />
                </fieldset>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg">Project Goals</legend>
                    <div className="mb-2 text-lg">What specific outcomes or goals are you hoping to achieve with this project?</div>
                    <textarea
                        id="projectGoals"
                        className="textarea w-full bg-base-200"
                        placeholder="List your main goals and what success looks like for this project..."
                        value={formData.projectGoals}
                        onChange={(e) => updateFormData({ projectGoals: e.target.value })}
                        rows={4}
                    />
                </fieldset>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg">Anything Else?</legend>
                    <div className="mb-2 text-lg">Is there anything else you&apos;d like to share about your project?</div>
                    <textarea
                        id="additionalInfo"
                        className="textarea w-full bg-base-200"
                        placeholder="Any other details that might be helpful..."
                        value={formData.additionalInfo}
                        onChange={(e) => updateFormData({ additionalInfo: e.target.value })}
                        rows={4}
                    />  
                </fieldset>
            </div>
        </div>
    )
}

