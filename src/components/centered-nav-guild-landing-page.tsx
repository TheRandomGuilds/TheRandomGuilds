'use client';

import cat from '../assets/images/cast/cat.png';
import matt from '../assets/images/cast/matt.png';
import caleb from '../assets/images/cast/caleb.png';

import logo from '../assets/images/logo/logo.png';
import { Card, CardContent } from '@/components/ui/card';
import { Facebook, Twitter, Instagram, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function CenteredNavGuildLandingPageComponent() {
	const characters = [
		{
			name: 'Cat',
			role: 'Queen',
			description:
				"Cat is One of the host and founders for T.R.G. She's the definition of Chaotic, Energenic, enthusiastic, and A mood swing between Cool and Childish/Playful. Her main responsibility is unknown, but she holds a heavy resposibility for Editing, Sosial Media and Visual Ideas.",
			image: cat,
			color: 'text-red-400',
		},
		{
			name: 'MATT',
			role: 'Human',
			description:
				'Matthew is one of the founders of The Random Guild, he\'s main appearance is mostly Red wearing a sweater. He\'s known for the content Research for the Podcast/Gaming. He has great skills behind the wheel in Racing Games and has an encyclopedia about Motorsports. Sarcastic, Friendly, Charming, and known to say "Oh For God Sake". In our Videos.',
			image: matt,
			color: 'text-orange-400',
		},
		{
			name: 'Caleb',
			role: 'Indo-Warrior',
			description:
				"Caleb is one of the founders of The Random guild and he is one of the host. He's a wheelchair guy, and He's a chill introverted guy. He is in charge of history and gaming and he like to research about animals and nature also history and a geek towards dinos. He is currently learning many languages and hes known by saying jurassic park quotes. And held resposibility to write subtitles and warms his bud's hearts.",
			image: caleb,
			color: 'text-yellow-400',
		},
		{
			name: 'Thorne Shadowstep',
			role: 'Halfling Rogue',
			description:
				'Small in stature but big on stealth, Thorne can slip past any guard and pick any lock. His nimble fingers and sharp wit have gotten the Vanguard out of (and sometimes into) the tightest of spots.',
			image: '/placeholder.svg?height=300&width=300',
			color: 'text-green-400',
		},
		{
			name: 'Luna Frostweaver',
			role: 'Gnome Enchantress',
			description:
				"A master of illusions and enchantments, Luna's spells can befuddle even the most strong-willed opponents. Her creative problem-solving and magical ingenuity provide the Vanguard with unexpected advantages in their quests.",
			image: '/placeholder.svg?height=300&width=300',
			color: 'text-blue-400',
		},
		{
			name: 'Azura Starborn',
			role: 'Aasimar Paladin',
			description:
				"Blessed by the celestials, Azura's radiant power smites evil and heals allies in times of need. Her unwavering faith and inspiring presence bolster the Vanguard's resolve in the face of darkness.",
			image: '/placeholder.svg?height=300&width=300',
			color: 'text-indigo-400',
		},
	];

	const navItems = ['Cast', 'About Us', 'FAQs', 'Studio', 'BTS'];

	return (
		<div className="min-h-screen bg-gray-900 text-gray-100">
			<header className="py-4 px-4 bg-gray-800 bg-opacity-50 sticky top-0 z-10 backdrop-blur-sm">
				<div className="container mx-auto">
					<nav className="hidden md:flex justify-center space-x-8">
						{navItems.map((item, index) => (
							<a
								key={index}
								href="#"
								className="hover:text-gray-300 transition-colors"
							>
								{item}
							</a>
						))}
					</nav>
					<DropdownMenu>
						<DropdownMenuTrigger asChild className="md:hidden mx-auto block">
							<Button variant="outline" size="icon">
								<Menu className="h-[1.2rem] w-[1.2rem]" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="center">
							{navItems.map((item, index) => (
								<DropdownMenuItem key={index}>
									<a href="#" className="w-full">
										{item}
									</a>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</header>
			<main className="container mx-auto px-4 py-8">
				<div className="text-center mb-12">
					<img
						src={logo}
						alt="TheRandomGuilds Logo"
						width={100}
						height={100}
						className="mx-auto mb-4"
					/>
					<h1 className="text-4xl font-bold mb-4">TheRandomGuilds</h1>
					<p className="max-w-2xl mx-auto mb-4">
						Welcome to the official T.R.G's Website/carrd! Here, we show you
						what's the details and basics stuff within this show! In case you
						missed it.
					</p>
					<div className="flex justify-center space-x-4">
						<a
							href="#"
							aria-label="Facebook"
							className="text-gray-300 hover:text-white transition-colors"
						>
							<Facebook size={24} />
						</a>
						<a
							href="#"
							aria-label="Twitter"
							className="text-gray-300 hover:text-white transition-colors"
						>
							<Twitter size={24} />
						</a>
						<a
							href="#"
							aria-label="Instagram"
							className="text-gray-300 hover:text-white transition-colors"
						>
							<Instagram size={24} />
						</a>
					</div>
				</div>
				<h2 className="text-3xl font-semibold mb-12 text-center">
					Meet Our Cast!
				</h2>
				<div className="space-y-24">
					{characters.map((character, index) => (
						<Card
							key={index}
							className="overflow-hidden bg-transparent border-none shadow-none"
						>
							<CardContent
								className={`p-0 flex flex-col ${
									index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
								} items-center`}
							>
								<div
									className={`flex-1 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg ${
										index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
									}`}
								>
									<h3 className={`text-3xl font-bold mb-2 ${character.color}`}>
										{character.name}
									</h3>
									<h4 className="text-xl text-gray-300 mb-4">
										{character.role}
									</h4>
									<p className="text-gray-100 leading-relaxed">
										{character.description}
									</p>
								</div>
								<div className="md:w-1/3 relative aspect-square overflow-hidden rounded-full shadow-lg mt-6 md:mt-0">
									<img
										src={character.image}
										alt={character.name}
										className="transition-transform duration-300 hover:scale-110"
									/>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</main>
		</div>
	);
}
