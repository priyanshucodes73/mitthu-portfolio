import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/mitthu-kumar-bhagat73/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/priyanshucodes73",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://x.com/Priyanshu737",
    icon: FaTwitter,
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com/mr.bhagat7373/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/priyanshu7373/",
    icon: FaFacebook,
    label: "Facebook",
  },
];

const SocialIcons = () => {
  return (
    <div className="flex flex-row gap-4">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black/90 hover:bg-black transition-colors"
        >
          <Icon className="text-cyan-400 hover:text-cyan-300 text-2xl transition-colors" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
