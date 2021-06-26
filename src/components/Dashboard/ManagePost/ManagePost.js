import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ManagePost = () => {
    const [deleteItems, setDeleteItems] = useState([])
    const { _id } = useParams();
    // console.log(_id)
    useEffect(() => {
        const url = `http://localhost:5000/showPost`;
        fetch(url)
            .then(res => res.json())
            .then(data =>
                setDeleteItems(data)


            )

    }, [])

    const handleDeleteItems = (_id) => {

        fetch(`http://localhost:5000/deletePost${_id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (res) {
                    alert('deleted post successfully');
                    console.log(res)
                }
            })

        console.log('button is clicked')
    }
    return (
        <div className="container">
            <h2 className="text-primary text-center"> Delete items</h2>
            <table className="border p-3 mt-3 text-center" style={{ width: "60%", margin: 'auto' }}>
                <thead style={{ margin: 'auto', textAlign: 'center' }}>
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th>Description</th>
                        <th>images</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        deleteItems.map((itemDelete, index) => (
                            <tr>
                                <td>{index}</td>
                                <td>{itemDelete.name}</td>
                                <td>{itemDelete.content}</td>
                                <td ><img style={{ width: '90px' }} src={itemDelete.imgURL} alt="" /></td>
                                <td><button style={{ width: '90px', }} onClick={() => handleDeleteItems(itemDelete._id)} className="btn btn-primary">Delete </button></td>

                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManagePost;