export function capitalize(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

export function slugify(value: string): string {
    return value
        .normalize('NFKD')
        .replace(/\p{Diacritic}/gu, '')
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/[\s-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

export function getInitials(name: string, max = 2): string {
    return name
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, max)
        .map((part) => part[0]!.toUpperCase())
        .join('');
}

export function truncate(value: string, maxLength: number, suffix = '…'): string {
    if (value.length <= maxLength) return value;

    const clipped = value.slice(0, maxLength - suffix.length);
    const lastSpace = clipped.lastIndexOf(' ');

    return (lastSpace > 0 ? clipped.slice(0, lastSpace) : clipped).trimEnd() + suffix;
}
