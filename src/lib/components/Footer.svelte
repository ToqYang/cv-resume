<script>
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
                <a href="/style-guide" class="footer-link">
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
        background-color: var(--bg-secondary, #f8f9fa);
        padding: 2rem 0 6rem 0; /* Increased bottom padding to 6rem */
        margin-top: 4rem;
        border-top: 1px solid var(--border-color, #e9ecef);
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
        color: var(--text-secondary, #6c757d);
        text-decoration: none;
        font-size: 0.9rem;
        transition: color 0.2s ease;
    }

    .footer-link:hover {
        color: var(--primary-color, #000);
    }

    .copyright {
        color: var(--text-muted, #6c757d);
        font-size: 0.875rem;
        margin-top: 0.5rem;
    }

    @media (max-width: 768px) {
        .footer {
            padding: 1.5rem 0;
        }
    }
</style>
