/**
 * Formats a number as U.S. currency, e.g. 1234.5 -> "$1,234.50".
 *
 * @param value    The amount to format.
 * @param currency ISO 4217 currency code. Defaults to "USD".
 */
// export function formatCurrency(value: number, currency: string = "USD"): string {
//     try {
//         if (!Number.isFinite(value)) {
//             throw new RangeError(`Cannot format "${value}" as currency`);
//         }

//         return new Intl.NumberFormat("en-US", {
//             style: "currency",
//             currency,
//             minimumFractionDigits: 2,
//             maximumFractionDigits: 2,
//         }).format(value);
//     } catch {
//         // Fallback for unsupported currency codes / invalid values.
//         const amount = Number.isFinite(value) ? value : 0;
//         return `$${amount.toFixed(2)}`;
//     }
// }
import dayjs from "dayjs";

export const formatCurrency = (value: number, currency = "USD"): string => {
    try {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);
    } catch {
        return value.toFixed(2);
    }
};

export const formatSubscriptionDateTime = (value?: string): string => {
    if (!value) return "Not provided";
    const parsedDate = dayjs(value);
    return parsedDate.isValid() ? parsedDate.format("MM/DD/YYYY") : "Not provided";
};

export const formatStatusLabel = (value?: string): string => {
    if (!value) return "Unknown";
    return value.charAt(0).toUpperCase() + value.slice(1);
};