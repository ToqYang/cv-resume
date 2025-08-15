import { writable } from 'svelte/store';

// Type definitions
interface PersonalInfo {
	name: string;
	title: string;
	email: string;
	phone: string;
	location: string;
	website: string;
	linkedin: string;
	github: string;
}

interface Experience {
	title: string;
	company: string;
	period: string;
	location: string;
	description: string;
	achievements: string[];
}

interface Education {
	degree: string;
	school: string;
	period: string;
	location: string;
	gpa: string;
}

interface Training {
	name: string;
	provider: string;
	link: string;
}

interface Project {
	name: string;
	description: string;
	technologies: string[];
	link: string;
}

interface CVData {
	personal: PersonalInfo;
	summary: string;
	skills: string;
	experience: Experience[];
	education: Education[];
	training: Training[];
	projects: Project[];
}

// Multilingual CV data structure
const cvDataByLanguage: Record<'EN' | 'ES', CVData> = {
	EN: {
		personal: {
			name: 'SANTIAGO TOQUICA YANGUAS',
			title: 'Software Engineer',
			email: 'santitoya2001@gmail.com',
			phone: '+57 3156446539',
			location: 'Colombia',
			website: '',
			linkedin: 'LinkedIn',
			github: 'GitHub'
		},
		summary: 'Santiago is a results-driven full-stack and mobile developer who creates digital products that boost adoption by 98%, cut process times by 96.5%, and deliver measurable business growth. He blends user insight with strategic execution, helping teams work faster and smarter through AWS services, (Agile, Shape Up, and Kanban).',
		skills: 'Ruby on Rails/Python (secure API development), React JS/React Native (responsive UIs), AWS S3/DynamoDB/API Gateway (scalable cloud architectures), Docker/Terraform (containerized deployments & IaC), RSpec (test coverage >85%), Figma/Adobe XD (user-centered design), Agile/Scrum/Shape Up/Kanban (on-time delivery of 15+ partner integrations).',
			experience: [
			{
				title: 'Full Stack Mobile Developer',
				company: 'HANU FIT',
				period: '02/2022 – 07/2024',
				location: 'Contractor/Full Time - Remote',
				description: '',
				achievements: [
					'Built endpoints and optimized DB queries/joins for sports recommender to Avianca(Star Alliance), increased users by +2,000 (~12%).',
					'Implemented Material UI–based design tokens and designed scalable database architecture, enabling 15+ partner integrations and supporting 20K+ monthly active users.',
					'Delivered iOS/Android apps and stabilized build pipeline, 85% production build success, reduced build failures by ~70%.'
				]
			},
			{
				title: 'Mid Backend Developer',
				company: 'Symplifica',
				period: '02/2022 - 07/2023',
				location: 'Full Time – Remote',
				description: '',
				achievements: [
					'Automated benefits/generator workflows using Rails metaprogramming, Stimulus/Reflex and generators, cutting generation time from 3–5 days to ~1 hour.',
					'Resolved merge conflicts and increased RSpec test coverage to >85% across files, improving code quality and production reliability, while fostering seamless team collaboration using the Basecamp methodology.',
					'Optimized code and payroll flows for peak performance, improved maintainability, reduced processing errors by ~40%, test coverage >85%.'
				]
			},
			{
				title: 'Backend Developer',
				company: 'Adler Social',
				period: '11/2020 - 12/2021',
				location: 'Full Time - Remote',
				description: '',
				achievements: [
					'Built React + Redux components with heuristic-driven star/review system and prefilled phrases, increased conversions by ~22%.',
					'Redesigned UI/UX in Adobe XD and implemented in React Native, increased adoption from 30% to 72% of users.',
					'Applied Agile and Scrum methodologies, enabling the team to coordinate effectively and improve project delivery speed by ~30% while increasing overall productivity.'
				]
			},
			{
				title: 'Volunteer Translator',
				company: 'freeCodeCamp',
				period: '11/2020 - 12/2021',
				location: 'Volunteer - Remote',
				description: '',
				achievements: [
					'Translated technical documentation and tutorials',
					'Helped make coding education accessible to Spanish speakers',
					'Contributed to open-source educational content'
				]
			}
		],
		education: [
			{
				degree: 'Full Stack Development',
				school: 'Holberton School',
				period: '06/2019 - 04/2021',
				location: '',
				gpa: ''
			},
			{
				degree: 'Products and Services Sales Technician',
				school: 'SENA',
				period: '2018 - 2019',
				location: '',
				gpa: ''
			}
		],
		training: [
			{
				name: 'Modern Application Development with Python on AWS Specialization',
				provider: 'Coursera',
				link: 'https://coursera.org'
			},
			{
				name: 'Google UX Design Specialization',
				provider: 'Coursera Google',
				link: 'https://coursera.org'
			}
		],
		projects: [
			{
				name: 'AirBnB clone',
				description: 'A full-stack web application that replicates the core functionality of Airbnb, including user authentication, property listings, booking system, and payment integration.',
				technologies: ['React', 'Ruby on Rails', 'PostgreSQL'],
				link: 'Repository'
			},
			{
				name: 'Printf',
				description: 'Implementation of the printf function in C, handling various format specifiers and data types with proper memory management.',
				technologies: ['C', 'Memory Management'],
				link: 'Repository'
			},
			{
				name: 'Simple shell',
				description: 'A command-line shell implementation in C that supports basic shell commands, environment variables, and process management.',
				technologies: ['C', 'Shell Scripting'],
				link: 'Repository'
			},
			{
				name: 'Simpletron Machine',
				description: 'A virtual machine simulator that executes Simpletron Machine Language (SML) instructions, demonstrating computer architecture concepts.',
				technologies: ['C', 'Computer Architecture'],
				link: 'Repository'
			}
		]
	},
	ES: {
		personal: {
			name: 'SANTIAGO TOQUICA YANGUAS',
			title: 'Ingeniero de Software',
			email: 'santitoya2001@gmail.com',
			phone: '+57 3156446539',
			location: 'Colombia',
			website: '',
			linkedin: 'LinkedIn',
			github: 'GitHub'
		},
		summary: 'Santiago es un desarrollador full‑stack y móvil orientado a resultados que crea productos digitales que aumentan la adopción en 98%, reducen los tiempos de proceso en 96,5% y generan crecimiento de negocio medible. Combina insights de usuario con ejecución estratégica, ayudando a los equipos a trabajar más rápido y de forma más inteligente mediante servicios de AWS y metodologías Agile, Shape Up y Kanban.',
		skills: 'Ruby on Rails/Python (desarrollo de APIs seguras), React JS/React Native (UIs responsivas), AWS S3/DynamoDB/API Gateway (arquitecturas cloud escalables), Docker/Terraform (despliegues containerizados e IaC), RSpec (cobertura de tests >85%), Figma/Adobe XD (diseño centrado en el usuario), Agile/Scrum/Shape Up/Kanban (entrega a tiempo de 15+ integraciones con partners).',
		experience: [
			{
				title: 'Desarrollador Full Stack Móvil',
				company: 'HANU FIT',
				period: '02/2022 – 07/2024',
				location: 'Contratista/Tiempo Completo - Remoto',
				description: '',
				achievements: [
					'Construí endpoints y optimicé consultas/joins de BD para un recomendador deportivo para Avianca (Star Alliance), aumentando los usuarios en +2.000 (~12%).',
					'Implementé tokens de diseño basados en Material UI y diseñé una arquitectura de base de datos escalable, habilitando 15+ integraciones con partners y soportando 20K+ usuarios activos mensuales.',
					'Entregué apps iOS/Android y estabilicé el pipeline de compilación, 85% de éxito en builds de producción, reduciendo fallos de compilación en ~70%.'
				]
			},
			{
				title: 'Desarrollador Backend Mid',
				company: 'Symplifica',
				period: '02/2022 - 07/2023',
				location: 'Tiempo Completo – Remoto',
				description: '',
				achievements: [
					'Automaticé flujos de beneficios/generadores usando metaprogramación en Rails, Stimulus/Reflex y generators, reduciendo el tiempo de generación de 3–5 días a ~1 hora.',
					'Resolví conflictos de merge y aumenté la cobertura de tests RSpec a >85% en los archivos, mejorando la calidad del código y la confiabilidad en producción, mientras fomentaba una colaboración fluida del equipo usando la metodología Basecamp.',
					'Optimicé el código y los flujos de nómina para máximo rendimiento, mejorando la mantenibilidad y reduciendo errores de procesamiento en ~40%, cobertura de tests >85%.'
				]
			},
			{
				title: 'Desarrollador Backend',
				company: 'Adler Social',
				period: '11/2020 - 12/2021',
				location: 'Tiempo Completo - Remoto',
				description: '',
				achievements: [
					'Construí componentes React + Redux con un sistema de estrellas/reseñas basado en heurísticas y frases prellenadas, incrementando las conversiones en ~22%.',
					'Rediseñé la UI/UX en Adobe XD y la implementé en React Native, aumentando la adopción del 30% al 72% de los usuarios.',
					'Apliqué metodologías Agile y Scrum, habilitando al equipo a coordinarse eficazmente y mejorando la velocidad de entrega del proyecto en ~30% mientras aumentaba la productividad.'
				]
			},
			{
				title: 'Traductor Voluntario',
				company: 'freeCodeCamp',
				period: '11/2020 - 12/2021',
				location: 'Voluntario - Remoto',
				description: '',
				achievements: [
					'Traduje documentación técnica y tutoriales',
					'Ayudé a hacer la educación de programación accesible para hispanohablantes',
					'Contribuí a contenido educativo de código abierto'
				]
			}
		],
		education: [
			{
				degree: 'Desarrollo Full Stack',
				school: 'Holberton School',
				period: '06/2019 - 04/2021',
				location: '',
				gpa: ''
			},
			{
				degree: 'Técnico en Ventas de Productos y Servicios',
				school: 'SENA',
				period: '2018 - 2019',
				location: '',
				gpa: ''
			}
		],
		training: [
			{
				name: 'Especialización en Desarrollo de Aplicaciones Modernas con Python en AWS',
				provider: 'Coursera',
				link: 'https://coursera.org'
			},
			{
				name: 'Especialización en Diseño UX de Google',
				provider: 'Coursera Google',
				link: 'https://coursera.org'
			}
		],
		projects: [
			{
				name: 'Clon de AirBnB',
				description: 'Una aplicación web full-stack que replica la funcionalidad principal de Airbnb, incluyendo autenticación de usuarios, listados de propiedades, sistema de reservas e integración de pagos.',
				technologies: ['Python', 'Flask', 'SQLAlchemy', 'MySQL', 'HTML/CSS', 'JavaScript'],
				link: 'Repositorio'
			},
			{
				name: 'Sistema de Gestión de Archivos',
				description: 'Sistema de gestión de archivos con funcionalidades de carga, descarga, compresión y encriptación de archivos.',
				technologies: ['Python', 'Flask', 'SQLite', 'HTML/CSS', 'JavaScript'],
				link: 'Repositorio'
			},
			{
				name: 'API REST para Gestión de Tareas',
				description: 'API REST completa para gestión de tareas con autenticación JWT, validación de datos y documentación automática.',
				technologies: ['Python', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'JWT'],
				link: 'Repositorio'
			},
			{
				name: 'Dashboard de Análisis de Datos',
				description: 'Dashboard interactivo para análisis de datos con visualizaciones, filtros dinámicos y exportación de reportes.',
				technologies: ['Python', 'Dash', 'Pandas', 'Plotly', 'SQLite'],
				link: 'Repositorio'
			},
			{
				name: 'Máquina Simpletron',
				description: 'Un simulador de máquina virtual que ejecuta instrucciones del Lenguaje de Máquina Simpletron (SML), demostrando conceptos de arquitectura de computadoras.',
				technologies: ['C', 'Arquitectura de Computadoras'],
				link: 'Repositorio'
			}
		]
	}
};

// Create the writable store with language-aware data
export const cvData = writable<CVData>(cvDataByLanguage.EN);

// Helper function to get CV data for specific language
export const getCVDataForLanguage = (language: 'EN' | 'ES'): CVData => {
	return cvDataByLanguage[language];
};

// Helper function to update CV data for specific language
export const updateCVDataForLanguage = (language: 'EN' | 'ES', data: Partial<CVData>) => {
	cvDataByLanguage[language] = { ...cvDataByLanguage[language], ...data };
	cvData.set(cvDataByLanguage[language]);
};

// Helper functions to update CV data
export const updatePersonalInfo = (personalInfo: Partial<PersonalInfo>) => {
	cvData.update(data => ({
		...data,
		personal: { ...data.personal, ...personalInfo }
	}));
};

export const updateSummary = (summary: string) => {
	cvData.update(data => ({
		...data,
		summary
	}));
};

export const updateSkills = (skills: string) => {
	cvData.update(data => ({
		...data,
		skills
	}));
};

export const addExperience = (experience: Experience) => {
	cvData.update(data => ({
		...data,
		experience: [...data.experience, experience]
	}));
};

export const updateExperience = (index: number, experience: Experience) => {
	cvData.update(data => ({
		...data,
		experience: data.experience.map((exp, i) => i === index ? experience : exp)
	}));
};

export const removeExperience = (index: number) => {
	cvData.update(data => ({
		...data,
		experience: data.experience.filter((_, i) => i !== index)
	}));
};

export const addEducation = (education: Education) => {
	cvData.update(data => ({
		...data,
		education: [...data.education, education]
	}));
};

export const updateEducation = (index: number, education: Education) => {
	cvData.update(data => ({
		...data,
		education: data.education.map((edu, i) => i === index ? education : edu)
	}));
};

export const removeEducation = (index: number) => {
	cvData.update(data => ({
		...data,
		education: data.education.filter((_, i) => i !== index)
	}));
};

export const addProject = (project: Project) => {
	cvData.update(data => ({
		...data,
		projects: [...data.projects, project]
	}));
};

export const updateProject = (index: number, project: Project) => {
	cvData.update(data => ({
		...data,
		projects: data.projects.map((proj, i) => i === index ? project : proj)
	}));
};

export const removeProject = (index: number) => {
	cvData.update(data => ({
		...data,
		projects: data.projects.filter((_, i) => i !== index)
	}));
};

// Export the multilingual data for reference
export { cvDataByLanguage };
export type { CVData, PersonalInfo, Experience, Education, Training, Project };
