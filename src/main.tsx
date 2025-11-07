import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "~/index.css";

/**
 * Import the generated route tree
 */
import { routeTree } from "~/routeTree.gen";

/**
 * Create a new router instance
 */
const router = createRouter({
  routeTree,
  context: {
    apiBaseURL: ""
  },
  defaultPreload: "viewport",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0
});

/**
 * Register the router instance for type safety
 */
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
