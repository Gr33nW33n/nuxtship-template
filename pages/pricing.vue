<script setup>
definePageMeta({
  layout: "landing",
});

const pricing = [
  {
    name: "Basic",
    price: "$500/month",
    subText: "Get Started",
    popular: false,
    features: [
      "Unlimited updates",
      "One request at a time",
      "Average 48 hour delivery",
      "Limited Stock photo access",
      "Tier 1 Website Support",
      "Pause or cancel anytime"
    ],
    button: {
      text: "Get Started Today",
      link: "/",
    },
  },
  {
    name: "Pro",
    price: "$800/month",
    subText: "Best Value",
    popular: true,
    features: [
      "Unlimited updates",
      "Two request at a time",
      "Average 48 hour delivery",
      "Unlimited Stock photo access",
      "Tier 1 & 2 Website Support",
      "Pause or cancel anytime"
    ],
    button: {
      text: "Get Started Today",
      link: "#",
    },
  },
  {
    name: "Enterprise",
    price: "Let's Chat",
    subText: "Custom Solution",
    popular: false,
    features: [
      "All Pro features",
      "Domain support", 
      "DNS configuration",
      "Propietary systems",
      "Marketing solutions",
      "Custom design access"
    ],
    button: {
      text: "Contact us",
      link: "/contact",
    },
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Pricing</template>
      <template v-slot:desc
        >Simple & Predictable pricing. No Surprises.</template
      >
    </LandingSectionhead>

    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <LandingPricing v-for="item of pricing" :plan="item" />
    </div>
    <LandingPlatformTiers></LandingPlatformTiers>
  </LandingContainer>
</template>
