/* jshint esversion: 8 */

// Function to fetch the user's public IPv4 and IPv6 addresses
async function fetchIPAddresses() {
    const ipv4Url = "https://api.ipify.org?format=json"; // IPv4-only endpoint
    const ipv6Url = "https://api64.ipify.org?format=json"; // IPv6/IPv4 endpoint

    const ipResults = {
        ipv4: "Unavailable",
        ipv6: "Unavailable"
    };

    try {
        // Fetch IPv4 address
        const ipv4Response = await fetch(ipv4Url);
        if (ipv4Response.ok) {
            const ipv4Data = await ipv4Response.json();
            ipResults.ipv4 = ipv4Data.ip;
        }
    } catch (error) {
        console.error("Error fetching IPv4 address:", error);
    }

    try {
        // Fetch IPv6 address
        const ipv6Response = await fetch(ipv6Url);
        if (ipv6Response.ok) {
            const ipv6Data = await ipv6Response.json();
            ipResults.ipv6 = ipv6Data.ip;
        }
    } catch (error) {
        console.error("Error fetching IPv6 address:", error);
    }

    // Display the results
    const ipv4Element = document.getElementById("ipv4-address");
    const ipv6Element = document.getElementById("ipv6-address");

    if (ipv4Element) ipv4Element.textContent = ipResults.ipv4;
    if (ipv6Element) ipv6Element.textContent = ipResults.ipv6;

    console.log("Fetched IP addresses:", ipResults);
}
