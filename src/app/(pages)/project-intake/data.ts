
export type ProjectIntakeFormData = {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    role: string;
    phone: string;

    projectType: "tech-expertise" | "innovation-modernization" | "automation" | "consulting" | "training" | "other" | "";
    projectTypeOther: string;
    projectDescription: string;
    timeline: "asap" | "1-3-months" | "3-6-months" | "6-plus-months" | "not-sure" | "";
    budget: "under-10k" | "10-50k" | "50-100k" | "100-500k" | "500k-plus" | "not-sure" | "";
    budgetNotSure: string;
    currentChallenges: string;
    projectGoals: string;
    additionalInfo: string;
    referralSource: string;
};
