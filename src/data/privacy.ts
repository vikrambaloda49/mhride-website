// privacy.ts - Privacy Policy Data for MHride Company (Canada/Alberta)

export interface PrivacySection {
  id: string;
  title: string;
  content: string[];
  subsections?: {
    title: string;
    content: string[];
  }[];
}

export const PrivacyData: PrivacySection[] = [
  {
    id: "introduction",
    title: "Introduction and Scope",
    content: [
      "MHride Inc. is committed to protecting your privacy and handling your personal information in accordance with Canadian federal and Alberta provincial privacy laws.",
      "This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our rideshare platform and services.",
      "By using MHride services, you consent to the collection, use, and disclosure of your personal information as described in this policy."
    ]
  },
  {
    id: "legal-framework",
    title: "Legal Framework and Compliance",
    content: [
      "Our privacy practices comply with the following Canadian and Alberta laws:"
    ],
    subsections: [
      {
        title: "Federal Legislation",
        content: [
          "Personal Information Protection and Electronic Documents Act (PIPEDA) - governing private sector organizations across Canada",
          "Anti-Spam Legislation (CASL) - regulating commercial electronic messages",
          "Competition Act - ensuring fair information practices in commerce",
          "Criminal Code provisions relating to privacy and data protection"
        ]
      },
      {
        title: "Alberta Provincial Laws",
        content: [
          "Personal Information Protection Act (PIPA) - Alberta's provincial privacy legislation",
          "Freedom of Information and Protection of Privacy Act (FOIP) - for interactions with government entities",
          "Electronic Transactions Act - governing electronic information handling",
          "Consumer Protection Act - ensuring fair treatment of consumer data"
        ]
      }
    ]
  },
  {
    id: "information-collection",
    title: "Information We Collect",
    content: [
      "We collect personal information necessary to provide safe, reliable rideshare services. Collection is limited to what is reasonable for our business purposes."
    ],
    subsections: [
      {
        title: "Account Information",
        content: [
          "Name, email address, and phone number for account creation and communication",
          "Date of birth to verify age requirements under Alberta transportation regulations",
          "Profile photo for safety and identification purposes",
          "Payment information including credit card details and billing addresses",
          "Emergency contact information for safety purposes"
        ]
      },
      {
        title: "Location and Trip Data",
        content: [
          "GPS location data during active trips for navigation and safety",
          "Pickup and drop-off locations for service delivery and record-keeping",
          "Trip routes, duration, and distance for pricing and service optimization",
          "Location data when app is open to show nearby drivers and estimated arrival times"
        ]
      },
      {
        title: "Device and Technical Information",
        content: [
          "Device identifiers, IP addresses, and mobile network information",
          "App usage patterns, feature preferences, and interaction data",
          "Crash reports and technical logs for app improvement and troubleshooting",
          "Browser type, operating system, and device specifications"
        ]
      },
      {
        title: "Driver-Specific Information (Alberta Requirements)",
        content: [
          "Valid Alberta driver's license information and history",
          "Vehicle registration, insurance, and inspection records",
          "Background check results as required by Alberta Transportation Network Company regulations",
          "Financial information for payment processing and tax reporting",
          "Driver performance metrics and customer feedback ratings"
        ]
      }
    ]
  },
  {
    id: "use-of-information",
    title: "How We Use Your Information",
    content: [
      "We use personal information only for legitimate business purposes related to providing rideshare services and complying with legal obligations."
    ],
    subsections: [
      {
        title: "Service Delivery",
        content: [
          "Matching riders with drivers and facilitating transportation services",
          "Processing payments and generating receipts with required tax information",
          "Providing customer support and resolving service issues",
          "Sending trip confirmations, updates, and safety notifications",
          "Maintaining trip history and user preferences"
        ]
      },
      {
        title: "Safety and Security",
        content: [
          "Verifying driver qualifications and conducting required background checks",
          "Monitoring trips for safety and security purposes",
          "Investigating incidents, accidents, or safety concerns",
          "Sharing information with emergency services when necessary",
          "Preventing fraud, abuse, and violations of our terms of service"
        ]
      },
      {
        title: "Legal and Regulatory Compliance",
        content: [
          "Complying with Alberta Transportation Network Company regulations",
          "Meeting tax reporting requirements under Canada Revenue Agency guidelines",
          "Responding to legal requests from law enforcement and government agencies",
          "Maintaining records as required by provincial and federal transportation laws",
          "Ensuring accessibility compliance under human rights legislation"
        ]
      },
      {
        title: "Business Operations and Improvement",
        content: [
          "Analyzing usage patterns to improve service quality and app functionality",
          "Conducting research and development for new features and services",
          "Marketing and promotional communications (with consent)",
          "Financial reporting and business analytics",
          "Quality assurance and performance monitoring"
        ]
      }
    ]
  },
  {
    id: "information-sharing",
    title: "Information Sharing and Disclosure",
    content: [
      "We do not sell personal information to third parties. We share information only as necessary for service delivery, legal compliance, or with your consent."
    ],
    subsections: [
      {
        title: "Service Providers and Partners",
        content: [
          "Payment processors for secure transaction handling",
          "Mapping and navigation service providers for route optimization",
          "Cloud storage and computing services with Canadian data residency requirements",
          "Customer service platforms and communication tools",
          "Insurance providers for coverage verification and claims processing"
        ]
      },
      {
        title: "Regulatory and Legal Disclosures",
        content: [
          "Alberta Transportation and other regulatory bodies as required by law",
          "Law enforcement agencies for legitimate investigations and safety concerns",
          "Courts and legal proceedings when compelled by valid legal process",
          "Canada Revenue Agency for tax compliance and reporting",
          "Emergency services during active safety incidents"
        ]
      },
      {
        title: "Limited User-to-User Sharing",
        content: [
          "First names and vehicle information between matched riders and drivers",
          "Trip status and estimated arrival times to trip participants",
          "Contact information only as necessary for trip coordination",
          "Rating and feedback systems (anonymized where possible)"
        ]
      }
    ]
  },
  {
    id: "data-security",
    title: "Data Security and Protection",
    content: [
      "We implement comprehensive security measures to protect personal information against unauthorized access, use, disclosure, alteration, or destruction."
    ],
    subsections: [
      {
        title: "Technical Safeguards",
        content: [
          "Industry-standard encryption for data transmission and storage",
          "Secure authentication systems and access controls",
          "Regular security audits and vulnerability assessments",
          "Automated monitoring systems for suspicious activities",
          "Secure data centers with physical and environmental protections"
        ]
      },
      {
        title: "Organizational Safeguards",
        content: [
          "Employee privacy training and confidentiality agreements",
          "Strict access controls limiting data access to authorized personnel only",
          "Regular privacy impact assessments for new features and processes",
          "Incident response procedures for potential data breaches",
          "Third-party vendor security assessments and contractual protections"
        ]
      },
      {
        title: "Data Breach Response",
        content: [
          "Immediate containment and investigation of potential security incidents",
          "Notification to Privacy Commissioner of Canada and Alberta within 72 hours of discovery",
          "User notification when there is significant risk of harm",
          "Remedial actions to prevent future incidents and minimize impact",
          "Cooperation with regulatory authorities during investigations"
        ]
      }
    ]
  },
  {
    id: "data-retention",
    title: "Data Retention and Deletion",
    content: [
      "We retain personal information only as long as necessary for the purposes for which it was collected, or as required by law."
    ],
    subsections: [
      {
        title: "Retention Periods",
        content: [
          "Account information: Retained while account is active plus 7 years for financial records",
          "Trip data: Retained for 7 years to comply with tax and regulatory requirements",
          "Driver records: Retained for duration of driver relationship plus 7 years as required by Alberta regulations",
          "Payment information: Retained as required by payment card industry standards",
          "Communications: Retained for 3 years for customer service and legal purposes"
        ]
      },
      {
        title: "Secure Deletion",
        content: [
          "Automated deletion processes for expired data",
          "Secure overwriting of storage media containing personal information",
          "Certificate of destruction for physical documents containing personal data",
          "Regular audits to ensure deletion policies are properly implemented"
        ]
      }
    ]
  },
  {
    id: "user-rights",
    title: "Your Privacy Rights (Canadian Law)",
    content: [
      "Under Canadian and Alberta privacy laws, you have specific rights regarding your personal information."
    ],
    subsections: [
      {
        title: "Access and Correction Rights",
        content: [
          "Right to access personal information we hold about you",
          "Right to request correction of inaccurate or incomplete information",
          "Right to receive information about our privacy practices and policies",
          "Right to know the purposes for which your information is being used",
          "Right to know to whom your information has been disclosed"
        ]
      },
      {
        title: "Withdrawal and Deletion Rights",
        content: [
          "Right to withdraw consent for certain uses of your information",
          "Right to request deletion of your personal information (subject to legal requirements)",
          "Right to close your account and stop using our services",
          "Right to opt-out of marketing communications",
          "Right to data portability where technically feasible"
        ]
      },
      {
        title: "Complaint and Review Rights",
        content: [
          "Right to file complaints with the Privacy Commissioner of Canada",
          "Right to file complaints with the Information and Privacy Commissioner of Alberta",
          "Right to request review of our privacy practices by regulatory authorities",
          "Right to seek remedies through provincial and federal privacy legislation",
          "Right to legal representation during privacy disputes"
        ]
      }
    ]
  },
  {
    id: "consent-management",
    title: "Consent and Choice",
    content: [
      "We obtain appropriate consent for the collection, use, and disclosure of personal information in accordance with Canadian privacy law."
    ],
    subsections: [
      {
        title: "Types of Consent",
        content: [
          "Express consent for sensitive personal information and marketing communications",
          "Implied consent for information reasonably required for service delivery",
          "Opt-in consent for location tracking and promotional materials",
          "Separate consent for sharing information with third parties beyond service provision",
          "Ongoing consent verification for changes to privacy practices"
        ]
      },
      {
        title: "Managing Your Preferences",
        content: [
          "Account settings to control information sharing and communication preferences",
          "Location services controls within your device and app settings",
          "Marketing communication unsubscribe options in all promotional messages",
          "Data download and deletion requests through customer support",
          "Consent withdrawal options with clear explanation of service impacts"
        ]
      }
    ]
  },
  {
    id: "international-transfers",
    title: "Cross-Border Data Transfers",
    content: [
      "While we strive to keep Canadian data within Canada, some information may be transferred internationally for legitimate business purposes."
    ],
    subsections: [
      {
        title: "Transfer Safeguards",
        content: [
          "Contractual protections requiring equivalent privacy standards",
          "Due diligence assessments of foreign privacy laws and practices",
          "Encryption and security measures for data in transit and storage",
          "Limited transfers only to jurisdictions with adequate privacy protections",
          "Regular monitoring of third-party compliance with privacy requirements"
        ]
      },
      {
        title: "Disclosure of Foreign Access",
        content: [
          "Acknowledgment that foreign governments may have access rights under their laws",
          "Transparency about jurisdictions where data may be processed or stored",
          "Notification of foreign law enforcement requests when legally permitted",
          "Annual transparency reports on government data requests",
          "User notification rights regarding foreign access where possible"
        ]
      }
    ]
  },
  {
    id: "children-privacy",
    title: "Children's Privacy Protection",
    content: [
      "MHride services are not intended for children under 18 years of age, in compliance with Alberta transportation regulations and privacy law."
    ],
    subsections: [
      {
        title: "Age Verification and Restrictions",
        content: [
          "Age verification during account creation process",
          "Prohibition on service use by individuals under 18 without guardian supervision",
          "Enhanced privacy protections for any information relating to minors",
          "Parental consent requirements where minors may be involved in services",
          "Immediate deletion of information discovered to belong to unauthorized minors"
        ]
      }
    ]
  },
  {
    id: "cookies-tracking",
    title: "Cookies and Online Tracking",
    content: [
      "We use cookies and similar technologies to enhance user experience and analyze platform usage in compliance with Canadian privacy law."
    ],
    subsections: [
      {
        title: "Types of Cookies Used",
        content: [
          "Essential cookies necessary for platform functionality and security",
          "Performance cookies to analyze usage patterns and improve services",
          "Preference cookies to remember user settings and customizations",
          "Marketing cookies for relevant advertising (with consent)",
          "Analytics cookies to understand user behavior and optimize features"
        ]
      },
      {
        title: "Cookie Management",
        content: [
          "Browser settings to control cookie acceptance and deletion",
          "Opt-out mechanisms for non-essential cookies and tracking",
          "Clear information about cookie purposes and data collection",
          "Regular review and updating of cookie policies and practices",
          "Third-party cookie management and data sharing agreements"
        ]
      }
    ]
  },
  {
    id: "policy-updates",
    title: "Privacy Policy Updates",
    content: [
      "We may update this Privacy Policy to reflect changes in our practices, technology, legal requirements, or business operations."
    ],
    subsections: [
      {
        title: "Notification Process",
        content: [
          "Email notification to registered users for material changes",
          "In-app notifications and prominent website posting of updates",
          "Reasonable advance notice period before changes take effect",
          "Clear explanation of what changes are being made and why",
          "Opportunity to review and withdraw consent for new uses of information"
        ]
      },
      {
        title: "Continued Use and Consent",
        content: [
          "Continued use of services constitutes acceptance of updated policy",
          "Right to discontinue services if you disagree with changes",
          "Grandfathering of existing consent for previously collected information",
          "New consent required for materially different uses of personal information",
          "Version history and archival of previous policy versions"
        ]
      }
    ]
  },
  {
    id: "contact-complaints",
    title: "Contact Information and Privacy Complaints",
    content: [
      "We are committed to addressing privacy concerns and complaints promptly and effectively."
    ],
    subsections: [
      {
        title: "Internal Privacy Contact",
        content: [
          "Dedicated privacy officer for handling privacy inquiries and complaints",
          "Multiple contact methods including email, phone, and written correspondence",
          "Response timeframes aligned with Canadian privacy law requirements",
          "Escalation procedures for unresolved privacy concerns",
          "Documentation and tracking of all privacy-related communications"
        ]
      },
      {
        title: "External Privacy Authorities",
        content: [
          "Privacy Commissioner of Canada: 1-800-282-1376 or www.priv.gc.ca",
          "Information and Privacy Commissioner of Alberta: 1-888-878-4044 or www.oipc.ab.ca",
          "Right to file complaints with these authorities at any time",
          "Cooperation with regulatory investigations and enforcement actions",
          "Implementation of recommendations from privacy commissioners"
        ]
      }
    ]
  }
];

export const lastUpdated = "September 04, 2025";
export const effectiveDate = "September 04, 2025";
export const companyInfo = {
  name: "MHride Inc.",
  province: "Alberta",
  country: "Canada",
  registeredOffice: "Medicine Hat, Alberta",
  contactEmail: "support@mhride.ca",
  privacyOfficer: "support@mhride.ca",
};