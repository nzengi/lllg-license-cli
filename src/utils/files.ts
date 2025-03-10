import fs from 'fs/promises';
import path from 'path';
import { LLGError, ErrorCodes } from './errors';

interface LicenseMetadata {
    type: 'standard' | 'enterprise';
    organization: string;
    projectName: string;
    key?: string;
    createdAt: string;
}

export async function saveLicense(content: string): Promise<void> {
    try {
        const licensePath = path.join(process.cwd(), 'LICENSE');
        await fs.writeFile(licensePath, content, 'utf-8');
    } catch (error) {
        throw new LLGError(
            `Failed to save license file: ${error instanceof Error ? error.message : 'Unknown error'}`,
            ErrorCodes.FILE_SYSTEM_ERROR
        );
    }
}

export async function saveMetadata(options: Omit<LicenseMetadata, 'createdAt'>): Promise<void> {
    try {
        const metadata: LicenseMetadata = {
            ...options,
            type: options.type,
            createdAt: new Date().toISOString()
        };

        const metadataPath = path.join(process.cwd(), '.llg-license');
        await fs.writeFile(metadataPath, JSON.stringify(metadata, null, 2), 'utf-8');
    } catch (error) {
        throw new LLGError(
            `Failed to save metadata: ${error instanceof Error ? error.message : 'Unknown error'}`,
            ErrorCodes.FILE_SYSTEM_ERROR
        );
    }
} 