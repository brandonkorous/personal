'use client';

import { BUDGET_OPTIONS, ProjectIntakeFormData, TIMELINE_OPTIONS } from "../data";

interface ProjectDetailsStepProps {
    formData: ProjectIntakeFormData
    updateFormData: (data: Partial<ProjectIntakeFormData>) => void
}

const ProjectDetailsStep = ({ formData, updateFormData }: ProjectDetailsStepProps) => {
    return (
        <>
            <h3 className="mb-4">Project Details</h3>
            <div className="mb-6">Tell me more about your project requirements and timeline.</div>

            <div className="space-y-6">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg">Project Description<span className="text-error">*</span></legend>
                    <textarea id="projectDescription" className="textarea w-full bg-base-200" placeholder="Please describe your project, including your main objectives and any specific requirements." value={formData.projectDescription} onChange={(e) => updateFormData({ projectDescription: e.target.value })} rows={5} required />
                </fieldset>

                <legend className="fieldset-legend text-lg">Timeline</legend>
                <div className="mb-2">When would you like to start and complete this project?</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <fieldset className="fieldset">
                        <div className="flex align-middle items-center space-x-2 border-2 border-neutral/20 px-2 rounded-lg hover:bg-base-400">
                            <input type="radio" id="timeline-asap" name="timeline" value="asap" className="radio" checked={formData.timeline.value === "asap"} onChange={(e) => updateFormData({ timeline: TIMELINE_OPTIONS.find(opt => e.target.value === opt.value) })} />
                            <label htmlFor="timeline-asap" className="fieldset-legend text-lg mb-auto">As soon as possible</label>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <div className="flex align-middle items-center space-x-2 border-2 border-neutral/20 px-2 rounded-lg hover:bg-base-400">
                            <input type="radio" id="timeline-3months" name="timeline" value="1-3-months" className="radio" checked={formData.timeline.value === "1-3-months"} onChange={(e) => updateFormData({ timeline: TIMELINE_OPTIONS.find(opt => e.target.value === opt.value) })} />
                            <legend className="fieldset-legend text-lg mb-auto">1-3 months</legend>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <div className="flex align-middle items-center space-x-2 border-2 border-neutral/20 px-2 rounded-lg hover:bg-base-400">
                            <input type="radio" id="timeline-6months" name="timeline" value="3-6-months" className="radio" checked={formData.timeline.value === "3-6-months"} onChange={(e) => updateFormData({ timeline: TIMELINE_OPTIONS.find(opt => e.target.value === opt.value) })} />
                            <legend className="fieldset-legend text-lg mb-auto">3-6 months</legend>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <div className="flex align-middle items-center space-x-2 border-2 border-neutral/20 px-2 rounded-lg hover:bg-base-400">
                            <input type="radio" id="timeline-1year" name="timeline" value="6-plus-months" className="radio" checked={formData.timeline.value === "6-plus-months"} onChange={(e) => updateFormData({ timeline: TIMELINE_OPTIONS.find(opt => e.target.value === opt.value) })} />
                            <legend className="fieldset-legend text-lg mb-auto">6+ months</legend>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <div className="flex align-middle items-center space-x-2 border-2 border-neutral/20 px-2 rounded-lg hover:bg-base-400">
                            <input type="radio" id="timeline-unsure" name="timeline" value="not-sure" className="radio" checked={formData.timeline.value === "not-sure"} onChange={(e) => updateFormData({ timeline: TIMELINE_OPTIONS.find(opt => e.target.value === opt.value) })} />
                            <legend className="fieldset-legend text-lg mb-auto">Not sure yet</legend>
                        </div>
                    </fieldset>
                </div>

                <legend className="fieldset-legend text-lg">Budget Range</legend>
                <div className="mb-2">What is your estimated budget range for this project?</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <fieldset className="fieldset">
                        <div className="flex align-middle items-center space-x-2 border-2 border-neutral/20 px-2 rounded-lg hover:bg-base-400">
                            <input type="radio" id="budget-5k" name="budget" value="under-10k" className="radio" checked={formData.budget.value === "under-10k"} onChange={(e) => updateFormData({ budget: BUDGET_OPTIONS.find(opt => e.target.value === opt.value) })} />
                            <legend className="fieldset-legend text-lg mb-auto">Under $5,000</legend>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <div className="flex align-middle items-center space-x-2 border-2 border-neutral/20 px-2 rounded-lg hover:bg-base-400">
                            <input type="radio" id="budget-5k-10k" name="budget" value="10-50k" className="radio" checked={formData.budget.value === "10-50k"} onChange={(e) => updateFormData({ budget: BUDGET_OPTIONS.find(opt => e.target.value === opt.value) })} />
                            <legend className="fieldset-legend text-lg mb-auto">$5,000 - $10,000</legend>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <div className="flex align-middle items-center space-x-2 border-2 border-neutral/20 px-2 rounded-lg hover:bg-base-400">
                            <input type="radio" id="budget-10k" name="budget" value="50-100k" className="radio" checked={formData.budget.value === "50-100k"} onChange={(e) => updateFormData({ budget: BUDGET_OPTIONS.find(opt => e.target.value === opt.value) })} />
                            <legend className="fieldset-legend text-lg mb-auto">$10,000 - $25,000</legend>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <div className="flex align-middle items-center space-x-2 border-2 border-neutral/20 px-2 rounded-lg hover:bg-base-400">
                            <input type="radio" id="budget-25k" name="budget" value="100-500k" className="radio" checked={formData.budget.value === "100-500k"} onChange={(e) => updateFormData({ budget: BUDGET_OPTIONS.find(opt => e.target.value === opt.value) })} />
                            <legend className="fieldset-legend text-lg mb-auto">$25,000 - $50,000</legend>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <div className="flex align-middle items-center space-x-2 border-2 border-neutral/20 px-2 rounded-lg hover:bg-base-400">
                            <input type="radio" id="budget-50k" name="budget" value="500k-plus" className="radio" checked={formData.budget.value === "500k-plus"} onChange={(e) => updateFormData({ budget: BUDGET_OPTIONS.find(opt => e.target.value === opt.value) })} />
                            <legend className="fieldset-legend text-lg mb-auto">$50,000 - $100,000</legend>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <div className="flex align-middle items-center space-x-2 border-2 border-neutral/20 px-2 rounded-lg hover:bg-base-400">
                            <input type="radio" id="budget-unsure" name="budget" value="not-sure" className="radio" checked={formData.budget.value === "not-sure"} onChange={(e) => updateFormData({ budget: BUDGET_OPTIONS.find(opt => e.target.value === opt.value) })} />
                            <legend className="fieldset-legend text-lg mb-auto">Not sure yet</legend>
                        </div>
                    </fieldset>
                </div>
            </div>
        </>
    )
};

export default ProjectDetailsStep;