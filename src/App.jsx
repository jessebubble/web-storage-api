import { PageIntro } from './components/PageIntro';

function Footer() {
    return (
        <footer className="mt-24 w-full sm:mt-32">
            <div className="border-t border-neutral-950/10 pr-3 pt-12">
                <p className="text-end text-sm text-gray-700">
                    <a
                        className="hover:text-centro-pink"
                        href="https://www.jessebubble.dev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        jessebubble.dev <span aria-hidden="true">→</span>
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default function App() {
    return (
        <>
            <PageIntro
                eyebrow="Web Storage API"
                title="Storing data on the user's browser"
            >
                <p>
                    The Web Storage API offers a straightforward and efficient
                    method for storing and managing small amounts of client-side
                    data for web applications. This browser feature allows for
                    local storage of key-value pairs in a user&rsquo;s web
                    browser. It is commonly used for storing data that persists
                    across browser sessions, making it ideal for storing
                    user-specific data, settings, or preferences
                </p>
            </PageIntro>

            <Footer />
        </>
    );
}
