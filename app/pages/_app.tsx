import type { AppProps } from 'next/app';

import { test } from '@/utils/constants';

import '@/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default App;
