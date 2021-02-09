import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;500;700&display=swap');
*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}
body{
    background-color: #F8F8F8;
    -webkit-font-smoothing: antialiased;
}
#root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
}
body, input, button {
 font: 14px Roboto,sans-serif;
 color:#000000;
}
button{
    cursor: pointer;
    color:#ffffff;
}
a{
    text-decoration: none;
    color:inherit;
}
`;
