<script>
    import { base } from '$app/paths';
    import { currentLanguage, getCurrentLanguage } from '$lib/stores/translations';
    import { get } from 'svelte/store';
    
    // Get translations for the current language
    $: language = getCurrentLanguage();
    $: footer = {
        styleGuide: 'Style Guide',
        copyright: `© ${new Date().getFullYear()} Santiago Toquica Yanguas`
    };
</script>

<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-links">
                <a href="{base}/style-guide" class="footer-link">
                    {footer.styleGuide}
                </a>
            </div>
            <div class="copyright">
                {footer.copyright}
            </div>
        </div>
    </div>
</footer>

<style>
    .footer {
        background-color: var(--bg-secondary);
        padding: 2rem 0 6rem 0; /* Increased bottom padding to 6rem */
        margin-top: 4rem;
        border-top: 1px solid var(--border-color);
        transition: background-color 0.3s ease, border-color 0.3s ease;
    }

    .footer-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        text-align: center;
    }

    .footer-links {
        display: flex;
        gap: 1.5rem;
    }

    .footer-link {
        color: var(--text-secondary);
        text-decoration: none;
        font-size: 0.9rem;
        transition: color 0.3s ease;
    }

    .footer-link:hover {
        color: var(--text-primary);
    }

    .copyright {
        color: var(--text-muted);
        font-size: 0.875rem;
        margin-top: 0.5rem;
        transition: color 0.3s ease;
    }

    @media (max-width: 768px) {
        .footer {
            padding: 1.5rem 0;
        }
    }
</style>
