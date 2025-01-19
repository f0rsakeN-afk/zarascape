import React from 'react';
import { ImageUploader } from './ImageUploader';
import { Sparkles, Wand2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface HeroProps {
    onImageSelect: (file: File) => void;
}

const Hero: React.FC<HeroProps> = ({ onImageSelect }) => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="relative overflow-hidden bg-dot-pattern">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

            {/* Animated Gradient Blob */}
            <motion.div
                className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(99,102,241,0) 70%)",
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4">
                <div className="text-center space-y-8 max-w-4xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                            AI-Powered Image Enhancement
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="text-4xl md:text-6xl font-bold tracking-tight text-foreground"
                    >
                        Transform Your Images with
                        <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Professional AI Magic
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground"
                    >
                        Elevate your photos instantly with our advanced AI technology.
                        Perfect for professionals and creators who demand excellence.
                    </motion.p>

                    {/* Call to Action */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center gap-6"
                    >
                        <div className="w-full max-w-md">
                            <ImageUploader onImageSelect={onImageSelect} />
                        </div>

                        <div className="flex items-center gap-4">
                            <Button variant="outline" className="group">
                                View Examples
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>

                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                            <Wand2 className="w-4 h-4" />
                            <span>Trusted by 10,000+ creators worldwide</span>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Preview Cards/Screenshots could go here */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-20"
                >
                    {/* Add preview images or feature highlights here */}
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
                className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            />
        </div>
    );
};

export default Hero;