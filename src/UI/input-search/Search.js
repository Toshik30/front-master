import React, { forwardRef } from 'react';
import classNames from 'classnames';
import styles from 'UI/input-search/search.module.scss';


const Search = forwardRef((props, ref) => {
  const { className, placeholder = 'Search', ...otherProps } = props;

  return <div className={classNames(styles.search, className)}>
    <i className="icon-search" />
    <input ref={ref} placeholder={placeholder} type="text" className="input" {...otherProps} />
  </div>;
});

export default Search;
