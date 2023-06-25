import { useRef } from "react";
import { useTracking } from "./use-tracking";
import { Button } from "./button";
import { ReactComponent as EditIcon } from "./edit.svg";

export function User() {
  const containerRef = useRef<HTMLDivElement>(null);
  useTracking(containerRef, "user-profile", { authStatus: "authenticated" });

  return (
    <div ref={containerRef}>
      <Button data-tracking-id="edit">Edit</Button>
      <Button data-tracking-id="edit-icon" icon={<EditIcon />} />
    </div>
  );
}
