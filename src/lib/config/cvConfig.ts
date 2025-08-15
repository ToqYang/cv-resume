// CV page configuration with comprehensive content structure
export const cvConfig = {
	EN: {
		meta: {
			title: "About - Santiago Toquica Yanguas",
			description: "Software Engineer - Santiago Toquica Yanguas"
		},
		personal: {
			name: "Santiago Toquica Yanguas",
			title: "Software Engineer",
			contactInfo: [
				{
					icon: "📞",
					text: "+57 3156446539",
					link: "https://wa.me/573156446539?text=Hi%2C%20I%27m%20interested%20in%20your%20profile%20and%20would%20like%20to%20talk."
				},
				{
					icon: "📧",
					text: "santitoya2001@gmail.com",
					link: "mailto:santitoya2001@gmail.com"
				},
				{
					icon: "💼",
					text: "LinkedIn",
					link: "https://www.linkedin.com/in/toqyang"
				},
				{
					icon: "🐙",
					text: "GitHub",
					link: "https://github.com/ToqYang"
				}
			]
		},
		sections: {
			skills: {
				title: "Skills",
				description: "Technical skills and competencies",
				content: "Ruby on Rails/Python (secure API development), React JS/React Native (responsive UIs), AWS S3/DynamoDB/API Gateway (scalable cloud architectures), Docker/Terraform (containerized deployments & IaC), RSpec (test coverage >85%), Figma/Adobe XD (user-centered design), Agile/Scrum/Shape Up/Kanban (on-time delivery of 15+ partner integrations)."
			},
			summary: {
				title: "Summary",
				description: "Professional summary and overview",
				content: "Santiago is a results-driven full-stack and mobile developer who creates digital products that boost adoption by 98%, cut process times by 96.5%, and deliver measurable business growth. He blends user insight with strategic execution, helping teams work faster and smarter through AWS services, (Agile, Shape Up, and Kanban)."
			},
			experience: {
				title: "Experience",
				description: "Professional work experience",
				items: [
					{
						title: "Sr. Software Engineer",
						company: "The Data Culture",
						period: "Nov 2024 - Present",
						location: "Allen, Texas, United States · Remote",
						achievements: [
							"Launch internal social network (posts, experiences, badges), improve teacher-student engagement, ~30% DAU.",
							"Integrate a virtual coin payment system with BBVA, implement lifecycle APIs and 4+ coin models, resulting in coin payments being used in over 80% of transactions.",
							"Develop gamification features with 5+ reusable endpoints, boosting user engagement and retention.",
							"Reduce Amazon-related security incidents from 3 to 0 by removing all tracked credentials and applying AWS Well-Architected controls, improving compliance and user trust."
						]
					},
					{
						title: "Full Stack Mobile Developer",
						company: "HANU FIT",
						period: "02/2022 – 07/2024",
						location: "Contractor/Full Time - Remote",
						achievements: [
							"Built endpoints and optimized DB queries/joins for sports recommender to Avianca(Star Alliance), increased users by +2,000 (~12%).",
							"Implemented Material UI–based design tokens and designed scalable database architecture, enabling 15+ partner integrations and supporting 20K+ monthly active users.",
							"Delivered iOS/Android apps and stabilized build pipeline, 85% production build success, reduced build failures by ~70%."
						]
					},
					{
						title: "Mid Backend Developer",
						company: "Symplifica",
						period: "02/2022 - 07/2023",
						location: "Full Time – Remote",
						achievements: [
							"Automated benefits/generator workflows using Rails metaprogramming, Stimulus/Reflex and generators, cutting generation time from 3–5 days to ~1 hour.",
							"Resolved merge conflicts and increased RSpec test coverage to >85% across files, improving code quality and production reliability, while fostering seamless team collaboration using the Basecamp methodology.",
							"Optimized code and payroll flows for peak performance, improved maintainability, reduced processing errors by ~40%, test coverage >85%."
						]
					},
					{
						title: "Backend Developer",
						company: "Adler Social",
						period: "11/2020 - 12/2021",
						location: "Full Time - Remote",
						achievements: [
							"Built React + Redux components with heuristic-driven star/review system and prefilled phrases, increased conversions by ~22%.",
							"Redesigned UI/UX in Adobe XD and implemented in React Native, increased adoption from 30% to 72% of users.",
							"Applied Agile and Scrum methodologies, enabling the team to coordinate effectively and improve project delivery speed by ~30% while increasing overall productivity."
						]
					},
					{
						title: "Volunteer Translator",
						company: "freeCodeCamp",
						period: "11/2020 - 12/2021",
						location: "Remote",
						achievements: [
							"Facilitate a clear and concise textual language exchange for millions of Spanish-speaking people by translating articles and official curriculum related to careers such as Python, Front End (HTML, CSS, React, Javascript)."
						]
					}
				]
			},
			education: {
				title: "Education",
				description: "Educational background",
				items: [
					{
						title: "Full Stack Development",
						institution: "Holberton School",
						period: "06/2019 – 04/2021"
					},
					{
						title: "Products and Services Sales Technician",
						institution: "SENA",
						period: "01/2017 – 12/2018"
					}
				]
			},
			training: {
				title: "Training / Courses",
				description: "Professional training and certifications",
				items: [
					{
						name: "AWS Certified Solutions Architect – Associate",
						institution: "AWS",
						link: "https://www.credly.com/badges/7ab605d5-72f6-4259-a66b-cca16423c89a/public_url"
					},
					{
						name: "Modern Application Development with Python on AWS Specialization",
						institution: "Coursera",
						link: "https://coursera.org/share/94b4bae216c2c7699b7d44d3717534de"
					},
					{
						name: "Google UX Design Specialization",
						institution: "Coursera Google",
						link: "https://coursera.org/share/66f862ea6766d3fba455f5dcd3db3590"
					}
				]
			},
			projects: {
				title: "Projects",
				description: "Notable projects and contributions",
				items: [
					{
						name: "AirBnB clone",
						description: "The console of the AirBnB clone is a command interpreter to manage the AirBnB objects, that allow to understand the manipulation of the information required and how is storage in the program.",
						link: "https://github.com/santiago-toquica/airbnb-clone"
					},
					{
						name: "Printf",
						description: "The _printf function is a custom implementation of the standard printf function in C.",
						link: "https://github.com/santiago-toquica/printf"
					},
					{
						name: "Simple shell",
						description: "Custom Unix shell, inspired by Ken Thompson's 1971 shell, to reinforce C programming and operating system concepts.",
						link: "https://github.com/santiago-toquica/simple-shell"
					},
					{
						name: "Simpletron Machine",
						description: "Developed a Simpletron Machine simulator to execute machine language instructions, demonstrating computer architecture fundamentals.",
						link: "https://github.com/santiago-toquica/simpletron-machine"
					}
				]
			}
		},
		buttons: {
			print: "Print CV",
			printTooltip: "Print CV"
		},
		labels: {
			repository: "Repository",
			period: "Period",
			location: "Location"
		}
	},
	ES: {
		meta: {
			title: "Sobre Mí - Santiago Toquica Yanguas",
			description: "Ingeniero de Software - Santiago Toquica Yanguas"
		},
		personal: {
			name: "Santiago Toquica Yanguas",
			title: "Ingeniero de Software",
			contactInfo: [
				{
					icon: "📞",
					text: "+57 3156446539",
					link: "https://wa.me/573156446539?text=Hola%2C%20estoy%20interesado%20en%20tu%20perfil%20y%20me%20gustar%C3%ADa%20hablar."
				},
				{
					icon: "📧",
					text: "santitoya2001@gmail.com",
					link: "mailto:santitoya2001@gmail.com"
				},
				{
					icon: "💼",
					text: "LinkedIn",
					link: "https://www.linkedin.com/in/toqyang"
				},
				{
					icon: "🐙",
					text: "GitHub",
					link: "https://github.com/ToqYang"
				}
			]
		},
		sections: {
			skills: {
				title: "Habilidades",
				description: "Habilidades técnicas y competencias",
				content: "Ruby on Rails, Ruby, React JS, AWS, Cloudwatch, Dynamo DB, Figma, HTML5/CSS, iOS, Javascript, Material UI, Python, Quality Assurance, Rails, React JS, React Native, Redux, RSpec, S3, Scrum, UI/UX, Webflow, Adobe XD, Agile, Android, Tailwind, Management."
			},
			summary: {
				title: "Resumen",
				description: "Resumen profesional y visión general",
				content: "Santiago es un Ingeniero de Software especializado en Rails, React JS, Node JS y TypeScript. Crea soluciones centradas en el usuario, despliega aplicaciones móviles y colabora con equipos para alinear la tecnología con los objetivos empresariales. Santiago sobresale en optimización de rendimiento y traducción de necesidades de usuario en soluciones eficientes y escalables."
			},
			experience: {
				title: "Experiencia",
				description: "Experiencia laboral profesional",
				items: [
					{
						title: "Sr. Ingeniero de Software",
						company: "The Data Culture",
						period: "Nov 2024 - Presente",
						location: "Allen, Texas, Estados Unidos · Remoto",
						achievements: [
							"Transformé exitosamente la plataforma del cliente implementando características innovadoras que mejoraron significativamente la experiencia del usuario y la seguridad.",
							"Integré un sistema de pago con monedas virtuales, logrando su adopción en más del 80% de las transacciones.",
							"Desarrollé características de gamificación con más de 5 endpoints reutilizables, aumentando el compromiso y retención de usuarios.",
							"Mejoré la seguridad de la plataforma eliminando todos los archivos sensibles rastreados, asegurando cumplimiento y confianza del usuario."
						]
					},
					{
						title: "Desarrollador Full Stack Móvil",
						company: "HANU FIT",
						period: "02/2022 – 07/2024",
						location: "Contratista/Tiempo Completo - Remoto",
						achievements: [
							"Colaboré en el desarrollo front-end y back-end, creando endpoints, consultas de base de datos y joins para un sistema de recomendación de contenido deportivo para Avianca, miembro de Star Alliance.",
							"Implementé tokens de diseño con fácil personalización basados en Material UI con ecosistema React y ayudé a diseñar la arquitectura de base de datos para una integración fluida de socios.",
							"Desarrollé aplicación iOS y Android para publicación en App Store y Google Play Store, logré 85% de tasa de éxito en compilaciones de producción de aplicaciones móviles, resolviendo todos los fallos."
						]
					},
					{
						title: "Desarrollador Backend Mid",
						company: "Symplifica",
						period: "02/2022 - 07/2023",
						location: "Tiempo Completo – Remoto",
						achievements: [
							"Optimicé el sistema de gestión de clientes, aumentando la eficiencia del soporte técnico y mejorando la satisfacción del usuario y fomenté la colaboración fluida dentro del equipo utilizando la metodología Basecamp.",
							"Utilicé Ruby on Rails, Stimulus.js/Reflex y Turbo, metaprogramación para desarrollo rico en características, priorizando generadores, funcionalidad de búsqueda.",
							"Resolví conflictos y aseguré la calidad del código aumentando la cobertura de pruebas a través de pruebas RSpec integrales.",
							"Optimicé el código para rendimiento máximo y mantenibilidad y contribuí a la implementación del procesamiento de nómina y métodos de pago."
						]
					},
					{
						title: "Desarrollador Backend",
						company: "Adler Social",
						period: "11/2020 - 12/2021",
						location: "Tiempo Completo - Remoto",
						achievements: [
							"Utilicé el ecosistema AWS para diseñar soluciones escalables: Creé una arquitectura escalable con API Gateway, Lambda, EventBridge y DynamoDB para publicaciones programadas por clientes.",
							"Desarrollé e integré componentes React JS con Redux Toolkit y React DOM para mejorar la funcionalidad de marca y la experiencia del usuario.",
							"Utilicé metodologías Agile y Scrum para mejorar la velocidad de entrega del proyecto y la productividad del equipo.",
							"Diseño y desarrollo de UI y UX (Adobe XD) Desarrollo de aplicaciones (React Native) para plataformas IOS y Android."
						]
					},
					{
						title: "Traductor Voluntario",
						company: "freeCodeCamp",
						period: "11/2020 - 12/2021",
						location: "Remoto",
						achievements: [
							"Facilité un intercambio de lenguaje textual claro y conciso para millones de personas de habla hispana traduciendo artículos y currículo oficial relacionado con carreras como Python, Front End (HTML, CSS, React, Javascript)."
						]
					}
				]
			},
			education: {
				title: "Educación",
				description: "Formación académica",
				items: [
					{
						title: "Desarrollo Full Stack",
						institution: "Holberton School",
						period: "06/2019 – 04/2021"
					},
					{
						title: "Técnico en Ventas de Productos y Servicios",
						institution: "SENA",
						period: "01/2017 – 12/2018"
					}
				]
			},
			training: {
				title: "Capacitación / Cursos",
				description: "Capacitación profesional y certificaciones",
				items: [
					{
						name: "AWS Certified Solutions Architect – Associate",
						institution: "AWS",
						link: "https://www.credly.com/badges/7ab605d5-72f6-4259-a66b-cca16423c89a/public_url"
					},
					{
						name: "Especialización en Desarrollo de Aplicaciones Modernas con Python en AWS",
						institution: "Coursera",
						link: "https://coursera.org/share/94b4bae216c2c7699b7d44d3717534de"
					},
					{
						name: "Especialización en Diseño UX de Google",
						institution: "Coursera Google",
						link: "https://coursera.org/share/66f862ea6766d3fba455f5dcd3db3590"
					}
				]
			},
			projects: {
				title: "Proyectos",
				description: "Proyectos notables y contribuciones",
				items: [
					{
						name: "Clon de AirBnB",
						description: "La consola del clon de AirBnB es un intérprete de comandos para gestionar los objetos de AirBnB, que permite entender la manipulación de la información requerida y cómo se almacena en el programa.",
						link: "https://github.com/santiago-toquica/airbnb-clone"
					},
					{
						name: "Printf",
						description: "La función _printf es una implementación personalizada de la función printf estándar en C.",
						link: "https://github.com/santiago-toquica/printf"
					},
					{
						name: "Shell simple",
						description: "Shell Unix personalizado, inspirado en el shell de Ken Thompson de 1971, para reforzar conceptos de programación C y sistemas operativos.",
						link: "https://github.com/santiago-toquica/simple-shell"
					},
					{
						name: "Máquina Simpletron",
						description: "Desarrollé un simulador de Máquina Simpletron para ejecutar instrucciones de lenguaje máquina, demostrando fundamentos de arquitectura de computadoras.",
						link: "https://github.com/santiago-toquica/simpletron-machine"
					}
				]
			}
		},
		buttons: {
			print: "Imprimir CV",
			printTooltip: "Imprimir CV"
		},
		labels: {
			repository: "Repositorio",
			period: "Período",
			location: "Ubicación"
		}
	}
};

// Define valid language keys for type safety
type LanguageKey = keyof typeof cvConfig;

// Helper function to get config for specific language
export const getCvConfig = (language = 'EN') => {
	// Cast the language parameter to a valid language key if it exists in cvConfig
	const safeLanguage = (language in cvConfig) ? language as LanguageKey : 'EN' as LanguageKey;
	return cvConfig[safeLanguage];
};