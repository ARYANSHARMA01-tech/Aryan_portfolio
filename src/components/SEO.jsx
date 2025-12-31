import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => {
    const siteTitle = 'Aryan Sharma | Agentic AI Engineer';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const defaultDescription = 'Portfolio of Aryan Sharma, a Machine Learning Engineer helping build the future of Agentic AI systems.';

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
    );
};

export default SEO;
