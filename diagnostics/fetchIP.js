async function fetchIPAddresses() {
    const ipv4Url = "https://ipv4.icanhazip.com/";
    const ipv6Url = "https://ipv6.icanhazip.com/";

    const ipResults = {
        ipv4: "Unavailable",
        ipv6: "Unavailable"
    };

    try {
        // Fetch IPv4 address
        const ipv4Response = await fetch(ipv4Url);
        if (ipv4Response.ok) {
            ipResults.ipv4 = await ipv4Response.text();
        }
    } catch (error) {
        console.error("Error fetching IPv4 address:", error);
    }

    try {
        // Fetch IPv6 address
        const ipv6Response = await fetch(ipv6Url);
        if (ipv6Response.ok) {
            ipResults.ipv6 = await ipv6Response.text();
        }
    } catch (error) {
        console.error("Error fetching IPv6 address:", error);
    }

    // Display the results
    const ipv4Element = document.getElementById("ipv4-address");
    const ipv6Element = document.getElementById("ipv6-address");

    if (ipv4Element) ipv4Element.textContent = ipResults.ipv4.trim();
    if (ipv6Element) ipv6Element.textContent = ipResults.ipv6.trim();

    console.log("Fetched IP addresses:", ipResults);
}
