import type { PropertyStatus, PropertyType } from "@/lib/properties/types";
import { formatPropertyType, formatStatus } from "@/lib/properties/specs";

const TYPES: PropertyType[] = [
  "villa",
  "apartment",
  "house",
  "commercial",
  "land",
  "office",
  "industrial",
  "hotel",
  "investment",
  "condominium",
];

const STATUSES: PropertyStatus[] = [
  "available",
  "coming_soon",
  "reserved",
  "under_development",
  "sold",
];

type DirectoryFiltersProps = {
  currentType?: string;
  currentStatus?: string;
  currentQuery?: string;
};

export function DirectoryFilters({
  currentType,
  currentStatus,
  currentQuery,
}: DirectoryFiltersProps) {
  return (
    <form
      method="get"
      className="grid gap-4 border-y border-line py-6 sm:grid-cols-[1fr_auto_auto] sm:items-end"
    >
      <label className="grid gap-2 text-sm">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">Search</span>
        <input
          type="search"
          name="q"
          defaultValue={currentQuery ?? ""}
          placeholder="Location or property name"
          className="focus-ring border-b border-line bg-transparent py-2 text-foreground outline-none"
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">Type</span>
        <select
          name="type"
          defaultValue={currentType ?? ""}
          className="focus-ring border-b border-line bg-transparent py-2 outline-none"
        >
          <option value="">All types</option>
          {TYPES.map((type) => (
            <option key={type} value={type}>
              {formatPropertyType(type)}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">Status</span>
        <select
          name="status"
          defaultValue={currentStatus ?? ""}
          className="focus-ring border-b border-line bg-transparent py-2 outline-none"
        >
          <option value="">All statuses</option>
          {STATUSES.map((status) => (
            <option key={status} value={status}>
              {formatStatus(status)}
            </option>
          ))}
        </select>
      </label>
      <div className="sm:col-span-3">
        <button
          type="submit"
          className="focus-ring text-sm uppercase tracking-[0.18em] text-accent"
        >
          Apply filters
        </button>
      </div>
    </form>
  );
}
