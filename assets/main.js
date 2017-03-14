var landingHeight = document.getElementById("landing_section").offsetHeight,
landingCTA = document.getElementById("landing_cta_button"),
landingHeadline = document.getElementById("landing_headline_text").offsetHeight,
landingSubtext = document.getElementById("landing_subtext_text").offsetHeight,
ctaMargin = landingHeight - landingHeadline - landingSubtext;

//alert(ctaMargin);

landingCTA.style.marginTop = ctaMargin / 1.3;
