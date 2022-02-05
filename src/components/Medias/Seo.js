import React from 'react';
import { Helmet } from 'react-helmet'
import banner from './Banner/banner.jpg'

const Seo = () => {
  return (<>

            <Helmet>

                {/* <!-- Primary Meta Tags --> */}
                <title>Cedrick Lupembe</title>
                <meta name="title" content="Cedrick Lupembe" />
                <meta name="description" content="A Web UI Front-End Developer.
                    I help companies and organizations build modern, resilient, and inclusive Web user interfaces with a strong focus on responsive design, performance, and accessibility." />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://cedricklupembe.netlify.com/" />
                <meta property="og:title" content="Cedrick Lupembe" />
                <meta property="og:description" content="A Web UI Front-End Developer.
                I help companies and organizations build modern, resilient, and inclusive Web user interfaces with a strong focus on responsive design, performance, and accessibility." />
                <meta property="og:image" content={banner} />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://cedricklupembe.netlify.com/" />
                <meta property="twitter:title" content="Cedrick Lupembe" />
                <meta property="twitter:description" content="A Web UI Front-End Developer.
                I help companies and organizations build modern, resilient, and inclusive Web user interfaces with a strong focus on responsive design, performance, and accessibility." />
                <meta property="twitter:image" content={banner} />

            </Helmet>

        </>
)};

export default Seo;
