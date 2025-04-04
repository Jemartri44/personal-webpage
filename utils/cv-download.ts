import { useLanguage } from "@/contexts/language-context";

export function useDownloadCV() {
  const { language } = useLanguage();
  
  return () => {
    // Get the filename based on current language
    const filename = language === 'es' ? 'cv-es.pdf' : 'cv-en.pdf';
    const fileUrl = `/cv/${filename}`;
    
    // Create a temporary link element to trigger the download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', filename);
    link.setAttribute('target', '_blank'); // Fallback for some browsers
    
    // Simulate click to trigger download
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    document.body.removeChild(link);
  };
}