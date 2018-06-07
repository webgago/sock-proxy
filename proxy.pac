function FindProxyForURL(url, host) {

    if (shExpMatch(host, "*.slack-msgs.com") || shExpMatch(host, "*.linkedin.com") || shExpMatch(host, "*.slideshare.net")) {        
        // Use SOCK proxy, or fall back to a DIRECT traffic.
        // ssh -D 8000 [user]@[server]
        return "SOCKS 127.0.0.1:8000; DIRECT";
    }

    return "DIRECT";
}
