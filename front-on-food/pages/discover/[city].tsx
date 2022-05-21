import { useRouter } from "next/router";
import React from "react";

export default function Discover() {
  const router = useRouter();
  const city = router.query.city;

  return <div>Discover {city}</div>;
}
