export type CommentaryItem = {
  time: string;
  category: "NIFTY" | "BANKNIFTY" | "GLOBAL" | "FII" | "SECTOR";
  text: string;
};

export const commentaryData: CommentaryItem[] = [
  {
    time: "09:20 AM",
    category: "NIFTY",
    text: "NIFTY opens flat near 22,150 amid mixed global cues.",
  },
  {
    time: "09:35 AM",
    category: "BANKNIFTY",
    text: "Banking stocks showing mild weakness in early trade.",
  },
  {
    time: "10:10 AM",
    category: "FII",
    text: "FIIs net buyers in first hour of trade.",
  },
];