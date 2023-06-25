import { MutableRefObject, useEffect } from "react";

export function useTracking(
  containerRef: MutableRefObject<HTMLElement | null>,
  containerId: string,
  trackingParams?: Record<string, string>
) {
  useEffect(() => {
    // container not yet mounted
    if (!containerRef.current) {
      return;
    }
    const container = containerRef.current;

    // the callback that sends the tracking event
    const listener = (event: Event) => {
      // get the tracking id from the data attribute (e.g. data-tracking-id="button-1")
      const target = event.target as HTMLElement;
      const trackingId = target.dataset.trackingId;

      // Send tracking event
      if (trackingId) {
        console.log(`Tracking ${containerId} ${trackingId}`);
        window.tracking.push([containerId, trackingId, trackingParams]);
      }
    };

    container.addEventListener("click", listener);
    return () => {
      container.removeEventListener("click", listener);
    };
  }, [containerRef, containerId, trackingParams]);
}
