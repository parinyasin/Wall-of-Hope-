import React from 'react';
import { SymbolItem } from '../types';

interface SymbolCardProps {
  item: SymbolItem;
}

export const SymbolCard: React.FC<SymbolCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-100 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
      <div className="h-48 overflow-hidden relative group">
        <img 
            src={item.imageUrl} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent"></div>
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm">
            {item.icon}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-amber-900 mb-3">{item.title}</h3>
        <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
};
