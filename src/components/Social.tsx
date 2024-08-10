import React from "react";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/GuidoAmbiorix" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/guido-ambiorix-bab9bb183/",
  },
];

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <motion.div
      className={containerStyles}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
    >
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </motion.div>
  );
};

export default Social;
