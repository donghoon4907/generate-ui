import { useRouter } from "next/router";
import type { FC, MouseEvent } from "react";

import type { CoreProps } from "../interfaces/core";

interface Props extends CoreProps {
  href: string | undefined;
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
