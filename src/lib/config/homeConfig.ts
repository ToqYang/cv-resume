// Type definitions
interface HeroButton {
	text: string;
	href: string;
	type: string;
}

interface Hero {
	title: string;
	subtitle: string;
	description: string;
	buttons: HeroButton[];
}

interface About {
	title: string;
	lead: string;
	description: string;
	subDescription: string;
}

interface Skill {
	icon: string;
	title: string;
	technologies: string;
	description: string;
}

interface Footer {
	styleGuide: string;
	copyright: string;
}

interface HomeConfig {
	hero: Hero;
	about: About;
	skills: Skill[];
	footer: Footer;
}

// Home page configuration with multilingual support
export const homeConfig: Record<string, HomeConfig> = {
	EN: {
		hero: {
			title: "Hi, I'm Santiago!",
			subtitle: "Software Engineer",
			description: "Software Engineer specializing in Rails, React JS, Node JS, and TypeScript. Focused on user-centric solutions, mobile app deployment, and performance optimization.",
			buttons: [
				{
					text: "Download CV",
					href: "/about",
					type: "primary"
				},
				{
					text: "View Projects",
					href: "/projects",
					type: "secondary"
				}
			]
		},
		about: {
			title: "About Me",
			lead: "",
			description: "",
			subDescription: ""
		},
		skills: [
			{
				icon: "🤖",
				title: "AI & Machine Learning",
				technologies: "AWS Bedrock, Agentic AI, RAG, AI Code (Cursor, Avante), MCP/API",
				description: "Building AI-powered applications with modern tooling, including agent systems, retrieval-augmented generation, and AI-assisted development"
			},
			{
				icon: "💻",
				title: "Full Stack Development",
				technologies: "Rails, React, Node.js, TypeScript, PostgreSQL, Redis",
				description: "Building complete web applications from frontend to backend, including responsive UIs, robust APIs, and database design"
			},
			{
				icon: "📱",
				title: "Mobile Development",
				technologies: "React Native, Capacitor, iOS, Android",
				description: "Cross-platform mobile apps with native performance"
			},
			{
				icon: "🚀",
				title: "Startup Experience",
				technologies: "Building scalable solutions",
				description: "Experience in fast-paced environments with rapid iteration"
			},
			{
				icon: "🏗️",
				title: "System Architecture",
				technologies: "Designing scalable system architectures",
				description: "Microservices, event-driven systems, and cloud-native solutions that handle millions of users"
			},
			{
				icon: "💡",
				title: "Technical Consulting",
				technologies: "Providing expert guidance on technology decisions",
				description: "Code reviews, best practices, and helping teams adopt modern development practices"
			},
			{
				icon: "☁️",
				title: "Cloud Services",
				technologies: "AWS, Docker, Terraform",
				description: "Cloud infrastructure, containerization, and infrastructure as code for scalable deployments"
			}
		],
		footer: {
			styleGuide: "Style Guide",
			copyright: `© ${new Date().getFullYear()} Santiago Toquica Yanguas. All rights reserved.`
		}
	},
	ES: {
		hero: {
			title: "¡Hola, soy Santiago!",
			subtitle: "Software Engineer",
			description: "Software Engineer especializado en Rails, React JS, Node JS y TypeScript. Enfocado en soluciones centradas en el usuario, despliegue de aplicaciones móviles y optimización de rendimiento.",
			buttons: [
				{
					text: "Descargar CV",
					href: "/about",
					type: "primary"
				},
				{
					text: "Ver Proyectos",
					href: "/projects",
					type: "secondary"
				}
			]
		},
		about: {
			title: "Sobre Mí",
			lead: "",
			description: "",
			subDescription: ""
		},
		skills: [
			{
				icon: "🤖",
				title: "IA y Aprendizaje Automático",
				technologies: "AWS Bedrock, Agentic AI, RAG, AI Code (Cursor, Avante), MCP/API",
				description: "Desarrollo de aplicaciones potenciadas por IA con herramientas modernas, incluyendo sistemas de agentes, generación aumentada por recuperación y desarrollo asistido por IA"
			},
			{
				icon: "💻",
				title: "Desarrollo Full Stack",
				technologies: "Rails, React, Node.js, TypeScript, PostgreSQL, Redis",
				description: "Construcción de aplicaciones web completas desde frontend hasta backend, incluyendo UI responsiva, APIs robustas y diseño de bases de datos"
			},
			{
				icon: "📱",
				title: "Desarrollo Móvil",
				technologies: "React Native, Capacitor, iOS, Android",
				description: "Aplicaciones móviles multiplataforma con rendimiento nativo"
			},
			{
				icon: "🚀",
				title: "Experiencia en Startups",
				technologies: "Construcción de soluciones escalables",
				description: "Experiencia en entornos de rápido crecimiento con iteración rápida"
			},
			{
				icon: "🏗️",
				title: "Arquitectura de Sistemas",
				technologies: "Diseño de arquitecturas de sistemas escalables",
				description: "Microservicios, sistemas orientados a eventos y soluciones cloud-native que manejan millones de usuarios"
			},
			{
				icon: "💡",
				title: "Consultoría Técnica",
				technologies: "Proporcionar orientación experta en decisiones tecnológicas",
				description: "Revisiones de código, mejores prácticas y ayudar a equipos a adoptar prácticas de desarrollo modernas"
			},
			{
				icon: "☁️",
				title: "Servicios en la Nube",
				technologies: "AWS, Docker, Terraform",
				description: "Infraestructura en la nube, containerización e infraestructura como código para despliegues escalables"
			}
		],
		footer: {
			styleGuide: "Guía de Estilos",
			copyright: `© ${new Date().getFullYear()} Santiago Toquica Yanguas. Todos los derechos reservados.`
		}
	}
};

// Helper functions to update home config
export const updateHero = (heroData: Partial<Hero>, language = 'EN') => {
	Object.assign(homeConfig[language].hero, heroData);
};

export const updateAbout = (aboutData: Partial<About>, language = 'EN') => {
	Object.assign(homeConfig[language].about, aboutData);
};

export const updateSkills = (skillsData: Skill[], language = 'EN') => {
	homeConfig[language].skills = skillsData;
};

export const addSkill = (skill: Skill, language = 'EN') => {
	homeConfig[language].skills.push(skill);
};

export const removeSkill = (index: number, language = 'EN') => {
	homeConfig[language].skills.splice(index, 1);
};

export const updateSkill = (index: number, skill: Skill, language = 'EN') => {
	homeConfig[language].skills[index] = skill;
};

// Helper function to get config for specific language
export const getConfig = (language = 'EN') => {
	return homeConfig[language] || homeConfig['EN'];
};

// Export the default config for reference
export { homeConfig as defaultHomeConfig }; 