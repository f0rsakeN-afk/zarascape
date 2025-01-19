import { Sparkles, Layers, Wand2 } from 'lucide-react';
import { featureTypes, sampleTypes } from '@/types';
import s1 from '../assets/s1.png'
import s3 from '../assets/s3.png'
import s2 from '../assets/s2.png'
import s4 from '../assets/s4.png'
import s5 from '../assets/s5.png'
import s6 from '../assets/s6.png'

export const features: featureTypes[] = [
  {
    title: "AI Background Removal",
    description: "Remove backgrounds instantly with precision using our advanced AI technology.",
    icon: <Layers className="w-5 h-5" />,
    gradient: "from-blue-500/20 to-violet-500/20 hover:from-blue-500/30 hover:to-violet-500/30",
    shadowColor: "shadow-blue-500/10",
    iconColor: "text-blue-500"
  },
  {
    title: "Smart Color Enhancement",
    description: "Automatically enhance colors and lighting for professional-grade results.",
    icon: <Wand2 className="w-5 h-5" />,
    gradient: "from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30",
    shadowColor: "shadow-purple-500/10",
    iconColor: "text-purple-500"
  },
  {
    title: "Advanced Retouching",
    description: "Perfect your portraits with AI-powered skin smoothing and enhancement.",
    icon: <Sparkles className="w-5 h-5" />,
    gradient: "from-orange-500/20 to-teal-500/20 hover:from-emerald-500/30 hover:to-teal-500/30",
    shadowColor: "shadow-emerald-500/10",
    iconColor: "text-emerald-500"
  }
];

export const samples: sampleTypes[] = [
  {
    before: s1,
    after: s2,
    description: "Portrait Enhancement",
    category: "Portrait"
  },
  {
    before: s4,
    after: s3,
    description: "Product Photography",
    category: "Product"
  },
  {
    before: s5,
    after: s6,
    description: "Landscape Enhancement",
    category: "Landscape"
  }
];