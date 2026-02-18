'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@/components/icons/chevron-down';

const faqs = [
  {
    question: 'Which photo servers does OmniAlbum support?',
    answer:
      'OmniAlbum currently supports Immich, Nextcloud Photos, and PhotoPrism. You can connect multiple servers at once and browse them all from a single unified interface.',
  },
  {
    question: 'Do I need to self-host a server to use OmniAlbum?',
    answer:
      "No. If someone shares an album link with you from a supported server, you can open it directly in OmniAlbum. However, features like upload and sync require a server connection you have credentials for.",
  },
  {
    question: 'How much does OmniAlbum cost?',
    answer:
      'OmniAlbum is available for a one-time purchase of $8.99 with no subscriptions or hidden fees. You get the full app with all features included — background uploads, multiple server connections, advanced metadata views, and all future updates.',
  },
  {
    question: 'Does OmniAlbum store my photos on your servers?',
    answer:
      'Absolutely not. OmniAlbum connects directly to your self-hosted servers. Your photos never pass through our infrastructure. All data stays between your device and your server.',
  },
  {
    question: 'Can I upload photos from my iPhone to my server?',
    answer:
      'Yes. OmniAlbum supports background uploads with a persistent queue. You can select photos from your camera roll and upload them directly to any connected server, even when the app is in the background.',
  },
  {
    question: 'Does it work offline?',
    answer:
      'Yes. Albums and thumbnails are cached locally so you can browse your library without a connection. Uploads queue automatically and resume when connectivity returns.',
  },
  {
    question: 'Is an Android version available?',
    answer:
      'Not yet, but it\'s in development. You can join the waitlist on this page to get notified when the Android version launches on the Play Store.',
  },
];

const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-zinc-200 last:border-b-0">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-6 text-left bg-transparent border-0 cursor-pointer group"
    >
      <span className="text-lg font-semibold text-zinc-900 pr-8 group-hover:text-brand-600 transition-colors">
        {question}
      </span>
      <ChevronDownIcon
        size={20}
        className={`text-zinc-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
    <div
      className={`grid transition-all duration-300 ease-in-out ${
        isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
      }`}
    >
      <div className="overflow-hidden">
        <p className="text-zinc-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  </div>
);

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-900">
            Frequently asked questions.
          </h2>
          <p className="text-zinc-500 text-lg">
            Everything you need to know about OmniAlbum.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-zinc-200 px-8 divide-zinc-200">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
