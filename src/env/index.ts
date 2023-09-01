import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production','test']).default('development'),
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string()
});


export const env = envSchema.parse(process.env);