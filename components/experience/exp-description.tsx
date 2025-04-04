"use client";

import React from "react";

import { useTranslation } from "@/utils/client-translation";

const ExperienceDescription: React.FC<{
  paragraphs: string[];
  bullets: string[];
}> = ({ paragraphs, bullets }) => {
  const { t } = useTranslation();
  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p className="mb-4" key={index}>
          {t(paragraph as keyof typeof t)}
        </p>
      ))}
      <ul className="list-disc pl-6 mt-4">
        {bullets.map((bullet, index) => (
          <li key={index}>{t(bullet as keyof typeof t)}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceDescription;
