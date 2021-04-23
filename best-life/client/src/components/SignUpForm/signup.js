import React from "react";
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../../styles/loginSignup.css'


class SignupForm extends  React.Component {
    render() {
        return(
            <Form
            name="signup-form"
            className="form"
            size={"large"}
            >
                <div className="form-header">BestLife</div>
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
                    placeholder="Enter your Password"
                    className="form-input"
                    />
                </Form.Item>
                <Form.Item
                name="password"
                rules={[
                    {
                        required:true,
                        message: "Please confirm your Password!"
                    },
                ]}
                className="form-item"
                >
                    <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Confirm your Password"
                    className="form-input"
                    />
                </Form.Item>
                 <Form.Item>
                    <Button type="primary" htmlType="submit" className="form-button-primary">
                        Sign up
                    </Button>
                    <p className="do-not-have-account">Already have an account?<Button type="primary" className="form-button-secondary" onClick={this.props.changeLoginStatus}>Login</Button></p>
                 </Form.Item>
            </Form>
    );
        }
}
export default SignupForm;