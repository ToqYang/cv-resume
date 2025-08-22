<script lang="ts">
	import BottomNav from '$lib/components/BottomNav.svelte';
	import { currentLanguage } from '$lib/stores/translations';

	const en = {
		title: 'Cover Letter',
		greeting: 'Dear Hiring Manager,',
		body: `I'm a results-driven full‑stack and mobile engineer who ships reliable products that move key metrics. I specialize in building secure APIs with Rails/Python and responsive UIs with React/React Native, partnering closely with product and design to turn ambiguity into clear, shippable scope. I'm comfortable across AWS (S3, DynamoDB, API Gateway), automated testing with RSpec, and pragmatic delivery frameworks (Agile, Shape Up, Kanban).

	Recently I have:
	- Built endpoints and optimized DB queries/joins for a sports recommender for Avianca (Star Alliance), increasing users by +2,000 (~12%).
	- Led integrations with 15+ partners and raised test coverage above 85% using RSpec.
	- Boosted feature adoption to 98% and reduced process times by 96.5% through thoughtful UX and automation.

	I combine user insight with pragmatic engineering to deliver measurable business value. I enjoy collaborating across product, design, and engineering to define clear scopes, remove ambiguity, and iterate fast. I’m excited to bring this mindset to your team and help deliver outcomes your customers will feel.

	Thank you for your time and consideration.

	Sincerely,
	Santiago Toquica Yanguas`,
		buttons: { print: 'Print', download: 'Download PDF' }
	};

	const es = {
		title: 'Carta de Presentación',
		greeting: 'Estimado/a Responsable de Selección:',
		body: `Soy un ingeniero full‑stack y móvil orientado a resultados que entrega productos confiables con impacto medible. Me especializo en construir APIs seguras con Rails/Python y UIs responsivas con React/React Native, colaborando con producto y diseño para convertir la ambigüedad en alcance claro y entregable. Me siento cómodo con AWS (S3, DynamoDB, API Gateway), pruebas automatizadas con RSpec y marcos de entrega pragmáticos (Agile, Shape Up, Kanban).

	Recientemente he:
	- Construí endpoints y optimicé consultas/joins de BD para un recomendador deportivo para Avianca (Star Alliance), aumentando los usuarios en +2.000 (~12%).
	- Lideré integraciones con 15+ partners y elevé la cobertura de pruebas por encima del 85% con RSpec.
	- Aumenté la adopción de funcionalidades al 98% y reduje tiempos de proceso en 96,5% mediante UX efectiva y automatización.

	Combino insights de usuario con ingeniería pragmática para generar valor de negocio. Disfruto colaborar con producto, diseño e ingeniería para definir alcances claros, reducir la ambigüedad e iterar rápido. Me entusiasma aportar esta mentalidad a su equipo y ayudar a entregar resultados que los clientes noten.

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
		}
		
		.print-button, .no-print, :global(.floating-nav) { 
			display: none !important; 
		}
	}
</style>
