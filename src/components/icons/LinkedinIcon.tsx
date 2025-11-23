import React from "react";

type Props = React.SVGProps<SVGSVGElement> & { className?: string };

const LinkedinIcon: React.FC<Props> = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.34 17.34H6.12V10.5h2.22v6.84zM7.22 9.41c-.71 0-1.28-.58-1.28-1.29 0-.71.57-1.29 1.28-1.29.71 0 1.28.58 1.28 1.29 0 .71-.57 1.29-1.28 1.29zM18 17.34h-2.22v-3.36c0-.8-.02-1.83-1.12-1.83-1.12 0-1.29.88-1.29 1.8v3.39H11.1V10.5h2.13v.94h.03c.3-.57 1.03-1.17 2.12-1.17 2.27 0 2.69 1.5 2.69 3.44v3.63z" />
  </svg>
);

export default LinkedinIcon;
