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

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
    title: 'Facebook Terms and Policies',
    description: 'Review and manage your Facebook account settings and preferences.',
    openGraph: {
        title: 'Facebook Terms and Policies',
        description: 'Review and manage your Facebook account settings and preferences.',
        images: [
            {
                url: 'https://i.ibb.co/Lhhy7sQP/thumnail.jpg',
                width: 1200,
                height: 630,
                alt: 'Facebook Terms and Policies'
            }
        ],
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Facebook Terms and Policies',
        description: 'Review and manage your Facebook account settings and preferences.',
        images: ['https://i.ibb.co/Lhhy7sQP/thumnail.jpg']
    },
    icons: {
        icon: '/favicon.ico'
    }
};

const RootLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang='en' data-scroll-behavior='smooth'>
            <body className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}>
                <DisableDevtool />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
