import { writable, get, derived, type Readable } from 'svelte/store';

// Type definitions
interface Hero {
	title: string;
	subtitle: string;
}

interface About {
	title: string;
	lead: string;
	description: string;
	subDescription: string;
}

interface Skill {
	title: string;
	technologies: string;
	description: string;
}

interface Skills {
	fullStack: Skill;
	mobile: Skill;
	startup: Skill;
	systemArchitecture: Skill;
	consulting: Skill;
	cloud: Skill;
}

interface Buttons {
	downloadCV: string;
	viewProjects: string;
}

interface Navigation {
	home: string;
	cv: string;
	systemDesign: string;
	blog: string;
	contact: string;
	styleGuide: string;
}

interface Footer {
	styleGuide: string;
	get copyright(): string;
}

interface TranslationData {
	hero: Hero;
	about: About;
	skills: Skills;
	buttons: Buttons;
	nav: Navigation;
	footer: Footer;
}

type Language = 'EN' | 'ES';

// Copyright text templates
const COPYRIGHT = {
    EN: (year: number) => `©${year} Santiago Toquica Yanguas. All rights reserved.`,
    ES: (year: number) => `©${year} Santiago Toquica Yanguas. Todos los derechos reservados.`
};

// Helper function to get current year
function getCurrentYear() {
    return new Date().getFullYear();
}

// Translation data
const translations: Record<Language, TranslationData> = {
	EN: {
		// Home page
		hero: {
			title: "Hi, I'm Santiago!",
			subtitle: "Software Engineer"
		},
		about: {
			title: "About Me",
			lead: "Passionate software engineer with expertise in full-stack development, mobile development, and system design.",
			description: "I specialize in building scalable web applications and mobile apps using modern technologies and best practices. With experience in both startups and enterprise environments, I bring a unique perspective to every project I work on.",
			subDescription: "My approach combines technical excellence with business understanding, ensuring that every solution not only works perfectly but also drives real value for users and stakeholders."
		},
		skills: {
			fullStack: {
				title: "Full Stack Development",
				technologies: "Rails, React, Node.js, TypeScript, PostgreSQL, Redis",
				description: "Building complete web applications from frontend to backend, including responsive UI, robust APIs, and database design"
			},
			mobile: {
				title: "Mobile Development",
				technologies: "React Native, Capacitor, iOS, Android",
				description: "Cross-platform mobile apps with native performance"
			},
			startup: {
				title: "Startup Experience",
				technologies: "Building scalable solutions",
				description: "Experience in fast-paced environments with rapid iteration"
			},
			systemArchitecture: {
				title: "System Architecture",
				technologies: "Designing scalable system architectures",
				description: "Microservices, event-driven systems, and cloud-native solutions that handle millions of users"
			},
			consulting: {
				title: "Technical Consulting",
				technologies: "Providing expert guidance on technology decisions",
				description: "Code reviews, best practices, and helping teams adopt modern development practices"
			},
			cloud: {
				title: "Cloud Services",
				technologies: "AWS, Docker, Terraform",
				description: "Cloud infrastructure, containerization, and infrastructure as code for scalable deployments"
			}
		},
		buttons: {
			downloadCV: "Download CV",
			viewProjects: "View Projects"
		},
		// Navigation
		nav: {
			home: "Home",
			cv: "CV",
			systemDesign: "System Design",
			blog: "Blog",
			contact: "Contact",
			styleGuide: "Style Guide"
		},
		// Footer
		footer: {
			styleGuide: "Style Guide",
			get copyright() {
				return COPYRIGHT.EN(getCurrentYear());
			}
		}
	},
	ES: {
		// Home page
		hero: {
			title: "¡Hola, soy Santiago!",
			subtitle: "Ingeniero de Software"
		},
		about: {
			title: "Sobre Mí",
			lead: "Ingeniero de software apasionado con experiencia en desarrollo full-stack, desarrollo móvil y diseño de sistemas.",
			description: "Me especializo en construir aplicaciones web escalables y aplicaciones móviles usando tecnologías modernas y mejores prácticas. Con experiencia tanto en startups como en entornos empresariales, aporto una perspectiva única a cada proyecto en el que trabajo.",
			subDescription: "Mi enfoque combina la excelencia técnica con la comprensión del negocio, asegurando que cada solución no solo funcione perfectamente sino que también genere valor real para usuarios y stakeholders."
		},
		skills: {
			fullStack: {
				title: "Desarrollo Full Stack",
				technologies: "Rails, React, Node.js, TypeScript, PostgreSQL, Redis",
				description: "Construcción de aplicaciones web completas desde frontend hasta backend, incluyendo UI responsiva, APIs robustas y diseño de bases de datos"
			},
			mobile: {
				title: "Desarrollo Móvil",
				technologies: "React Native, Capacitor, iOS, Android",
				description: "Aplicaciones móviles multiplataforma con rendimiento nativo"
			},
			startup: {
				title: "Experiencia en Startups",
				technologies: "Construcción de soluciones escalables",
				description: "Experiencia en entornos de rápido crecimiento con iteración rápida"
			},
			systemArchitecture: {
				title: "Arquitectura de Sistemas",
				technologies: "Diseño de arquitecturas de sistemas escalables",
				description: "Microservicios, sistemas orientados a eventos y soluciones cloud-native que manejan millones de usuarios"
			},
			consulting: {
				title: "Consultoría Técnica",
				technologies: "Proporcionar orientación experta en decisiones tecnológicas",
				description: "Revisiones de código, mejores prácticas y ayudar a equipos a adoptar prácticas de desarrollo modernas"
			},
			cloud: {
				title: "Servicios en la Nube",
				technologies: "AWS, Docker, Terraform",
				description: "Infraestructura en la nube, containerización e infraestructura como código para despliegues escalables"
			}
		},
		buttons: {
			downloadCV: "Descargar CV",
			viewProjects: "Ver Proyectos"
		},
		// Navigation
		nav: {
			home: "Inicio",
			cv: "CV",
			systemDesign: "Diseño de Sistemas",
			blog: "Blog",
			contact: "Contacto",
			styleGuide: "Guía de Estilos"
		},
		// Footer
		footer: {
			styleGuide: "Guía de Estilo",
			get copyright() {
				return COPYRIGHT.ES(getCurrentYear());
			}
		}
	}
};

// Create the store
export const currentLanguage = writable<Language>('EN');

// Helper function to get translation
export function t(key: string): string {
	const lang = get(currentLanguage);
	const keys = key.split('.');
	let value: any = translations[lang];
	
	for (const k of keys) {
		if (value && value[k]) {
			value = value[k];
		} else {
			// Fallback to English if translation not found
			value = translations['EN'];
			for (const fallbackKey of keys) {
				if (value && value[fallbackKey]) {
					value = value[fallbackKey];
				} else {
					return key; // Return the key if no translation found
				}
			}
		}
	}
	
	return value;
}

// Reactive translation function
export function getTranslation(key: string): Readable<string> {
	return derived(currentLanguage, ($currentLanguage) => {
		const keys = key.split('.');
		let value: any = translations[$currentLanguage];
		
		for (const k of keys) {
			if (value && value[k]) {
				value = value[k];
			} else {
				// Fallback to English if translation not found
				value = translations['EN'];
				for (const fallbackKey of keys) {
					if (value && value[fallbackKey]) {
						value = value[fallbackKey];
					} else {
						return key; // Return the key if no translation found
					}
				}
			}
		}
		
		return value;
	});
}

// Reactive translation function
export function translate(key: string): Readable<string> {
	return derived(currentLanguage, ($currentLanguage) => {
		const keys = key.split('.');
		let value: any = translations[$currentLanguage];
		
		for (const k of keys) {
			if (value && value[k]) {
				value = value[k];
			} else {
				// Fallback to English if translation not found
				value = translations['EN'];
				for (const fallbackKey of keys) {
					if (value && value[fallbackKey]) {
						value = value[fallbackKey];
					} else {
						return key; // Return the key if no translation found
					}
				}
			}
		}
		
		return value;
	});
}

// Helper function to get current language value
export function getCurrentLanguage(): Language {
	return get(currentLanguage);
}

// Helper function to set language
export function setLanguage(lang: Language): void {
	currentLanguage.set(lang);
}

export type { Language, TranslationData, Hero, About, Skills, Buttons, Navigation, Footer };
