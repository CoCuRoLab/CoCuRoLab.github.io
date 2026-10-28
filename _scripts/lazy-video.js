/*
  plays videos marked data-lazy-video only while they're on screen, so they
  don't download, decode, or use memory until scrolled to. respects the
  user's reduced motion setting by leaving the poster frame in place.
*/

{
  const onLoad = () => {
    const videos = [...document.querySelectorAll("video[data-lazy-video]")];
    if (!videos.length) return;

    // leave poster frames for users who prefer reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // fallback for browsers without intersection observer
    if (!("IntersectionObserver" in window)) {
      videos.forEach((video) => video.play().catch(() => null));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting } of entries) {
          if (isIntersecting) target.play().catch(() => null);
          else target.pause();
        }
      },
      { rootMargin: "200px 0px" }
    );

    videos.forEach((video) => observer.observe(video));
  };

  // after page loads
  window.addEventListener("load", onLoad);
}
