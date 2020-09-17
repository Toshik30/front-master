import React, { useState } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { getIsEmployeesListEmpty } from 'store/selectors';
import Sidebar from 'components/sidebar/Sidebar';
import AddEmployee from 'components/addEmployee/AddEmployee';
import Employer from 'components/employer/Employer';
import styles from './customers.module.scss';
import Input from "../../UI/input-text/Input";


const Customers = () => {
    const [selectedEmployer, setSelectedEmployer] = useState();
    const isCustomersEmpty = useSelector(getIsEmployeesListEmpty);

    if (isCustomersEmpty) {
        return <AddEmployee />;
    }

    return (
        <div className={classNames('container', styles.customers)}>
            <Sidebar selectMember={setSelectedEmployer} />
            <div className={classNames(styles.les,'w100')}>
                <h1>User</h1>

                <div className={classNames(styles.hui)}>
                    <div className={classNames(styles.formuser)}>
                        <img  />
                        <p>Last Online</p>
                        <p>Tuesday, June 9, 2020 3:13 PM</p>
                    </div>
                    <div>
                        <button>Archive</button>
                    </div>
                </div>

                <form action="">
                    <Input
                        name="name"
                        placeholder="Full legal name"
                        required
                    />
                    <Input
                        name="name"
                        placeholder="Address"
                        required
                    />
                    <Input
                        name="Phone"
                        placeholder="Phone"
                        required
                    />
                    <Input
                        name="e-mail"
                        placeholder="E-mail"
                        required
                    />
                </form>
            </div>
        </div>
    );
};

export default Customers;