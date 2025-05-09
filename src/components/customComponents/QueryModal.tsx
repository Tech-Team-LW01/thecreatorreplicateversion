// components/customComponents/QueryModal.tsx
"use client"
import { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Loader2 } from "lucide-react";
import { Poppins, Khand } from 'next/font/google';

const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400']
});

const khand = Khand({
   subsets: ['latin'],
   weight: ['600']
});

interface QueryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  query: string;
  college: string;
  program: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  query?: string;
  college?: string;
  program?: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  query: "",
  college: "",
  program: ""
};

const programOptions = [
  "MACHINE LEARNING - AI",
  "AWS CLOUD COMPUTING",
  "PYTHON PROGRAMMING",
  "PYTHON FULL STACK WEB DEVELOPMENT",
  "MERN STACK DEVELOPMENT",
  "Salesforce Admin & Development",
  "Cybersecurity",
  "Embedded systems, IOT, and Robotics"
];

const QueryModal: React.FC<QueryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  
  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData(initialFormData);
      setErrors({});
    }
  }, [isOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    } else if (formData.fullName.length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    // College validation
    if (!formData.college.trim()) {
      newErrors.college = "Please enter your college name";
    }

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    
    // Program validation
    if (!formData.program) {
      newErrors.program = "Please select a training program";
    }

    // Query validation
    if (!formData.query.trim()) {
      newErrors.query = "Please enter your query";
    } else if (formData.query.length < 10) {
      newErrors.query = "Query must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }
    
    setLoading(true);
    
    try {
      // 1. Submit to your email API endpoint
      const emailResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const emailData = await emailResponse.json();
      
      if (!emailResponse.ok) {
        throw new Error(emailData.message || "Email submission failed");
      }
      
      // 2. Submit to Google Sheets
      try {
        const sheetsResponse = await fetch('/api/sheets', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (!sheetsResponse.ok) {
          console.warn("Google Sheets submission had issues, but email was sent");
        }
      } catch (sheetsError) {
        // Log the error but don't fail the entire submission
        console.error("Google Sheets submission failed:", sheetsError);
      }
      
      // Success if we reach here
      toast.success("Query submitted successfully!");
      setFormData(initialFormData);
      onClose();
      
    } catch (error) {
      toast.error("Failed to submit query");
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 modal-animation overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <Toaster position="top-center" />
      
      {/* Added pt-10 and pb-10 for top spacing, and max-h-[90vh] to ensure it doesn't get too tall */}
      <div className="bg-white rounded-lg max-w-4xl w-full relative overflow-auto my-8 mx-4 max-h-[90vh]">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-700 hover:text-gray-900 transition-colors z-10"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-4 sm:p-6">
            <h2 className={`text-2xl font-bold text-[#ff0000] mb-4 ${khand.className}`}>
              Let's Talk
            </h2>
            <p className={`text-gray-600 mb-6 ${poppins.className}`}>
              Our Summer Executive will connect in next 24 hours
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <InputField
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                error={errors.fullName}
                disabled={loading}
              />
              
              <InputField
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                error={errors.email}
                disabled={loading}
              />
              
              <InputField
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                error={errors.phone}
                disabled={loading}
                maxLength={10}
              />
              
              <InputField
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                placeholder="College Name"
                error={errors.college}
                disabled={loading}
              />
              
              {/* New Program Selection Field */}
              <SelectField
                name="program"
                value={formData.program}
                onChange={handleChange}
                options={programOptions}
                placeholder="Select Training Program"
                error={errors.program}
                disabled={loading}
              />
              
              <TextAreaField
                name="query"
                value={formData.query}
                onChange={handleChange}
                placeholder="Your Query"
                error={errors.query}
                disabled={loading}
              />
              
              <button
                type="submit"
                className={`w-full py-3 rounded transition-colors ${
                  loading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-[#ff0000] hover:bg-[#d90000]'
                } text-white font-medium`}
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </span>
                ) : 'Submit'}
              </button>
            </form>
          </div>

          {/* Info Panel */}
          <div 
            className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-white"
            style={{
              backgroundImage: "url('/assets/Projects/form.jpg')",
              minHeight: "300px"
            }}
          >
            <div className="text-center p-4 bg-black/30 rounded-lg backdrop-blur-sm">
              <h2 className={`text-3xl font-bold mb-4 ${khand.className}`}>
                Hello, Friend!
              </h2>
              <p className={`mb-6 ${poppins.className}`}>
                I am looking for Offline Summer Industrial Training where I can meet Engineering students from across India & work together as a team 😊
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Components remain the same
const InputField = ({ 
  type, 
  name, 
  value, 
  onChange, 
  placeholder, 
  error, 
  disabled = false,
  maxLength
}: {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  disabled?: boolean;
  maxLength?: number;
}) => (
  <div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      maxLength={maxLength}
      className={`w-full p-3 rounded bg-gray-50 border ${
        error ? 'border-red-500' : 'border-gray-300'
      } focus:outline-none focus:border-[#ff0000]`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const TextAreaField = ({ 
  name, 
  value, 
  onChange, 
  placeholder, 
  error,
  disabled = false 
}: {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  error?: string;
  disabled?: boolean;
}) => (
  <div>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      rows={4}
      className={`w-full p-3 rounded bg-gray-50 border ${
        error ? 'border-red-500' : 'border-gray-300'
      } focus:outline-none focus:border-[#ff0000]`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const SelectField = ({ 
  name, 
  value, 
  onChange, 
  options,
  placeholder, 
  error,
  disabled = false 
}: {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder: string;
  error?: string;
  disabled?: boolean;
}) => (
  <div>
    <select
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`w-full p-3 rounded bg-gray-50 border ${
        error ? 'border-red-500' : 'border-gray-300'
      } focus:outline-none focus:border-[#ff0000]`}
    >
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default QueryModal;