import styled from "styled-components";

export const Container = styled.div `
    width: 100%,
    height: 100px,
    display: flex;
    align-items: center;
    flex-direction: column;
    `
export const Name = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: #444;
`
export const Username = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 10px;
    color: #777;
    padding: 10px;
`
export const Description = styled.p`
    width: 300px;
    height: 30px
    margin: 10px 0;
    font-size: 13px;
    align-items: center;
    text-align: justify;
    color: #777;
    padding-left: 50px;
    line-height: 1.3;
    overflow: hidden;
    @media(max-width: 430px){
    width: 250px;
     }
`
