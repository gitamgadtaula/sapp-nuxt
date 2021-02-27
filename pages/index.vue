<template>
  <div>
    <ScrollupSection />
    <div class="main">
      <HeaderSection />
      <HeroSection />
      <CounterSection />
      <FeatureSection />
      <ServiceSection />
      <DiscoverSection />
      <WorkSection />
      <ScreenshotSection />
      <ReviewSection />
      <PricingSection />
      <FaqSection />
      <TeamSection />
      <DownloadSection />
      <NewsletterSection />
      <ContactSection />
      <FooterSection />
    </div>
  </div>
</template>

<script>
import ScrollupSection from '../components/ScrollupSection/scrollUp'
import HeaderSection from '../components/HeaderSection/headerOne'
import HeroSection from '../components/HeroSection/heroOne'
import CounterSection from '../components/CounterSection/counter'
import FeatureSection from '../components/FeatureSection/featureOne'
import ServiceSection from '../components/ServiceSection/serviceOne'
import DiscoverSection from '../components/DiscoverSection/discoverOne'
import WorkSection from '../components/WorkSection/work'
import ScreenshotSection from '../components/ScreenshotSection/screenshotOne'
import ReviewSection from '../components/ReviewSection/reviewOne'
import PricingSection from '../components/PricingSection/pricingOne'
import FaqSection from '../components/FaqSection/faqOne'
import TeamSection from '../components/TeamSection/team'
import DownloadSection from '../components/DownloadSection/download'
import NewsletterSection from '../components/NewsletterSection/newsletter'
import ContactSection from '../components/ContactSection/contactOne'
import FooterSection from '../components/FooterSection/footerOne'

export default {
  name: 'ThemeOne',
  components: {
    ScrollupSection,
    HeaderSection,
    HeroSection,
    CounterSection,
    FeatureSection,
    ServiceSection,
    DiscoverSection,
    WorkSection,
    ScreenshotSection,
    ReviewSection,
    PricingSection,
    FaqSection,
    TeamSection,
    DownloadSection,
    NewsletterSection,
    ContactSection,
    FooterSection
  }
}
</script>

<style>

</style>