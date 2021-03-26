import React from 'react';
import AntdForm from 'antd/es/form';
import 'antd/es/form/style/css';

const { useForm, Item, List, Provider } = AntdForm;

const Form = (props) => {
  const { className, children } = props;

  return (
    <AntdForm {...props} className={className}>
      {children}
    </AntdForm>
  );
};

Form.useForm = useForm;
Form.Item = Item;
Form.List = List;
Form.Provider = Provider;

export default Form;
