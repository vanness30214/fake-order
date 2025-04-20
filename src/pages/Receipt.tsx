import {IOrder} from "@/pages/index";
import {Space} from "antd";
import CurrencyFormatter from 'currency-formatter'


interface ReceiptProps {
    order: IOrder[];
    prefix:string
    orderNum:string
    tip:number
}

const formatCurrency = (amount: number) => {
    // 实现你的货币格式化逻辑，例如：
    return  CurrencyFormatter.format(amount, { thousand: ',', code: 'jp' ,precision:0,symbol:'￥'})
};
const printStyles = `
  @media print {
    hr {
      border-top: 1px solid #000 !important;
      margin: 10px 0 !important;
      visibility: visible !important;
    }
  }
`;
const Receipt = ({ order,prefix,orderNum,tip }: ReceiptProps) => {
    const totalWithTip = order.reduce((sum,n)=>sum+n.price,0)+tip

    return (
        <div>
            <style>{printStyles}</style>
            <h1 style={{ fontSize: '20px' }}>#{prefix}-{orderNum}</h1>
            <hr style={{
                border: '1px solid #000',
                margin: '1.5em 0',
                backgroundColor: '#000',
                borderBottom:'none'
            }} />
            <h1 style={{ fontSize: '30px' }}>#{prefix}-{orderNum}</h1>

            <div style={{minWidth:'100%'}}>
                <table style={{ margin: '1em 0 0 0', borderCollapse: 'collapse',minWidth:'100%' }}>
                    <thead style={{ border: '1px solid #000000' }}>
                    <tr>
                        <th style={{ border: '1px solid #000000' }}>Quantity</th>
                        <th style={{ border: '1px solid #000000',textAlign: 'left',  }}>Item</th>
                        <th style={{ textAlign: 'right', border: '1px solid #000000' }}>Price</th>
                    </tr>
                    </thead>
                    <tbody style={{ border: '1px solid #000000' }}>
                    {order.map((lineItem, index) => (
                        <tr key={index} style={{ border: '1px solid #000000' }}>
                            <td style={{ border: '1px solid #000000', textAlign: 'center' }}>
                                {lineItem.quantity}
                            </td>
                            <td style={{ border: '1px solid #000000' }}>
                                {lineItem.title}
                            </td>
                            <td style={{ textAlign: 'right', border: '1px solid #000000' }}>
                                {formatCurrency(lineItem.price)}
                            </td>
                        </tr>
                    ))}
                    <tr style={{ border: '1px solid #000000' }}>
                        <td style={{ border: '1px solid #000000', textAlign: 'center' }}>❤</td>
                        <td style={{ border: '1px solid #000000' }}>Tip</td>
                        <td style={{ border: '1px solid #000000', textAlign: 'right' }}>
                            {formatCurrency(tip)}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div style={{float:'right'}}>
                <Space>
                    <strong>Total</strong>
                    <strong>{formatCurrency(totalWithTip)}</strong>
                </Space>
            </div>
        </div>
    );
};

export default Receipt;
