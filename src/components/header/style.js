export const styles = theme => {
    console.log("tehem", theme.primaryColor )
    return {
        headerContainer: {
            padding: '2em 0',
            'background-color': theme.primaryColor,
            'margin-bottom': '10px',
            'box-shadow': '0px 2px 5px 0px #D7D7D7',
            textAlign: 'center',
            color: theme.headerFontColor,
            fontSize: '18px'
        }
    }
}