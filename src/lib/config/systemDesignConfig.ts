// Type definitions
interface SystemDesignConfig {
	hero: {
		title: string;
		subtitle: string;
		description: string;
	};
	expertise: {
		title: string;
		description: string;
		architecture: {
			title: string;
			description: string;
			skills: string[];
		};
		performance: {
			title: string;
			description: string;
			skills: string[];
		};
		reliability: {
			title: string;
			description: string;
			skills: string[];
		};
	};
	process: {
		title: string;
		description: string;
		requirements: {
			title: string;
			description: string;
		};
		design: {
			title: string;
			description: string;
		};
	};
	projects: {
		title: string;
		description: string;
		ecommerce: {
			title: string;
			description: string;
			tech: string[];
		};
		chat: {
			title: string;
			description: string;
			tech: string[];
		};
		cdn: {
			title: string;
			description: string;
			tech: string[];
		};
	};
	buttons: {
		contact: string;
		portfolio: string;
	};
}

// System Design page configuration with multilingual support
export const systemDesignConfig: Record<string, SystemDesignConfig> = {
	EN: {
		hero: {
			title: "System Design Expertise",
			subtitle: "Scalable Architecture Solutions",
			description: "Specialized in designing and implementing robust, scalable system architectures that handle millions of users and complex business requirements."
		},
		expertise: {
			title: "Areas of Expertise",
			description: "Comprehensive system design experience across multiple domains and technologies.",
			architecture: {
				title: "Architecture Design",
				description: "Designing scalable system architectures that handle millions of users, high availability requirements, and complex business logic with microservices and event-driven patterns.",
				skills: ["Microservices Architecture", "Event-Driven Systems", "API Design & Development", "Database Design & Optimization"]
			},
			performance: {
				title: "Performance Optimization",
				description: "Optimizing system performance through advanced caching strategies, database optimization, and efficient algorithms to ensure sub-second response times.",
				skills: ["Caching Strategies (Redis, Memcached)", "Database Indexing & Query Optimization", "Load Balancing & Auto-scaling", "CDN Implementation"]
			},
			reliability: {
				title: "Reliability & Security",
				description: "Building fault-tolerant systems with comprehensive security measures, disaster recovery strategies, and 99.9% uptime guarantees.",
				skills: ["Fault Tolerance & Circuit Breakers", "Data Encryption & Security", "Backup & Recovery Systems", "Monitoring & Alerting"]
			}
		},
		process: {
			title: "Design Process",
			description: "Systematic approach to designing scalable solutions.",
			requirements: {
				title: "Requirements Analysis",
				description: "Deep dive into functional and non-functional requirements, understanding user needs, scalability requirements, and performance constraints."
			},
			design: {
				title: "High-Level Design",
				description: "Creating system architecture diagrams, defining components, and establishing communication patterns between services."
			}
		},
		projects: {
			title: "Featured Projects",
			description: "Real-world system design implementations.",
			ecommerce: {
				title: "E-commerce Platform",
				description: "Designed a scalable e-commerce system handling 1M+ daily users with real-time inventory management, payment processing, and recommendation engines.",
				tech: ["Microservices", "Redis", "PostgreSQL", "Kafka"]
			},
			chat: {
				title: "Real-time Chat System",
				description: "Built a real-time messaging platform supporting 100K+ concurrent users with WebSocket connections, message persistence, and push notifications.",
				tech: ["WebSockets", "MongoDB", "Redis", "Node.js"]
			},
			cdn: {
				title: "Content Delivery Network",
				description: "Designed a CDN system for global content distribution with edge caching, load balancing, and intelligent routing for optimal performance.",
				tech: ["Edge Computing", "Load Balancing", "Caching", "AWS"]
			}
		},
		buttons: {
			contact: "Get in Touch",
			portfolio: "View Portfolio"
		}
	},
	ES: {
		hero: {
			title: "Experiencia en Diseño de Sistemas",
			subtitle: "Soluciones de Arquitectura Escalable",
			description: "Especializado en diseñar e implementar arquitecturas de sistemas robustas y escalables que manejan millones de usuarios y requisitos empresariales complejos."
		},
		expertise: {
			title: "Áreas de Experiencia",
			description: "Experiencia integral en diseño de sistemas en múltiples dominios y tecnologías.",
			architecture: {
				title: "Diseño de Arquitectura",
				description: "Diseñando arquitecturas de sistemas escalables que manejan millones de usuarios, requisitos de alta disponibilidad y lógica empresarial compleja con microservicios y patrones dirigidos por eventos.",
				skills: ["Arquitectura de Microservicios", "Sistemas Dirigidos por Eventos", "Diseño y Desarrollo de API", "Diseño y Optimización de Base de Datos"]
			},
			performance: {
				title: "Optimización de Rendimiento",
				description: "Optimizando el rendimiento del sistema a través de estrategias avanzadas de caché, optimización de base de datos y algoritmos eficientes para garantizar tiempos de respuesta de menos de un segundo.",
				skills: ["Estrategias de Caché (Redis, Memcached)", "Indexación y Optimización de Consultas de Base de Datos", "Balanceo de Carga y Auto-escalado", "Implementación de CDN"]
			},
			reliability: {
				title: "Confiabilidad y Seguridad",
				description: "Construyendo sistemas tolerantes a fallas con medidas de seguridad integrales, estrategias de recuperación ante desastres y garantías de 99.9% de tiempo de actividad.",
				skills: ["Tolerancia a Fallas y Circuit Breakers", "Encriptación y Seguridad de Datos", "Sistemas de Respaldo y Recuperación", "Monitoreo y Alertas"]
			}
		},
		process: {
			title: "Proceso de Diseño",
			description: "Enfoque sistemático para diseñar soluciones escalables.",
			requirements: {
				title: "Análisis de Requisitos",
				description: "Análisis profundo de requisitos funcionales y no funcionales, entendiendo las necesidades del usuario, requisitos de escalabilidad y restricciones de rendimiento."
			},
			design: {
				title: "Diseño de Alto Nivel",
				description: "Creando diagramas de arquitectura del sistema, definiendo componentes y estableciendo patrones de comunicación entre servicios."
			}
		},
		projects: {
			title: "Proyectos Destacados",
			description: "Implementaciones reales de diseño de sistemas.",
			ecommerce: {
				title: "Plataforma de E-commerce",
				description: "Diseñé un sistema de e-commerce escalable que maneja más de 1M de usuarios diarios con gestión de inventario en tiempo real, procesamiento de pagos y motores de recomendación.",
				tech: ["Microservicios", "Redis", "PostgreSQL", "Kafka"]
			},
			chat: {
				title: "Sistema de Chat en Tiempo Real",
				description: "Construí una plataforma de mensajería en tiempo real que soporta más de 100K usuarios concurrentes con conexiones WebSocket, persistencia de mensajes y notificaciones push.",
				tech: ["WebSockets", "MongoDB", "Redis", "Node.js"]
			},
			cdn: {
				title: "Red de Distribución de Contenido",
				description: "Diseñé un sistema CDN para distribución global de contenido con caché en el edge, balanceo de carga y enrutamiento inteligente para rendimiento óptimo.",
				tech: ["Edge Computing", "Balanceo de Carga", "Caché", "AWS"]
			}
		},
		buttons: {
			contact: "Ponte en Contacto",
			portfolio: "Ver Portafolio"
		}
	}
};

// Helper function to get config for specific language
export const getSystemDesignConfig = (language = 'EN') => {
	return systemDesignConfig[language] || systemDesignConfig['EN'];
}; 