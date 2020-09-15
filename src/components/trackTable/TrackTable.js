import React from 'react';
import styles from './trackTable.module.scss';

const CLOCKS_MOCK = [
  {
    id: '0000841',
    date: '04/02/2020',
    clockIn: 'Thursday, June 25, 2020, 11:54 AM',
    clockOut: 'Thursday, June 25, 2020, 11:54 AM',
    deleted: '-',
    hours: 6,
    min: 6,
  },
  {
    id: '0000842',
    date: '04/02/2020',
    clockIn: 'Thursday, June 25, 2020, 11:54 AM',
    clockOut: 'Thursday, June 25, 2020, 11:54 AM',
    deleted: '-',
    hours: 6,
    min: 6,
  },
  {
    id: '0000843',
    date: '04/02/2020',
    clockIn: 'Thursday, June 25, 2020, 11:54 AM',
    clockOut: 'Thursday, June 25, 2020, 11:54 AM',
    deleted: '-',
    hours: 6,
    min: 6,
  },
];

const TrackTable = () => {
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Clock In</th>
            <th>Clock Out</th>
            <th>Deleted</th>
            <th>Hours</th>
            <th>Min</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {CLOCKS_MOCK.map(({ id, date, clockIn, clockOut, deleted, hours, min }) =>
            <tr key={id}>
              <td>{id}</td>
              <td>{date}</td>
              <td>
                <p>{clockIn}</p>
              </td>
              <td>
                <p>{clockOut}</p>
              </td>
              <td>{deleted}</td>
              <td>{hours}</td>
              <td>{min}</td>
              <td className={styles.controls}>
                <i className="icon-pen" />
                <i className="icon-trash" />
              </td>
            </tr>,
          )}
        </tbody>
      </table>
      <div className={styles.summary}>
        <div className={styles.total}>
          <p>Regular: <strong>33.00</strong></p>
          <p>Overtime: <strong>00.00</strong></p>
        </div>
        <button className="button success small">Approve hours</button>
      </div>
    </>
  );
};

export default TrackTable;
