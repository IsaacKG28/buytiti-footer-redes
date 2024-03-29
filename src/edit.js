import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
    return (
        <div {...useBlockProps()}>
            <div className="footer-container">
                <div className="footer-text">
                    Buytiti © 2024
                </div>
                <div className="footer-social-icons">
                    <a href="https://www.facebook.com/Buytitioficial" target="_blank" rel="noopener noreferrer">
                        <img src="/wordpress/wp-content/uploads/face-1.png" alt="Facebook" />
                    </a>
                    <a href="https://www.tiktok.com/@buytiti_oficial" target="_blank" rel="noopener noreferrer">
                        <img src="/wordpress/wp-content/uploads/tiktok.png" alt="TikTok" />
                    </a>
                    <a href="https://www.instagram.com/buytiti_oficial/" target="_blank" rel="noopener noreferrer">
                        <img src="/wordpress/wp-content/uploads/instagram.png" alt="Instagram" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCOvwAWXYINp6521E66WgLEw" target="_blank" rel="noopener noreferrer">
                        <img src="/wordpress/wp-content/uploads/youtube.png" alt="Youtube" />
                    </a>
                </div>
            </div>
        </div>
    );
}
