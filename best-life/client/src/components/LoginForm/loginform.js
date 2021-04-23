import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './style.css'


class LoginForm extends  React.Component {
    render() {
        return(
            <Form
            name="login-form"
            className="login-form"
            size={"large"}
            >
                <div className="login-form-header">BestLife</div>
                <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                      },
                ]}
                className="form-item form-item-username"
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Enter your Username" className="form-input" />
                </Form.Item>
                <Form.Item
                name="password"
                rules={[
                    {
                        required:true,
                        message: "Please input your Password!"
                    },
                ]}
                className="form-item"
                >
                    <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Enter your password"
                    className="form-input"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                 </Form.Item>
            </Form>
    );
        }
}
export default LoginForm;