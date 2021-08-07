import '../styles/globals.css';

import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />;
			<Footer />
		</>
	);
}

export default MyApp;
