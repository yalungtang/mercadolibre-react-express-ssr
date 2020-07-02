import React from 'react';
import Header from './Header';

const withSearch = (WrappedComponent) => {
  return (props) =>
    (
      <>
        <Header {...props} />
        <WrappedComponent {...props} />
        <section>
          <h2>Default</h2>
          <div className="grid">
            <div className="grid__item width-12/12">
              12/12
    </div>
            <div className="grid__item width-1/12">
              1/12
    </div>
            <div className="grid__item width-11/12">
              11/12
    </div>
            <div className="grid__item width-2/12">
              2/12
    </div>
            <div className="grid__item width-10/12">
              10/12
    </div>
            <div className="grid__item width-3/12">
              3/12
    </div>
            <div className="grid__item width-9/12">
              9/12
    </div>
            <div className="grid__item width-4/12">
              4/12
    </div>
            <div className="grid__item width-8/12">
              8/12
    </div>
            <div className="grid__item width-5/12">
              5/12
    </div>
            <div className="grid__item width-7/12">
              7/12
    </div>
            <div className="grid__item width-6/12">
              6/12
    </div>
            <div className="grid__item width-6/12">
              6/12
    </div>
          </div>
        </section>

        <section>
          <h2>Responsive <small>(resize your browser to see the effect)</small></h2>
          <div className="grid">
            <div className="grid__item width-12/12 width-12/12@m">
              12/12@m
    </div>
            <div className="grid__item width-12/12 width-1/12@m">
              1/12@m
    </div>
            <div className="grid__item width-12/12 width-11/12@m">
              11/12@m
    </div>
            <div className="grid__item width-12/12 width-2/12@m">
              2/12@m
    </div>
            <div className="grid__item width-12/12 width-10/12@m">
              10/12@m
    </div>
            <div className="grid__item width-12/12 width-3/12@m">
              3/12@m
    </div>
            <div className="grid__item width-12/12 width-9/12@m">
              9/12@m
    </div>
            <div className="grid__item width-12/12 width-4/12@m">
              4/12@m
    </div>
            <div className="grid__item width-12/12 width-8/12@m">
              8/12@m
    </div>
            <div className="grid__item width-12/12 width-5/12@m">
              5/12@m
    </div>
            <div className="grid__item width-12/12 width-7/12@m">
              7/12@m
    </div>
            <div className="grid__item width-12/12 width-6/12@m">
              6/12@m
    </div>
            <div className="grid__item width-12/12 width-6/12@m">
              6/12@m
    </div>
          </div>
        </section>
      </>
    );
};

export default withSearch;