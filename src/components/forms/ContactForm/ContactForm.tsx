'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { SendIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { siteConfig } from '@/config/site';
import { ApiError, getErrorMessage } from '@/lib/api-error';
import { api } from '@/services/api';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import {
    contactSchema,
    ENQUIRY_CATEGORIES,
    NIGERIAN_STATES,
    type ContactInput,
} from '@/validators/contact';

const toOptions = (values: readonly string[]) => values.map((v) => ({ value: v, label: v }));

export function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<ContactInput>({
        resolver: zodResolver(contactSchema),
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: {
            fullName: '',
            company: '',
            email: '',
            phone: '',
            state: undefined,
            category: undefined,
            message: '',
        },
    });

    const mutation = useMutation({
        mutationFn: (values: ContactInput) => api.post<void>('/contact', values),
        onSuccess: () => reset(),
        onError: (error) => {
            if (error instanceof ApiError && error.fieldErrors) {
                for (const [field, messages] of Object.entries(error.fieldErrors)) {
                    if (field in contactSchema.shape && messages[0]) {
                        setError(field as keyof ContactInput, {
                            type: 'server',
                            message: messages[0],
                        });
                    }
                }
            }
        },
    });

    const onSubmit = handleSubmit((values) => mutation.mutateAsync(values).catch(() => {}));

    const showFormError =
        mutation.isError &&
        !(mutation.error instanceof ApiError && mutation.error.isValidationError);

    return (
        <form onSubmit={onSubmit} noValidate className="flex w-full flex-col gap-4">
            {isSubmitSuccessful && mutation.isSuccess ? (
                <Alert variant="success">
                    <AlertTitle>Enquiry received</AlertTitle>
                    <AlertDescription>
                        Our technical team will respond within one business day.
                    </AlertDescription>
                </Alert>
            ) : null}

            {showFormError ? (
                <Alert variant="destructive">
                    <AlertTitle>Couldn&apos;t send your enquiry</AlertTitle>
                    <AlertDescription>
                        {getErrorMessage(mutation.error)}{' '}
                        <a href={`mailto:${siteConfig.email}`} className="font-semibold underline">
                            {siteConfig.email}
                        </a>
                    </AlertDescription>
                </Alert>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2">
                <Input
                    label="Full name"
                    autoComplete="name"
                    placeholder="Ada Okonkwo"
                    error={errors.fullName?.message}
                    {...register('fullName')}
                />
                <Input
                    label="Company name"
                    autoComplete="organization"
                    placeholder="Acme Industrial Ltd"
                    error={errors.company?.message}
                    {...register('company')}
                />
                <Input
                    label="Business email"
                    type="email"
                    autoComplete="email"
                    placeholder="ada@acme.com"
                    error={errors.email?.message}
                    {...register('email')}
                />
                <Input
                    label="Phone number"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+234 000 000 0000"
                    description="Optional."
                    error={errors.phone?.message}
                    {...register('phone')}
                />
                <Select
                    label="State"
                    placeholder="Select your state"
                    defaultValue=""
                    options={toOptions(NIGERIAN_STATES)}
                    error={errors.state?.message}
                    {...register('state')}
                />
                <Select
                    label="Enquiry about"
                    placeholder="Select a division or service"
                    defaultValue=""
                    options={toOptions(ENQUIRY_CATEGORIES)}
                    error={errors.category?.message}
                    {...register('category')}
                />
            </div>

            <Textarea
                label="Message / specifications"
                rows={6}
                placeholder="Part numbers, volumes, grades, delivery window…"
                description="At least 20 characters. Include quantities and destination port where you can."
                error={errors.message?.message}
                {...register('message')}
            />

            <Button
                type="submit"
                size="lg"
                isLoading={isSubmitting || mutation.isPending}
                loadingLabel="Sending your enquiry"
                rightIcon={<SendIcon />}
                className="sm:w-fit sm:self-end"
            >
                Submit enquiry
            </Button>
        </form>
    );
}
