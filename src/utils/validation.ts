export function validateInput(input: string): boolean | string {
    if (!input.trim()) {
        return 'This field is required';
    }
    return true;
} 