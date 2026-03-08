export type MarketIndex = {
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
};

export const marketStatus = {
  isOpen: true,
};

export const marketData: MarketIndex[] = [
  {
    name: "NIFTY 50",
    value: "22,150",
    change: "+0.45%",
    isPositive: true,
  },
  {
    name: "BANK NIFTY",
    value: "48,210",
    change: "+0.32%",
    isPositive: true,
  },
  {
    name: "SENSEX",
    value: "73,250",
    change: "+0.38%",
    isPositive: true,
  },
];