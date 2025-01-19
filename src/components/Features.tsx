import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Eraser, Crop, Proportions } from 'lucide-react';

const features = [
    {
        title: "Background Removal",
        description: "Effortlessly remove image backgrounds with precision, perfect for web and product visuals.",
        icon: <Eraser className="w-8 h-8" />,
        glowColor: "group-hover:shadow-violet-500/20",
        iconColor: "text-violet-500",
        borderColor: "group-hover:border-violet-500/20"
    },
    {
        title: "Crop & Resize",
        description: "Easily crop and resize images for the perfect fit on your website or social media.",
        icon: <Crop className="w-8 h-8" />,
        glowColor: "group-hover:shadow-blue-500/20",
        iconColor: "text-blue-500",
        borderColor: "group-hover:border-blue-500/20"
    },
    {
        title: "Color Adjustments",
        description: "Enhance image brightness, contrast, and colors to make visuals stand out.",
        icon: <Proportions className="w-8 h-8" />,
        glowColor: "group-hover:shadow-indigo-500/20",
        iconColor: "text-indigo-500",
        borderColor: "group-hover:border-indigo-500/20"
    }
];

const MotionCard = motion(Card);

const Features: React.FC = () => {
    return (
        <motion.div
            className="grid md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {features.map((feature, index) => (
                <MotionCard
                    key={feature.title}
                    className={cn(
                        "group relative overflow-hidden",
                        "bg-white/[0.05] dark:bg-white/[0.02]", // Very subtle base color
                        "backdrop-blur-[12px]", // Strong blur effect
                        "border border-white/[0.05] dark:border-white/[0.02]", // Subtle border
                        "shadow-[0_8px_32px_0_rgba(0,0,0,0.06)]", // Subtle shadow
                        feature.borderColor,
                        feature.glowColor,
                        "transition-all duration-500 ease-out",
                    )}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: index * 0.2,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100
                    }}
                    whileHover={{
                        y: -5,
                        transition: { duration: 0.3 }
                    }}
                >
                    {/* Glass reflection effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={false}
                        animate={{
                            backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />

                    <CardContent className="p-6 relative">
                        <motion.div
                            className={cn(
                                "mb-6 w-14 h-14 rounded-lg flex items-center justify-center",
                                "bg-white/[0.08] dark:bg-white/[0.03]",
                                "backdrop-blur-md",
                                "border border-white/[0.08] dark:border-white/[0.03]",
                                "transition-all duration-500"
                            )}
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.div
                                className={feature.iconColor}
                                whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                                transition={{ duration: 0.4 }}
                            >
                                {feature.icon}
                            </motion.div>
                        </motion.div>

                        <motion.h3
                            className={cn(
                                "text-xl font-semibold mb-3",
                                "text-foreground/90 dark:text-foreground/80"
                            )}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.2 + 0.3 }}
                        >
                            {feature.title}
                        </motion.h3>

                        <motion.p
                            className="text-muted-foreground/90 dark:text-muted-foreground/70 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.2 + 0.4 }}
                        >
                            {feature.description}
                        </motion.p>
                    </CardContent>
                </MotionCard>
            ))}
        </motion.div>
    );
};


export default Features;