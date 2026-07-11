'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMessages } from '@/lib/i18n/useMessages';

export interface NewsItem {
    date: string;
    content: string;
}

interface NewsProps {
    items: NewsItem[];
    title?: string;
}

export default function News({ items, title }: NewsProps) {
    const messages = useMessages();
    const resolvedTitle = title || messages.home.news;

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">{resolvedTitle}</h2>
            <div className="space-y-3">
                {items.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                        <span className="text-xs text-neutral-500 dark:text-white mt-1 w-20 flex-shrink-0">{item.date}</span>
                        <p className="text-sm text-neutral-700 dark:text-white">{item.content}</p>
                    </div>
                ))}
            </div>
            <div className="relative mt-10 h-80 overflow-hidden sm:h-[30rem]">
                <Image src="/about-background.jpg" alt="A stylized night landscape" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 66vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
            </div>
        </motion.section>
    );
}
