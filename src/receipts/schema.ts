export type SocratesReceipt = {
  runId: string;
  task: string;
  mode: "read-only" | "propose" | "safe-write" | "autopilot";
  status: "success" | "failed" | "partial" | "blocked" | "planned";
  createdAt: string;
  summary: string;
  observations: string[];
  plan: string[];
  files: string[];
  commands: string[];
  verification: string[];
  lessons: string[];
  hermesReview: {
    status: string;
    promptPath?: string;
    summary: string;
  };
  skillCandidates: string[];
};
