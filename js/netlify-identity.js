(function initNetlifyIdentity() {
  if (!window.netlifyIdentity) {
    return;
  }

  const hash = window.location.hash || "";
  const hasRecoveryToken = hash.includes("recovery_token=");
  const hasInviteToken = hash.includes("invite_token=");
  const hasConfirmationToken = hash.includes("confirmation_token=");
  const hasIdentityToken = hasRecoveryToken || hasInviteToken || hasConfirmationToken;

  function redirectToAdmin() {
    if (window.location.pathname !== "/admin/") {
      window.location.href = "/admin/";
    }
  }

  window.netlifyIdentity.on("login", function onLogin() {
    redirectToAdmin();
  });

  window.netlifyIdentity.on("init", function onInit(user) {
    if (user && hasIdentityToken) {
      redirectToAdmin();
      return;
    }

    if (!user && hasIdentityToken) {
      window.setTimeout(function openIdentityModal() {
        if (hasConfirmationToken || hasInviteToken) {
          window.netlifyIdentity.open("signup");
          return;
        }

        window.netlifyIdentity.open("login");
      }, 350);
    }
  });

  window.netlifyIdentity.init();
})();
