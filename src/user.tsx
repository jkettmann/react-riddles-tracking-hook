import { useRef } from "react";
import { useTracking } from "./use-tracking";
import { Button } from "./button";
import { ReactComponent as EditIcon } from "./edit.svg";
import { useFetchUser } from "./use-fetch-user";

export function User() {
  const containerRef = useRef<HTMLDivElement>(null);
  useTracking(containerRef, "user-profile", { authStatus: "authenticated" });

  const { data, isLoading } = useFetchUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div ref={containerRef}>
      <p>User data: {data}</p>
      <Button data-tracking-id="edit-icon" icon={<EditIcon />} />
    </div>
  );
}
