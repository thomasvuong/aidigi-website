'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTranslation, type Language } from '@/lib/i18n';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  language: Language;
  demoTitle: string;
}

type AuthMethod = 'password' | 'fingerprint' | 'face';

export function AuthModal({ isOpen, onClose, onSuccess, language, demoTitle }: AuthModalProps) {
  const t = useTranslation(language);
  const [authMethod, setAuthMethod] = useState<AuthMethod>('password');
  const [password, setPassword] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authError, setAuthError] = useState('');

  if (!isOpen) return null;

  const handlePasswordAuth = async () => {
    if (!password.trim()) {
      setAuthError(language === 'vi' ? 'Vui lòng nhập mật khẩu' : 'Please enter password');
      return;
    }

    setIsAuthenticating(true);
    setAuthError('');

    // Fixed password check
    try {
      let valid = password === 'orihara';
      if (!valid && typeof window !== 'undefined') {
        // Accept either localStorage temp code or a redeemed token "CODE.EXPIRY"
        const temp = localStorage.getItem('aidigi_temp_pass');
        const exp = Number(localStorage.getItem('aidigi_temp_exp') || 0);
        if (temp && Date.now() < exp && password === temp) {
          valid = true;
        } else if (password.includes('.')) {
          const [code, expStr] = password.split('.');
          const tokenExp = Number(expStr || 0);
          if (code && tokenExp && Date.now() < tokenExp) {
            // store locally for subsequent uses within expiry
            localStorage.setItem('aidigi_temp_pass', code);
            localStorage.setItem('aidigi_temp_exp', String(tokenExp));
            valid = true;
          }
        }
      }
      if (valid) {
        onSuccess();
      } else {
        setAuthError(language === 'vi' ? 'Mật khẩu không đúng' : 'Invalid password');
      }
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleBiometricAuth = async (method: 'fingerprint' | 'face') => {
    // Show admin-only notification for static export
    setAuthError(
      language === 'vi' 
        ? 'Tính năng sinh trắc học chỉ dành cho quản trị viên. Vui lòng sử dụng mật khẩu.'
        : 'Biometric features are admin-only. Please use password authentication.'
    );
    setIsAuthenticating(false);
  };

  const handleBiometricRegister = async () => {
    // Show admin-only notification for static export
    setAuthError(
      language === 'vi' 
        ? 'Tính năng sinh trắc học chỉ dành cho quản trị viên. Vui lòng sử dụng mật khẩu.'
        : 'Biometric features are admin-only. Please use password authentication.'
    );
    setIsAuthenticating(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-lg border border-gray-700 w-full max-w-md mx-4">
        {/* Header */}
        <div className="border-b border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">{t.demos.authRequired}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-gray-400 mt-2">{t.demos.authSubtitle}</p>
          <p className="text-blue-400 mt-1 font-medium">{demoTitle}</p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Auth Method Selector */}
          <div className="mb-6">
            <div className="grid grid-cols-3 gap-2 p-1 bg-gray-800 rounded-lg">
              <button
                onClick={() => setAuthMethod('password')}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  authMethod === 'password'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                🔑 {language === 'vi' ? 'Mật khẩu' : 'Password'}
              </button>
              <button
                onClick={() => setAuthMethod('fingerprint')}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  authMethod === 'fingerprint'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                👆 {language === 'vi' ? 'Vân tay' : 'Fingerprint'}
              </button>
              <button
                onClick={() => setAuthMethod('face')}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  authMethod === 'face'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                👤 {language === 'vi' ? 'Khuôn mặt' : 'Face'}
              </button>
            </div>
          </div>

          {/* Auth Content */}
          <div className="space-y-4">
            {authMethod === 'password' && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {language === 'vi' ? 'Mật khẩu' : 'Password'}
                </label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  placeholder={language === 'vi' ? 'Nhập mật khẩu của bạn' : 'Enter your password'}
                  className="bg-gray-800 border-gray-600 text-white"
                  onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handlePasswordAuth()}
                />
              </div>
            )}

            {authMethod === 'fingerprint' && (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <span className="text-4xl">👆</span>
                </div>
                <p className="text-gray-300">
                  {language === 'vi'
                    ? 'Đặt ngón tay của bạn lên cảm biến vân tay'
                    : 'Place your finger on the fingerprint sensor'
                  }
                </p>
                <div className="mt-4">
                  <Button onClick={handleBiometricRegister} className="bg-gray-800 mr-2">
                    {language === 'vi' ? 'Đăng ký vân tay' : 'Register fingerprint'}
                  </Button>
                </div>
              </div>
            )}

            {authMethod === 'face' && (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <span className="text-4xl">👤</span>
                </div>
                <p className="text-gray-300">
                  {language === 'vi'
                    ? 'Nhìn vào camera để xác thực khuôn mặt'
                    : 'Look at the camera for face authentication'
                  }
                </p>
                <div className="mt-4">
                  <Button onClick={handleBiometricRegister} className="bg-gray-800 mr-2">
                    {language === 'vi' ? 'Đăng ký khuôn mặt' : 'Register face'}
                  </Button>
                </div>
              </div>
            )}

            {/* Error Message */}
            {authError && (
              <div className="text-red-400 text-sm bg-red-900/20 border border-red-800 rounded p-3">
                {authError}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-3 pt-4">
              <Button
                variant="outline"
                onClick={() => {
                  try {
                    const params = new URLSearchParams();
                    const subject = language === 'vi' ? `Yêu cầu truy cập demo: ${demoTitle}` : `Request demo access: ${demoTitle}`;
                    const body = language === 'vi'
                      ? `Xin chào AIDIGI,\n\nTôi muốn yêu cầu quyền truy cập xem demo: ${demoTitle}.\n\nVui lòng liên hệ lại để sắp xếp thời gian trình bày.\n\nTrân trọng.`
                      : `Hello AIDIGI,\n\nI would like to request access to view the demo: ${demoTitle}.\n\nPlease contact me to arrange a walkthrough.\n\nBest regards.`;
                    params.set('subject', subject);
                    params.set('prefill', '1');
                    params.set('message', body);
                    if (typeof window !== 'undefined') {
                      window.location.hash = `contact?${params.toString()}`;
                      // try to smooth scroll to the Send Message section
                      const el = document.getElementById('send-message');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      } else {
                        // fallback to contact section if send-message not found
                        const contactEl = document.getElementById('contact');
                        if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }
                  } finally {
                    onClose();
                  }
                }}
                className="flex-1 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                disabled={isAuthenticating}
              >
                {language === 'vi' ? 'Yêu cầu Demo' : 'Request a Demo'}
              </Button>
              <Button
                onClick={() => {
                  if (authMethod === 'password') {
                    handlePasswordAuth();
                  } else {
                    handleBiometricAuth(authMethod);
                  }
                }}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
                disabled={isAuthenticating}
              >
                {isAuthenticating ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>{language === 'vi' ? 'Đang xác thực...' : 'Authenticating...'}</span>
                  </div>
                ) : (
                  language === 'vi' ? 'Xác thực' : 'Authenticate'
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
