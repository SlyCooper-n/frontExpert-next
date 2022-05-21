import Link from "next/link";
import { SearchItems } from "./types";

export default function LinkItem(props: SearchItems) {
  const { href, children, ...rest } = props;

  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}
