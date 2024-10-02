import '../global.css'
import { Inter } from '@next/font/google'
import LocalFont from '@next/font/local'
import { Metadata } from 'next'
import { Analytics } from './components/analytics'

export const metadata: Metadata = {
	title: {
		default: '$BUFFALO',
		template: '%s | $BUFFALO',
	},
	description: '$BUFFALO is a meme coin based on Solana.',
	// openGraph: {
	// 	title: '$BUFF',
	// 	description: '$BUFF is a meme coin based on Solana.',
	// 	url: 'https://chronark.com',
	// 	siteName: 'chronark.com',
	// 	images: [
	// 		{
	// 			url: 'https://chronark.com/og.png',
	// 			width: 1920,
	// 			height: 1080,
	// 		},
	// 	],
	// 	locale: 'en-US',
	// 	type: 'website',
	// },
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: '$BUFFALO',
		card: 'summary_large_image',
	},
	icons: {
		shortcut: '/favicon.png',
	},
}
const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

const calSans = LocalFont({
	src: '../public/fonts/6qLbKZMbrgv9pwtjPEVNV0F2Ds_WQxMAZkM1pn4.ttf',
	variable: '--font-calsans',
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(' ')}>
			<head>
				<link
					href="https://vjs.zencdn.net/8.16.1/video-js.css"
					rel="stylesheet"
				/>
				<link rel="stylesheet" href="/style.css" />
			</head>
			<body
				className={`bg-black font-display ${
					process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined
				}`}
			>
				{children}
				<link
					href="https://vjs.zencdn.net/8.16.1/video-js.css"
					rel="stylesheet"
				/>
			</body>
		</html>
	)
}
