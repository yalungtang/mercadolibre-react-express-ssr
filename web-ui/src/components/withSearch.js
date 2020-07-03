import React from 'react';
import Header from './Header';

const withSearch = (WrappedComponent) => {
  return (props) =>
    (
      <>
        <main>
          <Header {...props} />
          <section>
            <WrappedComponent {...props} />
          </section>
        </main>
      </>
    );
};

export default withSearch;