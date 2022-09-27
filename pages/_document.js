import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html>
      <Head>
        <>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>An-Nafa Academy - E-learning Madrasah for Kids</title>
          <meta
            name="keywords"
            content="online education, e-learning, coaching, education, teaching, learning"
          />
          <meta
            name="description"
            content="An-Nafa Academy is an online learning hub for people of all age groups who wish to seek authentic knowledge of the Deen from the comfort of their homes."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="manifest" href="site.webmanifest" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="img/favicon-1.png"
          />
          {/* Place favicon.ico in the root directory */}
          {/* CSS here */}
          <link rel="stylesheet" href="css/bootstrap.min.css" />          
          <link rel="stylesheet" href="css/owl.carousel.min.css" />
          <link rel="stylesheet" href="css/animate.css" />
          <link rel="stylesheet" href="css/magnific-popup.css" />
          <link rel="stylesheet" href="css/all.min.css" />
          <link rel="stylesheet" href="css/flaticon.css" />
          <link rel="stylesheet" href="css/font.css" />
          <link rel="stylesheet" href="css/metisMenu.css" />
          <link rel="stylesheet" href="css/nice-select.css" />
          <link rel="stylesheet" href="css/slick.css" />
          <link rel="stylesheet" href="css/spacing.css" />
          <link rel="stylesheet" href="css/main.css" />
          
        </>
      </Head>
      <body>
        <Main />
        <NextScript />

        <script src="js/vendor/modernizr-3.5.0.min.js" async/>
        <script src="js/vendor/jquery-2.2.4.min.js" async/>
        <script src="js/popper.min.js" async/>
        <script src="js/bootstrap.min.js" async/>

        <script src="js/owl.carousel.min.js" async/>
        <script src="js/isotope.pkgd.min.js" async/>
        <script src="js/slick.min.js" async/>
        <script src="js/metisMenu.min.js" async/>
        <script src="js/jquery.nice-select.js" async/>
        <script src="js/ajax-form.js" async/>
        <script src="js/wow.min.js" async/>
        <script src="js/jquery.counterup.min.js" async/>
        <script src="js/waypoints.min.js" async/>
        <script src="js/jquery.scrollUp.min.js" async/>
        <script src="js/imagesloaded.pkgd.min.js" async/>
        <script src="js/jquery.magnific-popup.min.js" async/>
        <script src="js/jquery.easypiechart.js" async/>
        <script src="js/plugins.js" async/>
        <script src="js/main.js" async/>
      </body>
    </Html>
  );
}
