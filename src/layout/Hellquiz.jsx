import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async'

// import Footer from '@/components/Footer'
// import TopBar from '@/components/navbar/Topbar'
import BtnToTop from '@/components/button/BtnToTop'

const Hellquiz = ({
        title = 'HEllQuiz — Kuis menyenangkan dan berhadiah',
        kw = 'hellquiz, hellquiz id, hellquiz indonesia',
        desc = 'Hellquiz | Ikuti kuis yang menyenangkan dengan hadiah yang menarik',
        children
    }) => {
    return (
        <HelmetProvider>
            <Helmet prioritizeSeoTags>
                <title>{title}</title>
                <meta name='keywords' value={kw} />
                <meta name='description' value={desc} />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin
                />
                <link href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
            </Helmet>

            {/* <TopBar /> */}
                {children}
            {/* <Footer /> */}

            <BtnToTop />
        </HelmetProvider>
    )
}

Hellquiz.propTypes= {
    title: PropTypes.string.isRequired,
    kw: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    children: PropTypes.any,
}

export default Hellquiz