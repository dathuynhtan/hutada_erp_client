import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Table, Tooltip } from 'antd';
import { Link } from 'react-router-dom';

const ProductCategory = props => {
    const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT + "/Products";
    const columns = [
        {
            title: 'Tên Sản Phẩm',
            dataIndex: 'name',
            key: 'id',
            render: (text, record) => <Link to={'/product/edit?id=' + record.id}>{text}</Link>,
            width: 150,
        },
        {
            title: 'Tình Trạng Sản Xuất',
            dataIndex: 'is_active_text',
            key: 'id',
            width: 80,
        },
    ];
    const [data, setData] = useState([]);
    const convertStatus = data => {
        data.forEach(e => {
            if (e.is_active === 0) {
                e.is_active_text = "Ngừng Sản Xuất";
            } else {
                e.is_active_text = "Đang sản xuất";
            }
        });
        return data;
    }
    useEffect(() => {
        if (!data.length) {
            axios.get(API_ENDPOINT).then(response => {
                console.log(response.data.data)
                let data = convertStatus(response.data.data);
                setData(data);
            }).catch(err => {
                alert(err); 
            })
        }
    }, [])
    return (
        <Table columns={columns} dataSource={data} rowKey="id"/>
    )
}

export default ProductCategory;