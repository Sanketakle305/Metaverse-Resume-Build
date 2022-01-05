import Head from 'next/head';
import Login from '../components/login';
import { useMoralis } from 'react-moralis';

export default function Home() {

  const {isAuthenticated , logout} = useMoralis();

  if (!isAuthenticated){return <Login />}
  else {
      return (
        <div className="">
          <Head>
            <title>Metaverse Login</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <h1>Welcome to the metaverse </h1>
          <button onClick={logout}>Logout</button>
        </div>
      )
    } 
}
