export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  summary: string;
  stack: string[];
}

export const experience: ExperienceItem[] = [
  {
    period: "Lorem - ipsum",
    company: "Lorem Studio",
    role: "Dolor amet",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["Lorem", "Ipsum", "Dolor", "Amet"],
  },
  {
    period: "Dolor - sit",
    company: "Ipsum Commerce",
    role: "Consectetur elit",
    summary:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    stack: ["Sit", "Amet", "Tempor", "Labore"],
  },
  {
    period: "Amet - elit",
    company: "Dolor Agency",
    role: "Incididunt labore",
    summary:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    stack: ["Elit", "Magna", "Aliqua", "Minim"],
  },
];
