import React from 'react';
import CardGift from './cards/CardGift';
import { Space, Row, Col, Divider } from 'antd';

const Home = () => {
    return (
        <div className='mt-10 mb-10'>
            <Space className='ml-20'>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <div>
                        <CardGift/>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                        <CardGift/>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                        <CardGift/>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                        <CardGift/>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                        <CardGift/>
                    </div>
                </Col>
                </Row>
            </Space>
        </div>
    );
}

export default Home;