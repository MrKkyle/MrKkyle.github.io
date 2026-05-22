(function initNetlifyIdentity() {
  if (!window.netlifyIdentity) {
    return;
  }

  function getTokenState() {
    const hash = window.location.hash || "";
    const hasRecoveryToken = hash.includes("recovery_token=");
    const hasInviteToken = hash.includes("invite_token=");
    const hasConfirmationToken = hash.includes("confirmation_token=");

    return {
      hasRecoveryToken,
      hasInviteToken,
      hasConfirmationToken,
      hasIdentityToken: hasRecoveryToken || hasInviteToken || hasConfirmationToken,
    };
  }

  function openModalFromHash() {
    const tokenState = getTokenState();

    if (!tokenState.hasIdentityToken) {
      return;
    }

    if (tokenState.hasConfirmationToken || tokenState.hasInviteToken) {
      window.netlifyIdentity.open("signup");
      return;
    }

    window.netlifyIdentity.open("login");
  }

  function redirectToAdmin() {
    if (window.location.pathname !== "/admin/") {
      window.location.href = "/admin/";
    }
  }

  window.netlifyIdentity.on("login", function onLogin() {
    redirectToAdmin();
  });

  window.netlifyIdentity.on("init", function onInit(user) {
    const tokenState = getTokenState();

    if (user && tokenState.hasIdentityToken) {
      redirectToAdmin();
      return;
    }

    if (!user && tokenState.hasIdentityToken) {
      openModalFromHash();
    }
  });

  window.addEventListener("hashchange", function onHashChange() {
    openModalFromHash();
  });

  window.netlifyIdentity.init();

  openModalFromHash();
})();
