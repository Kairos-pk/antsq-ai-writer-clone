import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import FeatureCards from "@/components/sections/FeatureCards";
import BusinessOwners from "@/components/sections/BusinessOwners";
import WizardsOverview from "@/components/sections/WizardsOverview";
import BlogWizard from "@/components/sections/BlogWizard";
import EmailWizard from "@/components/sections/EmailWizard";
import EcommerceWizard from "@/components/sections/EcommerceWizard";
import StartupWizard from "@/components/sections/StartupWizard";
import UserReviews from "@/components/sections/UserReviews";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main id="content">
      <Navigation />
      <Hero />
      <FeatureCards />
      <BusinessOwners />
      <WizardsOverview />
      <BlogWizard />
      <EmailWizard />
      <EcommerceWizard />
      <StartupWizard />
      <UserReviews />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}