
export type ProjectIntakeFormData = {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    role: string;
    phone: string;

    projectType: ProjectTypeOption;
    projectTypeOther: string;
    projectDescription: string;
    timeline: TimelineOption;
    budget: BudgetOption;
    budgetNotSure: string;
    currentChallenges: string;
    projectGoals: string;
    additionalInfo: string;
    referralSource: string;
};

export type ProjectTypeOption = {
    id: string;
    value: string;
    label: string;
};

export const PROJECT_TYPE_OPTIONS: ProjectTypeOption[] = [
    { id: "project-tech-expertise", value: "tech-expertise", label: "Tech Expertise" },
    { id: "project-innovation-modernization", value: "innovation-modernization", label: "Innovation & Modernization" },
    { id: "project-automation", value: "automation", label: "Automation" },
    { id: "project-consulting", value: "consulting", label: "Consulting" },
    { id: "project-training", value: "training", label: "Training" },
    { id: "project-other", value: "other", label: "Other" },
];

export type TimelineOption = {
    id: string;
    value: string;
    label: string;
};

export const TIMELINE_OPTIONS: TimelineOption[] = [
    { id: "timeline-asap", value: "asap", label: "As soon as possible" },
    { id: "timeline-3months", value: "1-3-months", label: "1-3 months" },
    { id: "timeline-6months", value: "3-6-months", label: "3-6 months" },
    { id: "timeline-1year", value: "6-plus-months", label: "6+ months" },
    { id: "timeline-unsure", value: "not-sure", label: "Not sure yet" },
];

export type BudgetOption = {
    id: string;
    value: string;
    label: string;
};

export const BUDGET_OPTIONS: BudgetOption[] = [
    { id: "budget-5k", value: "under-10k", label: "Under $5,000" },
    { id: "budget-5k-10k", value: "10-50k", label: "$5,000 - $10,000" },
    { id: "budget-10k", value: "50-100k", label: "$10,000 - $25,000" },
    { id: "budget-25k", value: "100-500k", label: "$25,000 - $50,000" },
    { id: "budget-50k", value: "500k-plus", label: "$50,000+" },
    { id: "budget-unsure", value: "not-sure", label: "Not sure yet" },
];