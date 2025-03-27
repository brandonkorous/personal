import Link from "next/link";
import ProjectIntakeWizard from "./components/project-intake-wizard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMessage } from "@awesome.me/kit-654a0ecbfd/icons/classic/solid";

const ProjectIntake = () => {
    return (
        <div className="bg-white pt-16">
            <div className="">
                <ProjectIntakeWizard />
                <section className="bg-secondary py-16">
                    <div className="container max-w-6xl">
                        <div className="card bg-white border-4 border-primary shadow-xl">
                            <div className="card-body text-center">
                                <h2 className="font-coiny text-4xl text-neutral-500">Need Guidance?</h2>
                                <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
                                    Not sure where to start or what you need? Let&apos;s collaborate to uncover the best solutions for your goals and challenges.
                                </p>
                                <p className="font-bold text-neutral-500">Reach out to discuss your ideas or schedule a meeting to explore your options.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                                    <Link href="/contact" className="btn btn-primary btn-lg rounded-full">
                                        <FontAwesomeIcon icon={faMessage} />
                                        Contact Me
                                    </Link>
                                    <Link href="https://calendly.com/brandonkorous/30min" className="btn btn-secondary btn-lg btn-outline rounded-full" target="_blank">
                                        <FontAwesomeIcon icon={faCalendar} />
                                        Schedule a Meeting
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProjectIntake;