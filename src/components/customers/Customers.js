import React, { useState } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { getIsEmployeesListEmpty } from 'store/selectors';
import Sidebar from 'components/sidebar/Sidebar';
import AddEmployee from 'components/addEmployee/AddEmployee';
import Employer from 'components/employer/Employer';
import styles from './customers.module.scss';
import Input from "../../UI/input-text/Input";
import Dropdown from "../../UI/dropdown/Dropdown";
import {POSITIONS_SELECT} from "../employer/constants";
import {Link} from "react-router-dom";


const Customers = () => {
    const [selectedEmployer, setSelectedEmployer] = useState();
    const isCustomersEmpty = useSelector(getIsEmployeesListEmpty);

    if (isCustomersEmpty) {
        return <AddEmployee />;
    }

    return (
        <div className={classNames('container', styles.customers)}>
            <Sidebar selectMember={setSelectedEmployer} />
            <div className={classNames(styles.info,'w100')}>
                <h1>User</h1>
                <div className={classNames(styles.frame)}>
                    <div className={classNames(styles.formuser)}>
                        <img className={classNames(styles.avatar, styles.online)} />
                        <div className={classNames(styles.status)}>
                            <p>Last Online</p>
                            <p>Tuesday, June 9, 2020 3:13 PM</p>
                        </div>
                    </div>
                    <div>
                        <button>Archive</button>
                    </div>
                </div>

                <form action="">
                    <Input className={classNames(styles.wrapper)}
                        name="name"
                        placeholder="Full legal name"
                        required
                    />
                    <Input className={classNames(styles.wrapper)}
                        name="name"
                        placeholder="Address"
                        required
                    />
                    <div className={classNames(styles.phone_mail)}>
                        <div className={classNames(styles.phone_mail_item)}>
                            <Input className={classNames(styles.wrapper)}
                                name="Phone"
                                type="phone"
                                placeholder="Phone"
                            />
                        </div>
                       <div className={classNames(styles.phone_mail_item)}>
                           <Input className={classNames(styles.wrapper)}
                               name="e-mail"
                               type="mail"
                               placeholder="E-mail"
                           />
                       </div>
                    </div>
                    <Dropdown optionsConfig={POSITIONS_SELECT} className={classNames(styles.customers_dropdown)} title="A-Z" label="Project" name="position" />
                    <Input className={classNames(styles.wrapper)}
                        name="information"
                        type="text"
                        label="Additional information"
                    />
                    <div className={classNames(styles.added_info)}>
                        <p>Additional contacts</p>
                        <button >
                            <i className="icon-plus"/>
                        </button>
                    </div>
                    <Input className={classNames(styles.wrapper)}
                        name="Name"
                        type="text"
                        label="Name"
                    />
                    <div className={classNames(styles.project_contact)}>
                        <div className={classNames(styles.phone_mail_item)}>
                            <Input className={classNames(styles.wrapper)}
                               name="Phone"
                               type="phone"
                               placeholder="Phone"
                            />
                        </div>
                        <Dropdown optionsConfig={POSITIONS_SELECT} className={classNames(styles.customers_dropdown)} title="cart/bag" name="position" label="Position" required />
                        <div className={classNames(styles.phone_mail_item)}>
                            <Input className={classNames(styles.wrapper)}
                               name="e-mail"
                               type="mail"
                               placeholder="E-mail"
                            />
                        </div>
                    </div>
                    <div className={classNames(styles.save_customers)}>
                        <button className="button success">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Customers;