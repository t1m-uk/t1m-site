document.addEventListener('DOMContentLoaded', () => {
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
            version = userAgent.match(/Firefox\/([\d\.]+)/)?.[1] || "Unknown";
        } else if (/chrome|chromium|crios/i.test(userAgent)) {
            browserName = "Chrome";
            version = userAgent.match(/Chrome\/([\d\.]+)/)?.[1] || "Unknown";
        } else if (/safari/i.test(userAgent)) {
            browserName = "Safari";
            version = userAgent.match(/Version\/([\d\.]+)/)?.[1] || "Unknown";
        } else if (/edg/i.test(userAgent)) {
            browserName = "Edge";
            version = userAgent.match(/Edg\/([\d\.]+)/)?.[1] || "Unknown";
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

    // Function to populate the diagnostics table
    function populateDiagnostics() {
        // JavaScript status
        document.querySelector('#js-status').textContent = isJavaScriptEnabled() ? "Enabled" : "Disabled";

        // Screen dimensions
        document.querySelector('#screen-dimensions').textContent = getScreenDimensions();

        // Browser info
        document.querySelector('#browser-info').textContent = getBrowserInfo();

        // Display info
        const displayInfo = getDisplayInfo();
        document.querySelector('#color-depth').textContent = displayInfo.colorDepth;
        document.querySelector('#pixel-ratio').textContent = displayInfo.pixelRatio;

        // User agent
        document.querySelector('#user-agent').textContent = navigator.userAgent;
    }

    populateDiagnostics();
});
