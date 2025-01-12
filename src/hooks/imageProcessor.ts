import { useCallback, useState } from "react";

interface ImageProcessorTypes {
  processImage: (file: File) => Promise<void>;
  isProcessing: boolean;
}

export const useImageProcessor = (): ImageProcessorTypes => {
  const [isProcessing, setIsProcessing] = useState(false);

  const processImage = useCallback(async (file: File): Promise<void> => {
    setIsProcessing(true);
    try {
      const image = new Image();
      const imageUrl = URL.createObjectURL(file);

      await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = () =>
          reject(new Error("Failed to load image. Please try again!!"));
        image.src = imageUrl;
      });

      URL.revokeObjectURL(imageUrl);
    } finally {
      setIsProcessing(false);
    }
  }, []);
  return { processImage, isProcessing };
};
