import { faQuestion } from "@awesome.me/kit-654a0ecbfd/icons/classic/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FAQProps {
    question: string;
    answer: string;
};

const FAQ = ({ question, answer }: FAQProps) => {
    return (
        <div className="card bg-white p-8">
            <div className="card-content text-lg">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-full text-white flex items-center justify-center">
                        <FontAwesomeIcon icon={faQuestion} fixedWidth />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-neutral-600 font-bold text-xl pb-2">
                            {question}
                        </div>
                        <div className="text-neutral">
                            {answer}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;