import { MutableRefObject, useEffect } from "react";

function getTrackingId(element: HTMLElement | null) {
  if (!element) {
    return null;
  }
  const trackingId = element.dataset.trackingId;
  if (trackingId) {
    return trackingId;
  }
  return getTrackingId(element.parentElement);
}

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
      const trackingId = getTrackingId(target);

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
