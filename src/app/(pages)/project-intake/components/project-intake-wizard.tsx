"use client";

import { useState } from "react";
import BasicInfoStep from "./basic-info-step";
import ProjectTypeStep from "./project-type-step";
import ProjectDetailsStep from "./project-details-step";
import { AdditionalInfoStep } from "./additional-info-step";
import { SuccessStep } from "./success-step";
import ReviewStep from "./review-step";
import { submitProjectIntake } from "../api";
import { ProjectIntakeFormData, BudgetOption, TimelineOption, ProjectTypeOption } from "../data";



const STEPS = ["Basic Information", "Project Type", "Project Details", "Additional Information", "Review & Submit"];

const ProjectIntakeWizard = () => {
    const [step, setStep] = useState(0);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState<ProjectIntakeFormData>({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        role: "",
        phone: "",
        projectType: {} as ProjectTypeOption,
        projectTypeOther: "",
        projectDescription: "",
        timeline: {} as TimelineOption,
        budget: {} as BudgetOption,
        budgetNotSure: "",
        currentChallenges: "",
        projectGoals: "",
        additionalInfo: "",
        referralSource: "",
    });

    const updateFormData = (data: Partial<ProjectIntakeFormData>) => {
        setFormData({ ...formData, ...data });
    };

    const renderStep = () => {
        if (isSuccess) {
            return (<SuccessStep formData={formData} />);
        };

        switch (step) {
            case 1:
                return (<ProjectTypeStep formData={formData} updateFormData={updateFormData} />);
            case 2:
                return (<ProjectDetailsStep formData={formData} updateFormData={updateFormData} />);
            case 3:
                return (<AdditionalInfoStep formData={formData} updateFormData={updateFormData} />);
            case 4:
                return (<ReviewStep formData={formData} />);
            default:
                return (<BasicInfoStep formData={formData} updateFormData={updateFormData} />);
        }
    };

    const isStepValid = (() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        switch (step) {
            case 0:
                return formData.firstName.trim() !== "" && formData.lastName.trim() !== "" && formData.email.trim() !== "" && emailRegex.test(formData.email);
            case 1:
                return formData.projectType !== {} as ProjectTypeOption && (formData.projectType.value !== "other" || formData.projectTypeOther.trim() !== "");
            case 2:
                return formData.projectDescription && formData.timeline && formData.budget;
            case 3:
                return formData.currentChallenges && formData.projectGoals;
            default:
                return true;
        }
    });

    const handleSubmit = async () => {
        if(isSubmitting) return;

        try {
            setIsSubmitting(true);
            const result = await submitProjectIntake(formData);

            if (result?.success) {
                setIsSuccess(true);
            } else {
                alert(result?.message);
            }
        } catch (error) {
            console.error("Error submitting project intake:", error);
            alert("There was an error submitting your information.  Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="">
            <h1 className="text-center text-neutral">Project Intake Wizard</h1>
            <div className="text-neutral text-center text-2xl mb-6">Tell me about your project so we can start a meaningful conversation about your needs.</div>
            <div className="container mx-auto text-center">
                {!isSuccess && (
                    <div className="steps steps-vertical lg:steps-horizontal">
                        {STEPS.map((s, index) => (
                            <div key={index} className={`step ${index < step ? "step-success text-success" : ""} ${index === step ? "step-info text-info" : ""}`}>{s}</div>
                        ))}
                    </div>
                )}
            </div>
            <div className="card card-border border-neutral border-2 bg-white text-neutral max-w-4xl mx-auto p-6 shadow-lg my-16">
                {renderStep()}
                <div className="flex justify-between mt-6">
                    {(step > 0 && step < STEPS.length) && (
                        <button className="btn btn-primary btn-outline rounded-full" onClick={() => setStep(step - 1)}>Back</button>
                    )}
                    <div className="ml-auto">
                        {step < STEPS.length - 1 && (
                            <button className="btn btn-primary rounded-full" onClick={() => setStep(step + 1)} disabled={!isStepValid()}>Next</button>
                        )}
                        {step === STEPS.length - 1 && (
                            <button className="btn btn-primary rounded-full" onClick={() => {setStep(step+1); handleSubmit();}}>Submit</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectIntakeWizard;