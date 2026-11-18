const dev = process.env.NODE_ENV === 'development'
// De werkbalk van Vercel op previews laadt van vercel.live; productie niet
const preview = process.env.VERCEL_ENV === 'preview'
const live = preview ? ' https://vercel.live' : ''

// 'unsafe-inline': Next zet inline scripts in vooraf gebouwde pagina's zonder nonce,
// en React/Tailwind gebruiken style-attributen. 'unsafe-eval' alleen voor next dev.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval'" : ''}${live}`,
  `style-src 'self' 'unsafe-inline'${live}`,
  `img-src 'self' data: blob:${live}${preview ? ' https://vercel.com' : ''}`,
  `font-src 'self'${live}`,
  `connect-src 'self'${live}${preview ? ' wss://ws-us3.pusher.com' : ''}`,
  `frame-src ${preview ? 'https://vercel.live' : "'none'"}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  'upgrade-insecure-requests',
].join('; ')

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  productionBrowserSourceMaps: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}

export default nextConfig
