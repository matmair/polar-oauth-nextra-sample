import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'nextra-theme-blog/style.css';
import { User } from "oidc-client-ts";
import { AuthProvider } from "react-oidc-context";
import '../styles/main.css';

const onSigninCallback = (_user: User | void): void => {
  window.history.replaceState(
      {},

      document.title,
      window.location.pathname
  )
}

const oidcConfig = {
  authority: "https://api.polar.sh",
  client_id: "polar_ci_NmeoudqyJi2QXiflnI_sUw",
  redirect_uri: "https://tt1.invenhost.com/secured",
  scope: "openid profile email",
  onSigninCallback: onSigninCallback,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider {...oidcConfig}>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
