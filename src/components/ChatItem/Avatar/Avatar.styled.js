import styled from "styled-components";

export const AvatarContainer = styled.div`
  position: relative;
`;

export const Status = styled.div`
  width: ${({ size = 10 }) => `${size}px`};
  height: ${({ size = 10 }) => `${size}px`};
  border-radius: 5px;
  border: 1px solid #a4abb6;
  position: absolute;
  top: 18px;
  left: 18px;
  background-color: ${({ status }) => {
    if (status === "online") {
      return "#56f000";
    } else if (status === "away") {
      return "#fce83a";
    } else {
      return "#ff3838";
    }
  }};
`;

export const Image = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 8px;
  border: 1px solid #a4abb6;
`;
