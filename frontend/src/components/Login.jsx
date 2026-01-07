import React, { useState, useEffect } from 'react';
import { loginStyles } from '../assets/dummystyles';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Eye, EyeOff, Lock, Mail } from 'lucide-react';

const Login = () => {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState({ visible: false, message: '', type: '' });

    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('authToken');

    // Auto-hide toast
    useEffect(() => {
        if (toast.visible) {
            const timer = setTimeout(() => {
                setToast((prev) => ({ ...prev, visible: false }));
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [toast.visible]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            setToast({ visible: true, message: "All fields are required", type: 'error' });
            return;
        }

        setIsSubmitting(true);

        try {
            localStorage.setItem('authToken', 'demo-token');

            setToast({
                visible: true,
                message: "Login Successful",
                type: "success"
            });

            setTimeout(() => navigate('/'), 1500);
        } catch {
            setToast({
                visible: true,
                message: "Login Failed. Please try again.",
                type: "error"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSignOut = () => {
        localStorage.removeItem('authToken');
        setToast({
            visible: true,
            message: "Signed Out Successfully",
            type: "success"
        });
        setTimeout(() => window.location.reload(), 1200);
    };

    return (
        <div className={loginStyles.container}>

            {/* Toast */}
            {toast.visible && (
                <div className={loginStyles.toast(toast.type)}>
                    {toast.message}
                </div>
            )}

            <div className={loginStyles.card}>

                {/* BACK BUTTON */}
                <Link to="/" className={loginStyles.backLink}>
                    <ArrowRight className="rotate-180 mr-1 h-4 w-4" />
                    Back to Home
                </Link>

                {/* ======================================================
                      SHOW SIGNED-IN UI IF LOGGED IN
                ====================================================== */}
                {isLoggedIn ? (
                    <div className={loginStyles.signedInContainer}>

                        <div className={loginStyles.signedInIcon}>
                            <Lock className="h-6 w-6 text-[#43C6AC]" />
                        </div>

                        <h2 className={loginStyles.signedInHeading}>
                            Welcome Back
                        </h2>

                        <button
                            onClick={() => navigate('/')}
                            className={loginStyles.homepageButton}
                        >
                            Go to Homepage
                        </button>

                        <button
                            className={loginStyles.signOutButton}
                            onClick={handleSignOut}
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <>
                        {/* ======================================================
                              LOGIN FORM WHEN NOT LOGGED IN
                        ====================================================== */}
                        <div className="text-center mb-8">
                            <div className={loginStyles.iconCircle}>
                                <Lock className="h-6 w-6 text-[#43C6AC]" />
                            </div>

                            <h1 className={loginStyles.heading}>Sign In</h1>
                            <p className={loginStyles.subheading}>Access your account</p>
                        </div>

                        <form className={loginStyles.form} onSubmit={handleSubmit}>

                            {/* EMAIL */}
                            <div>
                                <label className={loginStyles.label}>Email</label>

                                <div className={loginStyles.inputWrapper}>
                                    <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />

                                    <input
                                        type="email"
                                        autoComplete="email"
                                        placeholder="email@example.com"
                                        className={loginStyles.input}
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                    />
                                </div>
                            </div>

                            {/* PASSWORD */}
                            <div>
                                <label className={loginStyles.label}>Password</label>

                                <div className={loginStyles.inputWrapper}>
                                    <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />

                                    <input
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="current-password"
                                        placeholder="********"
                                        className={loginStyles.passwordInput}
                                        value={formData.password}
                                        onChange={(e) =>
                                            setFormData({ ...formData, password: e.target.value })
                                        }
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className={loginStyles.togglePassword}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5" />
                                        ) : (
                                            <Eye className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* LOGIN BUTTON */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={loginStyles.submitButton}
                            >
                                {isSubmitting ? "Signing in..." : "Sign In"}
                            </button>
                        </form>

                        {/* FOOTER LINK */}
                        <div className={loginStyles.footerText}>
                            Don't have an account?
                            <Link to="/signup" className={loginStyles.footerLink}> Create Account </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Login;
