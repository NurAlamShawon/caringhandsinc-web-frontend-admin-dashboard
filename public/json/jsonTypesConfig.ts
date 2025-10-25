// Type for a section in Privacy Policy
export interface PrivacyPolicySectionType {
  id: number;
  title: string;
  content?: string;
  types?: {
    personalInformation?: string[];
    accountInformation?: string[];
    usageData?: string[];
    employerData?: string[];
  };
  uses?: string[];
  conditions?: string[];
  purposes?: string[];
  policies?: string[];
  rights?: string[];
  note?: string;
}

// Type for Privacy Policy
export interface PrivacyPolicyType {
  title: string;
  lastUpdated: string;
  introduction: string;
  sections: PrivacyPolicySectionType[];
  contact: {
    email: string;
    address: string;
  };
}

// Type for a section in Terms & Conditions
export interface TermsConditionSectionType {
  id: number;
  title: string;
  content?: string | string[];
  services?: string[];
  responsibilities?: string[];
  prohibitedActions?: string[];
  note?: string;
}

// Type for Terms & Conditions
export interface TermsAndConditionsType {
  title: string;
  lastUpdated: string;
  introduction: string;
  sections: TermsConditionSectionType[];
  contact: {
    email: string;
    address: string;
  };
}
