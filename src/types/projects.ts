export type ProjectKey = "coffee" | "game" | "ceth";

export type Project = {
  key: ProjectKey;
  title: string;
  desc: string;
  tags: string[];
  image: string;
};

export type ContentBlock =
  | { type: "p"; text: string }                 // ย่อหน้า
  | { type: "h3"; text: string }                // หัวข้อย่อย
  | { type: "ul"; items: string[] }             // bullets
  | { type: "ol"; items: string[] }             // ลำดับเลข
  | { type: "hr" };                             // เส้นคั่น

// types/projects.ts
export type ProjectDetail = {
  title: string;
  img: string;
  content: ContentBlock[];
  rows: [string, string | string[]][]; // ← รองรับหลายลิงก์
};
