interface LicenseOptions {
    type: 'standard' | 'enterprise';
    organization: string;
    projectName: string;
    key?: string;
}

export async function generateLicense(options: LicenseOptions): Promise<string> {
    const year = new Date().getFullYear();
    const licenseId = options.key || `FREE-${Math.random().toString(36).substring(7).toUpperCase()}`;

    return `LawLinkGlobal (LLG) ${options.type === 'enterprise' ? 'Enterprise' : 'Standard'} License

Copyright (c) ${year} ${options.organization}

This is an official LawLinkGlobal software license agreement between LawLinkGlobal ("LLG") 
and ${options.organization} ("Licensee") for the project "${options.projectName}".

License ID: ${licenseId}
Type: ${options.type.toUpperCase()}
Issue Date: ${new Date().toISOString().split('T')[0]}

1. GRANT OF LICENSE
   LawLinkGlobal hereby grants Licensee a ${options.type === 'enterprise' ? 'perpetual' : 'non-perpetual'}, 
   ${options.type === 'enterprise' ? 'worldwide' : 'limited'}, non-exclusive license to use the Software subject 
   to the terms and conditions of this Agreement.

2. SCOPE OF USE
   ${options.type === 'enterprise'
            ? '- Unlimited commercial use\n   - Unlimited deployments\n   - Source code access\n   - Custom modifications permitted'
            : '- Limited commercial use\n   - Up to 5 deployments\n   - Compiled form only\n   - Modifications require approval'}

3. SUPPORT AND MAINTENANCE
   ${options.type === 'enterprise'
            ? '- 24/7 priority support\n   - Dedicated account manager\n   - Custom feature development\n   - Priority bug fixes'
            : '- Standard email support\n   - Community forum access\n   - Regular security updates\n   - Standard bug fixes'}

4. RESTRICTIONS
   - No redistribution without written permission
   - No reverse engineering
   - No removal of copyright notices
   - No use in competing products

For full terms and conditions, visit: https://lawlinkglobal.com/licenses/${options.type}

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
LawLinkGlobal SHALL NOT BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY.`;
} 