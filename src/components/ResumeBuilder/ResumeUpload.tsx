import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { PDFDocument } from 'pdf-lib';
import mammoth from 'mammoth';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

interface ResumeUploadProps {
  onResumeData: (data: any) => void;
}

const ResumeUpload = ({ onResumeData }: ResumeUploadProps) => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = React.useState(false);

  const parseResume = async (file: File) => {
    setIsProcessing(true);
    try {
      let text = '';
      
      if (file.type === 'application/pdf') {
        const arrayBuffer = await file.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer);
        const pages = pdfDoc.getPages();
        // Since pdf-lib doesn't provide direct text extraction, we'll need to handle this differently
        // For now, we'll add a placeholder message
        text = "PDF text extraction requires additional processing. Please upload a DOCX or TXT file for better results.";
      } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        text = result.value;
      } else if (file.type === 'text/plain') {
        text = await file.text();
      }

      // Basic parsing example - in a real app, you'd want more sophisticated parsing
      const parsedData = {
        personalInfo: {
          firstName: text.split('\n')[0] || '',
          lastName: '',
          email: text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)?.[0] || '',
          phone: text.match(/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/)?.[0] || '',
          location: '',
          title: '',
          summary: text.substring(0, 500), // First 500 characters as summary
        },
        experience: [],
        education: [],
        skills: [],
        languages: []
      };

      onResumeData(parsedData);
      toast({
        title: "Resume uploaded successfully",
        description: "Your resume has been parsed and loaded into the builder.",
      });
    } catch (error) {
      console.error('Error parsing resume:', error);
      toast({
        title: "Error processing resume",
        description: "There was an error processing your resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      await parseResume(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt']
    },
    multiple: false
  });

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-resume-accent bg-resume-light' : 'border-gray-300 hover:border-resume-accent'}`}
      >
        <input {...getInputProps()} />
        {isProcessing ? (
          <div className="flex flex-col items-center space-y-4">
            <Loader2 className="h-8 w-8 animate-spin text-resume-accent" />
            <p>Processing your resume...</p>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-lg">
              {isDragActive
                ? "Drop your resume here"
                : "Drag and drop your resume here, or click to select"}
            </p>
            <p className="text-sm text-gray-500">
              Supported formats: PDF, DOCX, TXT
            </p>
            <Button variant="outline" type="button">
              Select File
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeUpload;