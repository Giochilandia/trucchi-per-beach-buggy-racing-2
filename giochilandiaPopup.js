/**
 * GiochilandiaPopup - Simple Popup Message Utility
 * Author: Giochilandia
 * License: Custom
 */

const GiochilandiaPopup = {
    /**
     * Displays a simple popup message in the center of the screen.
     * @param {string} message - The message to display.
     * @param {number} [duration=3000] - Duration in milliseconds before the popup disappears.
     */
    show(message, duration = 3000) {
        if (typeof message !== 'string' || message.trim() === '') {
            console.error('[GiochilandiaPopup] Invalid message.');
            return;
        }

        const popup = document.createElement('div');
        popup.textContent = message;
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.backgroundColor = '#222';
        popup.style.color = '#fff';
        popup.style.padding = '15px 25px';
        popup.style.borderRadius = '6px';
        popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        popup.style.fontFamily = 'Arial, sans-serif';
        popup.style.fontSize = '16px';
        popup.style.zIndex = '10000';
        popup.style.textAlign = 'center';

        document.body.appendChild(popup);

        setTimeout(() => {
            document.body.removeChild(popup);
        }, duration);
    }
};

// Example usage:
// GiochilandiaPopup.show('Level Complete!', 2000);

module.exports = GiochilandiaPopup;
