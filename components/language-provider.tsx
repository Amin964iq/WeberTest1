"use client";

import { useEffect, useState } from "react";
import { useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

const LANGUAGE_KEY = "preferredLanguage";

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const params = useParams();
  const currentLocale = (params.locale as string) || "ar";
  const [isInitialized, setIsInitialized] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Only run this on the client side
    if (typeof window === "undefined") return;

    const savedLocale = localStorage.getItem(LANGUAGE_KEY);
    console.log("=== LanguageProvider Debug ===");
    console.log("Current URL Locale:", currentLocale);
    console.log("Saved Locale in localStorage:", savedLocale);
    console.log("All localStorage items:", localStorage);

    // Always render children - no blank pages
    setShouldRender(true);
    setIsInitialized(true);

    // If there's no saved preference, default to Arabic
    if (!savedLocale) {
      console.log("No saved preference found, setting to Arabic");
      localStorage.setItem(LANGUAGE_KEY, "ar");
      // If user is on /en without a saved preference, redirect to Arabic
      if (currentLocale === "en") {
        console.log("User on /en with no preference, redirecting to Arabic (/)");
        // Give router time to initialize with small delay
        setTimeout(() => {
          console.log("Executing redirect to / with locale: ar");
          router.replace("/", { locale: "ar" });
        }, 100);
      }
    } else if (savedLocale !== currentLocale) {
      // If user has a saved preference that differs from current locale, redirect
      console.log("Mismatch detected! Saved locale:", savedLocale, "Current locale:", currentLocale);
      console.log("Redirecting to:", savedLocale === "ar" ? "/" : "/en");
      // Give router time to initialize with small delay
      setTimeout(() => {
        console.log("Executing redirect to:", savedLocale === "ar" ? "/" : "/en");
        router.replace(savedLocale === "ar" ? "/" : "/", {
          locale: savedLocale as "ar" | "en",
        });
      }, 100);
    } else {
      console.log("Locales match! No redirect needed. Current:", currentLocale, "Saved:", savedLocale);
    }
  }, []);

  // Don't render anything until we've checked localStorage and confirmed no redirect is needed
  if (!shouldRender) {
    return null;
  }

  return <>{children}</>;
}
