import '@/styles/globals.css';
import MyContextProvider from '../utils/context';
import Layout from '@/components/Layout';
export default function App({ Component, pageProps }) {
  return (
    <MyContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyContextProvider>
  );
}
