import React from 'react';

export interface SymbolItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon?: React.ReactNode;
}

export interface DonationInfo {
  id: string;
  name: string;
  bankName: string;
  accountNumber: string;
  description: string;
  colorClass: string;
  imageUrl?: string;
}