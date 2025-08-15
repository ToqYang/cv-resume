// Type definitions
interface Article {
	title: string;
	url: string;
	source: string;
	date: string;
	category: string;
	description: string;
}

interface Filter {
	id: string;
	label: string;
	getCount: (freeCodeCamp: Article[], medium: Article[]) => number;
}

interface BlogConfig {
	hero: {
		title: string;
		description: string;
	};
	filters: Filter[];
	articles: {
		freeCodeCamp: Article[];
		medium: Article[];
	};
	buttons: {
		readMore: string;
		viewAll: string;
		readArticle: string;
	};
}

// Blog page configuration with multilingual support
export const blogConfig: Record<string, BlogConfig> = {
	EN: {
		hero: {
			title: "Blog",
			description: "Technical articles and tutorials about programming, web development, and technology"
		},
		filters: [
			{
				id: 'all',
				label: 'All Articles',
				getCount: (freeCodeCamp, medium) => freeCodeCamp.length + medium.length
			},
			{
				id: 'freeCodeCamp',
				label: 'freeCodeCamp',
				getCount: (freeCodeCamp) => freeCodeCamp.length
			},
			{
				id: 'medium',
				label: 'Medium',
				getCount: (_, medium) => medium.length
			}
		],
		articles: {
			freeCodeCamp: [
				{
					title: 'Como centrar un Div con CSS',
					url: 'https://www.freecodecamp.org/espanol/news/author/toqyang/',
					source: 'freeCodeCamp',
					date: '2022',
					category: 'CSS',
					description: 'Tutorial sobre cómo centrar elementos div usando CSS'
				},
				{
					title: 'JavaScript Array Methods',
					url: 'https://www.freecodecamp.org/espanol/news/author/toqyang/',
					source: 'freeCodeCamp',
					date: '2022',
					category: 'JavaScript',
					description: 'Comprehensive guide to JavaScript array methods'
				},
				{
					title: 'React Hooks Tutorial',
					url: 'https://www.freecodecamp.org/espanol/news/author/toqyang/',
					source: 'freeCodeCamp',
					date: '2022',
					category: 'React',
					description: 'Complete guide to React Hooks with practical examples'
				},
				{
					title: 'Node.js API Development',
					url: 'https://www.freecodecamp.org/espanol/news/author/toqyang/',
					source: 'freeCodeCamp',
					date: '2022',
					category: 'Node.js',
					description: 'Building RESTful APIs with Node.js and Express'
				},
				{
					title: 'TypeScript Fundamentals',
					url: 'https://www.freecodecamp.org/espanol/news/author/toqyang/',
					source: 'freeCodeCamp',
					date: '2022',
					category: 'TypeScript',
					description: 'Introduction to TypeScript for JavaScript developers'
				},
				{
					title: 'MongoDB Database Design',
					url: 'https://www.freecodecamp.org/espanol/news/author/toqyang/',
					source: 'freeCodeCamp',
					date: '2022',
					category: 'Database',
					description: 'Best practices for MongoDB schema design and optimization'
				},
				{
					title: 'Git Workflow Strategies',
					url: 'https://www.freecodecamp.org/espanol/news/author/toqyang/',
					source: 'freeCodeCamp',
					date: '2022',
					category: 'Git',
					description: 'Advanced Git workflows for team collaboration'
				},
				{
					title: 'Docker Containerization',
					url: 'https://www.freecodecamp.org/espanol/news/author/toqyang/',
					source: 'freeCodeCamp',
					date: '2022',
					category: 'DevOps',
					description: 'Containerizing applications with Docker'
				}
			],
			medium: [
				{
					title: 'Portfolio Project: DAILYAPP',
					url: 'https://medium.com/@ToqYang',
					source: 'Medium',
					date: '2020',
					category: 'Portfolio',
					description: 'Our project helps people find a route to reduce the time spent on daily activities. Our team members are Daniel Ramirez and myself.'
				},
				{
					title: 'React Best Practices',
					url: 'https://medium.com/@ToqYang',
					source: 'Medium',
					date: '2020',
					category: 'React',
					description: 'Best practices for React development and component architecture'
				}
			]
		},
		buttons: {
			readMore: "Read More",
			viewAll: "View All Articles",
			readArticle: "Read Article →"
		}
	},
	ES: {
		hero: {
			title: "Blog",
			description: "Artículos técnicos y tutoriales sobre programación, desarrollo web y tecnología"
		},
		filters: [
			{
				id: 'all',
				label: 'Todos los Artículos',
				getCount: (freeCodeCamp, medium) => freeCodeCamp.length + medium.length
			},
			{
				id: 'freeCodeCamp',
				label: 'freeCodeCamp',
				getCount: (freeCodeCamp) => freeCodeCamp.length
			},
			{
				id: 'medium',
				label: 'Medium',
				getCount: (_, medium) => medium.length
			}
		],
		articles: {
			freeCodeCamp: [
				{
					title: 'Como centrar un Div con CSS',
					url: 'https://www.freecodecamp.org/espanol/news/author/toqyang/',
					source: 'freeCodeCamp',
					date: '2022',
					category: 'CSS',
					description: 'Tutorial sobre cómo centrar elementos div usando CSS'
				},
				{
					title: 'Métodos de Arrays en JavaScript',
					url: 'https://www.freecodecamp.org/espanol/news/author/toqyang/',
					source: 'freeCodeCamp',
					date: '2022',
					category: 'JavaScript',
					description: 'Guía completa de métodos de arrays en JavaScript'
				},
				{
					title: 'Tutorial de React Hooks',
					url: 'https://www.freecodecamp.org/espanol/news/author/toqyang/',
					source: 'freeCodeCamp',
					date: '2022',
					category: 'React',
					description: 'Guía completa de React Hooks con ejemplos prácticos'
				},
				{
					title: 'Desarrollo de APIs con Node.js',
					url: 'https://www.freecodecamp.org/espanol/news/author/toqyang/',
					source: 'freeCodeCamp',
					date: '2022',
					category: 'Node.js',
					description: 'Construyendo APIs RESTful con Node.js y Express'
				},
				{
					title: 'Fundamentos de TypeScript',
					url: 'https://www.freecodecamp.org/espanol/news/author/toqyang/',
					source: 'freeCodeCamp',
					date: '2022',
					category: 'TypeScript',
					description: 'Introducción a TypeScript para desarrolladores de JavaScript'
				},
				{
					title: 'Diseño de Base de Datos MongoDB',
					url: 'https://www.freecodecamp.org/espanol/news/author/toqyang/',
					source: 'freeCodeCamp',
					date: '2022',
					category: 'Base de Datos',
					description: 'Mejores prácticas para diseño de esquemas y optimización de MongoDB'
				},
				{
					title: 'Estrategias de Flujo de Trabajo con Git',
					url: 'https://www.freecodecamp.org/espanol/news/author/toqyang/',
					source: 'freeCodeCamp',
					date: '2022',
					category: 'Git',
					description: 'Flujos de trabajo avanzados de Git para colaboración en equipo'
				},
				{
					title: 'Containerización con Docker',
					url: 'https://www.freecodecamp.org/espanol/news/author/toqyang/',
					source: 'freeCodeCamp',
					date: '2022',
					category: 'DevOps',
					description: 'Containerizando aplicaciones con Docker'
				}
			],
			medium: [
				{
					title: 'Proyecto de Portafolio: DAILYAPP',
					url: 'https://medium.com/@ToqYang',
					source: 'Medium',
					date: '2020',
					category: 'Portafolio',
					description: 'Nuestro proyecto ayuda a las personas a encontrar una ruta para reducir el tiempo dedicado a las actividades diarias. Nuestros miembros del equipo son Daniel Ramirez y yo.'
				},
				{
					title: 'Mejores Prácticas en React',
					url: 'https://medium.com/@ToqYang',
					source: 'Medium',
					date: '2020',
					category: 'React',
					description: 'Mejores prácticas para el desarrollo en React y arquitectura de componentes'
				}
			]
		},
		buttons: {
			readMore: "Leer Más",
			viewAll: "Ver Todos los Artículos",
			readArticle: "Leer Artículo →"
		}
	}
};

// Helper function to get config for specific language
export const getBlogConfig = (language = 'EN') => {
	return blogConfig[language] || blogConfig['EN'];
}; 