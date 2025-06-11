'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Check, ArrowRight, Users, Code, Rocket } from 'lucide-react';

// Left Side Component - Visual/Branding
const LeftSide = () => {

    return (
        <div className="w-1/2 bg-gradient-to-br from-[#064369] via-[#05536c] to-[#007c7a] relative overflow-hidden">
      <div className="absolute inset-0 bg-black/5"></div>
      
      {/* Hero Image - Full Size */}
      <div className="relative z-10 h-full flex items-center justify-center p-4">
        <Image
          src="/dev2deploy.png"
          alt="Dev2Deploy - A development course by TechConMe"
          fill
          className="object-contain"
          priority
          sizes="50vw"
        />
      </div>
    </div>
    );
};

export default LeftSide;