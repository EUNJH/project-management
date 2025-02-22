import AuthModal from "@/components/Auth/AuthModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  const handleLoginSuccess = () => {
    closeLoginModal();
    navigate("/projects/dashboard");
  };

  const handleSignupSuccess = () => {
    closeSignupModal();
  };

  const moveSignup = () => {
    closeLoginModal();
    openSignupModal();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col overflow-hidden relative">
      {/* 애니메이션 배경 - div 요소 사용 */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* 블러 처리된 푸른색 원형 배경들 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 filter blur-[60px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/10 filter blur-[60px] animate-float animation-delay-2000"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full bg-indigo-600/10 filter blur-[50px] animate-float animation-delay-4000"></div>

        {/* 추가 배경 요소들 */}
        <div className="absolute top-10 right-1/4 w-72 h-72 rounded-full bg-blue-700/5 filter blur-[70px] animate-float animation-delay-1000"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-blue-400/10 filter blur-[50px] animate-float animation-delay-3000"></div>
        <div className="absolute top-1/3 right-10 w-48 h-48 rounded-full bg-cyan-500/10 filter blur-[40px] animate-float animation-delay-5000"></div>
      </div>
      {/* 헤더 네비게이션 */}
      <header className="py-6 px-6 md:px-12 lg:px-16 flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-2">
          <svg
            className="w-8 h-8 text-blue-600"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xl font-medium text-slate-900">ProjectPro</span>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Features
          </a>
          <a
            href="#"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Templates
          </a>
          <a
            href="#"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Resources
          </a>
          <a
            href="#"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Pricing
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={openLoginModal}
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Login
          </button>
          <Button
            onClick={openSignupModal}
            // className="px-4 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors"
            className="w-full font-medium rounded-full"
          >
            Sign up
          </Button>
        </div>
      </header>
      {/* 히어로 섹션 */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
        {/* 히어로 콘텐츠 */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Manage projects
            <br />
            with ProjectPro
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            The project management tool designed for teams
            <br />
            that want to get things done.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={openLoginModal}
              className="rounded-full text-lg"
            >
              Start for free
            </Button>
          </div>
        </div>
      </section>
      // TODO: 컴포넌트 1개로 변경
      <AuthModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        onSuccess={handleLoginSuccess}
        moveSignup={moveSignup}
        type="login"
      />
      <AuthModal
        isOpen={isSignupModalOpen}
        onClose={closeSignupModal}
        onSuccess={handleSignupSuccess}
        moveSignup={() => {}}
        type="signup"
      />
    </div>
  );
}
