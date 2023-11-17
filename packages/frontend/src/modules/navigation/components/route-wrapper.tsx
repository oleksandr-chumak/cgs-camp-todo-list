import React, { FC } from 'react';
import { Children } from '../../common/types/props';

const routeWrapper = (WrappedComponent: FC, Layout?: FC<Children>): FC => {
  const layoutElement: React.JSX.Element = Layout ? (
    <Layout>
      <WrappedComponent />
    </Layout>
  ) : (
    <WrappedComponent />
  );

  return () => layoutElement;
};

export default routeWrapper;
