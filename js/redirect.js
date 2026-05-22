const redirectContainer = document.querySelector("[data-redirect-url]");

if (redirectContainer) {
  const targetUrl = redirectContainer.getAttribute("data-redirect-url");
  const delayValue = Number(redirectContainer.getAttribute("data-redirect-delay") || "4");
  const link = document.getElementById("targetLink");
  const countdownText = document.getElementById("countdown");

  if (link && targetUrl) {
    link.href = targetUrl;
    link.textContent = targetUrl;
  }

  let seconds = Math.max(1, delayValue);

  const renderCountdown = () => {
    if (countdownText) {
      countdownText.textContent = String(seconds);
    }
  };

  renderCountdown();

  const timer = setInterval(() => {
    seconds -= 1;
    renderCountdown();

    if (seconds <= 0) {
      clearInterval(timer);
      if (targetUrl) {
        window.location.href = targetUrl;
      }
    }
  }, 1000);
}
