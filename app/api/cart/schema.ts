import { z } from "zod";

const schema = z.object({
    id: z.number(),
    quantity: z.number()
});

export default schema;
