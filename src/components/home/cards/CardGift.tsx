import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const CardGift: React.FC = () => (
  <Card
    hoverable
    className='bg-gradient-to-r from-teal-600 to-sky-200'
    style={{ width: 240 }}
    cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkCLzRAAxPP5eU6KENs7-bKNWB-ciTBnRMv2tbAvJ5kl6OsyN4HGESCy2LJG_MI0u0pg&usqp=CAU" />}
  >
    <Meta title="Gift Hampers" description="Made In Udaipur" />
  </Card>
);

export default CardGift;