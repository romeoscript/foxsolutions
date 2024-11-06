import '../../globals.css'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import initTranslations from '@/app/i18n';
import TranslationsProvider from "@/app/components/TranslationsProvider";
export const metadata = {
  title: 'Track and Trace',
  description: 'track your order',
}
const i18nNamespaces =['hero', 'company'];
export default async function RootLayout({ children,params }) {
  const { locale} = params;
  const {t,resources} = await initTranslations(locale,i18nNamespaces)
  return (
    <TranslationsProvider
    resources={resources}
    locale={locale}
    namespaces={i18nNamespaces}>
    <html lang="en">
      <body className='bg-white'>
    <Navbar/>
    {children}
    <Footer/>
      </body>
    </html>
    </TranslationsProvider>
  )
}
