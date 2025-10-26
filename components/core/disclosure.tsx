"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface DisclosureContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DisclosureContext = React.createContext<DisclosureContextValue | undefined>(undefined);

function useDisclosure() {
  const context = React.useContext(DisclosureContext);
  if (!context) {
    throw new Error("useDisclosure must be used within a Disclosure");
  }
  return context;
}

interface DisclosureProps {
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Disclosure({ children, className, defaultOpen = false, onOpenChange }: DisclosureProps) {
  const [open, setOpenInternal] = React.useState(defaultOpen);

  const setOpen = React.useCallback(
    (newOpen: boolean) => {
      setOpenInternal(newOpen);
      onOpenChange?.(newOpen);
    },
    [onOpenChange]
  );

  return (
    <DisclosureContext.Provider value={{ open, setOpen }}>
      <div className={className}>{children}</div>
    </DisclosureContext.Provider>
  );
}

interface DisclosureTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function DisclosureTrigger({ children, className }: DisclosureTriggerProps) {
  const { open, setOpen } = useDisclosure();

  return (
    <div className={className} onClick={() => setOpen(!open)}>
      {children}
    </div>
  );
}

interface DisclosureContentProps {
  children: React.ReactNode;
  className?: string;
}

export function DisclosureContent({ children, className }: DisclosureContentProps) {
  const { open } = useDisclosure();

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
