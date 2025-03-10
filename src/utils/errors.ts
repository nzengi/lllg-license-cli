export class LLGError extends Error {
  constructor(message: string, public code: string) {
    super(message);
    this.name = 'LLGError';
  }
}

export const ErrorCodes = {
  INVALID_LICENSE_TYPE: 'INVALID_LICENSE_TYPE',
  INVALID_INPUT: 'INVALID_INPUT',
  FILE_SYSTEM_ERROR: 'FILE_SYSTEM_ERROR',
} as const; 