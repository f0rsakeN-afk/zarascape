import React from 'react';
import { Card } from './ui/card';
import { motion } from 'motion/react';
import { features } from '@/data';
import { ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
    return (
        <section className="pb-4">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16 space-y-4"
            >
                <div className="flex items-center justify-center gap-2 text-primary">
                    <div className="h-px w-8 bg-primary/30" />
                    <span className="text-sm font-medium uppercase tracking-wider">Features</span>
                    <div className="h-px w-8 bg-primary/30" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Powerful AI Tools for
                    <span className="block mt-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Perfect Results
                    </span>
                </h2>
            </motion.div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.2
                        }}
                    >
                        <Card className={`relative h-full p-6 overflow-hidden transition-all duration-300 
                            hover:translate-y-[-2px] bg-gradient-to-br ${feature.gradient} 
                            border border-border/50 backdrop-blur-sm ${feature.shadowColor}`}
                        >
                            {/* Icon */}
                            <div className="mb-6 flex items-center gap-4">
                                <div className={`p-2.5 rounded-xl bg-card ${feature.iconColor}`}>
                                    {feature.icon}
                                </div>
                                <div className="h-px flex-1 bg-border/50" />
                            </div>

                            {/* Content */}
                            <div className="space-y-3">
                                <h3 className="text-xl font-semibold text-foreground">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Learn More Link */}
                            <div className="mt-6 flex items-center text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group cursor-pointer">
                                Learn more
                                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-background/10 to-transparent rounded-full blur-2xl" />
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;