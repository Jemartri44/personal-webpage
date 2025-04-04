import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/utils/client-translation";

export interface EducationEntry {
  titleKey: string;          // Degree/program name
  institutionKey: string;    // Name of institution
  logo: string;           // Path to the logo image
  dateKey: string;           // Date or date range
  link?: string;          // Optional link to institution website
  descriptionKey?: string;   // Optional description
}

interface EducationCardProps {
  educations: EducationEntry[];
}

export default function EducationCard({ educations }: EducationCardProps) {
  const { t } = useTranslation();
  
  return (
    <div className="mx-auto grid gap-4 w-full">
      {educations.map((education, id) => (
        <div 
          key={id} 
          className="relative rounded-lg border bg-background p-4 hover:bg-accent/50 transition-colors"
        >
          <div className="flex items-center gap-6">
            {/* Logo on the left */}
            <div className="flex-shrink-0">
              <div className="relative h-28 w-28 overflow-hidden rounded-md">
                <Image 
                  src={education.logo}
                  alt={education.institutionKey}
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
            
            {/* Content on the right */}
            <div className="flex flex-col gap-1">
              {/* Title - most prominent */}
              <h3 className="font-bold text-lg md:text-xl">
                {education.link ? (
                  <Link href={education.link} target="_blank" className="hover:underline">
                    {t(education.titleKey as any)}
                  </Link>
                ) : (
                  t(education.titleKey as any)
                )}
              </h3>
              
              {/* Institution name */}
              <p className="text-foreground/80">
                {t(education.institutionKey as any)}
              </p>
              
              {/* Date */}
              <p className="text-sm text-muted-foreground">
                {t(education.dateKey as any)}
              </p>
              
              {/* Optional description 
              {t(education.descriptionKey as any) && (
                <p className="text-sm text-muted-foreground mt-2">
                  {t(education.descriptionKey as any)}
                </p>
              )}*/}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}