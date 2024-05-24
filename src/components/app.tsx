import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainScreen from '../pages/main-screen';
import LoginScreen from '../pages/login-screen';
import FavoutitesScreen from '../pages/favourites-screen';
import OfferScreen from '../pages/offer-screen';
import ErrorScreen from '../pages/error-screen';
import PrivateRoute from './private-route';
import LoadingScreen from '../pages/loading-screen';
import { Review } from '../types/review';
import { useAppSelector } from '../hooks';
import { AuthorizationStatus } from '../const';

type AppComponentProps = {
  reviews: Review[];
};

function App({ reviews }: AppComponentProps): JSX.Element | null {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  const isOffersDataLoading = useAppSelector(
    (state) => state.isOffersDataLoading
  );

  if (
    authorizationStatus === AuthorizationStatus.Unknown ||
    isOffersDataLoading
  ) {
    return <LoadingScreen />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ErrorScreen />} />
        <Route path="/" element={<MainScreen />} />
        <Route
          path="/favourites"
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoutitesScreen />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/offer/:id" element={<OfferScreen reviews={reviews} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
