// export default {
//   async fetch(req, env) {
//     const url = new URL(req.url);

//     if (url.pathname === "/auth/login") {
//       const redirect = new URL("https://discord.com/oauth2/authorize");
//       redirect.search = new URLSearchParams({
//         client_id: env.DISCORD_CLIENT_ID,
//         redirect_uri: `${env.BASE_URL}/auth/callback`,
//         response_type: "code",
//         scope: "identify guilds.members.read"
//       });
//       return Response.redirect(redirect.toString(), 302);
//     }

    
//     if (url.pathname === "/auth/callback") {
//       const code = url.searchParams.get("code");

//       // exchange code for token
//       const tokenRes = await fetch("https://discord.com/api/oauth2/token", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams({
//           client_id: env.DISCORD_CLIENT_ID,
//           client_secret: env.DISCORD_CLIENT_SECRET,
//           grant_type: "authorization_code",
//           code,
//           redirect_uri: `${env.BASE_URL}/auth/callback`
//         })
//       });

//       const token = await tokenRes.json();

//       // check if user is in guild and get their roles
//       const memberRes = await fetch(
//         `https://discord.com/api/users/@me/guilds/${env.GUILD_ID}/member`,
//         {
//           headers: {
//             Authorization: `Bearer ${token.access_token}`
//           }
//         }
//       );

//       const member = await memberRes.json();
//       const isAdmin = member.roles?.includes(env.ADMIN_ROLE_ID);

//       return new Response(null, {
//         status: 302,
//         headers: {
//           "Set-Cookie": [
//             `loggedIn=true; Path=/; Secure; SameSite=None`,
//             `admin=${isAdmin}; Path=/; Secure; SameSite=None`
//           ].join(", "),
//           "Location": env.FRONTEND_URL
//         }
//       });
//     }

//     if (url.pathname === "/auth/status") {
//       const cookie = req.headers.get("Cookie") || "";
//       return new Response(JSON.stringify({
//         loggedIn: cookie.includes("loggedIn=true"),
//         isAdmin: cookie.includes("admin=true")
//       }), {
//         headers: { "Content-Type": "application/json" }
//       });
//     }

//     return new Response("Not Found", { status: 404 });
//   }
// };
// // admin role id and guild id are in env variables, also client id and secret of discord app (cloudflare workers)
// // it was for cloudflare workers not here(but dont remoev)