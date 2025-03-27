import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faLightbulb, faMicrochip, faThoughtBubble } from "@awesome.me/kit-654a0ecbfd/icons/classic/solid"
import { PROJECT_TYPE_OPTIONS, ProjectIntakeFormData } from "../data";

interface ProjectTypeStepProps {
    formData: ProjectIntakeFormData
    updateFormData: (data: Partial<ProjectIntakeFormData>) => void
}

const ProjectTypeStep = ({ formData, updateFormData }: ProjectTypeStepProps) => {
    return (
        <>
            <h3 className="mb-4">Project Type</h3>
            <div className="mb-6">What type of project are you looking to work on?</div>

            <div className="space-y-6">
                <fieldset className="fieldset">
                    <div className="flex items-start space-x-4 border border-neutral/10 p-4 rounded-lg hover:bg-base-400 transition-colors">
                        <input type="radio" id="tech-expertise" name="projectType" value="tech-expertise" className="radio mt-2 flex-none bg-base-200" checked={formData.projectType.value === "tech-expertise"} onChange={(e) => updateFormData({ projectType: PROJECT_TYPE_OPTIONS.find(opt => opt.value === e.target.value) })} />
                        <div className="flex-grow">
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faCode} className="text-secondary" size="xl" fixedWidth />
                                <legend className="fieldset-legend text-lg pl-2">Tech Expertise</legend>
                            </div>
                            <p className="fieldset-label my-0 py-0">Web development, app solutions, and technical consutling to power your digital presence.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4 border border-neutral/10 p-4 rounded-lg hover:bg-base-400 transition-colors">
                        <input type="radio" id="innovation-modernization" name="projectType" value="innovation-modernization" className="radio mt-2 flex-none bg-base-200" checked={formData.projectType.value === "innovation-modernization"} onChange={(e) => updateFormData({ projectType: PROJECT_TYPE_OPTIONS.find(opt => opt.value === e.target.value) })} />
                        <div className="flex-grow">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faLightbulb} className="text-primary" size="xl" fixedWidth />
                                <legend className="fieldset-legend text-lg pl-2">Innovation & Modernization</legend>
                            </div>
                            <p className="fieldset-label my-0 py-0">Forward-thinking strategies and solutions that transform outdated systems and processes into modern, efficient operations.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4 border border-neutral/10 p-4 rounded-lg hover:bg-base-400 transition-colors">
                        <input type="radio" id="automation" name="projectType" value="automation" className="radio mt-2 flex-none bg-base-200" checked={formData.projectType.value === "automation"} onChange={(e) => updateFormData({ projectType: PROJECT_TYPE_OPTIONS.find(opt => opt.value === e.target.value) })} />
                        <div className="flex-grow">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faMicrochip} className="text-accent" size="xl" fixedWidth />
                                <legend className="fieldset-legend text-lg pl-2">Automation</legend>
                            </div>
                            <p className="fieldset-label my-0 py-0">Intelligent workflow solutions that reduce manual tasks, minimize errors, and increase operational efficiency.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4 border border-neutral/10 p-4 rounded-lg hover:bg-base-400 transition-colors">
                        <input type="radio" id="other" name="projectType" value="other" className="radio mt-2 flex-none bg-base-200" checked={formData.projectType.value === "other"} onChange={(e) => updateFormData({ projectType: PROJECT_TYPE_OPTIONS.find(opt => opt.value === e.target.value) })} />
                        <div className="flex-grow">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faThoughtBubble} className="text-success" size="xl" fixedWidth />
                                <legend className="fieldset-legend text-lg pl-2">Other</legend>
                            </div>
                            <p className="fieldset-label my-0 py-0">If your project type doesn&apos;t fit into the above categories, please provide a brief description of your project.</p>
                            <input type="text" id="otherDescription" className="input w-full mt-2 bg-base-200" placeholder="Briefly describe your project type" value={formData.projectTypeOther} onChange={(e) => updateFormData({ projectTypeOther: e.target.value })} />
                        </div>
                    </div>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg">How did you hear about me?</legend>
                    <input type="text" id="referral" className="input w-full bg-base-200" placeholder="Friend, colleague, social media, etc." value={formData.referralSource} onChange={(e) => updateFormData({ referralSource: e.target.value })} />
                </fieldset>
            </div>
        </>
    )
};

export default ProjectTypeStep;