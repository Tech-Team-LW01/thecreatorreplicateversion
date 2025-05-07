"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Loader2 } from "lucide-react";
import toast, { Toaster } from 'react-hot-toast';
import { Inter, Poppins } from 'next/font/google';

const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400']
});

import localFont from "next/font/local";
const khandFont = localFont({
    src: '../../../app/fonts/Khand-SemiBold.woff',
    weight: '100 900',
});

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  query: string;
  college: string;
  program: string; // New field for program selection
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  query?: string;
  college?: string;
  program?: string; // New field for program validation errors
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  query: "",
  college: "",
  program: "" // Default empty program
};

// Available program options
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

export default function Query() {
  const [isSwapped, setIsSwapped] = useState(false);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user makes a selection
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name as keyof FormErrors]: undefined
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
    
    // If there are errors, show the first one as a toast
    if (Object.keys(newErrors).length > 0) {
      const firstError = Object.values(newErrors)[0];
      toast.error(firstError || "Please fix the errors in the form");
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      // 1. Submit to email API endpoint
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
        // Log the error but don't fail the whole submission since email was sent
        console.error("Google Sheets submission failed:", sheetsError);
      }
      
      // Success handling
      toast.success("Query submitted successfully!");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      toast.error(`Failed to submit query: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSwap = () => {
    setIsSwapped(!isSwapped);
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="min-h-screen w-full bg-black p-4 sm:p-6 flex flex-col items-center justify-center" id="query">
      <h1 className={`text-3xl md:text-4xl font-bold text-[#ff0000] mb-2 text-center ${khandFont.className}`}>
        Lets Talk
      </h1>

      <h1 className={`text-lg md:text-3xl text-white mb-4 sm:mb-8 text-center px-4 ${poppins.className}`}>
        Our Summer Executive will connect in next 24 hours
      </h1>

      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={isSignInForm ? "form" : "welcome"}
              initial={{ opacity: 0, x: isSignInForm ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isSignInForm ? 100 : -100 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Form Section */}
                <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-16">
                  <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <Input 
                        type="text" 
                        name="fullName"
                        placeholder="Full Name" 
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`bg-gray-50 ${errors.fullName ? 'border-red-500' : ''}`}
                        disabled={loading}
                      />
                      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>
                    
                    <div>
                      <Input 
                        type="email" 
                        name="email"
                        placeholder="Email" 
                        value={formData.email}
                        onChange={handleChange}
                        className={`bg-gray-50 ${errors.email ? 'border-red-500' : ''}`}
                        disabled={loading}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <Input 
                        type="tel" 
                        name="phone"
                        placeholder="Phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className={`bg-gray-50 ${errors.phone ? 'border-red-500' : ''}`}
                        disabled={loading}
                        maxLength={10}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    
                    <div>
                      <Input 
                        type="text" 
                        name="college"
                        placeholder="College Name" 
                        value={formData.college}
                        onChange={handleChange}
                        className={`bg-gray-50 ${errors.college ? 'border-red-500' : ''}`}
                        disabled={loading}
                      />
                      {errors.college && <p className="text-red-500 text-sm mt-1">{errors.college}</p>}
                    </div>
                    
                    {/* New Program Selection Dropdown */}
                    <div>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 bg-gray-50 border rounded-md ${
                          errors.program ? 'border-red-500' : 'border-gray-300'
                        }`}
                        disabled={loading}
                      >
                        <option value="">Select Training Program</option>
                        {programOptions.map((program, index) => (
                          <option key={index} value={program}>
                            {program}
                          </option>
                        ))}
                      </select>
                      {errors.program && <p className="text-red-500 text-sm mt-1">{errors.program}</p>}
                    </div>
                    
                    <div>
                      <textarea 
                        name="query"
                        placeholder="Query" 
                        value={formData.query}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 bg-gray-50 border rounded-md ${
                          errors.query ? 'border-red-500' : 'border-gray-300'
                        }`}
                        disabled={loading}
                        rows={4}
                      />
                      {errors.query && <p className="text-red-500 text-sm mt-1">{errors.query}</p>}
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-[#ff0000] hover:bg-[#6f6f6f] text-white"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Submit'
                      )}
                    </Button>
                  </form>
                </div>

                {/* Welcome Panel */}
                <div 
                  className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat min-h-[400px]"
                  style={{
                    backgroundImage: "url('/assets/Projects/form.jpg')"
                  }}
                >
                  <div className="text-center">
                    <h2 className={`text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white ${khandFont.className}`}>
                      Hello, Friend!
                    </h2>
                    <p className={`mb-6 sm:mb-8 text-base sm:text-lg text-white ${poppins.className}`}>
                      {isSignInForm 
                        ? "I am looking for Offline Summer Industrial Training where I can meet Engineering students from across India & work together as a team 😊" 
                        : "I know I will miss all the Offline Benefits of Summer Program & attend JAZBAA but still want to attend Online Training 😔"}
                    </p>
                    <Button
                      variant="outline"
                      className="border-2 border-white bg-[#ff0000] text-white hover:bg-white/10 text-sm sm:text-base"
                      onClick={handleSwap}
                    >
                      {isSignInForm 
                        ? "No, I am looking for Online Summer Program" 
                        : "No, I think I should attend Offline Summer Program"}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}