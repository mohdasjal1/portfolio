"use client";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from 'sonner';

export default function ContactForm() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  // Advanced email validation
  const validateEmail = (email) => {
    if (!email) return 'Email is required';

    // 1. Basic format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return 'Please enter a valid email address format';
    }

    const [localPart, domain] = email.split('@');

    // 2. Check for common fake emails
    const fakePatterns = [
      'test', 'demo', 'fake', 'temp', 'example',
      'admin', 'user', 'guest', 'no-reply', 'noreply'
    ];

    if (fakePatterns.some(pattern => localPart.toLowerCase().includes(pattern))) {
      return 'Please use your real email address';
    }

    // 3. Check for disposable email domains
    const disposableDomains = [
      'tempmail.com', '10minutemail.com', 'guerrillamail.com',
      'mailinator.com', 'throwaway.com', 'fakeinbox.com',
      'yopmail.com', 'getairmail.com', 'tmpmail.org'
    ];

    if (disposableDomains.includes(domain.toLowerCase())) {
      return 'Disposable/temporary emails are not allowed';
    }

    // 4. Check for invalid domains
    const invalidDomains = ['example.com', 'test.com', 'domain.com'];
    if (invalidDomains.includes(domain.toLowerCase())) {
      return 'Please use a valid email domain';
    }

    // 5. Check email length and structure
    if (localPart.length < 2) {
      return 'Email username seems too short';
    }

    if (domain.length < 4) {
      return 'Email domain seems invalid';
    }

    return true;
  };

  const sendEmail = async (formData) => {
    const toastId = toast.loading('Sending your message...');

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );

      toast.success('Message sent successfully! I will get back to you soon.', {
        id: toastId
      });

      reset();

    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error('Failed to send message. Please try again later.', {
        id: toastId
      });
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (data) => {
    setLoading(true);

    const templateParams = {
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
      to_name: "Asjal"
    };

    sendEmail(templateParams);
  };

  return (
    <>
      <Toaster richColors={true} />
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-6"
      >

        {/* Name Field */}
        <div className="w-full">
          <label htmlFor="name" className="block text-gray-300 text-sm mb-2">
            Your name
          </label>
          <input
            type="text"
            id="name"
            placeholder="What's your real name?"
            {...register("name", {
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Name should be at least 2 characters'
              },
              pattern: {
                value: /^[a-zA-Z\s]{2,}$/,
                message: 'Name should contain only letters and spaces'
              }
            })}
            className="w-full p-3 rounded-xl bg-gray-800 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 transition-all duration-300"
          />
          {errors.name && (
            <span className="inline-block self-start text-cyan-400 text-sm mt-1">
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Email Field */}
        <div className="w-full">
          <label htmlFor="email" className="block text-gray-300 text-sm mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="What's your real email address?"
            {...register("email", {
              required: 'Email is required',
              validate: validateEmail
            })}
            className="w-full p-3 rounded-xl bg-gray-800 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 transition-all duration-300"
          />
          {errors.email && (
            <span className="inline-block self-start text-cyan-400 text-sm mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Message Field */}
        <div className="w-full">
          <label htmlFor="message" className="block text-gray-300 text-sm mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            placeholder="How can I help you?"
            rows={5}
            {...register("message", {
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message should be at least 10 characters'
              },
              maxLength: {
                value: 1000,
                message: 'Message should not exceed 1000 characters'
              }
            })}
            className="w-full p-3 rounded-xl bg-gray-800 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 transition-all duration-300 resize-none"
          />
          {errors.message && (
            <span className="inline-block self-start text-cyan-400 text-sm mt-1">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-6 rounded-xl font-semibold hover:scale-105 shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 cursor-pointer capitalize disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
}