// Type definitions
interface ContactConfig {
	hero: {
		title: string;
		description: string;
	};
	contact: {
		title: string;
		description: string;
	};
	links: {
		email: string;
		phone: string;
		location: string;
		linkedin: string;
		github: string;
		technicalWriting: string;
		freeCodeCamp: string;
		medium: string;
	};
	buttons: {
		email: string;
		whatsapp: string;
		sms: string;
		linkedin: string;
		github: string;
		readArticles: string;
		visitFreeCodeCamp: string;
		visitMedium: string;
	};
	labels: {
		professionalProfile: string;
		codeRepository: string;
		articlesTutorials: string;
		remote: string;
		availableForRemote: string;
		freeCodeCampProfile: string;
		mediumProfile: string;
	};
}

// Contact page configuration with multilingual support
export const contactConfig: Record<string, ContactConfig> = {
	EN: {
		hero: {
			title: "Get in Touch",
			description: "Let's discuss your next project or collaboration opportunity"
		},
		contact: {
			title: "Contact Information",
			description: "Feel free to reach out through any of these channels"
		},
		links: {
			email: "Email",
			phone: "Phone",
			location: "Location",
			linkedin: "LinkedIn",
			github: "GitHub",
			technicalWriting: "Technical Writing",
			freeCodeCamp: "freeCodeCamp",
			medium: "Medium"
		},
		buttons: {
			email: "Send Email",
			whatsapp: "WhatsApp",
			sms: "SMS",
			linkedin: "Connect on LinkedIn",
			github: "View Projects",
			readArticles: "Read Articles",
			visitFreeCodeCamp: "Visit freeCodeCamp",
			visitMedium: "Visit Medium"
		},
		labels: {
			professionalProfile: "Professional Profile",
			codeRepository: "Code Repository",
			articlesTutorials: "Articles & Tutorials",
			remote: "Remote",
			availableForRemote: "Available for remote work",
			freeCodeCampProfile: "freeCodeCamp Profile",
			mediumProfile: "Medium Profile"
		}
	},
	ES: {
		hero: {
			title: "Ponte en Contacto",
			description: "Hablemos sobre tu próximo proyecto o oportunidad de colaboración"
		},
		contact: {
			title: "Información de Contacto",
			description: "No dudes en contactarme a través de cualquiera de estos canales"
		},
		links: {
			email: "Correo Electrónico",
			phone: "Teléfono",
			location: "Ubicación",
			linkedin: "LinkedIn",
			github: "GitHub",
			technicalWriting: "Escritura Técnica",
			freeCodeCamp: "freeCodeCamp",
			medium: "Medium"
		},
		buttons: {
			email: "Enviar Correo",
			whatsapp: "WhatsApp",
			sms: "SMS",
			linkedin: "Conectar en LinkedIn",
			github: "Ver Proyectos",
			readArticles: "Leer Artículos",
			visitFreeCodeCamp: "Visitar freeCodeCamp",
			visitMedium: "Visitar Medium"
		},
		labels: {
			professionalProfile: "Perfil Profesional",
			codeRepository: "Repositorio de Código",
			articlesTutorials: "Artículos y Tutoriales",
			remote: "Remoto",
			availableForRemote: "Disponible para trabajo remoto",
			freeCodeCampProfile: "Perfil de freeCodeCamp",
			mediumProfile: "Perfil de Medium"
		}
	}
};

// Helper function to get config for specific language
export const getContactConfig = (language = 'EN') => {
	return contactConfig[language] || contactConfig['EN'];
}; 