import { z } from 'zod';

export const orgformSchema = z.object({
	name: z.string().trim(),
	city: z.string().trim(),
	description: z.string().trim(),
	address: z.string().trim(),
	// email: z.string().email(),						
	logo: z.string().trim(),
	mobile: z.string().trim(),
	phone: z.string().trim(),
	region: z.string().trim(),
	url1: z.string().trim(),
	url2: z.string().trim(),
});


export type OrgFormSchema = typeof orgformSchema;
