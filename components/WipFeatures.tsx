import { useState } from "react";

interface WipItem {
  title: string;
  description: string;
}

const WIP_ITEMS: WipItem[] = [
  {
    title: "Backup & Restore",
    description: "Create and restore database snapshots before TTL expiry",
  },
  {
    title: "Query History",
    description: "Save and replay previous SQL queries in the playground",
  },
  {
    title: "MySQL Support",
    description:
      "Only PostgreSQL is fully tested; MySQL provisioning is experimental",
  },
  {
    title: "Monitoring Dashboard",
    description: "Resource usage metrics and container health",
  },
];

export function WipFeatures() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-900 border-gray-800 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left
                 hover:bg-gray-800/50 transition-colors"
      >
        {/* Construction icon (inline SVG) */}
        <svg
          className="w-4 h-4 text-yellow-500 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 20h20" />
          <path d="M5 20V8.5L12 3l7 5.5V20" />
          <path d="M9 20v-5a3 3 0 0 1 6 0v5" />
        </svg>
        <span className="text-sm text-gray-300 font-medium flex-1">
          Work in Progress{""}
          <span className="ml-2 text-xs text-gray-500 font-normal">
            {WIP_ITEMS.length} features coming soon
          </span>
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="border-t border-gray-800 px-4 py-3 space-y-3">
          {WIP_ITEMS.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500/60 shrink-0" />
              <div>
                <p className="text-sm text-gray-300">{item.title}</p>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
