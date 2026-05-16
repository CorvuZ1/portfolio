export interface ContactItem {
  label: string;
  value: string;
  href: string;
  isFile: boolean;
}

export const contacts: ContactItem[] = [
  {
    label: "Lorem",
    value: "lorem ipsum",
    href: "test-1",
    isFile: false,
  },
  {
    label: "Ipsum",
    value: "dolor sit",
    href: "test-2",
    isFile: false,
  },
  {
    label: "Dolor",
    value: "amet elit",
    href: "test-3",
    isFile: false,
  },
  {
    label: "Aspernatur",
    value: "Libero repudiandae aspernatur repellat",
    href: "test-4",
    isFile: true,
  },
];
