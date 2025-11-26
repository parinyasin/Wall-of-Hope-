import React, { useEffect } from 'react';
import { X, Download } from 'lucide-react';

interface ImagePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  altText: string;
}

export const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({ isOpen, onClose, imageUrl, altText }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors z-50"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="relative w-full max-w-4xl max-h-screen p-4 flex flex-col items-center">
        <img 
          src={imageUrl} 
          alt={altText} 
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        
        <div className="mt-6 flex gap-4">
             <a 
                href={imageUrl} 
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-stone-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                onClick={(e) => e.stopPropagation()}
             >
                <Download className="w-5 h-5" />
                บันทึกรูปภาพ
             </a>
        </div>
      </div>
      
      {/* Backdrop click to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
};