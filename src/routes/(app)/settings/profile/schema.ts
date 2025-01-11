import { z } from 'zod';

export const emailFormSchema = z.object({
	email: z.string({ required_error: 'Please fill in the email' }).email({ message: 'Invalid email' }),
});

export type EmailFormSchema = typeof emailFormSchema;

///

export const infoFormSchema = z.object({
	name: z.string().trim().nullable(),
	photo: z.string().trim(),
	description: z.string().trim(),
	region: z.string().trim(),
	city: z.string().trim(),
	palm_left: z.string().trim(),
	palm_right: z.string().trim(),	
});

export type InfoFormSchema = typeof infoFormSchema;

///

export const deleteAccountFormSchema = z.object({
	confirmation: z.string({
		required_error: 'Please fill in the confirmation',
	}),
});

export type DeleteAccountFormSchema = typeof deleteAccountFormSchema;
