<script lang="ts">
	import BottomNav from '$lib/components/BottomNav.svelte';
	import { currentLanguage } from '$lib/stores/translations';

	const en = {
		title: 'Cover Letter',
		greeting: 'Dear Hiring Manager,',
		body: `I'm a results-driven full‑stack and mobile engineer who leverages AI to ship reliable products that move key metrics. I specialize in building secure, AI-enhanced applications with Rails/Python and React/React Native, partnering closely with product and design to turn ambiguity into clear, shippable scope. My expertise spans AWS (S3, DynamoDB, API Gateway), automated testing with RSpec, and modern AI tools like Cursor, GitHub Copilot, and AWS Bedrock.

	My AI-augmented development approach enables me to:
	- Rapidly prototype and iterate on features while maintaining high code quality
	- Write more secure and efficient code through AI-powered review and optimization
	- Automate repetitive tasks, reducing development time by up to 40%

	Recently I have:
	- Built AI-powered features that improved user engagement by 35% through personalized recommendations
	- Integrated AI tools into our CI/CD pipeline, reducing code review time by 50% while maintaining 85%+ test coverage
	- Led integrations with 15+ partners and boosted feature adoption to 98% through thoughtful UX and automation

	I combine deep technical expertise with AI augmentation to deliver exceptional business value. I'm excited to bring this powerful combination to your team and help build the next generation of intelligent applications that deliver real impact.

	Thank you for your time and consideration.

	Sincerely,
	Santiago Toquica Yanguas`,
		buttons: { print: 'Print', download: 'Download PDF' }
	};

	const es = {
		title: 'Carta de Presentación',
		greeting: 'Estimado/a Responsable de Selección:',
		body: `Soy un ingeniero full‑stack y móvil que aprovecha la IA para entregar productos confiables con impacto medible. Me especializo en construir aplicaciones seguras mejoradas con IA utilizando Rails/Python y React/React Native, colaborando con producto y diseño para convertir la ambigüedad en alcance claro y entregable. Mi experiencia abarca AWS (S3, DynamoDB, API Gateway), pruebas automatizadas con RSpec y herramientas modernas de IA como Cursor, GitHub Copilot y AWS Bedrock.

	Mi enfoque de desarrollo aumentado por IA me permite:
	- Prototipar e iterar rápidamente en características manteniendo un código de alta calidad
	- Escribir código más seguro y eficiente mediante revisión y optimización potenciada por IA
	- Automatizar tareas repetitivas, reduciendo el tiempo de desarrollo hasta en un 40%

	Recientemente he:
	- Desarrollado funciones con IA que mejoraron la participación de usuarios en un 35% a través de recomendaciones personalizadas
	- Integrado herramientas de IA en nuestra canalización CI/CD, reduciendo el tiempo de revisión de código en un 50% manteniendo una cobertura de pruebas superior al 85%
	- Liderado integraciones con más de 15 socios y aumentado la adopción de funciones al 98% mediante UX efectiva y automatización

	Combino experiencia técnica profunda con aumentación de IA para ofrecer un valor de negocio excepcional. Me entusiasma la oportunidad de llevar esta poderosa combinación a su equipo y ayudar a construir la próxima generación de aplicaciones inteligentes que generen un impacto real.

	Gracias por su tiempo y consideración.

	Atentamente,
	Santiago Toquica Yanguas`,
		buttons: { print: 'Imprimir', download: 'Descargar PDF' }
	};

	$: t = $currentLanguage === 'ES' ? es : en;

	function handlePrint() {
		if (typeof window === 'undefined') return;
		const originalTitle = document.title;
		document.title = 'Cover_Letter_SantiagoToquicaYanguas';
		window.print();
		setTimeout(() => (document.title = originalTitle), 100);
	}
</script>

<svelte:head>
	<title>{t.title} - Santiago Toquica Yanguas</title>
	<meta name="description" content={t.title} />

	<!-- Open Graph -->
	<meta property="og:title" content={`${t.title} - Santiago Toquica Yanguas`} />
	<meta property="og:description" content={t.title} />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="/photo_profile.jpeg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={`${t.title} - Santiago Toquica Yanguas`} />
	<meta name="twitter:description" content={t.title} />
	<meta name="twitter:image" content="/photo_profile.jpeg" />
</svelte:head>

<div class="cl-container">
	<article class="cl-content print-content">
		<h1 class="cl-title">{t.title}</h1>
		<p class="cl-paragraph">{t.greeting}</p>
		<div class="cl-body">
			{#each t.body.split('\n') as line}
				{#if line.trim().startsWith('- ')}
					<li class="cl-list">{line.replace('- ', '')}</li>
				{:else if line.trim().length === 0}
					<br />
				{:else}
					<p class="cl-paragraph">{line}</p>
				{/if}
			{/each}
		</div>
	</article>

	<!-- Print Button -->
	<button class="print-button no-print" on:click={handlePrint} title={t.buttons.print}>
		🖨️
	</button>

	<BottomNav currentPage="/cover-letter" />
</div>

<style>
	.cl-container {
		min-height: 100vh;
		background-color: #f5f5f5;
		padding-bottom: 160px;
	}

	.cl-content {
		background: var(--background-primary);
		max-width: 900px;
		margin: var(--spacing-4) auto;
		padding: var(--spacing-6) var(--spacing-8);
		border-radius: var(--border-radius-xl);
		box-shadow: var(--shadow-lg);
	}

	.cl-title {
		text-align: center;
		margin-bottom: var(--spacing-4);
	}

	.cl-paragraph { line-height: 1.6; margin: 0 0 0.75rem 0; }
	.cl-list { margin-left: 1.25rem; line-height: 1.6; }

	.print-button {
		position: fixed;
		bottom: 120px;
		right: 20px;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background-color: var(--primary-color);
		color: white;
		border: none;
		font-size: 24px;
		cursor: pointer;
		box-shadow: 0 4px 12px rgba(0,0,0,0.15);
		transition: all 0.3s ease;
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.print-button:hover { background-color: var(--primary-dark); transform: translateY(-2px); }
	.print-button:active { transform: translateY(0); }

	@media (max-width: 768px) {
		.cl-content { padding: var(--spacing-6); }
		.cl-container { padding-bottom: 200px; }
	}

	@media print {
		@page {
			margin: 0;
			size: A4;
		}
		
		body, .cl-container, .cl-content {
			background-color: white !important;
			color: black !important;
			margin: 0;
			padding: 0 !important;
		}
		
		.cl-container { 
			padding: 0 !important;
			height: 100%;
		}
		
		.cl-content {
			margin: 0 !important;
			padding: 2cm !important;
			box-shadow: none !important;
			border-radius: 0 !important;
			min-height: 29.7cm;
			width: 21cm;
			display: block;
			background-color: white !important;
		}
		
		.cl-title {
			color: black !important;
		}
		
		.cl-paragraph, .cl-list {
			color: black !important;
		}
		
		.print-button, .no-print, :global(.floating-nav) { 
			display: none !important; 
		}
	}
</style>
