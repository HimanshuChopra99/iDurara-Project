const zod = require("zod");

const quotesSchema = zod.object({
  client: zod.string(),
  number: zod.number(),
  year: zod.number(),
  currency: zod.string(),
  status: zod
    .enum(["Draft", "Pending", "Sent", "Accepted", "Declined"])
    .default("Draft"),
  date: zod.date(),
  expireDate: zod.date(),
  note: zod.string().optional(),
  items: zod.array(zod.string()).default([]),
});

module.exports = { quotesSchema };
