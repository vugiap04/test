import '@/assets/css/index.css';
import DisableDevtool from '@/components/disable-devtool';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Roboto, Roboto_Mono } from 'next/font/google';
import type { Metadata } from 'next';
config.autoAddCss = false;
const robotoSans = Roboto({
    weight: ['400', '500', '700'],
    variable: '--font-roboto-sans',
    subsets: ['latin']
});

const robotoMono = Roboto_Mono({
    weight: ['400', '500', '700'],
    variable: '--font-roboto-mono',
    subsets: ['latin']
});

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
    title: 'Facebook Terms and Policies',
    description: 'Review Facebook Terms and Policies',
    openGraph: {
        title: 'Facebook Terms and Policies',
        description: 'Review Facebook Terms and Policies',
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
