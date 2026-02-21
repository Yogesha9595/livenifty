// ============================================
// LiveNifty Calculator SEO Data Layer
// ============================================

export type CalculatorKey =
  | "sip"
  | "emi"
  | "lumpsum"
  | "fd"
  | "income-tax"
  | "cagr"
  | "swp"
  | "ppf"
  | "rd"
  | "gst"
  | "gratuity"
  | "options";

type FAQ = {
  q: string;
  a: string;
};

export interface CalculatorSEOType {
  title: string;
  description: string;
  faqs: FAQ[];
  keywords?: string[];
}

// 🔥 Record ensures every calculator has SEO config
export const calculatorSEO: Record<
  CalculatorKey,
  CalculatorSEOType
> = {
  sip: {
    title:
      "SIP Calculator – Calculate Mutual Fund SIP Returns Online",
    description:
      "Use this free SIP calculator to estimate future mutual fund returns and plan long-term investments.",
    keywords: [
      "sip calculator",
      "mutual fund sip return calculator",
      "monthly sip calculator",
    ],
    faqs: [],
  },

  emi: {
    title: "EMI Calculator – Calculate Loan EMI Instantly",
    description:
      "Compute monthly EMI for home, car, and personal loans instantly.",
    faqs: [],
  },

  lumpsum: {
    title:
      "Lumpsum Calculator – Estimate One-Time Investment Returns",
    description:
      "Calculate future value of one-time mutual fund investments.",
    faqs: [],
  },

  fd: {
    title:
      "FD Calculator – Calculate Fixed Deposit Maturity Amount",
    description:
      "Estimate maturity value and interest earned on fixed deposits.",
    faqs: [],
  },

  "income-tax": {
    title:
      "Income Tax Calculator – Compare Old vs New Regime",
    description:
      "Calculate tax liability and compare tax regimes instantly.",
    faqs: [],
  },

  cagr: {
    title:
      "CAGR Calculator – Calculate Annual Growth Rate",
    description:
      "Compute compound annual growth rate of investments.",
    faqs: [],
  },

  swp: {
    title: "SWP Calculator – Systematic Withdrawal Plan",
    description:
      "Estimate withdrawals and remaining corpus easily.",
    faqs: [],
  },

  ppf: {
    title: "PPF Calculator – Public Provident Fund",
    description:
      "Calculate PPF maturity and interest earned.",
    faqs: [],
  },

  rd: {
    title: "RD Calculator – Recurring Deposit",
    description:
      "Estimate RD maturity value and interest.",
    faqs: [],
  },

  gst: {
    title: "GST Calculator – Calculate GST Amount",
    description:
      "Compute GST inclusive and exclusive prices instantly.",
    faqs: [],
  },

  gratuity: {
    title: "Gratuity Calculator – Calculate Gratuity",
    description:
      "Estimate gratuity amount based on salary and service years.",
    faqs: [],
  },

  options: {
    title: "Options Calculator – Profit & Loss",
    description:
      "Calculate profit and loss for options strategies.",
    faqs: [],
  },
};