import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';
import Footer from '../components/Template/Footer';

function UpdateMetaDesc(MetaDec) {
  const MetaDescEle = document.querySelector('meta[name=description]');

  if (MetaDescEle) {
    if (MetaDescEle.getAttribute('content') === MetaDec) {
      /* eslint-disable-line no-alert, no-console */
    } else {
      document.querySelector('meta[name="description"]').setAttribute('content', MetaDec);
    }
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = MetaDec;
    document.getElementsByTagName('head')[0].appendChild(meta);
  }
}

const Main = (props) => {
  useEffect(() => {
    UpdateMetaDesc(props.description);
  });
  return (
    <HelmetProvider>
      <Analytics />
      <ScrollToTop />
      <div id="wrapper">
        <Navigation />
        <div id="main">
          {props.children}
        </div>
        {props.fullPage ? null : <SideBar />}
      </div>
      <Footer />
      <Helmet titleTemplate="Ray Liu | %s" defaultTitle="Ray Liu" defer={false}>
        {props.title && <title>{props.title}</title>}
        <meta name="description" content={props.description} />
      </Helmet>
    </HelmetProvider>
  );
};

// function Main(props) {
//   useEffect(() => {
//     UpdateMetaDesc(props.description);
//   });
//   return (
//     <HelmetProvider>
//       <Analytics />
//       <ScrollToTop />
//       <div id="wrapper">
//         <Navigation />
//         <div id="main">
//           {props.children}
//         </div>
//         {props.fullPage ? null : <SideBar />}
//       </div>
//       <Footer />
//       <Helmet titleTemplate="Ray Liu | %s" defaultTitle="Ray Liu" defer={false}>
//         {props.title && <title>{props.title}</title>}
//         <meta name="description" content={props.description} />
//       </Helmet>
//     </HelmetProvider>
//   );
// }

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Ray Liu's personal website.",
};

export default Main;
