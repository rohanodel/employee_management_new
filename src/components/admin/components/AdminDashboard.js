import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getdata } from '../../../reducers/adminReducer'
import '../style/adminDashboard.scss';
import { useNavigate } from 'react-router-dom';
import data from '../mock/adminDashboard.json'
import AddEmp from './AddEmp';
import UpdateData from './UpdateData';

const AdminDashboard = () => {
    const [show, setShow] = useState(false);
    const [closeShow, setCloseShow] =useState(false);
    const navigate = useNavigate();

    const handleShow = () => setShow(true);
    const closeBtn = () => {
        setShow(false)
    }

    const handleDelete = () => {
        window.confirm('Delete the item')
    }

    // const dispatch = useDispatch();
    // const updateVal = useSelector((state) => state.admin.adminData)
    // console.log(updateVal)
    
    // const updateHandler = () => {
    //     dispatch(getdata())
    // }

    const addHandler = () => {
        navigate('/addemp')
    }

    const handleInfo = () => {
        navigate('/info')
    }

    return (
        <div class="first">
            <div class="container custom-button">
                <button class="btn btn-primary" type="button" onClick={addHandler}>Add Fields</button>
            </div>

            <div class="search container" >
                <label><b>Search :-</b></label>&emsp;&emsp;
                <input type="text" placeholder="Search here" />
            </div>


            <div class="EmpDetail container">

                <table className='EmpTable table-responsive' cellspacing="0" cellpadding="5">
                    <tr>
                        <th class="tableData">Sr.no <a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>
                        <th class="tableData">Name Of Employee <a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>
                        <th class="tableData">Role <a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>
                        <th class="tableData">Join Date <a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>
                        <th class="tableData">Experience <a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>
                        <th class="tableData">Salary <a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>
                        <th class="tableData">Gender <a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>
                        <th class="tableData">Phone no <a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>
                        <th class="tableData">Address <a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>
                        <th class="tableData">Upadate<a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>
                        <th class="tableData">Delete<a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>
                        <th class="tableData">Informaion<a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>
                    </tr>
                    {
                        data.tabledata.map((newdata) => (
                            <tr>
                                <td class="tableData">{newdata.id}</td>
                                <td class="tableData">{newdata.name}</td>
                                <td class="tableData">{newdata.roll}</td>
                                <td class="tableData">{newdata.join_date}</td>
                                <td class="tableData">{newdata.experience}</td>
                                <td class="tableData">{newdata.salary}</td>
                                <td class="tableData">{newdata.gender}</td>
                                <td class="tableData">{newdata.phone_number}</td>
                                <td class="tableData">{newdata.address}</td>
                                <td class="tableData "><botton class="btn btn-success btn-sm" onClick={handleShow}>update</botton></td>
                                <td class="tableData"><botton class="btn btn-danger btn-sm" onClick={handleDelete}>delete</botton></td>
                                <td class="tableData"><botton class="btn btn-secondary btn-sm" onClick={handleInfo}>Info</botton></td>
                                
                            </tr>
                        ))
                    }
                </table>
            </div>
            
            <UpdateData closeBtn={closeBtn} show={show} />

        </div>
    )
}

export default AdminDashboard