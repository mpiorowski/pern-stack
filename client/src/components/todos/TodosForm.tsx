import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Todo } from "./TodosComponent";
import { Submit } from "../../types/FormTypes";

interface Props {
  handleSubmit: Submit<Todo>;
}

const TodosForm = (props: Props) => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();
  const [disabled, setDisabled] = useState(true);

  // To disable submit button at the beginning and set it disabled.
  useEffect(() => {
    forceUpdate({});
    setDisabled(false);
  }, []);

  const onFinish = (values: any) => {
    props.handleSubmit(values);
  };

  return (
    <Form
      form={form}
      name="horizontal_login"
      layout="inline"
      onFinish={onFinish}
    >
      <Form.Item
        name="text"
        rules={[{ required: true, message: "Please input todo!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Todo"
        />
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              disabled ||
              !form.isFieldsTouched(true) ||
              form.getFieldsError().filter(({ errors }) => errors.length)
                .length > 0
            }
          >
            Add
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default TodosForm;
