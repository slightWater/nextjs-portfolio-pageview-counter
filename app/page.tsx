import Link from 'next/link'
import React from 'react'
import Particles from './components/particles'

const navigation = [
	{ name: 'Home', href: '/' },
	{ name: 'Contact', href: '/contact' },
]

export default function Home() {
	return (
		<div className="flex flex-col items-center mt-20% sm:justify-center w-screen h-screen overflow-scroll sm:overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			{/* <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav> */}
			{/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in hidden sm:block"
				quantity={100}
			/>

			<div className="flex w-5/6 max-w-7xl mx-auto px-4 flex-g sm:justify-between flex-col sm:flex-row">
				<div className="flex flex-1 flex-col justify-center py-8 sm:py-0">
					<h5 className="tracking-wide py-1 px-0.5 z-10 text-center text-4xl sm:text-5xl sm:text-left text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display bg-clip-text break-words">
						WELCOME TO BUFFALO
					</h5>

					<div className="sm:my-20 animate-fade-in">
						<h5 className="text-3xl sm:text-4xl sub-color leading-50px clip text-center sm:text-left">
							Buffalo is a meme coin based on Solana inspired by a buffalo
							that has suddenly come to a standstill while grazing.
						</h5>
					</div>
				</div>
				<div className="flex-1 justify-center flex">
					<video
						id="my-video"
						className="video-js element"
						controls
						preload="auto"
						// width="355"
						// height="640"
						poster="/poster.png"
						data-setup="{}"
					>
						<source src="/buff.mp4" type="video/mp4" />
						<p className="vjs-no-js">
							To view this video please enable JavaScript, and consider
							upgrading to a web browser that
							<a
								href="https://videojs.com/html5-video-support/"
								target="_blank"
							>
								supports HTML5 video
							</a>
						</p>
					</video>
				</div>
			</div>
			{/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
		</div>
	)
}
