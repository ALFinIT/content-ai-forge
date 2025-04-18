
import React from "react";

const HashtagIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 9h16"></path>
    <path d="M4 15h16"></path>
    <path d="M10 3v18"></path>
    <path d="M14 3v18"></path>
  </svg>
);

export default HashtagIcon;
