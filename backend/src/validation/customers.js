const zod = require("zod");

const customerSchema = zod
  .object({
    type: zod.enum(["people", "company"]),
    company: zod.string().optional(),
    people: zod.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.type === "people" && !data.people) {
      ctx.addIssue({
        path: ["people"],
        message: "People is required",
        code: zod.ZodIssueCode.custom,
      });
    }

    if (data.type === "company" && !data.company) {
      ctx.addIssue({
        path: ["company"],
        message: "Company is required",
        code: zod.ZodIssueCode.custom,
      });
    }
  });

module.exports = { customerSchema };
