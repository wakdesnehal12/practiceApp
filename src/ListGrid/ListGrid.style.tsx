export const style = {
    listBox:{
        padding: '20px',
        margin: '10px auto',
        boxShadow: '0 0 5px #000000',
        width: '300px',
    },
    listgridBox:{
        padding: '20px',
        margin: '10px 20px',
        float: 'left' as 'left',
        boxShadow: '0 0 5px #000000',
        width: '300px',
    },
    searchBox:{
        margin: '20px !important',
        position: 'relative' as 'relative',
        
        '& input':{
            padding: '15px 120px 15px 20px !important',
            border: '1px solid #0000001a !important',
            borderRadius: '60px !important',
            
        },
        '& fieldset': {
            border: 'none'
        },
        '& svg':{
            position: 'absolute' as 'absolute',
            top: '15px',
            right: '40%',
            opacity: '0.1',
        }
    },
   
}