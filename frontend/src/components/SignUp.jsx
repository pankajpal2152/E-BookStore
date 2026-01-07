import React, { useEffect, useState } from "react";
import { Signup } from "../assets/dummystyles";
import { Link, useNavigate } from "react-router-dom";

// Icons
import { ArrowLeft, User, Mail, Eye, EyeOff } from "lucide-react";

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [toast, setToast] = useState({
        visible: false,
        message: "",
        type: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (toast.visible) {
            const timer = setTimeout(() => {
                setToast({ visible: false, message: "", type: "" });

                if (toast.type === "success") navigate("/login");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [toast, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const { username, email, password } = formData;

        if (!username.trim() || !email.trim() || !password.trim()) {
            setToast({
                visible: true,
                message: "All fields are required.",
                type: "error",
            });
            return;
        }

        setToast({
            visible: true,
            message: "Creating Account...",
            type: "info",
        });

        setTimeout(() => {
            setToast({
                visible: true,
                message: "Account created successfully!",
                type: "success",
            });
        }, 1500);
    };

    return (
        <div className={Signup.container}>

            {/* TOAST */}
            {toast.visible && (
                <div
                    className={`${Signup.toastBase} ${toast.type === "success"
                        ? Signup.toastSuccess
                        : Signup.toastError
                        }`}
                >
                    {toast.message}
                </div>
            )}

            <div className={Signup.card}>

                {/* BACK LINK */}
                <Link to="/" className={Signup.backLink}>
                    <ArrowLeft className="mr-1 h-4 w-4" />
                    Back to Home
                </Link>

                {/* HEADER */}
                <div className="text-center mb-8">
                    <div className={Signup.iconContainer}>
                        <User className="h-6 w-6 text-[#43C6AC]" />
                    </div>

                    <h1 className={Signup.heading}>Create Account</h1>
                    <p className={Signup.subtext}>
                        Join our community of book lovers
                    </p>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className={Signup.form}>

                    {/* USERNAME FIELD */}
                    <div>
                        <label className={Signup.label}>Username</label>

                        <div className={`${Signup.inputWrapper} relative`}>
                            <User className={Signup.iconLeft} />

                            <input
                                type="text"
                                name="username"
                                autoComplete="username"
                                placeholder="Enter Username"
                                className={Signup.input}
                                value={formData.username}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        username: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>

                    {/* EMAIL FIELD */}
                    <div>
                        <label className={Signup.label}>Email</label>

                        <div className={`${Signup.inputWrapper} relative`}>
                            <Mail className={Signup.iconLeft} />

                            <input
                                type="email"
                                name="email"
                                autoComplete="email"
                                placeholder="email@example.com"
                                className={Signup.input}
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    {/* PASSWORD FIELD */}
                    <div>
                        <label className={Signup.label}>Password</label>

                        <div className={`${Signup.inputWrapper} relative`}>
                            <User className={Signup.iconLeft} />

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                autoComplete="new-password"
                                placeholder="Enter Password"
                                className={Signup.input}
                                value={formData.password}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        password: e.target.value,
                                    })
                                }
                            />

                            {/* EYE TOGGLE */}
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5" />
                                ) : (
                                    <Eye className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button type="submit" className={Signup.submitBtn}>
                        Create Account
                    </button>

                    {/* ALREADY HAVE ACCOUNT? */}
                    <p className={Signup.linkText}>
                        Already have an account?
                        <Link to="/login" className={Signup.link}>
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
