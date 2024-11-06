import Hero from "../../components/Hero";
import Overview from "../../components/Overview";
import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";
import initTranslations from "@/app/i18n";
import Blog from "../../components/Blog";
import TranslationsProvider from "@/app/components/TranslationsProvider";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const i18nNamespaces =['hero', 'company'];
export default async function Home({params:{locale}}) {
  const {t,resources} = await initTranslations(locale,i18nNamespaces)
  return (
    <TranslationsProvider
    resources={resources}
    locale={locale}
    namespaces={i18nNamespaces}>
    <main className="bg-white">
      <Navbar/> 
      <Hero/>
      <Overview/>
      <Services/>
      <Testimonials/> 
      <Blog/>
      <Footer/>
    </main>
    </TranslationsProvider>
  );
}
