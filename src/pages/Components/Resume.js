import { useState } from 'react';

export default function ResumeSection () {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <div 
        className="resume m-4 bg-[#f5f5dc] p-4 sm:p-6 rounded-3xl hover:bg-[#e8e8d0] transition-colors cursor-pointer"
        onClick={() => setIsResumeOpen(true)}
      >
        <h3 className="font-bold text-lg font-serif sm:text-xl lg:text-[2em] hover:underline text-center sm:text-left">
          Click here to see my resume
        </h3>
      </div>

      {isResumeOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold">My Resume</h3>
              <button 
                onClick={() => setIsResumeOpen(false)}
                className="text-3xl hover:text-gray-600 transition-colors"
                aria-label="Close resume"
              >
                &times;
              </button>
            </div>
            
            <div className="flex-1">
              <iframe 
                src="/MuhammadAliAthar.pdf" 
                className="w-full h-full min-h-[70vh] border-none"
                title="My Resume PDF"
              />
            </div>
            
            <div className="p-4 border-t flex justify-center">
              <a 
                href="/MuhammadAliAthar.pdf" 
                download="Muhammad_Ali_Athar_Resume.pdf"
                className="bg-[#b88351] text-white px-6 py-3 rounded-lg hover:bg-[#a57647] transition-colors font-medium"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
