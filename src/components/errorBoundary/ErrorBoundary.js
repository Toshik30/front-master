import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './errorBoundary.module.scss';

class ErrorBoundary extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  };

  state = {
    count: 0,
    skipErrorBoundary: process.env.NODE_ENV === 'development',
    error: undefined,
    info: undefined,
  };

  static getDerivedStateFromError(error, info) {
    return { error, info };
  }

  componentDidCatch(error, info) {
    const { count, skipErrorBoundary } = this.state;

    this.setState({ count: count + 1 });

    // Circular render
    if (count >= 3) {
      this.setState({ skipErrorBoundary: false });
    }

    if (skipErrorBoundary === false) {
      this.setState({ error, info: JSON.stringify(info) });
    }
  }

  render() {
    const { componentName, children } = this.props;
    const { skipErrorBoundary, error, info = '' } = this.state;
    const isNetworkError = typeof error !== 'undefined' && error.source === 'importRetry';
    const bugTrackerMessage = (<h4>Report it please</h4>);

    return error && skipErrorBoundary === false ? (
      <div className={styles.error}>
        <section>
          <h1>We&apos;re sorry — something&apos;s gone wrong.</h1>
          <h2>Our team has been notified.</h2>
          {!isNetworkError && bugTrackerMessage}
          <article>
            {isNetworkError && (
              <>
                <h3>Internet Connection Problem</h3>
                <p>It looks like you are experiencing internet connection issues.
                  <br />One of the application modules couldn&apos;t be loaded.
                  <br />Please check your internet connection and try to reload this page.</p>
                {bugTrackerMessage}
                <br />
                <hr />
                <br />
              </>
            )}
            <h3>Additional Debug Info</h3>
            <h4>{componentName && `Error in "${componentName}" component`}</h4>
            <p>{error.toString()}</p>
            <br />
            <div>
              <p>Info:</p>
              <pre dangerouslySetInnerHTML={{ __html: info.replace(/\\n/gmi, '<br />') }} />
            </div>
          </article>
        </section>
      </div>
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
