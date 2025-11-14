// terms.ts - Terms of Service Data for RideShare Company (Canada/Alberta)

export interface TermsSection {
  id: string;
  title: string;
  content: string[];
  subsections?: {
    title: string;
    content: string[];
  }[];
}

export const TermsData: TermsSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: [
      "By accessing or using RideShare services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and all applicable laws and regulations of Canada and Alberta.",
      "These terms constitute a legally binding agreement between you and RideShare Inc., a corporation incorporated under the laws of Alberta, Canada.",
      "If you do not agree with any part of these terms, you must not use our services."
    ]
  },
  {
    id: "definitions",
    title: "Definitions",
    content: [
      "Throughout these terms, the following definitions apply:"
    ],
    subsections: [
      {
        title: "Service Definitions",
        content: [
          "\"Service\" means the rideshare transportation platform and related services provided by RideShare Inc.",
          "\"User\" means any person who accesses or uses our services, including both riders and drivers.",
          "\"Driver\" means an independent contractor who provides transportation services through our platform.",
          "\"Rider\" means a user who requests and receives transportation services.",
          "\"Vehicle\" means any automobile used to provide transportation services through our platform."
        ]
      }
    ]
  },
  {
    id: "eligibility",
    title: "Eligibility and Account Requirements",
    content: [
      "To use our services, you must be at least 18 years of age and have the legal capacity to enter into binding contracts under Alberta law.",
      "You must provide accurate, current, and complete information during registration and maintain the accuracy of such information.",
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."
    ],
    subsections: [
      {
        title: "Driver Eligibility (Alberta Specific)",
        content: [
          "Drivers must hold a valid Alberta driver's license for at least one year.",
          "Drivers must maintain valid vehicle registration and insurance as required by Alberta Transportation.",
          "Drivers must pass background checks as required under Alberta's Transportation Network Company regulations.",
          "Drivers must comply with all municipal bylaws and provincial regulations regarding commercial transportation."
        ]
      }
    ]
  },
  {
    id: "services",
    title: "Description of Services",
    content: [
      "RideShare operates a digital platform that connects riders with independent contractor drivers for transportation services.",
      "We do not provide transportation services directly; we facilitate connections between users seeking transportation and drivers willing to provide such services.",
      "All transportation services are provided by independent contractors, not employees of RideShare Inc."
    ],
    subsections: [
      {
        title: "Platform Features",
        content: [
          "Real-time matching between riders and drivers",
          "GPS tracking and navigation assistance",
          "Secure payment processing",
          "Rating and feedback systems",
          "Trip history and receipt generation",
          "Customer support services"
        ]
      }
    ]
  },
  {
    id: "user-obligations",
    title: "User Obligations and Conduct",
    content: [
      "Users must comply with all applicable federal, provincial, and municipal laws while using our services.",
      "Users must treat all other users with respect and courtesy.",
      "Users must not use the service for any illegal, harmful, or fraudulent activities."
    ],
    subsections: [
      {
        title: "Prohibited Activities",
        content: [
          "Harassment, discrimination, or threatening behavior toward other users",
          "Soliciting or providing illegal goods or services",
          "Damaging or vandalizing vehicles or property",
          "Providing false or misleading information",
          "Attempting to circumvent safety or security measures",
          "Using the service while under the influence of drugs or alcohol"
        ]
      }
    ]
  },
  {
    id: "payment",
    title: "Payment Terms and Pricing",
    content: [
      "Fares are calculated based on distance, time, and local market conditions in accordance with our pricing algorithm.",
      "Payment is processed through our secure payment system using the payment method on file.",
      "All prices include applicable federal and provincial taxes, including GST as required under the Excise Tax Act of Canada."
    ],
    subsections: [
      {
        title: "Payment Processing (Canada Specific)",
        content: [
          "Payment processing complies with Canadian privacy and financial regulations including PIPEDA.",
          "Receipts are provided electronically and include all required tax information under Canada Revenue Agency guidelines.",
          "Refunds and disputes are handled in accordance with Canadian consumer protection laws.",
          "Currency displayed and charged is in Canadian Dollars (CAD) unless otherwise specified."
        ]
      }
    ]
  },
  {
    id: "insurance-liability",
    title: "Insurance and Liability (Alberta Specific)",
    content: [
      "RideShare maintains commercial general liability insurance as required under Alberta regulations for Transportation Network Companies.",
      "All drivers are required to maintain valid auto insurance meeting Alberta's minimum coverage requirements.",
      "During active trips, additional commercial insurance coverage is provided as mandated by Alberta Transportation."
    ],
    subsections: [
      {
        title: "Limitation of Liability",
        content: [
          "RideShare's liability is limited to the maximum extent permitted under Alberta law.",
          "We are not liable for actions or omissions of independent contractor drivers.",
          "Our total liability shall not exceed the amount paid for the specific trip in question.",
          "We are not responsible for indirect, incidental, or consequential damages except as required by Alberta consumer protection legislation."
        ]
      }
    ]
  },
  {
    id: "privacy",
    title: "Privacy and Data Protection",
    content: [
      "Our collection, use, and disclosure of personal information is governed by our Privacy Policy and complies with the Personal Information Protection Act (PIPA) of Alberta and the Personal Information Protection and Electronic Documents Act (PIPEDA) of Canada.",
      "We collect location data, payment information, and trip details necessary to provide our services.",
      "Your personal information may be stored and processed in Canada and other jurisdictions where we operate."
    ],
    subsections: [
      {
        title: "Data Rights (Canadian Law)",
        content: [
          "You have the right to access your personal information we hold about you.",
          "You may request correction of inaccurate personal information.",
          "You may request deletion of your personal information subject to legal and operational requirements.",
          "You may file complaints with the Privacy Commissioner of Canada or Alberta if you believe we have violated privacy laws."
        ]
      }
    ]
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights",
    content: [
      "The RideShare platform, including software, designs, trademarks, and content, is protected by Canadian intellectual property laws.",
      "Users are granted a limited, non-exclusive license to use our platform for personal, non-commercial purposes.",
      "Users retain ownership of content they provide but grant us necessary licenses to operate our services."
    ]
  },
  {
    id: "termination",
    title: "Account Termination and Suspension",
    content: [
      "Either party may terminate this agreement at any time with or without cause.",
      "We may suspend or terminate accounts for violations of these terms or applicable laws.",
      "Upon termination, your right to use our services ceases immediately.",
      "Provisions relating to intellectual property, liability limitation, and dispute resolution survive termination."
    ]
  },
  {
    id: "dispute-resolution",
    title: "Dispute Resolution (Alberta/Canada)",
    content: [
      "Any disputes arising from these terms or use of our services shall be governed by Alberta law and Canadian federal law where applicable.",
      "Disputes shall be resolved through binding arbitration in Calgary, Alberta, unless prohibited by applicable consumer protection laws.",
      "Users retain the right to pursue remedies in small claims court for eligible disputes.",
      "Class action waivers are subject to Alberta consumer protection legislation."
    ],
    subsections: [
      {
        title: "Consumer Rights",
        content: [
          "Nothing in these terms limits your rights under Alberta's Fair Trading Act or other consumer protection legislation.",
          "If you are a consumer, certain terms may be unenforceable if they conflict with mandatory consumer protection laws.",
          "You may contact the Alberta Consumer Contact Centre for information about your rights as a consumer."
        ]
      }
    ]
  },
  {
    id: "regulatory-compliance",
    title: "Regulatory Compliance (Transportation Network Companies)",
    content: [
      "RideShare operates in compliance with Alberta's Transportation Network Company regulations and municipal bylaws.",
      "Our operations are subject to oversight by Alberta Transportation and local municipal authorities.",
      "Drivers must comply with all applicable commercial vehicle and chauffeur permit requirements.",
      "We maintain all required licenses and permits for operation in Alberta."
    ]
  },
  {
    id: "accessibility",
    title: "Accessibility Compliance",
    content: [
      "RideShare is committed to providing accessible services in compliance with the Accessibility for Ontarians with Disabilities Act and similar Alberta accessibility legislation.",
      "We provide accessible vehicle options where available and required by law.",
      "Service animals are welcome in all vehicles as required under human rights legislation.",
      "We continuously work to improve accessibility of our digital platform and services."
    ]
  },
  {
    id: "emergency-procedures",
    title: "Emergency Procedures and Safety",
    content: [
      "In case of emergency, users should immediately contact 911 or local emergency services.",
      "Our platform includes emergency features including trip sharing and emergency contact notifications.",
      "All safety incidents must be reported to RideShare and appropriate authorities as required by law.",
      "We cooperate fully with law enforcement and emergency services when requested."
    ]
  },
  {
    id: "modifications",
    title: "Modifications to Terms",
    content: [
      "We reserve the right to modify these terms at any time with reasonable notice as required by Alberta consumer protection laws.",
      "Material changes will be communicated through our platform or via email to registered users.",
      "Continued use of our services after changes constitute acceptance of modified terms.",
      "Users who do not accept changes may terminate their accounts."
    ]
  },
  {
    id: "contact",
    title: "Contact Information and Complaints",
    content: [
      "For questions about these terms or our services, contact us at legal@rideshare.ca or 1-800-RIDESHARE.",
      "Our registered office is located in Calgary, Alberta, Canada.",
      "Complaints may be filed with Alberta Transportation, local municipal authorities, or relevant consumer protection agencies.",
      "We maintain a complaint resolution process in compliance with Canadian customer service standards."
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
};