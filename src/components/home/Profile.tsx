'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { SiteConfig } from '@/lib/config';

interface ProfileProps {
    author: SiteConfig['author'];
    social: SiteConfig['social'];
    features: SiteConfig['features'];
    researchInterests?: string[];
}

export default function Profile({ author, social }: ProfileProps) {
    return (
        <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sticky top-8"
        >
            <div className="w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                <Image
                    src={author.avatar}
                    alt={author.name}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover object-[32%_center]"
                    priority
                />
            </div>

            <div className="text-center mb-3">
                <h1 className="text-3xl font-serif font-bold text-primary dark:text-white mb-2">{author.name}</h1>
                <p className="text-lg text-primary dark:text-white font-medium mb-1">{author.title}</p>
                <p className="text-neutral-700 dark:text-white">{author.institution}</p>
            </div>

            <div className="space-y-1 text-center text-sm">
                {social.email && <p className="text-neutral-700 dark:text-white">{social.email}</p>}
                {social.google_scholar && (
                    <p><a href={social.google_scholar} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Scholar</a></p>
                )}
                {social.cv && (
                    <p><a href={social.cv as string} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">CV</a></p>
                )}
            </div>
        </motion.aside>
    );
}
