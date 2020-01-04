export const styles = theme => ({
    cartContainer: {
        position: 'fixed',
        top: 0,
        height: '100%',
        right: 0,
        width: '40%',
        backgroundColor: '#1b1a20'
    },
    content: {
        overflowY: 'scroll',
        height: '100%'
    },
    closeButton: {
        width: '50px',
        height: '50px',
        color: '#ececec',
        backgroundColor: '#1b1a20',
        textAlign: 'center',
        lineHeight: '50px',
        position: 'absolute',
        top: 0,
        left: '-50px',
        cursor: 'pointer',
    },
    footer: {
        position: 'absolute',
        width: '100%',
        padding: '5%',
        bottom: 0
    },
    footerContent: {
        display: 'flex',
        color: '#fff',
        alignItems: 'center'
    },
    sub: {
        flex: '1 0 0',
        color: '#5b5a5e'
    },
    subPrice: {
        flex: '1 0 70%',
        textAlign: 'right',
        padding: '0 1rem 0 0',
        color: '#eabf00',
        fontSize: '22px'
    },
    footerButton:{
        textAlign: 'center',
        maxWidth: '80%',
        margin: '0 auto'
    },
    checkoutButton: {
        width: '100%',
        backgroundColor: '#0c0b10',
        padding: '15px 0',
        marginTop: '40px',
        transition: 'background-color .2s',
        '-webkit-transition': 'background-color .2s',
        color: '#ececec'
    }
})