import "./globals.css";
import Header from "@/components/header";
import Progress from "@/components/progress";
import { ThemeProvider } from 'next-themes'
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-hans" suppressHydrationWarning>
      <body font='sans' >
        <ThemeProvider attribute="class" defaultTheme='light'>
          <div flex='~ col' min-h='100vh'>
            <Header />
            <div
              text="dark-1 dark:gray-3"
              className='main-container'
            >
              {children}
            </div>
            <Footer />
            <Progress />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
