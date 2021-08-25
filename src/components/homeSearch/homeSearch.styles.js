import styled from "styled-components";

export const HomeSearchWrapper = styled.div`
  background-color:red;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(https://frtassets.fotocasa.es/statics/img/home_search_bg_v2_full.webp);
  height: 40vh;
  `;
  
  export const HomeSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 100px;
  margin: 0 auto;
  width: 1200px;
  background: blue;
  border-radius: 4px 4px 0px 0px;
`;

export const HomeSearchHeader = styled.div``;

export const HomeSearchSelector = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.button`
  margin: 5px;
  border: none;
  cursor: pointer;
`;

export const HomeSearchInputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
