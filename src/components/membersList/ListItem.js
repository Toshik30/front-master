import React, { useCallback } from 'react';
import classNames from 'classnames';
import styles from './membersList.module.scss';


const ListItem = (props) => {
  const { avatar, name, online = true, onSelect } = props;

  const handleClick = useCallback(() => {
    onSelect(props);
  }, [props, onSelect]);

  return (
    <li className={styles.memberListItem} onClick={handleClick}>
      <img src={avatar} alt={name} />
      <p>{name}</p>
      <span className={classNames(styles.status, { [styles.online]: online })} />
    </li>
  );
};

export default ListItem;
