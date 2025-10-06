import { TaskStatus } from "@/types";

// Status colors mapping
export const STATUS_COLORS: Record<TaskStatus, string> = {
  todo: "bg-stone-200 text-stone-900 dark:bg-stone-800 dark:text-stone-100",
  "in-progress": "bg-amber-100 text-amber-900 dark:bg-amber-300/20 dark:text-amber-300",
  completed: "bg-emerald-100 text-emerald-900 dark:bg-emerald-300/20 dark:text-emerald-300",
};
