import mdx from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';
export default withNextIntl(withMDX(nextConfig));

try {
    const withMDX = mdx({
        extension: /\.mdx?$/,
        options: { },
    });

    const withNextIntl = createNextIntlPlugin();

    /** @type {import('next').NextConfig} */
    const nextConfig = {
        pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    };

    

} catch (error) {
    if (!(error instanceof Error)) {
        throw new Error('Unexpected error type: ' + error);
    } else {
        throw error;
    }
}
