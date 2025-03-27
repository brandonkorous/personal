"use client"

import { ProjectIntakeFormData } from "../data";

interface BasicInfoStepProps {
    formData: ProjectIntakeFormData
    updateFormData: (data: Partial<ProjectIntakeFormData>) => void
}

const BasicInfoStep = ({ formData, updateFormData }: BasicInfoStepProps) => {
    return (
        <>
            <h3 className="mb-4">
                Basic Information
            </h3>
            <div className="mb-6">Let&apos;s start with some basic information about you and your company.</div>

            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg">First Name<span className="text-error">*</span></legend>
                        <input id="firstName" type="text" className="input w-full bg-base-200" placeholder="John" value={formData.firstName} onChange={(e) => updateFormData({firstName: e.target.value})} required />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg">Last Name<span className="text-error">*</span></legend>
                        <input id="lastName" type="text" className="input w-full bg-base-200" placeholder="Doe" value={formData.lastName} onChange={(e) => updateFormData({lastName: e.target.value})} required />
                    </fieldset>
                </div>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg">Email Address<span className="text-error">*</span></legend>
                    <input id="email" type="email" className="input w-full bg-base-200" placeholder="you@example.com" value={formData.email} onChange={(e) => updateFormData({email: e.target.value})} required />
                </fieldset>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg">Company/Organization</legend>
                    <input id="company" type="text" className="input w-full bg-base-200" placeholder="Acme Inc." value={formData.company} onChange={(e) => updateFormData({company: e.target.value})} />
                </fieldset>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg">Your Role</legend>
                    <input id="role" type="text" className="input w-full bg-base-200" placeholder="CEO, Marketing Director, etc." value={formData.role} onChange={(e) => updateFormData({role: e.target.value})} />
                </fieldset>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-lg">Phone Number</legend>
                    <input id="phone" type="tel" className="input w-full bg-base-200" placeholder="(123) 456-7890" value={formData.phone} onChange={(e) => updateFormData({phone: e.target.value})} />
                </fieldset>
            </div>
        </>
    )
};

export default BasicInfoStep;