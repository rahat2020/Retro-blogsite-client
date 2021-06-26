import React, { useEffect, useState } from 'react';
// import './AddAdmin.css'
import axios from 'axios';
const Admin = () => {
    const [service, setService] = useState({
        email: '',
        password: '',
        imgURL: '',
    })
    const handleChange = (event) => {
        console.log(event.target.name, event.target.value);
        const newData = { ...service }
        newData[event.target.name] = event.target.value;
        setService(newData);

    }

    const handleImgUpload = event => {
        console.log(event.target.files)
        const imgData = new FormData();
        imgData.set('key', '4eb494ddc3d3fb6d479157f6d2a04273');
        imgData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                const imgData = { ...service }
                imgData.imgURL = response.data.data.display_url
                setService(imgData)
                // setImgURL(response.data.data.display_url);
                alert("image added to the database & imgbb");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleAddAdmin = e => {
        e.preventDefault(true);
        if (service.imgURL !== '') {
            console.log(service)
            const url = `http://localhost:5000/addAdmin`
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(service)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
            alert('Review added to database successfully')

        }

    };
    // adding current admin to the UI
    const [admin, setAdmin] = useState([])
    console.log(admin)
    useEffect(() => {
        const url = `http://localhost:5000/showAdmin`
        fetch(url)
            .then(response => response.json())
            .then(data => setAdmin(data))
    }, [])
    return (
        <div>
            <form className="mt-3 border p-4 shadow-sm  form-style">
                <h4 className="text-center mb-3"> ADD ADMIN</h4>
                <div class="mb-3">
                    <input type="email" class="form-control" onBlur={handleChange} id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp" name="email" />
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control" onBlur={handleChange} placeholder="password" id="exampleInputPassword1" name="password" />
                </div>
                <div class="mb-3 form-file">
                    <input type="file" class="form-control" onChange={handleImgUpload} id="formFile"/>
                </div>
                <button type="submit" onClick={handleAddAdmin} class="btn-submit">Submit</button>
            </form>

            <div>
                <h2 className="" style={{ marginLeft: '240px', fontWeight: "bold", textDecoration: 'underline' }}> Current Admin</h2>
                <table className="table border" style={{ width: '90%', fontSize: '20px' }}>

                    <thead>
                        <tr>
                            <th className="text-center">#</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Password</th>
                            <th className="text-center"> images</th>
                            <th className="text-center">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            admin.map((singleAdmin, index) => (
                                <tr>
                                    <td className="">{index}</td>
                                    <td>{singleAdmin.email}</td>
                                    <td>{singleAdmin.password}</td>
                                    <td className="imgStyle"><img style={{ height: '100px', width: '100px' }} src={singleAdmin.imgURL} alt="" /></td>
                                    <td><button className="btn">Remove</button></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Admin;