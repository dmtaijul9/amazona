import Link from "next/link";
import React from "react";

const DropdownLink = ({ children, href, ...rest }) => {
  console.log(children);
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
};

export default DropdownLink;
