import moment from 'moment';
import { Layout, Typography, Form, Input, DatePicker, Button } from "antd";
import React from "react";

const Content = Layout.Content;

export class MainPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {username: '', datetime: '', hideAnswer: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(values) {
        console.log("in handle click now!")
        this.setState({username: values.username, datetime: values.date.format('HH:mm DD.MM.YYYY'), hideAnswer: false});
    }
    render() {
        const onFinish = (values) => {
            console.log('Success:', values);
            this.handleClick(values);
            console.log(this.state.hideAnswer, this.state.datetime);
          };
        
          const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
          };

        const disabledDate = (current) => {
            return current < moment().startOf('day');
        }

        const rangeWithAbleTimes = (start, end, ableTimes) => {
            const result = [];
            for (let i = start; i < end; i++) {
                if (!ableTimes.includes(i)) {
                    result.push(i);
                }
            }
            return result;
        }
        const disabledDateTime = () => {
            return {
              disabledHours: () => [],
              disabledMinutes: () => rangeWithAbleTimes(0, 60, [0, 30]),
            };
        }

        return <Content>
            <Typography.Title>
                Добро пожаловать
            </Typography.Title>
            <Typography.Paragraph>
                Чтобы записаться на стирку, заполните поля ниже
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Form name="basic" labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }} onFinish={onFinish}
                onFinishFailed={onFinishFailed} >
                    <Form.Item label="Ваше имя" name="username" rules={[{ required: true, message: 'Пожалуйста, введите имя!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Выберите время" name="date" rules={[{ required: true, message: 'Пожалуйста, выберите время!' }]}>
                        <DatePicker format="YYYY-MM-DD HH:mm" disabledDate={disabledDate} disabledTime={disabledDateTime} showTime={{ hideDisabledOptions: true }} />
                    </Form.Item>
                    <Form.Item wrapperCol={{offset: 4}}>
                        <Button type="primary" htmlType="submit">
                            Записаться
                        </Button>
                    </Form.Item>
                </Form>
            </Typography.Paragraph>
            <Typography.Paragraph hidden={this.state.hideAnswer}>
                {this.state.username}, вы успешно записаны на стирку в {this.state.datetime}
            </Typography.Paragraph>
        </Content>
    }
}