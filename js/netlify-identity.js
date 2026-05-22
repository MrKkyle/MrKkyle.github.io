(function initNetlifyIdentity() {
  if (!window.netlifyIdentity) {
    return;
  }

  const hash = window.location.hash || "";
  const hasIdentityToken =
    hash.includes("recovery_token=") ||
    hash.includes("invite_token=") ||
    hash.includes("confirmation_token=");

  window.netlifyIdentity.on("login", function onLogin() {
    window.location.href = "/admin/";
  });

  window.netlifyIdentity.on("init", function onInit(user) {
    if (!user && hasIdentityToken) {
      window.netlifyIdentity.open("login");
    }
  });

  window.netlifyIdentity.init();

  if (hasIdentityToken) {
    window.setTimeout(function openIdentityLogin() {
      window.netlifyIdentity.open("login");
    }, 300);
  }
})();
