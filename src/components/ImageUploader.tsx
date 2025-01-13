import React, { useRef } from 'react';
import { Upload } from 'lucide-react';
import Loader from './Loader';
import { useImageProcessor } from '@/hooks/imageProcessor';
import { validateImageFile } from '../utils/imageUtils';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface ImageUploaderProps {
    onImageSelect: (file: File) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect }) => {
    const { processImage, isProcessing } = useImageProcessor();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        try {
            validateImageFile(file);
            await processImage(file);
            onImageSelect(file);
        } catch (error) {
            console.error('Error processing image:', error);
            alert(error instanceof Error ? error.message : 'Failed to process image');
        } finally {
            // Reset the input so the same file can be selected again
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="inline-block">
            {isProcessing ? (
                <Loader />
            ) : (
                <>
                    <Input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                    <Button onClick={handleButtonClick}>
                        <Upload className="w-5 h-5 mr-2" />
                        Select Image
                    </Button>
                </>
            )}
        </div>
    );
}
