import React from 'react';
import Header from './Header';

const withSearch = (WrappedComponent) => {
  return (props) =>
    (
      <>
        <main>
          <Header {...props} />
          <section className="grid page-content">
            <div className="grid__item width-12/12 width-1/12@m"/>
            <div className="grid__item width-12/12 width-10/12@m">
              <WrappedComponent {...props} />
            </div>
            <div className="grid__item width-12/12 width-1/12@m"/>
          </section>
        </main>
      </>
    );
};

export default withSearch;