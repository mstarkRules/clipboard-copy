import { Container } from "./styles";

import { BsLinkedin, BsTelephone } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

interface SocialItemProps {
  icon: "BsLinkedin" | "BsWhatsapp" | "BsGithub" | "BsTelephone" | "CgProfile";
  type: "linkedin" | "whatsapp" | "github" | "phone" | "profile";
  link: string;
  size: "medium" | "large" | "small";
  title?: string;
}

export function SocialItem({ icon, type, link, size, title }: SocialItemProps) {
  return (
    <>
      <Container type={type} size={size} title={title}>
        <a href={link} target="_blank">
          <h1>
            {icon === "CgProfile" && <CgProfile />}
            {icon === "BsLinkedin" && <BsLinkedin />}
            {icon == "BsWhatsapp" && <BsWhatsapp />}
            {icon == "BsGithub" && <BsGithub />}
            {icon == "BsTelephone" && <BsTelephone />}
          </h1>
        </a>
      </Container>
    </>
  );
}
