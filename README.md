# Polar oAuth Nextra Smaple

1. Get yourself a client id from https://polar.sh/settings (you need at least the oidc, email and profile scope for this sample)
2. Set up `client_id` and `redirect_uri` in `pages/_app.tsx`
3. Deploy to your prefered nexts.js hoster or s3 bucket
4. Success - you now have an access token that you can pass to polar to query things, pass to your edge-function of choice for auth and much more
