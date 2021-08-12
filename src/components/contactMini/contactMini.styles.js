import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';


export const ContactMiniContainer = styled.div`
height: 450px;
display: flex;
flex-direction: column;
justify-content: space-between;
width: 25%;
`

export const TextInput = styled(TextField)`
`

export const SubmitButton = styled(IconButton)`
background-color: red;
`
