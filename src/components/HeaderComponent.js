import React from 'react';
import './HeaderComponent.css';
import { PageHeader, Descriptions } from 'antd';

const HeaderComponent = ({ questionNumber, point }) => {
  return (
    <div className="header">
      <PageHeader ghost={false}>
        <Descriptions size="large" column={2}>
          <Descriptions.Item label="Question">
            {`${questionNumber}${'/'}${10}`}
          </Descriptions.Item>
          <Descriptions.Item label="Points">{point}</Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </div>
  );
};

export default HeaderComponent;
