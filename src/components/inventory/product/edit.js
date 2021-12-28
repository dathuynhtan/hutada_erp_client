import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { useLocation } from 'react-router';

import { Form, Input, Button, Radio, Checkbox } from 'antd';
const Edit = props => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const API_ENDPOINT = "http://localhost:8000/api/Product/Category";
    let [isEdit, setIsEdit] = useState(true);
    let [category, setCategory] = useState(undefined);
    function useQuery() {
        const { search } = useLocation();

        return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    let query = useQuery();

    useEffect(() => {
        if (query.get("id")) {
            setIsEdit(true);
        }
    });

    useEffect(() => {
        if (isEdit && !category && query.get("id")) {
            axios.get(API_ENDPOINT + "/" + query.get("id")).then(response => {
                setCategory(response.data.result)
            }).catch(err => {
                console.error(err);
            })
        }
    }, [isEdit]);

    const handleCategoryName = ev => {
        setCategory({...category, name: ev.target.value});
    }
    const handleCategoryActive = ev => {
        setCategory({...category, is_active: ev.target.checked});
    }
    const handleSubmit = ev => {

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege...'
          }

        axios.post("http://localhost:8000/api/Product/category/update", {category}, {
            headers: headers
          }).then(response => {
            console.log(JSON.stringify(response.body))
        }).catch(err => {
            console.error(err);
        })
    }
    const formItemLayout =
        formLayout === 'horizontal' ? {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 14,
                },
            }: null;
    const buttonItemLayout =
        formLayout === 'horizontal'
            ? {
                wrapperCol: {
                    span: 14,
                    offset: 4,
                },
            }
            : null;
    
    return (
        <div>
            {category &&
                <div>
                    <Form
                        {...formItemLayout}
                        layout={formLayout}
                        form={form}
                        initialValues={{
                            layout: formLayout,
                        }}
                    >
                        <Form.Item label="Loại Sản Phẩm">
                            <Input value={category.name} onChange={e => handleCategoryName(e)}/>
                        </Form.Item>
                        <Form.Item label="Đang sản xuất">
                            <Checkbox checked={category.is_active} onChange={e => handleCategoryActive(e)}/>
                        </Form.Item>
                        <Form.Item {...buttonItemLayout}>
                            <Button type="primary" onClick={e => {handleSubmit(e)}}>Lưu</Button>
                        </Form.Item>
                    </Form>
                </div>
            }
        </div>
    )


}

export default Edit;