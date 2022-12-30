import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { addTodo, clearTodo } from "src/redux/reducers";
const AddTodo = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    dispatch(addTodo(e.action))
    form.resetFields();
  };
  const handleClear = (e) =>{
    e.preventDefault();
    dispatch(clearTodo())
  }
  return (
    <div className="tw-mx-auto tw-py-[30px]">
      <Form
        form={form}
        onFinish={handleSubmit}
        className="tw-flex tw-gap-[30px] tw-justify-center"
      >
        <Form.Item
          name="action"
          rules={[
            {
              required: true,
              message: "Please add to do action",
            },
          ]}
        >
          <Input placeholder="Add todo" className="tw-w-[500px]" autoFocus={true} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="tw-bg-button-primary tw-text-white"
          >
            Submit
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="button"
            className="tw-bg-red tw-text-white hover:!tw-text-white"
            onClick={handleClear}
          >
            Clear list
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AddTodo;
