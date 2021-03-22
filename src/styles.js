import {makeStyles} from '@material-ui/core/styles';

export default makeStyles( () => ({
        active:{
            color:"green"
        },
        form:{
            border: "5px solid #f1f1f1",
        },
        input: {
        width: "100%",
        padding: "16px 8px",
        margin: "8px 0",
        display: "inline-block",
        border: "1px solid #ccc",
        boxSizing: "border-box"
        },
        icon: {
        fontSize: "110px",
        display: "flex",
        justifyContent: "center",
        color: "#4286f4",
        },
        button: {
        backgroundColor: "#4286f4",
        color: "white",
        padding: "14px 0",
        margin: "10px 0",
        border: "none",
        cursor: "grab",
        width: "48%"
        },
        h1:{
        foneSize:"18",
        },
        formcontainer:{
        textAlign: "center",
        margin: "24px 50px 12px",
        },
        container:{
        padding: "16px 0",
        textAlign:"left",
        },
        psw: {
        float: "right",
        paddingTop: "0",
        paddingRight: "15px",
        }
        /* Change styles for span on extra small screens */
        
}))