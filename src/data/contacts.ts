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
    href: "test",
    isFile: false,
  },
  {
    label: "Ipsum",
    value: "dolor sit",
    href: "test",
    isFile: false,
  },
  {
    label: "Dolor",
    value: "amet elit",
    href: "test",
    isFile: false,
  },
  {
    label: "Aspernatur",
    value: "Libero repudiandae aspernatur repellat",
    href: "test",
    isFile: true,
  },
];
