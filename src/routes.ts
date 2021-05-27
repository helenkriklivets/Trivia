import IndexPage from 'ui/IndexPage';
import QuizPage from 'ui/QuizPage';

const publicRoutes = [
  {
    exact: true,
    component: IndexPage,
    path: '/',

  },
  {
    exact: true,
    component: QuizPage,
    path: '/quiz',

  },
];

export { publicRoutes as productsPublicRotes };
