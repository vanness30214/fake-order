import Receipt from "@/pages/Receipt";
import {
    ProForm,
    ProFormGroup,
    ProFormList,
    ProFormText,
    ProFormDigit
} from '@ant-design/pro-components';
import {useState} from "react";
import {Button, Card, Input, Space, InputNumber, Col, Row} from 'antd';
const {TextArea} = Input;
export interface IOrder {
    quantity: number,
    title: string,
    price: number
}

export default function HomePage() {
    const [prefix, setPrefix] = useState<string>('Doki')
    const [orderNum, setOrderNum] = useState<string>('0001')
    const [tip, setTip] = useState<number>(0)
    const [note, setNote] = useState<string>('noteContent')
    const [order, setOrder] = useState<IOrder[]>([{
        quantity: 1,
        title: '04-15 ❤ 新作 ❤【1419】コラッタ 高級ガラスビーズ10mm,8mm,ラウンドカットビーズ10mm,高品質メタル',
        price: 1120
    }])
    const [printMode, setPrintMode] = useState(false);
    const handlePrint = () => {
        setPrintMode(true);
        // 等待状态更新
        requestAnimationFrame(() => {
            window.print();


            // 打印结束后恢复
            setTimeout(() => setPrintMode(false), 100);
        });
    };
    return (
        <div>
            <style>{`
          
        @media print {
          .no-print {
            display: none !important;
          }
              #note-area {
            page-break-before: always;
           }
          #printable-area {
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
   
          #printable-area {
            font-size:11px;
           }
      
        }
      `}</style>
            <Row>
                <Col span={12}>
                    <Card className="no-print" title={<Button onClick={() => handlePrint()}>🖨️ 打印订单</Button>}>
                        <Space>
                            <Input value={prefix} onChange={(v) => setPrefix(v.target.value)} addonBefore={'前缀'}
                                   style={{
                                       width: 200
                                   }}/>
                            <Input value={orderNum} onChange={(v) => setOrderNum(v.target.value)} addonBefore={'序号'}
                                   style={{
                                       width: 200
                                   }}/>
                            <InputNumber value={tip} onChange={(v) => setTip(v || 0)} addonBefore={'Tip'} style={{
                                width: 200
                            }}/>
                        </Space>
                        <TextArea rows={4} value={note} onChange={(v) => {
                            setNote(v.target.value)
                        }}/>
                        <Card style={{
                            overflow: "auto",
                            maxHeight: 500
                        }}>
                            <ProForm onFinish={async (e) => {
                                setOrder(e.order)
                            }}>
                                <ProFormList
                                    name="order"
                                    label="产品信息"
                                    initialValue={order}
                                >
                                    <ProFormGroup key="group">
                                        <ProFormDigit name="quantity" label="quantity" rules={[
                                            {
                                                required: true
                                            },
                                        ]}/>
                                        <ProFormText name="title" label="Item" rules={[
                                            {
                                                required: true
                                            },
                                        ]}/>
                                        <ProFormDigit name="price" label="price" rules={[
                                            {
                                                required: true
                                            },
                                        ]}/>
                                    </ProFormGroup>
                                </ProFormList>
                            </ProForm>
                        </Card>
                    </Card>
                </Col>
                <Col span={printMode ? 24 : 12} style={{padding: printMode ? 0 : 10}}>
                    <div id="printable-area">
                        <Receipt prefix={prefix} orderNum={orderNum} tip={tip} order={order}/>
                        {
                            note && <div id="note-area">
                                <div>Note</div>
                                <h2 style={{fontSize: 20}}>{note}</h2>
                            </div>
                        }
                    </div>
                </Col>
            </Row>


        </div>
    );
}
