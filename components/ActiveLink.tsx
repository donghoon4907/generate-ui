import { useRouter } from "next/router";
import { FC, MouseEvent } from "react";

import { CoreProps } from "../interfaces/core";

interface Props extends CoreProps {
  href: string | null;
  ariaLabel?: string;
  tabIndex?: string;
}

export const ActiveLink: FC<Props> = ({
  children,
  href,
  ariaLabel = "",
  tabIndex = "0"
}) => {
  const router = useRouter();

  const handleClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    router.push(href || "/");
  };

  return (
    <a onClick={handleClick} aria-label={ariaLabel} tab-index={tabIndex}>
      {children}
    </a>
  );
};
