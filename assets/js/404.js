anime({
    targets: ".row svg",
    translateY: 10,
    autoplay: true,
    loop: true,
    easing: "easeInOutSine",
    direction: "alternate",
});
anime({
    targets: "#zero",
    translateX: 10,
    autoplay: true,
    loop: true,
    easing: "easeInOutSine",
    direction: "alternate",
    scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
    rotateY: { value: "+=180", delay: 200 },
});
// JavaScript example to detect sitemap.xml URL and act accordingly
if (window.location.pathname === '/sitemap.xml') {
  // This is the sitemap URL, so do NOT run 404 page animations or other SPA logic
  console.log('Sitemap page detected - skipping animations.');
} else {
  // Run your 404 page or SPA animation code here
  anime({
    targets: ".row svg",
    translateY: 10,
    autoplay: true,
    loop: true,
    easing: "easeInOutSine",
    direction: "alternate",
  });

  anime({
    targets: "#zero",
    translateX: 10,
    autoplay: true,
    loop: true,
    easing: "easeInOutSine",
    direction: "alternate",
    scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
    rotateY: { value: "+=180", delay: 200 },
  });
}
