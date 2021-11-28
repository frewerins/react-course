import { Layout, Typography, Form, Input } from "antd";
import React from "react";

const Content = Layout.Content;

export class AboutPage extends React.Component {
    render() {
        return <Content>
            <Typography.Title>
                О нас
            </Typography.Title>
        </Content>
    }
}