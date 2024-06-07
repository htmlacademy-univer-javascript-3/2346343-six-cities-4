import { Link } from 'react-router-dom';

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Home() {
  const refreshPage = async ()=>{
    await delay(100);
    window.location.reload();
  };
  return (
    <div>
      <button onClick={() => {
        (async () => {
          await refreshPage();
        })();
      }}
      >Go to Main Page
      </button>
    </div>
  );
}

function ErrorScreen(): JSX.Element {
  return (
    <div className="container">
      <h2>404 error</h2>
      <Link to={'/'}><Home /></Link>
    </div>
  );
}

export default ErrorScreen;
