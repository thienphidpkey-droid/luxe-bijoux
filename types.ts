import React from 'react';

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  originalPrice: string;
  imageUrl: string;
  category: string;
}

export interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}