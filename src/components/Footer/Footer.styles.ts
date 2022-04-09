import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 80px;
  background-color: #111827;
  color: white;
  min-height: 100px;
  width: 100%;
  padding: 20px 24px 80px;
  cursor: default;
  display: flex;
  gap: 120px;
`

export const RSSWrapper = styled.div`
  width: max-content;

  h2 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px;
  }

   h3 {
    font-weight: 400;
    font-size: 12px;
   
  }
`

export const SVGWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;

   svg {
    cursor: pointer;
    height: 22px;
    width: 22px;
    path {
      fill: white;
    }
    transition: 0.5s;

    &:hover {
      path {
      fill: coral;
    }
    }    
  }

  
`;

export const MenuWrapper = styled.div`
  h2 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px; 
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: rgba(255, 255, 255, 0.75);
    transition: 0.5s;

    & > a:hover {
      color: coral;
      
    }
  }
`

export const DevelopersWrapper = styled.div`
   h2 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px; 
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: rgba(255, 255, 255, 0.75);
    transition: 0.5s;

    & > a:hover {
      color: coral;
      
    }
  }
`;