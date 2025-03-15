import ssl
import socket

def check_ssl_certificate(url):
    hostname = url.split('//')[1].split('/')[0]
    context = ssl.create_default_context()
    
    with socket.create_connection((hostname, 443)) as sock:
        with context.wrap_socket(sock, server_hostname=hostname) as ssock:
            cert = ssock.getpeercert()
            return cert