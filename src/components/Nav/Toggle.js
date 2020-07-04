import React from "react"
import styled from "@emotion/styled"

const Toggle = ({ open, setOpen }) => {
  return (
    <Wrap open={open} onClick={() => setOpen(!open)}>
      {open ? (
        <svg
          width="17"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#E35D2F"
            d="M1.781.868l14.85 14.85-1.415 1.413L.367 2.282z"
          />
          <path
            fill="#E35D2F"
            d="M.367 15.718L15.217.868l1.414 1.415-14.85 14.85z"
          />
        </svg>
      ) : (
        <svg
          width="21"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#2C2D48" d="M0 0h21v2H0zM0 8h21v2H0zM0 16h21v2H0z" />
        </svg>
      )}
    </Wrap>
  )
}

export default Toggle

const Wrap = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  position: fixed;
  top: 20px;
  left: 20px;
  padding: 18px 14px;
  border-radius: 100px;
  border: none;
  outline: none;
  width: 51px;
  height: 51px;
  background-color: transparent;
  background-image: url("data:image/svg+xml,%3Csvg width='51' height='51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25.5 0l12.75 3.416 9.334 9.334L51 25.5l-3.416 12.75-9.334 9.334L25.5 51l-12.75-3.416-9.334-9.334L0 25.5l3.416-12.75 9.334-9.334L25.5 0z' fill='%23fff'/%3E%3C/svg%3E");
  &:active,
  &:focus,
  &:hover {
    /* outline: -webkit-focus-ring-color auto 1px;
    outline-color: -webkit-focus-ring-color;
    outline-style: auto;
    outline-width: 1px; */
    outline: none;
  }
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    top: 30px;
    left: 40px;
  }
`
