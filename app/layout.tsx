import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Sidebar from '@/components/sidebar'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nallamala House',
  description: 'Nallamala House: Indian Institute of Madras',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Primary Meta Tags */}
        <title>Nallamala House</title>
        <meta
          name="description"
          content="Explore Nallamala House at IIT Madras."
        />
        <meta name="viewport" content="width=device-width" />
        <meta name="author" content="Nallamala House Team" />
        <meta name="keywords" content="IIT Madras, Data Science, Nallamala House, BS Program, Applications, Education, Innovation, Engineering, Online Degree, BS in Data Science, Indian Institute of Technology Madras, iit jee, IIT JEE, iit madras data science course, iit madras online degree, iit madras bsc data science, online degree courses in india, iitm bs houses, nallamala, iitm bs, iitm" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Nallamala House - Indian Institute of Technology Madras" />
        <meta
          property="og:description"
          content="Explore Nallamala House at IIT Madras BS Degree"
        />
        <meta property="og:image" content="og-image.png" />
        <meta property="og:url" content="https://nallamala.vercel.app/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nallamala House - Indian Institute of Technology Madras" />
        <meta
          name="twitter:description"
          content="Explore Nallamala House at IIT Madras BS in Data Science and Application."
        />
        <meta name="twitter:image" content="og-image.png" />

        {/* Favicon */}
        <link rel="icon" href="Nallamala-House.png" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="Nallamala-House.png" />
        <link rel="apple-touch-icon" href="Nallamala-House.png" />
        <meta name="theme-color" content="#000000" />
        
        {/* Robots and Canonical */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nallamala.vercel.app/" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nallamala House IIT Madras",
              "url": "https://nallamala.vercel.app",
              "logo": "https://nallamala.vercel.app/Nallamala-House.png",
              "sameAs": [
                "https://www.facebook.com/@iitmadrasbsdegree",
                "https://www.instagram.com/housenallamala",
                "https://www.instagram.com/iitmadras_bs",
                "https://www.linkedin.com/company/iit-madras-bs-datascience-programme",
                "https://study.iitm.ac.in/ds/student_life.html",
                "https://study.iitm.ac.in",
                "https://www.iitm.ac.in/",
                "https://x.com/iitm_bs",
                "https://www.linkedin.com/company/nallamala-house-iit-madras"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex h-screen">
            <Sidebar />
            <div className="ml-20 flex-1 flex flex-col">
              <Navbar />
              <main className="flex-1 bg-background">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
