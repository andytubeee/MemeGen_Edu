import 'tailwindcss/tailwind.css';
import '@material-tailwind/react/tailwind.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='title' content='Memelet' />
        <meta
          name='description'
          content='Memelet is a flash-card generator that generates memes with study materials. Built with React, Nextjs, Python, Flask, TailwindCSS. We help students study better with memes.'
        />
        <meta
          name='keywords'
          content='memes,study,procrastinate,exams,test,fun,humour,React,Nextjs,TailwindCSS,Python,Flask,Heroku,WaffleHacks,Andrew Yang,Sohil Athare,Emre Cenk, Callum Irving'
        />
        <meta name='robots' content='index, follow' />
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='language' content='English' />
        <meta name='revisit-after' content='1 days' />
        <meta name='author' content='Andrew, Sohil, Emre, Callum' />
        <title>Memelet</title>
        <link rel='icon' href='/favicon.ico' />
        // Material Icons Link
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'
        />
        // Font Awesome Link
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css'
          integrity='sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=='
          crossOrigin='anonymous'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
