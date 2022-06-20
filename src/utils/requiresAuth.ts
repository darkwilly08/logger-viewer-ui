import { ForbiddenError } from '@local/models/errors/forbiddenError';
import { UnauthorizedError } from '@local/models/errors/unauthorizedError';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

export const requiresAuth: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    // Const cookies = nookies.get(ctx);
    // if (!cookies.token) {
    //   throw new UnauthorizedError('Auth token is empty');
    // }

    // TODO: add custom api
    // const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);

    const token = {
      uid: 'fakeUser',
      roles: ['READER_ROLE'],
    };
    const { uid, roles } = token;

    if (!roles.includes('READER_ROLE')) throw new ForbiddenError('User claims are not enough');

    return {
      props: { uid },
    };
  } catch (err) {
    if (err instanceof ForbiddenError) {
      ctx.res.writeHead(302, { Location: '/errors/unauthorized' });
      ctx.res.end();
    } else if (err instanceof UnauthorizedError) {
      ctx.res.writeHead(302, { Location: '/login' });
      ctx.res.end();
    } else {
      ctx.res.writeHead(302, { Location: 'errors/unexpected' });
      ctx.res.end();
    }
    return { props: {} };
  }
};
