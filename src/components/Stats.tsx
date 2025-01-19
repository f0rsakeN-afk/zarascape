import React from 'react';

const Stats: React.FC = () => {
    return (
        <div className="bg-primary/5 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {[
                        { number: '10M+', name: 'Photos Edited' },
                        { number: '500K+', name: 'Happy Users' },
                        { number: '99.9%', name: 'Satisfaction Rate' },
                    ].map((stat) => (
                        <div key={stat.name} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-muted-foreground">{stat.name}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-primary sm:text-5xl">
                                {stat.number}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
};

export default Stats;