import React, { ChangeEvent } from 'react';
import { Row, Col, Input } from 'antd';
const Upload = () => {
  const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {

  }
  return (
    <Row>
      <Col span={12}>
        <Input type="file" onChange={handlerChange} />
      </Col>
    </Row>
  )
}

export default Upload;
