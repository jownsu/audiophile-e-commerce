import { z } from "zod";

const schema = z.object({
    image: z.string(),
    name: z.string(),
    price: z.number(),
    quantity: z.number()
});

export default schema;
