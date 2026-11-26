"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi'
import SectionFloatingIcons from './SectionFloatingIcons'

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSending, setIsSending] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validate = () => {
        const validationErrors: FormErrors = {};
        if (!formData.name) validationErrors.name = "Name is required";
        if (!formData.email) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email is invalid";
        }
        if (!formData.message) validationErrors.message = "Message is required";
        return validationErrors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors({
                name: validationErrors.name || "",
                email: validationErrors.email || "",
                message: validationErrors.message || "",
            });
            return;
        }

        setErrors({ name: "", email: "", message: "" });
        setIsSending(true);

        const emailJsKey = process.env.NEXT_PUBLIC_EMAIL_API_ID || "04JcnQJdOYeFysvHu";
        const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || "service_v62518j";
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || "template_y77c2mp";

        const templateParams = {
            from_name: formData.name,
            user_name: formData.name,
            from_email: formData.email,
            user_email: formData.email,
            to_name: "Sivatheevan",
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, emailJsKey)
            .then(() => {
                toast.success("Message sent successfully");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((err: unknown) => {
                console.error('EmailJS send error:', err);

                let errMsg = 'Failed to send message. Using mail client fallback.';
                if (typeof err === 'object' && err !== null) {
                    const maybe = err as { text?: string; message?: string };
                    if (maybe.text) errMsg = maybe.text;
                    else if (maybe.message) errMsg = maybe.message;
                } else if (typeof err === 'string') {
                    errMsg = err;
                }

                toast.error(errMsg);

                try {
                    const subject = encodeURIComponent(`Contact from ${formData.name} via portfolio`);
                    const body = encodeURIComponent(`Name: ${formData.name}%0AEmail: ${formData.email}%0A%0A${formData.message}`);
                    const mailto = `mailto:sivatheevan1224@gmail.com?subject=${subject}&body=${body}`;
                    window.location.href = mailto;
                } catch (e) {
                    console.error('Mailto fallback error:', e);
                }
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <section className='relative w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 md:pt-10 pb-8 sm:pb-12 md:pb-16 text-gray-900 dark:text-white' id='contact'>
            {/* Full Width Background layer */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0 bg-transparent dark:bg-black/90" />
                <SectionFloatingIcons />
            </div>
            
            <Toaster />
            <div className="relative container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='max-w-3xl mx-auto'
                >
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white'>
                        Let&apos;s <span className="text-blue-600 dark:text-cyan-400">Connect</span>
                    </h2>
                    <p className='text-gray-600 dark:text-gray-400 text-center mb-12 text-sm sm:text-base font-medium'>
                        Have a question or want to work together? Feel free to reach out!
                    </p>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className='space-y-6 backdrop-blur-2xl bg-white/90 dark:bg-gray-900/80 p-6 sm:p-10 rounded-3xl border border-gray-200 dark:border-white/10 shadow-2xl'
                    >
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                            <div className='relative group'>
                                <div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500 dark:text-gray-400 group-focus-within:text-blue-500 transition-colors'>
                                    <FiUser className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    placeholder='Your Name'
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    className={`w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-black/50 text-gray-900 dark:text-white rounded-xl border ${
                                        focusedField === 'name' ? 'border-blue-500 ring-2 ring-blue-500/20' : errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-800'
                                    } focus:outline-none transition-all duration-300 font-medium`}
                                />
                                {errors.name && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className='mt-2 text-xs font-semibold text-red-500 flex items-center gap-1'
                                    >
                                        {errors.name}
                                    </motion.p>
                                )}
                            </div>

                            <div className='relative group'>
                                <div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500 dark:text-gray-400 group-focus-within:text-blue-500 transition-colors'>
                                    <FiMail className="w-5 h-5" />
                                </div>
                                <input
                                    type="email"
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    placeholder='Your Email'
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    className={`w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-black/50 text-gray-900 dark:text-white rounded-xl border ${
                                        focusedField === 'email' ? 'border-blue-500 ring-2 ring-blue-500/20' : errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-800'
                                    } focus:outline-none transition-all duration-300 font-medium`}
                                />
                                {errors.email && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className='mt-2 text-xs font-semibold text-red-500 flex items-center gap-1'
                                    >
                                        {errors.email}
                                    </motion.p>
                                )}
                            </div>
                        </div>

                        <div className='relative group'>
                            <div className='absolute top-3.5 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500 dark:text-gray-400 group-focus-within:text-blue-500 transition-colors'>
                                <FiMessageSquare className="w-5 h-5" />
                            </div>
                            <textarea
                                id='message'
                                name='message'
                                value={formData.message}
                                placeholder='Your Message'
                                rows={4}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('message')}
                                onBlur={() => setFocusedField(null)}
                                className={`w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-black/50 text-gray-900 dark:text-white rounded-xl border ${
                                    focusedField === 'message' ? 'border-blue-500 ring-2 ring-blue-500/20' : errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-800'
                                } focus:outline-none transition-all duration-300 font-medium resize-none`}
                            />
                            {errors.message && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className='mt-2 text-xs font-semibold text-red-500 flex items-center gap-1'
                                >
                                    {errors.message}
                                </motion.p>
                            )}
                        </div>

                        <motion.button
                            type='submit'
                            disabled={isSending}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                                isSending ? 'opacity-70 cursor-not-allowed' : ''
                            }`}
                        >
                            {isSending ? (
                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <>
                                    <FiSend className="w-5 h-5" />
                                    Send Message
                                </>
                            )}
                        </motion.button>
                    </motion.form>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactForm
