import styled from "styled-components";

export const TodoSection = styled.section`
  background: rgba(255, 255, 255, 0.9);
  margin: 130px 0 40px 0;
  border: 1px solid #ccc;
  position: relative;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.15);
  &: before {
    content: "";
    border-left: 1px solid #f5d6d6;
    border-right: 1px solid #f5d6d6;
    width: 2px;
    position: absolute;
    top: 0;
    left: 40px;
    height: 100%;
  }
`;

export const TodoHeader = styled.header`
  padding-top: 15px;
  border-radius: inherit;
  &: before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 15px;
    z-index: 2;
    border-bottom: 1px solid #6c615c;
    background: #8d7d77;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(132, 110, 100, 0.8)),
      to(rgba(101, 84, 76, 0.8))
    );
    background: linear-gradient(
      top,
      rgba(132, 110, 100, 0.8),
      rgba(101, 84, 76, 0.8)
    );

    border-top-left-radius: 1px;
    border-top-right-radius: 1px;
  }
`;

export const TodoTaskInput = styled.input`
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 1.5rem;
  font-family: inherit;
  line-height: 1.4em;
  outline: none;
  color: #333333;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(248, 248, 248, 0.5);
  box-shadow: none;
  &: focus {
    outline: 4px solid #c2850c;
  }
`;

export const TodoMainSection = styled.section`
  position: relative;
  border-top: 1px dotted #adadad;
`;

export const TodoMainSectionUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  border-top: 1px dotted #adadad;
`;

export const TodoClearButton = styled.button`
  background: rgba(0, 0, 0, 0.1);
  font-size: 11px;
  padding: 0 10px;
  border-radius: 3px;
  box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.2);
  &: hover {
    background: rgba(0, 0, 0, 0.15);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3);
  }
`;

export const NewTodoTask = styled.li`
  position: relative;
  font-size: 24px;
  border-bottom: 1px dotted #ccc;
  &: last-child {
    border-bottom: none;
  }
`;

export const TodoListParagraph = styled.p`
  white-space: pre;
  word-break: break-word;
  padding: 0.9375rem 3.75rem 0.9375rem 0.9375rem;
  margin-left: 45px;
  display: block;
  line-height: 1.2;
  -webkit-transition: color 0.4s;
  transition: color 0.4s;
  &: focus {
    outline: 4px solid #c2850c;
  }
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  color: ${(props) => (props.checked ? "#168821" : "#333333")};
`;

export const TodoInputCheckbox = styled.input`
  outline: none;
  text-align: center;
  width: 40px;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  appearance: none;
  &: after {
    content: "✔";
    line-height: 43px;
    font-size: 20px;
    color: #d9d9d9;
    text-shadow: 0 -1px 0 #bfbfbf;
  }
  &: checked:after{
    color: #85ada7;
    text-shadow: 0 1px 0 #168821;
    bottom: 1px;
    position: relative;
  }
  &: focus {
    outline: 4px solid #c2850c;
  }
`;

export const TodoDestroyButton = styled.button`
  outline: none;
  padding: 0rem;
  border: 0rem;
  background: none;
  font-size: 1.375rem;
  vertical-align: baseline;
  font-family: inherit;
  appearance: none;

  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 22px;
  color: #0c326f;
  transition: all 0.2s;
  &: hover {
    text-shadow: 0 0 1px #000, 0 0 10px rgba(114, 146, 199, 0.8);
    transform: scale(1.3);
  }
  &: after {
    content: "✖";
  }
  &: focus {
    outline: 4px solid #c2850c;
  }
`;
