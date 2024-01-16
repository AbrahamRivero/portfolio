import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import corpcommentImg from '@/public/corpcomment.png'
import rmtdevImg from '@/public/rmtdev.png'
import wordanalyticsImg from '@/public/wordanalytics.png'

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const

export const experiencesData = [
	{
		title: 'Graduated Computer Engineering degree',
		location: 'Matanzas, Cuba',
		description:
			'I graduated after 5 years of studying. I immediately found a job as a front-end developer.',
		icon: React.createElement(LuGraduationCap),
		date: '2016 - 2021',
	},
	{
		title: 'Front-End Developer',
		location: 'Matanzas, Cuba',
		description:
			'I worked as a front-end developer on the Teigee project for 2 years. I also upskilled to the full stack.',
		icon: React.createElement(CgWorkAlt),
		date: 'October 2021 - to the present day',
	},
	{
		title: 'Back-End Developer',
		location: 'Matanzas, Cuba',
		description:
			'I worked as a back-end developer for SensCloud. My stack includes now: MongoDB, Node.js + Express',
		icon: React.createElement(FaReact),
		date: 'November 2022 - January 2023',
	},
	{
		title: 'Front-End Developer',
		location: 'Matanzas, Cuba',
		description:
			'I  worked as a front-end developer on the Leiizy project from February 2023 to the present. My stack includes now: Next.js, Google Cloud, Redux, Material UI.',
		icon: React.createElement(FaReact),
		date: 'February 2022 - to the present day',
	},
	{
		title: 'Front-End Developer',
		location: 'Matanzas, Cuba',
		description:
			'I  worked as a front-end developer on the KYC.ONE project from March 2023 to April 2023. In this project, I had to layout the entire website and make adjustments to the design.',
		icon: React.createElement(FaReact),
		date: 'March 2023 - April 2023',
	},
	{
		title: 'Front-End Developer',
		location: 'Matanzas, Cuba',
		description:
			'I  worked as a front-end developer on the Cubamax project from September 2023 to October 2023. In this project, I had to make use of the new features that were included in Next.js 13 and NextAuth.',
		icon: React.createElement(FaReact),
		date: 'September 2023 - October 2023',
	},
] as const

export const projectsData = [
	{
		title: 'CorpComment',
		description:
			'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
		tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
		imageUrl: corpcommentImg,
	},
	{
		title: 'rmtDev',
		description:
			'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
		tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
		imageUrl: rmtdevImg,
	},
	{
		title: 'Word Analytics',
		description:
			'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
		tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
		imageUrl: wordanalyticsImg,
	},
	{
		title: 'Word Analytics',
		description:
			'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
		tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
		imageUrl: wordanalyticsImg,
	},
	{
		title: 'Word Analytics',
		description:
			'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
		tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
		imageUrl: wordanalyticsImg,
	},
] as const

export const skillsData = [
	'HTML',
	'CSS',
	'JavaScript',
	'Bootstrap',
	'TypeScript',
	'React',
	'Next.js',
	'Node.js',
	'NestJs',
	'Git',
	'Tailwind',
	'Prisma',
	'MongoDB',
	'Chakra UI',
	'Redux',
	'Express',
	'PostgreSQL',
	'Framer Motion',
	'Material UI',
] as const
