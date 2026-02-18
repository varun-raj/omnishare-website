import React from 'react';

interface ImagePlaceholderProps {
  width?: string;
  height?: string;
  text?: string;
  className?: string;
  src?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ 
  width = "w-full", 
  height = "h-64", 
  text = "App Interface Placeholder", 
  className = "",
  src
}) => {
  return (
    <div className={`relative overflow-hidden bg-zinc-100 rounded-xl border border-zinc-200 ${width} ${height} ${className} group`}>
      {src ? (
        <img 
            src={src} 
            alt={text} 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" 
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400 p-4 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium uppercase tracking-wider">{text}</span>
            <span className="text-xs mt-2 opacity-70">Replace with App Screenshot</span>
        </div>
      )}
    </div>
  );
};