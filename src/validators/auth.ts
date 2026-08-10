import { z } from 'zod';

export const passwordSchema = z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(72, 'Password must be at most 72 characters')
    .regex(/[a-z]/, 'Include at least one lowercase letter')
    .regex(/[A-Z]/, 'Include at least one uppercase letter')
    .regex(/[0-9]/, 'Include at least one number');

export const loginSchema = z.object({
    email: z.email('Enter a valid email address'),
    password: z.string().min(1, 'Password is required'),
    rememberMe: z.boolean(),
});

export const registerSchema = z
    .object({
        name: z.string().trim().min(2, 'Name must be at least 2 characters'),
        email: z.email('Enter a valid email address'),
        password: passwordSchema,
        confirmPassword: z.string(),
        acceptTerms: z.literal(true, 'You must accept the terms to continue'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    });

export const forgotPasswordSchema = z.object({
    email: z.email('Enter a valid email address'),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
