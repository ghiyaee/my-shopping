import '@/styles/globals.css';
import MyContextProvider from '../utils/context';
import Layout from '@/components/Layout';
import Head from 'next/head';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <MyContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MyContextProvider>
    </>
  );
}
