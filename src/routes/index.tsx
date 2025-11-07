import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div className="text-xl font-bold text-green-600">Hello &quot;/&quot;!</div>
  );
}
