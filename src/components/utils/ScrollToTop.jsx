import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return <>{children}</>;
}

ScrollToTop.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.node.isRequired
};

export default withRouter(ScrollToTop);
