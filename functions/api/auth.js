export async function onRequestGet({ request, env }) {
    const url = new URL(request.url);
    const redirectTo = `https://github.com/login/oauth/authorize?client_id=${env.GITHUB_CLIENT_ID}&scope=repo&redirect_uri=${encodeURIComponent(url.origin + "/api/callback")}`;
    return Response.redirect(redirectTo, 302);
  }