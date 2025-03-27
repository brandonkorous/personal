import { faQuoteLeft } from '@awesome.me/kit-654a0ecbfd/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface TestimonialProps {
    name: string;
    initials: string;
    position?: string;
    statement: string;
    color?: string;
}

const Testimonial = ({ name, initials, position, statement, color = "primary" } : TestimonialProps) => {
    return (
        <div className={`card card-border bg-base-100 p-8 border-${color}`}>
            <div className={`absolute -top-6 -left-6 w-12 h-12 bg-${color} rounded-full flex items-center justify-center`}>
                <FontAwesomeIcon icon={faQuoteLeft} size="lg" fixedWidth className="text-white" />
            </div>
            <div className="card-content text-lg">
                {statement}
            </div>
            <div className="card-icon pt-8">
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-info rounded-full flex items-center justify-center font-bold text-white">
                        {initials}
                    </div>
                    <div className="ml-4">
                        <div className="font-bold text-neutral-600">{name}</div>
                        <div className="text-neutral-600">
                            {position}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;