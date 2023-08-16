export function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleString("en-GB",{
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    });
}