'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, SendIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { siteConfig } from '@/config/site';
import { ApiError, getErrorMessage } from '@/lib/api-error';
import { cn } from '@/lib/utils';
import { api } from '@/services/api';
import { COUNTRIES } from '@/validators/countries';
import {
    QUOTE_CATEGORIES,
    QUOTE_PACKAGING,
    QUOTE_SHIPPING_METHODS,
    QUOTE_STEPS,
    QUOTE_UNITS,
    quoteSchema,
    type QuoteInput,
} from '@/validators/quote';

const toOptions = (values: readonly string[]) => values.map((v) => ({ value: v, label: v }));

export function QuoteWizard() {
    const [stepIndex, setStepIndex] = useState(0);
    const headingRef = useRef<HTMLHeadingElement>(null);

    const step = QUOTE_STEPS[stepIndex];
    const isReview = step.id === 'review';

    const {
        register,
        handleSubmit,
        trigger,
        reset,
        setError,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm<QuoteInput>({
        resolver: zodResolver(quoteSchema),
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: {
            fullName: '',
            company: '',
            jobTitle: '',
            email: '',
            phone: '',
            country: undefined,
            category: undefined,
            product: '',
            quantity: '',
            unit: undefined,
            specification: '',
            deliveryLocation: '',
            portOfDischarge: '',
            shippingMethod: undefined,
            targetDate: '',
            packaging: undefined,
            notes: '',
        },
    });

    const mutation = useMutation({
        mutationFn: (values: QuoteInput) => api.post<void>('/quote', values),
        onSuccess: () => {
            reset();
            setStepIndex(0);
        },
        onError: (error) => {
            if (error instanceof ApiError && error.fieldErrors) {
                for (const [field, messages] of Object.entries(error.fieldErrors)) {
                    if (field in quoteSchema.shape && messages[0]) {
                        setError(field as keyof QuoteInput, {
                            type: 'server',
                            message: messages[0],
                        });
                    }
                }
            }
        },
    });

    const goTo = (index: number) => {
        setStepIndex(index);
        requestAnimationFrame(() => headingRef.current?.focus());
    };

    const handleNext = async () => {
        const valid = await trigger(step.fields as unknown as (keyof QuoteInput)[], {
            shouldFocus: true,
        });
        if (valid) goTo(stepIndex + 1);
    };

    const onSubmit = handleSubmit((values) => mutation.mutateAsync(values).catch(() => {}));

    const showFormError =
        mutation.isError &&
        !(mutation.error instanceof ApiError && mutation.error.isValidationError);

    return (
        <div className="flex flex-col gap-10">
            <ol className="flex flex-wrap gap-x-2 gap-y-3">
                {QUOTE_STEPS.map((item, index) => {
                    const isDone = index < stepIndex;
                    const isCurrent = index === stepIndex;

                    return (
                        <li key={item.id} className="flex flex-1 basis-32 flex-col gap-2">
                            <span
                                aria-hidden="true"
                                className={cn(
                                    'h-1 rounded-full transition-colors',
                                    isDone || isCurrent ? 'bg-secondary' : 'bg-border',
                                )}
                            />
                            <span
                                aria-current={isCurrent ? 'step' : undefined}
                                className={cn(
                                    'text-caption flex items-center gap-1.5 font-semibold',
                                    isCurrent
                                        ? 'text-secondary'
                                        : isDone
                                          ? 'text-foreground'
                                          : 'text-muted-foreground',
                                )}
                            >
                                {isDone ? (
                                    <CheckIcon aria-hidden="true" className="size-3.5" />
                                ) : null}
                                <span className="sr-only">{`Step ${index + 1} of ${QUOTE_STEPS.length}: `}</span>
                                {item.title}
                                {isDone ? <span className="sr-only"> (completed)</span> : null}
                            </span>
                        </li>
                    );
                })}
            </ol>

            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
                {mutation.isSuccess ? (
                    <Alert variant="success">
                        <AlertTitle>Quotation request received</AlertTitle>
                        <AlertDescription>
                            A procurement specialist will be assigned to your case and will respond
                            within one business day.
                        </AlertDescription>
                    </Alert>
                ) : null}

                {showFormError ? (
                    <Alert variant="destructive">
                        <AlertTitle>Couldn&apos;t submit your request</AlertTitle>
                        <AlertDescription>
                            {getErrorMessage(mutation.error)}{' '}
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="font-semibold underline"
                            >
                                {siteConfig.email}
                            </a>
                        </AlertDescription>
                    </Alert>
                ) : null}

                <h3
                    ref={headingRef}
                    tabIndex={-1}
                    className="text-h4 focus-visible:ring-ring/50 rounded-md font-bold outline-none focus-visible:ring-[3px]"
                >
                    {step.title}
                </h3>

                {step.id === 'business' ? (
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Input
                            label="Full name"
                            autoComplete="name"
                            error={errors.fullName?.message}
                            {...register('fullName')}
                        />
                        <Input
                            label="Company name"
                            autoComplete="organization"
                            error={errors.company?.message}
                            {...register('company')}
                        />
                        <Input
                            label="Job title"
                            autoComplete="organization-title"
                            description="Optional."
                            error={errors.jobTitle?.message}
                            {...register('jobTitle')}
                        />
                        <Input
                            label="Email address"
                            type="email"
                            autoComplete="email"
                            error={errors.email?.message}
                            {...register('email')}
                        />
                        <Input
                            label="Phone number"
                            type="tel"
                            autoComplete="tel"
                            description="Optional."
                            error={errors.phone?.message}
                            {...register('phone')}
                        />
                        <Select
                            label="Country"
                            placeholder="Select your country"
                            autoComplete="country-name"
                            defaultValue=""
                            options={toOptions(COUNTRIES)}
                            error={errors.country?.message}
                            {...register('country')}
                        />
                    </div>
                ) : null}

                {step.id === 'product' ? (
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Select
                            label="Category"
                            placeholder="Select category"
                            defaultValue=""
                            options={toOptions(QUOTE_CATEGORIES)}
                            error={errors.category?.message}
                            {...register('category')}
                        />
                        <Input
                            label="Specific product"
                            placeholder="e.g. High-calcium limestone"
                            error={errors.product?.message}
                            {...register('product')}
                        />
                        <Input
                            label="Required quantity"
                            type="number"
                            inputMode="numeric"
                            min={1}
                            error={errors.quantity?.message}
                            {...register('quantity')}
                        />
                        <Select
                            label="Unit of measurement"
                            placeholder="Select unit"
                            defaultValue=""
                            options={toOptions(QUOTE_UNITS)}
                            error={errors.unit?.message}
                            {...register('unit')}
                        />
                        <div className="sm:col-span-2">
                            <Textarea
                                label="Grade / specification details"
                                rows={5}
                                description="Optional. Grades, tolerances, moisture content, certifications."
                                error={errors.specification?.message}
                                {...register('specification')}
                            />
                        </div>
                    </div>
                ) : null}

                {step.id === 'shipping' ? (
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Input
                            label="Delivery location"
                            placeholder="e.g. Onitsha, or Tema for export"
                            error={errors.deliveryLocation?.message}
                            {...register('deliveryLocation')}
                        />
                        <Input
                            label="Port of discharge"
                            placeholder="e.g. Apapa, Tema"
                            description="Optional. Only needed if we are exporting for you."
                            error={errors.portOfDischarge?.message}
                            {...register('portOfDischarge')}
                        />
                        <Select
                            label="Shipping method"
                            placeholder="Select method"
                            defaultValue=""
                            options={toOptions(QUOTE_SHIPPING_METHODS)}
                            error={errors.shippingMethod?.message}
                            {...register('shippingMethod')}
                        />
                        <Input
                            label="Target delivery date"
                            type="date"
                            description="Optional."
                            error={errors.targetDate?.message}
                            {...register('targetDate')}
                        />
                        <div className="sm:col-span-2">
                            <Select
                                label="Packaging & container preference"
                                placeholder="Select packaging"
                                defaultValue=""
                                options={toOptions(QUOTE_PACKAGING)}
                                error={errors.packaging?.message}
                                {...register('packaging')}
                            />
                        </div>
                    </div>
                ) : null}

                {step.id === 'additional' ? (
                    <Textarea
                        label="Special instructions"
                        rows={7}
                        description="Optional. Payment terms, inspection requirements, phased delivery — anything that shapes the quotation."
                        error={errors.notes?.message}
                        {...register('notes')}
                    />
                ) : null}

                {isReview ? <ReviewSummary values={getValues()} /> : null}

                <div className="flex flex-wrap items-center gap-3 pt-2">
                    {stepIndex > 0 ? (
                        <Button
                            type="button"
                            variant="outline"
                            size="lg"
                            onClick={() => goTo(stepIndex - 1)}
                            leftIcon={<ArrowLeftIcon />}
                        >
                            Back
                        </Button>
                    ) : null}

                    {isReview ? (
                        <Button
                            type="submit"
                            size="lg"
                            isLoading={isSubmitting || mutation.isPending}
                            loadingLabel="Submitting your request"
                            rightIcon={<SendIcon />}
                            className="ml-auto"
                        >
                            Submit quotation request
                        </Button>
                    ) : (
                        <Button
                            type="button"
                            size="lg"
                            onClick={handleNext}
                            rightIcon={<ArrowRightIcon />}
                            className="ml-auto"
                        >
                            {`Next: ${QUOTE_STEPS[stepIndex + 1].title}`}
                        </Button>
                    )}
                </div>
            </form>
        </div>
    );
}

const REVIEW_GROUPS = [
    {
        title: 'Business information',
        rows: [
            ['Name', 'fullName'],
            ['Company', 'company'],
            ['Job title', 'jobTitle'],
            ['Email', 'email'],
            ['Phone', 'phone'],
            ['Country', 'country'],
        ],
    },
    {
        title: 'Product details',
        rows: [
            ['Category', 'category'],
            ['Product', 'product'],
            ['Quantity', 'quantity'],
            ['Unit', 'unit'],
            ['Specification', 'specification'],
        ],
    },
    {
        title: 'Shipping & delivery',
        rows: [
            ['Delivery location', 'deliveryLocation'],
            ['Port of discharge', 'portOfDischarge'],
            ['Shipping method', 'shippingMethod'],
            ['Target date', 'targetDate'],
            ['Packaging', 'packaging'],
        ],
    },
    { title: 'Additional information', rows: [['Notes', 'notes']] },
] as const satisfies readonly {
    title: string;
    rows: readonly (readonly [string, keyof QuoteInput])[];
}[];

function ReviewSummary({ values }: { values: QuoteInput }) {
    return (
        <div className="flex flex-col gap-8">
            {REVIEW_GROUPS.map((group) => (
                <section key={group.title} aria-labelledby={`review-${group.title}`}>
                    <h4
                        id={`review-${group.title}`}
                        className="text-caption text-secondary mb-3 font-bold tracking-widest uppercase"
                    >
                        {group.title}
                    </h4>

                    <ul className="divide-border divide-y">
                        {group.rows.map(([label, field]) => {
                            const value = values[field];

                            return (
                                <li key={field} className="grid grid-cols-3 gap-4 py-2.5">
                                    <span className="text-small text-muted-foreground">
                                        {label}
                                    </span>
                                    <span className="text-small col-span-2 font-medium break-words">
                                        {value === undefined || value === '' ? (
                                            <span className="text-muted-foreground">
                                                Not provided
                                            </span>
                                        ) : (
                                            String(value)
                                        )}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            ))}

            <Alert>
                <AlertTitle>Before you submit</AlertTitle>
                <AlertDescription>
                    Please check these details carefully. A procurement specialist is assigned to
                    your case as soon as the request arrives.
                </AlertDescription>
            </Alert>
        </div>
    );
}
