import React from 'react';
import { ImageUploader } from './ImageUploader';
import { Sparkles } from 'lucide-react';

interface HeroProps {
    onImageSelect: (file: File) => void;
}

const Hero: React.FC<HeroProps> = ({ onImageSelect }) => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-violet-100 to-background pt-20 pb-32">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Sparkles className="h-8 w-8 text-violet-600" />
                        <h2 className="text-2xl font-bold text-violet-600">Zarascape</h2>
                    </div>
                    <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent sm:text-6xl">
                        Transform Your Images Magically
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground">
                        Experience the power of AI-driven image editing with Zarascape. Edit, enhance, and transform your photos with just a few clicks.
                    </p>
                    <div className="mt-10">
                        <ImageUploader onImageSelect={onImageSelect} />
                    </div>
                </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-violet-600 to-indigo-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
            </div>
        </div>
    );
};

export default Hero;