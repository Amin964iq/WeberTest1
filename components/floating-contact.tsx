"use client";

import * as React from "react";
import { MessageCircle, Mail, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface FloatingContactProps {
  locale: string;
}

export default function FloatingContact({ }: FloatingContactProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const t = useTranslations("contact");

  const contactOptions = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "WhatsApp",
      href: "https://wa.me/9647741424344?text=Hello%20Weber!%20I%27m%20interested%20in%20your%20services.",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: t("email"),
      href: "mailto:weberagancy@gmail.com?subject=Service%20Inquiry&body=Hello%20Weber%20Team,",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
      label: t("instagram"),
      href: "https://instagram.com/weber.iq",
      color: "bg-pink-500 hover:bg-pink-600",
    },
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-50 ltr:right-6 rtl:left-6">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className="absolute bottom-20 right-0 ltr:right-0 rtl:left-0 space-y-3 mb-2"
            >
              {contactOptions.map((option, index) => (
                <motion.a
                  key={option.label}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg transition-all ${option.color}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {option.icon}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <Button
            onClick={() => setIsOpen(!isOpen)}
            size="icon"
            className="w-14 h-14 rounded-full shadow-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>

          {!isOpen && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 ltr:-right-1 rtl:-left-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"
            />
          )}
        </motion.div>
      </div>
    </>
  );
}
