import { query } from "./_generated/server";
import { v } from "convex/values";

export const getTaxReports = query({
  handler: async (ctx) => {
    const task = await ctx.db.query("Reports").collect();
    return task;
  },
});
