import { z } from 'zod';

const clientSchema = z.object({
    NEXT_PUBLIC_APP_URL: z.url().default('https://pishon-nine.vercel.app'),
    NEXT_PUBLIC_API_URL: z.url().default('https://pishon-nine.vercel.app/api'),
});

const serverSchema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    RESEND_API_KEY: z.string().min(1).optional(),
    ENQUIRY_INBOX: z.email().optional(),
    ENQUIRY_FROM: z.string().min(1).optional(),
});

const clientEnv = {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
};

const serverEnv = {
    NODE_ENV: process.env.NODE_ENV,
    RESEND_API_KEY: process.env.RESEND_API_KEY || undefined,
    ENQUIRY_INBOX: process.env.ENQUIRY_INBOX || undefined,
    ENQUIRY_FROM: process.env.ENQUIRY_FROM || undefined,
};

function parse<T extends z.ZodType>(schema: T, input: unknown, scope: string): z.infer<T> {
    const result = schema.safeParse(input);

    if (!result.success) {
        const issues = result.error.issues
            .map((issue) => `  - ${issue.path.join('.') || '(root)'}: ${issue.message}`)
            .join('\n');

        throw new Error(`Invalid ${scope} environment variables:\n${issues}`);
    }

    return result.data;
}

const isServer = typeof window === 'undefined';

export const env = {
    ...parse(clientSchema, clientEnv, 'client'),
    ...(isServer ? parse(serverSchema, serverEnv, 'server') : ({} as z.infer<typeof serverSchema>)),
};

export const isProduction = process.env.NODE_ENV === 'production';
export const isDevelopment = process.env.NODE_ENV === 'development';
