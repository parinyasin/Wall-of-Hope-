import React, { useState } from 'react';
import { Copy, Check, Heart, Maximize2 } from 'lucide-react';
import { DonationInfo } from '../types';
import { ImagePreviewModal } from './ImagePreviewModal';

interface DonationCardProps {
  info: DonationInfo;
}

export const DonationCard: React.FC<DonationCardProps> = ({ info }) => {
  const [copied, setCopied] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(info.accountNumber.replace(/-/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
        <div className={`p-6 rounded-3xl border shadow-sm transition-all hover:shadow-md ${info.colorClass}`}>
        <div className="flex items-start gap-4 mb-4">
            {info.imageUrl && (
                <div 
                    className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white/60 shadow-sm shrink-0 bg-white cursor-pointer"
                    onClick={() => setIsPreviewOpen(true)}
                >
                    <img src={info.imageUrl} alt={info.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 drop-shadow-md transition-opacity" />
                    </div>
                </div>
            )}
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold mb-1 truncate pr-2 font-maitree">{info.name}</h3>
                {!info.imageUrl && (
                    <div className="p-2 bg-white/50 rounded-full shrink-0">
                        <Heart className="w-5 h-5 opacity-70 fill-current" />
                    </div>
                )}
                </div>
                <p className="text-sm opacity-80 leading-relaxed font-sarabun">{info.description}</p>
                {info.imageUrl && (
                    <p className="text-xs opacity-50 mt-1 sm:hidden">แตะที่รูปเพื่อดูภาพใหญ่/QR Code</p>
                )}
            </div>
        </div>
        
        <div className="bg-white/60 p-4 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
                <p className="text-xs font-semibold tracking-wider uppercase opacity-60 mb-1 font-sarabun">{info.bankName}</p>
                <p className="text-2xl sm:text-3xl font-mono font-bold tracking-tight text-stone-800">{info.accountNumber}</p>
            </div>
            <button 
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm hover:bg-gray-50 active:scale-95 transition-all text-sm font-semibold shrink-0"
            >
                {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                {copied ? 'คัดลอกแล้ว' : 'คัดลอกเลขบัญชี'}
            </button>
        </div>
        </div>

        {/* Full Screen Image Preview */}
        {info.imageUrl && (
            <ImagePreviewModal 
                isOpen={isPreviewOpen} 
                onClose={() => setIsPreviewOpen(false)} 
                imageUrl={info.imageUrl} 
                altText={info.name} 
            />
        )}
    </>
  );
};