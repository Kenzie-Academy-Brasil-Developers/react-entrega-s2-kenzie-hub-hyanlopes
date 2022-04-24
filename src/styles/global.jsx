import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:0;
    }
    :root{
        --Color-primary:#ff577f;
        --Color-primary-Focus: #ff427f;
        --Color-primary-Negative: #59323f;
        --Grey-4:#121214;
        --Grey-3:#212529;
        --Grey-2: #343b41;
        --Grey-1: #868e96;
        --Grey-0: #F8f9fa;
    }
    body{
        background-color:var(--Grey-4)
    }
    body, input, button{
        font-family: 'Inter', sans-serif;
        font-weight: 400;
    }
    h1,h2,h3,h4,h5,h6{
        font-family:"Inter", sans-serif;
        font-weight:bold;
    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration:none;
    }
    p{
        cursor: pointer;
    }
    label{
        color:var(--Grey-0);
        font-size:12px;
    }
    label span {
        color: var(--Color-primary)
    }
`;
