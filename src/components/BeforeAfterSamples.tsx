import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { samples } from '@/data';
import { sampleTypes } from '@/types';


const BeforeAfterSamples: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id='before' className="py-20 relative overflow-hidden">
            {/* Background Decoration */}
            <motion.div
                className="absolute inset-0 -z-10 opacity-30"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(124,58,237,0.15) 2px, transparent 0)',
                    backgroundSize: '24px 24px',
                }}
                animate={{
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-2xl mx-auto px-4 mb-16 space-y-4"
            >
                <div className="flex items-center justify-center gap-2 text-primary">
                    <div className="h-px w-8 bg-primary/30" />
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-medium uppercase tracking-wider">Before & After</span>
                    <div className="h-px w-8 bg-primary/30" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    See the Magic in Action
                </h2>
                <p className="text-muted-foreground">
                    Experience the transformation power of our AI technology with these real-world examples
                </p>
            </motion.div>

            {/* Samples Grid */}
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    {samples.map((sample: sampleTypes, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="group"
                        >
                            <div className="relative rounded-xl overflow-hidden shadow-xl">
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 z-20">
                                    <div className="px-3 py-1 rounded-full text-xs font-medium bg-black/50 text-white backdrop-blur-sm">
                                        {sample.category}
                                    </div>
                                </div>

                                {/* Images */}
                                <motion.div
                                    className="relative aspect-square"
                                    onHoverStart={() => setHoveredIndex(index)}
                                    onHoverEnd={() => setHoveredIndex(null)}
                                >
                                    <img
                                        src={sample.after}
                                        alt="Edited"
                                        className="w-full h-full object-cover"
                                    />
                                    <motion.div
                                        className="absolute inset-0"
                                        animate={{
                                            opacity: hoveredIndex === index ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <img
                                            src={sample.before}
                                            alt="Original"
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>

                                    {/* Hover Instruction */}
                                    {/*        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                                        <motion.div
                                            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-black/50 text-white backdrop-blur-sm"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            <ArrowLeftRight className="w-4 h-4" />
                                            Hover to compare
                                        </motion.div>
                                    </div> */}

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </motion.div>
                            </div>

                            {/* Description */}
                            {/*    <motion.div
                                className="mt-4 text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h3 className="text-lg font-semibold text-foreground">
                                    {sample.description}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Powered by AI Enhancement
                                </p>
                            </motion.div> */}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BeforeAfterSamples;