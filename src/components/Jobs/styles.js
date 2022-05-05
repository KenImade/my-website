import styled, {css, keyframes} from "styled-components";

export const TabHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StylizedTab = styled.button`
    color: #9FBAF5;
    width: 100%;
    padding: 20px 0px;
    font-size: 1.25em;
    background-color: transparent;
    border: none;
    cursor: ${(p) => (p.disabled ? "default" : "pointer")};
    ${(p) => 
        p.active && css`
            color: var(--secondary-color);
            font-weight: bold;
            animation: ${inset} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        `}
    ${(p) => !p.active && p.InactiveStyle}
`;

export const StyledTabPanel = styled.div`
    display: ${(p) => (p.active ? "flex" : "none")};
    font-size: 1rem;
    background: var(--primary-color);
    flex-direction: column;
    padding: 1.5em;
    justify-content: left;
    color: rgba(159, 186, 245, 0.50);
    width: 100%;
    height: 100%;
`;

export const TabHolder = styled.div`
    display: flex;
    flex-direction: row;
`;

export const inactiveTab = {
    opacity: 0.65
};

export const TabSlider = styled.div`
  width: ${(props) => `${props.width}px`};
  height: 4px;
  background-color: #feca57;
  transition: 0.2s;
  transform: ${(props) => `translateX(${props.width * props.index}px)`};
`;

const inset = keyframes`
  0% {
    -webkit-box-shadow: inset 0 0 0 0 rgba(238, 82, 83, 0);
            box-shadow: inset 0 0 0 0 rgba(238, 82, 83, 0);
  }
  100% {
    -webkit-box-shadow: inset 0 0 14px 0px rgba(238, 82, 83, 0.95);
            box-shadow: inset 0 0 14px 0px rgba(238, 82, 83, 0.95);
  }
`;