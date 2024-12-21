/* jshint esversion: 11 */

document.addEventListener('DOMContentLoaded', () => {
    // Feature detection for optional chaining
    function isOptionalChainingSupported() {
        try {
            const test = {}.nonexistent?.property;
            return true; // No error, optional chaining is supported
        } catch (e) {
            return false; // Syntax error, optional chaining is unsupported
        }
    }

    // Function to check if JavaScript is enabled
    function isJavaScriptEnabled() {
        return true; // If this code runs, JavaScript is enabled
    }

    // Function to get screen dimensions
    function getScreenDimensions() {
        return `${window.innerWidth} x ${window.innerHeight}`;
    }

    // Function to detect browser name and version
    function getBrowserInfo() {
        const userAgent = navigator.userAgent;
        let browserName = "Unknown";
        let version = "Unknown";

        if (/firefox/i.test(userAgent)) {
            browserName = "Firefox";
            version = userAgent.match(/Firefox\/(\d+\.\d+)/)?.[1] || "Unknown";
        } else if (/chrome|chromium|crios/i.test(userAgent)) {
            browserName = "Chrome";
            version = userAgent.match(/Chrome\/(\d+\.\d+)/)?.[1] || "Unknown";
        } else if (/safari/i.test(userAgent)) {
            browserName = "Safari";
            version = userAgent.match(/Version\/(\d+\.\d+)/)?.[1] || "Unknown";
        } else if (/edg/i.test(userAgent)) {
            browserName = "Edge";
            version = userAgent.match(/Edg\/(\d+\.\d+)/)?.[1] || "Unknown";
        }

        return `${browserName} ${version}`;
    }

    // Function to get colour depth and pixel ratio
    function getDisplayInfo() {
        return {
            colorDepth: `${screen.colorDepth} bits`,
            pixelRatio: window.devicePixelRatio || 1,
        };
    }

    // Function to get viewport dimensions
    function getViewportDimensions() {
        return `${window.innerWidth} x ${window.innerHeight}`;
    }

    // Function to get browser platform
    function getBrowserPlatform() {
        return navigator.platform || "Unavailable";
    }

    // Function to get preferred languages
    function getPreferredLanguages() {
        return navigator.languages ? navigator.languages.join(", ") : "Unavailable";
    }

    // Function to check if touch is supported
    function isTouchSupported() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0 ? "Yes" : "No";
    }

    // Cookies Enabled
    function areCookiesEnabled() {
        return navigator.cookieEnabled ? "Yes" : "No";
    }

    // Screen Orientation
    function getScreenOrientation() {
        if (isOptionalChainingSupported()) {
            return screen.orientation?.type || "Unavailable";
        } else {
            return screen.orientation && screen.orientation.type ? screen.orientation.type : "Unavailable";
        }
    }

    // Hardware Concurrency
    function getHardwareConcurrency() {
        return navigator.hardwareConcurrency || "Unavailable";
    }

    // Device Memory
    function getDeviceMemory() {
        return navigator.deviceMemory ? `${navigator.deviceMemory} GB` : "Unavailable";
    }

    // Time Zone
    function getTimeZone() {
        try {
            return Intl.DateTimeFormat().resolvedOptions().timeZone || "Unavailable";
        } catch (e) {
            return "Unavailable";
        }
    }

    // Language
    function getLanguage() {
        return navigator.language || "Unavailable";
    }

    // Connection Type
    function getConnectionType() {
        if (isOptionalChainingSupported()) {
            return navigator.connection?.effectiveType || "Unavailable";
        } else {
            return navigator.connection && navigator.connection.effectiveType ? navigator.connection.effectiveType : "Unavailable";
        }
    }

    // Populate the diagnostics table
    function populateDiagnostics() {
        // JavaScript status
        const jsStatus = document.querySelector('#js-status');
        if (jsStatus) jsStatus.textContent = isJavaScriptEnabled() ? "Enabled" : "Disabled";

        // Screen dimensions
        const screenDimensions = document.querySelector('#screen-dimensions');
        if (screenDimensions) screenDimensions.textContent = getScreenDimensions();

        // Viewport dimensions
        const viewportDimensions = document.querySelector('#viewport-dimensions');
        if (viewportDimensions) viewportDimensions.textContent = getViewportDimensions();

        // Browser info
        const browserInfo = document.querySelector('#browser-info');
        if (browserInfo) browserInfo.textContent = getBrowserInfo();

        // Browser platform
        const browserPlatform = document.querySelector('#browser-platform');
        if (browserPlatform) browserPlatform.textContent = getBrowserPlatform();

        // Display info
        const displayInfo = getDisplayInfo();
        const colorDepth = document.querySelector('#color-depth');
        if (colorDepth) colorDepth.textContent = displayInfo.colorDepth;

        const pixelRatio = document.querySelector('#pixel-ratio');
        if (pixelRatio) pixelRatio.textContent = displayInfo.pixelRatio;

        // User agent
        const userAgent = document.querySelector('#user-agent');
        if (userAgent) userAgent.textContent = navigator.userAgent;

        // Cookies status
        const cookiesStatus = document.querySelector('#cookies-status');
        if (cookiesStatus) cookiesStatus.textContent = areCookiesEnabled();

        // Screen orientation
        const screenOrientation = document.querySelector('#screen-orientation');
        if (screenOrientation) screenOrientation.textContent = getScreenOrientation();

        // Hardware concurrency
        const hardwareConcurrency = document.querySelector('#hardware-concurrency');
        if (hardwareConcurrency) hardwareConcurrency.textContent = getHardwareConcurrency();

        // Device memory
        const deviceMemory = document.querySelector('#device-memory');
        if (deviceMemory) deviceMemory.textContent = getDeviceMemory();

        // Time zone
        const timeZone = document.querySelector('#time-zone');
        if (timeZone) timeZone.textContent = getTimeZone();

        // Language
        const language = document.querySelector('#language');
        if (language) language.textContent = getLanguage();

        // Preferred languages
        const preferredLanguages = document.querySelector('#preferred-languages');
        if (preferredLanguages) preferredLanguages.textContent = getPreferredLanguages();

        // Connection type
        const connectionType = document.querySelector('#connection-type');
        if (connectionType) connectionType.textContent = getConnectionType();

        // Touch support
        const touchSupport = document.querySelector('#touch-support');
        if (touchSupport) touchSupport.textContent = isTouchSupported();
    }

    populateDiagnostics();
});
