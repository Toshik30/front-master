import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Datepicker from 'UI/datepicker/Datepicker';
import TrackTable from 'components/trackTable/TrackTable';
import EmployerEdit from 'components/employer/EmployerEdit';
import { useDispatch } from 'react-redux';
import { toggleShowModal } from 'store/actions';
import styles from './employer.module.scss';


const Employer = ({ employer }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleEditStart = () => setIsEditing(true);

  const handleEditFinish = () => setIsEditing(false);

  const handleEmployerBlock = () => {
    dispatch(toggleShowModal({
      name: 'Dialog',
      cancel: () => dispatch(toggleShowModal({})),
      title: 'Please confirm to Block employee',
      description: employer.name,
    }));
  };

  useEffect(() => {
    setIsEditing(false);
  }, [employer]);

  if (!employer) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.employer}>
      <h1>{employer.name}</h1>
      <div className={styles.info}>
        <div className={classNames(styles.avatar, { [styles.online]: employer.online })}>
          <img src={employer.avatar} alt={employer.name} />
        </div>
        <div className={styles.status}>
          <p>Last Online</p>
          <p>Tuesday, June 9, 2020 3:13 PM</p>
        </div>
        {isEditing
          ? <div className={styles.controls}>
            <button className="button primary small">Send Link</button>
            <button className="button danger small" onClick={handleEmployerBlock}>Block Employer</button>
          </div>
          : <div className={styles.controls}>
            <button className="button primary small" onClick={handleEditStart}>View Profile</button>
            <button className="button success small">Manual Clock In</button>
          </div>}
      </div>
      {isEditing
        ? <EmployerEdit onEditFinish={handleEditFinish} />
        : <>
          <Datepicker />
          <TrackTable />
        </>}
    </main>
  );
};

export default Employer;
