// Simple Card component for the demo
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
    return (
      <div className={`bg-white rounded-3xl shadow-lg ${className}`}>
        {children}
      </div>
    );
  };
  
  export default function AwardPreview() {
    return (
      <div className="w-full bg-black p-8 flex justify-center">
        <div className="w-full max-w-5xl mx-auto bg-black px-4 sm:px-12 py-4">
          <Card className="relative bg-white shadow-lg rounded-[40px] px-4 sm:px-8 md:px-12 py-6 md:py-8 overflow-visible">
            <div className="flex flex-col md:flex-row items-center h-full w-full">
              {/* Left Section with Logo - Reduced width */}
              <div className="flex justify-center items-center z-10 md:w-auto">
                <div className="relative w-16 h-16 md:w-20 md:h-20">
                  <img
                    src="/assets/Learn & Build Blue Logo-01 (1).png"
                    alt="Learn & Build Logo"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
  
              {/* Vertical Divider - only on desktop */}
              <div className="hidden md:block h-16 bg-red-500 w-[2px] mx-3"></div>
  
              {/* Center Section with Text - Adjusted width to leave space for image */}
              <div className="flex flex-col justify-center z-10 mt-4 md:mt-0 px-2 md:px-0 md:max-w-[60%]">
                <h2 className="text-black text-sm sm:text-xl md:text-xl lg:text-xl font-bold leading-tight text-center md:text-left">
                  Authorised Industrial Training & Internship <br className="hidden md:block" /> Partner with Rajasthan Technical University (RTU)
                </h2>
              </div>
  
              {/* Award Image Section - With absolute positioning */}
              <div className="absolute left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 right-4 md:right-4 md:-top-40 -top-10 z-30">
                {/* for desktop */}
                <div className="relative hidden md:block z-50 ">
                  <img
                    className='relative md:w-[350px] md:h-[400px] w-[300px] h-full object-contain z-50 transform md:translate-y-10 md:translate-x-5'
                    src='/assets/Award/award2.png'
                    alt="Award"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500 opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </Card>
        </div>
      </div>
    );
  }