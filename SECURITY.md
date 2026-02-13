# Security Policy

## Supported Versions

Use the latest version of the Saphire Furnitures Empire website to ensure you have the most up-to-date security patches.

| Version | Supported          |
| ------- | ------------------ |
| v1.0.x  | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of our users seriously. If you believe you have found a security vulnerability in Saphire Furnitures Empire, please report it to us as described below.

**Please do not report security vulnerabilities through public GitHub issues.**

instead, please send an email to security@saphirefurnitures.co.ke (or replacing with your preferred contact).

You should receive a response within 24 hours. If for some reason you do not, please follow up via email to ensure we received your original message.

## Security Measures implemented

This project implements several security best practices:

1.  **Strict Content Security Policy (CSP)**: We use a robust CSP to prevent XSS attacks, only allowing scripts, styles, and images from trusted sources.
2.  **Secure Headers**:
    - `X-Content-Type-Options: nosniff` to prevent MIME-type sniffing.
    - `X-Frame-Options: DENY` to prevent clickjacking.
    - `Referrer-Policy: strict-origin-when-cross-origin` to control referrer information.
    - `Permissions-Policy` to restrict access to sensitive browser features like camera and microphone.
3.  **Input Validation**: All user inputs (e.g., in contact forms) are validated on both the client side and will be validated on the server side once fully implemented.
4.  **Secure Dependencies**: We regularly update dependencies to patch known vulnerabilities.
5.  **Environment Variable Protection**: sensitive configuration is kept out of the codebase using environment variables (not committed to git).

## Future Security Considerations

As we move towards a full-stack implementation (with database and authentication), we will ensure:

- **Authentication**: Secure session management using industry-standard libraries (e.g., Clerk or NextAuth.js).
- **Authorization**: Role-based access control (RBAC) particularly for the admin dashboard.
- **Data Encryption**: Encryption of sensitive data at rest and in transit.
- **Rate Limiting**: Implementation of rate limiting on API routes to prevent abuse.
