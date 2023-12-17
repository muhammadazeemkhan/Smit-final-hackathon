"use client";
import { Button, Checkbox, Form, Input } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const AddStudents = () => {
  return (
    <main>
      <div className="flex justify-around items-center mt-4">
        <h1 className="text-3xl">Add Student</h1>
        <button className="bg-[#5C93FA] text-white text-xl px-5 py-2 rounded-lg">
          Add
        </button>
      </div>

      <div className="flex justify-center mt-16">
        <div className="h-24 w-24 rounded-full bg-[#5C93FA]"></div>
      </div>

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
          marginLeft: "300px",
          marginTop: "60px",
          display: "flex",
          flexDirection: "column",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="flex justify-center items-center gap-4 ">
          <div>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                {
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Course"
              name="course"
              rules={[
                {
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>

          <div>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                {
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="Contact Number"
              rules={[
                {
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </div>
        </div>
        <Button
          style={{ width: "200px", marginLeft: "220px" }}
          htmlType="submit"
        >
          Submit
        </Button>
      </Form>
    </main>
  );
};

export default AddStudents;
