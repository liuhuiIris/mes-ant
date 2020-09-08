import React, { FC } from 'react';
import {
  Card,
  Col,
  Row,
} from 'antd';

import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import { StateType } from './model';
import styles from './style.less';

interface BasicListProps {
  listAndbasicList: StateType;
  dispatch: Dispatch;
  loading: boolean;
}

const Info: FC<{
  title: React.ReactNode;
  value: React.ReactNode;
  bordered?: boolean;
}> = ({ title, value, bordered }) => (
  <div className={styles.headerInfo}>
    <span>{title}</span>
    <p>{value}</p>
    {bordered && <em />}
  </div>
);

export const BasicList: FC<BasicListProps> = (props) => {

  return (
    <div>
      <PageHeaderWrapper>
        <div className={styles.standardList}>
          <Card bordered={false}>
            <Row>
              <Col sm={6} xs={24}>
                <Info title="订单总数" value="8" bordered />
              </Col>
              <Col sm={6} xs={24}>
                <Info title="生产中订单" value="3" bordered />
              </Col>
              <Col sm={6} xs={24}>
                <Info title="已生产订单" value="1" bordered />
              </Col>
              <Col sm={6} xs={24}>
                <Info title="已发货订单" value="4" />
              </Col>
            </Row>
          </Card>

        </div>
      </PageHeaderWrapper>

    </div>
  );
};

export default connect(
  ({
    listAndbasicList,
    loading,
  }: {
    listAndbasicList: StateType;
    loading: {
      models: { [key: string]: boolean };
    };
  }) => ({
    listAndbasicList,
    loading: loading.models.listAndbasicList,
  }),
)(BasicList);
