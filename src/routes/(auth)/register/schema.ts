import { z } from 'zod';

export const formSchema = z.object({
	email: z.string().email(),
	// name: z.string().min(4, 'Codename must be at least 4 characters long'),
	password: z.string().min(6, 'Password must be at least 6 characters long'),
	phone: z.string(),
});

export type FormSchema = typeof formSchema;
