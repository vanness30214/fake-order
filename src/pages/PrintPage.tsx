const PrintPage = ({children}) => {
    return (
        <>
            <div
                style={{
                    display: 'none',
                    ['@media print' as any]: {
                        display: 'block',
                        pageBreakBefore: 'always',
                        breakBefore: 'page',
                        height: '0',
                        margin: '0',
                        padding: '0'
                    }
                }}
            />

            {/* 内容容器 */}
            <div
                style={{
                    ['@media print' as any]: {
                        pageBreakAfter: 'always',
                        breakAfter: 'page',
                        position: 'relative',
                        zIndex: 1
                    }
                }}
            >
                {children}
            </div>
        </>

    );
};
export default PrintPage