import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@admaloch",
    icon: Icons.gitHub,
    link: "https://github.com/admaloch",
  },
  {
    name: "LinkedIn",
    username: "Andrew Maloch",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/andrew-maloch-631804250/",
  },
  {
    name: "Gmail",
    username: "andrew.davismaloch",
    icon: Icons.gmail,
    link: "mailto:andrew.davismaloch@gmail.com",
  },
];
