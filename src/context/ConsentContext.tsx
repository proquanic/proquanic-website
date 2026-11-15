import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import {
  CookieConsentRecord,
  getStoredConsent,
  saveConsentRecord,
  applyConsentPreferences,
} from "../utils/consent";

interface ConsentContextType {
  consent: CookieConsentRecord | null;
  showBanner: boolean;
  isPreferencesOpen: boolean;
  acceptAll: () => void;
  rejectOptional: () => void;
  savePreferences: (prefs: { analytics: boolean; marketing: boolean }) => void;
  openPreferences: () => void;
  closePreferences: () => void;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export const ConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<CookieConsentRecord | null>(() => getStoredConsent());
  const [showBanner, setShowBanner] = useState<boolean>(() => getStoredConsent() === null);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState<boolean>(false);

  // Enforce current consent state on initial mount and whenever consent changes
  useEffect(() => {
    applyConsentPreferences(consent);
  }, [consent]);

  const acceptAll = useCallback(() => {
    const updated = saveConsentRecord(true, true, "accept_all");
    setConsent(updated);
    setShowBanner(false);
    setIsPreferencesOpen(false);
  }, []);

  const rejectOptional = useCallback(() => {
    const updated = saveConsentRecord(false, false, "reject_optional");
    setConsent(updated);
    setShowBanner(false);
    setIsPreferencesOpen(false);
  }, []);

  const savePreferences = useCallback(
    (prefs: { analytics: boolean; marketing: boolean }) => {
      const decisionType: CookieConsentRecord["decisionType"] =
        prefs.analytics && prefs.marketing
          ? "accept_all"
          : !prefs.analytics && !prefs.marketing
            ? "reject_optional"
            : "custom";

      const updated = saveConsentRecord(prefs.analytics, prefs.marketing, decisionType);
      setConsent(updated);
      setShowBanner(false);
      setIsPreferencesOpen(false);
    },
    []
  );

  const openPreferences = useCallback(() => {
    setIsPreferencesOpen(true);
  }, []);

  const closePreferences = useCallback(() => {
    setIsPreferencesOpen(false);
  }, []);

  return (
    <ConsentContext.Provider
      value={{
        consent,
        showBanner,
        isPreferencesOpen,
        acceptAll,
        rejectOptional,
        savePreferences,
        openPreferences,
        closePreferences,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsent = (): ConsentContextType => {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent must be used within a ConsentProvider");
  }
  return ctx;
};
