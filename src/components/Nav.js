// Imports
import React, { useState } from "react"
import { Link } from "gatsby"
import { Text } from "theme-ui"
import styled from "@emotion/styled"
import ScrollLock from "react-scrolllock"

// Components
const Nav = () => {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => setNavOpen(!navOpen)
  return (
    <NavWrapper open={navOpen}>
      <MenuButton toggleNav={toggleNav} open={navOpen} />
      <NavLogo />
      <NavLogoMark />
      <Navigation open={navOpen} />
      <ScrollLock isActive={navOpen} />
    </NavWrapper>
  )
}

const MenuButton = props => {
  const { open, toggleNav } = props
  return (
    <MenuButtonStyled open={open} onClick={toggleNav}>
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
    </MenuButtonStyled>
  )
}

const NavLogo = () => {
  return (
    <NavLogoStyled>
      <Link to="/">
        <svg
          width="279"
          height="30"
          viewBox="0 0 279 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.8872 11.8759C20.8872 19.0032 16.2187 22.8003 9.55817 22.8003H0.78125V22.5825C2.46194 22.3335 3.02217 21.7733 3.02217 19.5635V4.03268C3.02217 2.13412 2.49306 1.51165 0.78125 1.23154V1.01367H9.52705C16.6544 1.01367 20.8872 5.09089 20.8872 11.8759ZM16.3743 12.1249C16.3743 4.37504 13.8533 1.66727 8.62446 1.66727H7.13051V22.1467H8.62446C13.9778 22.1467 16.3743 19.6568 16.3743 12.1249Z"
            fill="#B39B78"
          />
          <path
            d="M35.7055 17.2604C34.9585 21.5244 32.4063 23.2673 29.5741 23.2673C25.8703 23.2673 22.7891 20.4973 22.7891 15.2063C22.7891 10.1953 25.4035 6.58496 29.7297 6.58496C32.9977 6.58496 35.6743 8.85699 35.5498 13.4322H25.5902C25.8081 17.7584 27.9556 20.2172 31.1614 20.2172C32.9043 20.2172 34.5539 19.7192 35.4565 17.1982L35.7055 17.2604ZM25.5902 12.7786H32.0328C32.0951 8.85699 30.7879 7.33193 29.0138 7.33193C26.9285 7.33193 25.5902 9.44835 25.5902 12.7786Z"
            fill="#B39B78"
          />
          <path
            d="M52.9765 19.7815C52.4785 21.9913 51.0779 23.2673 49.086 23.2673C47.3431 23.2673 46.3471 22.2091 46.2226 20.5596L46.1604 20.1861C45.7869 21.68 44.1996 23.2673 41.7408 23.2673C39.0019 23.2673 37.5391 21.5244 37.5391 19.4702C37.5391 16.7313 39.6555 15.0195 43.1725 14.3037L46.1292 13.7123V12.9653C46.1292 10.2576 45.1333 8.67025 42.4878 8.67025C40.3713 8.67025 38.8463 9.79071 38.2549 12.2495L38.037 12.1872C38.4728 8.7325 40.7448 6.58496 44.1996 6.58496C48.0278 6.58496 49.8019 8.98149 49.8019 12.8408V19.657C49.8019 20.7774 50.2687 21.3999 51.0157 21.3999C51.6693 21.3999 52.354 20.9642 52.6964 19.7503L52.9765 19.7815ZM46.1292 19.6881V14.3348L44.3552 14.7083C41.4295 15.2685 41.0561 16.9803 41.0561 18.3809C41.0561 19.9993 41.8653 21.431 43.5771 21.431C44.7909 21.431 45.6313 20.933 46.1292 19.6881Z"
            fill="#B39B78"
          />
          <path
            d="M70.1258 22.5826V22.7694H64.4301V20.1549C63.8388 21.7423 62.2826 23.2673 59.8861 23.2673C56.4624 23.2673 53.9414 20.2483 53.9414 15.4864C53.9414 9.94632 57.365 6.58496 61.5045 6.58496C62.7183 6.58496 63.6209 6.8962 64.4301 7.36306V3.75269C64.4301 2.35212 63.7765 1.82301 61.5979 2.13425V1.91638L68.1028 0.0800781V20.3417C68.1028 21.929 68.7563 22.3647 70.1258 22.5826ZM64.4301 19.6258V9.07486C64.0878 8.14115 63.2163 7.30081 61.878 7.30081C59.4503 7.30081 57.9253 9.97745 57.9253 14.4593C57.9253 18.7233 59.6371 21.2443 61.9091 21.2443C63.1229 21.2443 63.9944 20.6841 64.4301 19.6258Z"
            fill="#B39B78"
          />
          <path
            d="M84.1618 13.3387V19.4701C84.1618 21.6799 84.8465 22.3646 87.4298 22.5825V22.8003H77.8125V22.5825C79.4932 22.3335 80.0534 21.7733 80.0534 19.5635V4.03268C80.0534 2.13412 79.5243 1.51165 77.8125 1.23154V1.01367H86.4338C91.5381 1.01367 94.8372 2.97447 94.8372 7.17619C94.8372 11.3779 91.5381 13.3387 86.4338 13.3387H84.1618V13.3387ZM84.1618 1.66727V12.6851H85.5935C88.5191 12.6851 90.4177 10.7554 90.4177 7.17619C90.4177 3.56582 88.5191 1.66727 85.5935 1.66727H84.1618V1.66727Z"
            fill="#B39B78"
          />
          <path
            d="M112.518 22.582V22.7999H106.791V20.061C106.168 21.8039 104.488 23.2667 102.309 23.2667C99.5079 23.2667 97.7339 21.6794 97.7339 18.1936V10.008C97.7339 8.23393 97.2981 7.86044 95.6797 7.89156V7.6737L101.406 6.67773V17.9134C101.406 20.1232 102.465 21.3682 104.208 21.3059C105.359 21.2748 106.324 20.6212 106.791 19.5941V9.97687C106.791 8.20281 106.417 7.82931 104.986 7.82931V7.64258L110.495 6.67773V20.3722C110.495 21.9595 111.148 22.3953 112.518 22.582Z"
            fill="#B39B78"
          />
          <path
            d="M113.293 28.8074C114.725 28.5895 115.347 28.1849 115.347 26.9399V10.5377C115.347 8.79474 114.88 8.42126 113.293 8.45239V8.23452L119.02 6.67833V9.47947C119.798 7.73653 121.479 6.58496 123.657 6.58496C126.956 6.58496 129.508 9.5106 129.508 14.1792C129.508 19.5636 126.24 23.2673 122.163 23.2673C120.949 23.2673 119.829 22.8627 119.02 22.2402V26.9399C119.02 28.2471 119.642 28.6517 121.665 28.8074V29.0252H113.293V28.8074ZM125.525 15.2996C125.525 11.0357 123.937 8.39014 121.572 8.39014C120.327 8.39014 119.487 8.95037 119.02 9.85296V21.182C119.362 21.7423 120.202 22.5826 121.634 22.5826C123.813 22.5826 125.525 19.9682 125.525 15.2996Z"
            fill="#B39B78"
          />
          <path
            d="M130.664 28.8074C132.096 28.5895 132.718 28.1849 132.718 26.9399V10.5377C132.718 8.79474 132.251 8.42126 130.664 8.45239V8.23452L136.391 6.67833V9.47947C137.169 7.73653 138.85 6.58496 141.028 6.58496C144.327 6.58496 146.88 9.5106 146.88 14.1792C146.88 19.5636 143.612 23.2673 139.534 23.2673C138.321 23.2673 137.2 22.8627 136.391 22.2402V26.9399C136.391 28.2471 137.013 28.6517 139.036 28.8074V29.0252H130.664V28.8074V28.8074ZM142.896 15.2996C142.896 11.0357 141.308 8.39014 138.943 8.39014C137.698 8.39014 136.858 8.95037 136.391 9.85296V21.182C136.733 21.7423 137.574 22.5826 139.005 22.5826C141.184 22.5826 142.896 19.9682 142.896 15.2996Z"
            fill="#B39B78"
          />
          <path
            d="M161.44 17.2604C160.693 21.5244 158.141 23.2673 155.308 23.2673C151.605 23.2673 148.523 20.4973 148.523 15.2063C148.523 10.1953 151.138 6.58496 155.464 6.58496C158.732 6.58496 161.409 8.85699 161.284 13.4322H151.325C151.542 17.7584 153.69 20.2172 156.896 20.2172C158.639 20.2172 160.288 19.7192 161.191 17.1982L161.44 17.2604ZM151.325 12.7786H157.767C157.829 8.85699 156.522 7.33193 154.748 7.33193C152.663 7.33193 151.325 9.44835 151.325 12.7786Z"
            fill="#B39B78"
          />
          <path
            d="M172.771 19.47C172.087 21.7421 170.53 23.2671 168.165 23.2671C165.831 23.2671 164.648 21.7732 164.648 19.4389V7.61183H162.625V7.42508C165.084 6.42912 166.92 4.84181 168.165 2.19629H168.321V7.08273H171.682V7.61183H168.321V18.8475C168.321 20.3726 168.912 21.3997 170.126 21.3997C171.371 21.3997 172.087 20.6527 172.522 19.3766L172.771 19.47Z"
            fill="#B39B78"
          />
          <path
            d="M180.117 21.6171L180.989 15.3612H181.175C181.86 19.7808 184.537 22.4574 188.334 22.4574C190.855 22.4574 192.504 21.0568 192.504 18.6603C192.504 16.8863 191.571 15.828 189.236 14.8321L185.284 13.058C182.171 11.6575 180.522 9.6344 180.522 6.70876C180.522 3.22289 183.043 0.390625 188.178 0.390625C190.295 0.390625 192.847 0.919732 194.87 2.00907L193.843 7.82922H193.656C192.94 3.47188 190.637 1.32434 187.182 1.32434C184.506 1.32434 183.043 2.66266 183.043 4.59234C183.043 6.33527 183.945 7.26899 186.435 8.38945L190.699 10.3814C193.905 11.8131 195.181 13.6183 195.181 16.4194C195.181 20.5589 192.162 23.4223 187.4 23.4223C184.63 23.4223 182.109 22.7375 180.117 21.6171Z"
            fill="#B39B78"
          />
          <path
            d="M197.172 14.9261C197.172 10.1019 200.191 6.58496 204.922 6.58496C209.653 6.58496 212.672 10.1019 212.672 14.9261C212.672 19.7503 209.653 23.2673 204.922 23.2673C200.191 23.2673 197.172 19.7503 197.172 14.9261ZM208.719 14.9261C208.719 9.94632 207.598 7.39418 204.922 7.39418C202.214 7.39418 201.093 9.94632 201.093 14.9261C201.093 19.906 202.214 22.4581 204.922 22.4581C207.598 22.4581 208.719 19.906 208.719 14.9261Z"
            fill="#B39B78"
          />
          <path
            d="M214.383 15.2685C214.383 9.94633 217.464 6.58496 222.039 6.58496C223.938 6.58496 225.681 6.98957 226.957 7.64317L225.899 13.121H225.681C225.525 9.94633 224.218 7.98552 221.572 7.98552C218.678 7.98552 217.059 10.0397 217.059 13.6189C217.059 16.9181 219.114 20.2172 222.786 20.2172C224.716 20.2172 226.365 19.4702 226.988 17.2293L227.237 17.2916C226.895 20.933 224.56 23.2673 221.261 23.2673C217.122 23.2673 214.383 20.0927 214.383 15.2685Z"
            fill="#B39B78"
          />
          <path
            d="M236.39 22.5821V22.7999H228.641V22.5821C230.072 22.3642 230.695 21.9596 230.695 20.7146V10.6305C230.695 8.85647 230.228 8.51411 228.641 8.51411V8.32736L234.367 6.77117V20.7146C234.367 21.9596 234.959 22.3642 236.39 22.5821ZM230.119 2.88069C230.119 1.60461 231.053 0.670898 232.329 0.670898C233.574 0.670898 234.539 1.63573 234.539 2.88069C234.539 4.09452 233.574 5.05936 232.329 5.05936C231.068 5.05936 230.119 4.09452 230.119 2.88069Z"
            fill="#B39B78"
          />
          <path
            d="M250.58 17.2604C249.833 21.5244 247.281 23.2673 244.449 23.2673C240.745 23.2673 237.664 20.4973 237.664 15.2063C237.664 10.1953 240.278 6.58496 244.605 6.58496C247.873 6.58496 250.549 8.85699 250.425 13.4322H240.465C240.683 17.7584 242.831 20.2172 246.036 20.2172C247.779 20.2172 249.429 19.7192 250.331 17.1982L250.58 17.2604ZM240.465 12.7786H246.908C246.97 8.85699 245.663 7.33193 243.889 7.33193C241.788 7.33193 240.465 9.44835 240.465 12.7786Z"
            fill="#B39B78"
          />
          <path
            d="M261.912 19.47C261.227 21.7421 259.671 23.2671 257.306 23.2671C254.971 23.2671 253.789 21.7732 253.789 19.4389V7.61183H251.766V7.42508C254.224 6.42912 256.061 4.84181 257.306 2.19629H257.461V7.08273H260.823V7.61183H257.461V18.8475C257.461 20.3726 258.053 21.3997 259.266 21.3997C260.511 21.3997 261.227 20.6527 261.663 19.3766L261.912 19.47Z"
            fill="#B39B78"
          />
          <path
            d="M261.32 28.8073L262.098 25.4148H262.254C262.908 26.0373 264.184 26.3797 265.273 26.3797C267.172 26.3797 268.572 25.8817 269.475 24.0454L269.693 23.5474L264.215 10.0708C263.53 8.35896 262.752 7.42524 261.725 7.26962V7.05176H269.63V7.26962C268.323 7.45637 267.825 7.86098 267.825 8.6702C267.825 9.13706 267.95 9.66616 268.168 10.2575L271.311 18.8166L274.672 10.5065C274.921 9.94628 275.015 9.41717 275.015 8.98143C275.015 7.98547 274.392 7.42524 273.241 7.26962V7.05176H278.003V7.26962C276.851 7.61199 276.353 8.29672 275.668 10.1953L270.191 24.0142C268.541 28.5583 266.362 29.492 264.059 29.492C263.157 29.492 262.192 29.3053 261.32 28.8073Z"
            fill="#B39B78"
          />
        </svg>
      </Link>
    </NavLogoStyled>
  )
}

const NavLogoMark = props => {
  return (
    <NavLogoMarkStyled>
      <Link to="/">
        <svg
          width="35"
          height="48"
          viewBox="0 0 35 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.0105 21.766C34.0479 22.3286 34.0867 22.912 34.0867 23.4506C34.1977 26.898 33.6097 30.6739 32.432 34.0837C31.1554 37.7741 29.2517 40.9155 26.9249 43.1687C24.2066 45.8 20.9168 47.1907 17.4079 47.1907C15.7577 47.1907 14.049 46.8831 12.3253 46.2756C6.84825 43.9758 2.83081 38.7958 1.01261 31.6895C-0.603068 25.3753 -0.270031 18.2825 1.90221 12.7214C2.82331 10.1141 3.93493 8.01088 5.29858 6.29169C6.79874 4.40448 8.60644 2.83981 10.5266 1.76719C12.6269 0.594065 14.8291 0 17.0734 0C18.4355 0 19.8097 0.225025 21.1613 0.667573C24.8352 2.01772 27.9811 4.79903 30.2598 8.70996C32.2145 12.0658 33.5227 16.2603 33.9427 20.5238C33.9543 20.9107 33.9813 21.3215 34.0075 21.7195L34.0102 21.7614L34.0105 21.766ZM29.3732 36.5875C30.9424 33.4507 31.901 30.0183 32.225 26.3819C32.5415 22.8265 32.2355 19.2681 31.3174 15.8072C30.2148 11.5558 28.2106 7.98388 25.5223 5.4816C23.0005 3.13384 19.9402 1.8407 16.9053 1.8407C11.4988 1.8407 6.74173 5.73213 3.85392 12.5129C2.26975 16.4478 1.54067 20.8088 1.74769 25.1218C1.95771 29.4932 3.12784 33.7522 5.13206 37.4351C5.79663 38.6127 6.58422 39.7154 7.47381 40.713C7.92986 41.0715 8.2224 41.3925 8.50593 41.7046C8.71895 41.9401 8.91997 42.1621 9.1765 42.3797C11.6203 44.4559 14.3686 45.554 17.1229 45.554H17.1529H17.2549C19.8097 45.554 22.2399 44.6359 24.4752 42.8267C26.3909 41.2755 28.0846 39.1183 29.3732 36.5875ZM23.0232 29.0782C23.0483 29.1061 23.0733 29.1339 23.0983 29.1619C23.6533 29.7785 24.1769 30.3605 24.4994 31.1481C25.8001 33.5574 25.494 35.8076 25.0095 37.2718C24.4814 38.8635 23.6308 39.8971 23.6233 39.9061C21.8876 41.8068 19.7109 42.7714 17.1516 42.7714C15.7774 42.7714 14.3448 42.3574 13.1162 41.6058C10.7054 40.1296 9.82029 37.7684 9.39575 36.6342L9.34024 36.4857C9.23223 36.1992 9.25623 35.8827 9.40475 35.6156C9.52176 35.4056 9.72278 35.1386 9.9013 34.9015C9.92396 34.871 9.94629 34.8411 9.96799 34.8121C10.0124 34.7527 10.054 34.6969 10.0903 34.6465C10.1953 34.4995 10.3649 34.4125 10.5449 34.4125C10.6709 34.4125 10.7894 34.453 10.8884 34.531C11.0204 34.633 11.1014 34.7875 11.1104 34.9541L11.1089 35.0546C11.1101 35.0729 11.1112 35.0923 11.1124 35.1113C11.1156 35.1665 11.1187 35.2182 11.1209 35.2316C11.6595 37.5703 13.0321 39.4035 14.8849 40.2601C15.6064 40.5737 16.2725 40.7207 16.9776 40.7207H17.1066H17.2386C17.8582 40.7207 18.4747 40.7027 19.2008 40.4702C21.115 39.7141 22.4277 38.3444 22.9962 36.5112C23.6713 34.3315 23.2813 32.2793 21.8966 30.7296C21.8921 30.7251 21.8861 30.7176 21.8816 30.7116C21.8321 30.6441 21.7796 30.5766 21.7271 30.5106C20.305 28.7614 17.9002 28.3683 15.7294 28.2138C15.6664 28.2033 15.6169 28.1988 15.5749 28.1988C15.4609 28.1988 15.4564 28.1988 15.4534 28.5108C15.4534 28.5994 15.4519 28.6984 15.4444 28.8094C15.4444 28.8147 15.4439 28.8221 15.4431 28.8326C15.4426 28.8398 15.442 28.8485 15.4414 28.8589C15.3784 29.6915 15.1924 32.4878 15.4654 33.5139C15.4742 33.5441 15.5536 33.6775 15.6136 33.7782C15.6251 33.7977 15.636 33.8159 15.6454 33.8319C15.848 34.168 15.923 34.3045 15.92 34.3975L15.9215 34.906C15.9215 34.9826 15.893 35.0531 15.839 35.1071C15.7865 35.1596 15.7144 35.1896 15.6394 35.1896H15.6319H15.6304C15.4294 35.1836 15.0679 35.1746 14.9029 35.1746C14.6658 35.1746 14.4093 35.1806 14.1618 35.1866C13.9397 35.1926 13.7297 35.1971 13.5542 35.1971H13.5227H13.5137H13.4477H13.3712C13.2077 35.1971 12.8671 35.1971 12.8521 34.909L12.8431 34.537C12.8371 34.4185 12.8716 34.3 12.9406 34.204C12.9916 34.1335 13.2617 33.6384 13.3217 33.5184C13.3772 31.6777 13.4402 28.3998 13.3277 27.4937L13.3202 27.4892L13.3007 27.4757C11.856 26.4916 10.8689 25.4505 10.7774 25.3125C9.45875 23.3233 9.04621 21.1195 9.61327 19.1048C10.1188 17.3136 11.3475 15.8405 12.9871 15.0589C12.9884 15.0558 12.9898 15.0528 12.9913 15.0497C12.9935 15.0451 12.9959 15.0402 12.9976 15.0349L13.0051 15.0169C13.0667 14.8713 13.1132 14.7633 13.1462 14.7153C13.3187 14.2488 13.2902 13.6982 13.2617 13.1642C13.2467 12.8716 13.2317 12.5671 13.2482 12.2866C13.2617 10.7609 13.1042 6.50643 12.9781 6.16589C12.8991 5.94934 12.8044 5.79986 12.7205 5.66735L12.7141 5.65733L12.7139 5.65694C12.6315 5.52809 12.5596 5.41567 12.5221 5.27629C12.5071 5.22229 12.5101 5.15478 12.5341 5.05727C12.6166 4.71223 12.9256 4.4707 13.2872 4.4707H13.4087C14.1858 4.4707 15.5629 4.4752 16.064 4.50071C16.223 4.4842 16.3865 4.4767 16.5485 4.4767C19.0088 4.4782 21.4421 6.2559 22.0901 8.52715C22.6377 10.4279 22.2057 12.4306 20.968 13.7477C20.89 13.8872 20.728 14.0268 20.557 14.1738L20.5523 14.1778C20.3697 14.335 20.1235 14.5469 20.1279 14.6673C20.1294 14.6928 20.1474 14.7198 20.1849 14.7483C20.6005 14.9479 21.6581 15.5014 22.6482 16.3985C22.7952 16.5305 22.8192 16.7511 22.7052 16.9101C22.6122 17.0376 22.4877 17.1801 22.3557 17.3301C22.3413 17.3467 22.3269 17.3633 22.3124 17.3799C22.179 17.5334 22.0443 17.6883 21.9536 17.8237C21.9206 17.8747 21.8516 17.9347 21.7166 17.9347C21.4376 17.9347 20.9785 17.6557 20.929 17.5221C20.8645 17.3481 20.6155 17.1621 19.9734 16.8126L19.9434 16.7961L19.9365 16.7923C19.3588 16.4794 18.2901 15.9005 16.7601 15.9005C15.989 15.9005 15.1849 16.052 14.3658 16.3505C13.8257 16.4945 11.61 18.2197 11.511 20.0424L11.5095 20.0604L11.508 20.0754C11.2244 21.6581 11.5005 22.8147 12.4921 24.1964C12.5551 24.2759 12.7651 24.4619 12.9511 24.6254C13.1372 24.7889 13.3292 24.9585 13.4342 25.0785C13.4342 24.0674 13.4252 21.5606 13.3697 20.1564V20.1504L13.3712 20.1444L13.3772 20.1039V20.0994L13.3787 20.0949C13.4042 19.9929 13.3877 19.7544 13.3457 19.6449C13.2737 19.4543 13.0186 19.1333 12.9421 19.0403C12.8731 18.9548 12.8566 18.8378 12.8986 18.7358L13.0441 18.3877C13.0907 18.2752 13.2002 18.2032 13.3232 18.2032C13.5242 18.2062 14.0553 18.2122 14.6313 18.2122C15.4624 18.2122 16.04 18.2002 16.352 18.1762H16.3595H16.361L16.3615 18.1762C16.4753 18.1747 16.5892 18.1732 16.7016 18.1732C17.7247 18.1732 18.9173 18.2647 20.0034 18.9413C22.1352 20.2674 22.9452 22.0556 22.4082 24.2534L22.3992 24.2804L22.3797 24.3359L22.3778 24.3411C22.082 25.1457 21.5895 26.4859 20.3755 27.3062C21.2231 27.6588 22.2657 28.3248 22.8612 28.8964L22.8657 28.9024L22.8732 28.9099C22.9232 28.9669 22.9732 29.0226 23.0232 29.0782ZM15.4549 20.7565L15.4594 20.77V20.7835L15.4579 20.7985L15.4564 20.8135C15.3249 21.8698 15.3926 23.6232 15.399 23.789L15.3994 23.7988C15.3994 23.7994 15.3994 23.8041 15.3995 23.8128C15.4002 23.9274 15.4054 24.7364 15.4054 25.9366C15.6019 25.9876 15.998 26.0791 16.1135 26.0821C16.6255 26.0956 16.9732 26.1255 17.2519 26.1494L17.2536 26.1496C17.4606 26.1676 17.6242 26.1811 17.7787 26.1811C18.1012 26.1811 18.4057 26.1166 18.9788 25.9261C19.8294 25.419 20.419 24.5774 20.5945 23.6158C20.7535 22.7472 20.56 21.8966 20.0589 21.274C19.3658 20.2179 17.9767 19.9959 16.9341 19.9959C16.4075 19.9959 15.9905 20.0544 15.8705 20.0739C15.6769 20.2434 15.4039 20.566 15.4549 20.7565ZM15.98 6.2919C15.7114 6.2919 15.4309 6.3084 15.1474 6.34291C15.0739 6.35191 15.0139 6.40892 15.0109 6.47042C15.0109 6.81246 15.0064 7.22801 15.0004 7.71106L14.9995 7.79019C14.9861 9.03483 14.9697 10.5608 15.0109 11.8035C15.0694 13.5482 15.2164 13.8557 15.2539 13.9067C15.3769 13.9127 15.4999 13.9157 15.6199 13.9157C17.6167 13.9157 18.7643 13.1417 19.3748 12.4906C20.0649 11.757 20.4265 10.7804 20.365 9.81129C20.3065 8.88269 19.8774 8.02009 19.1558 7.38102C18.3517 6.66845 17.2536 6.2919 15.98 6.2919Z"
            fill="#B39B78"
          />
        </svg>
      </Link>
    </NavLogoMarkStyled>
  )
}

const Navigation = props => {
  const { open } = props
  return (
    <NavStyled open={open}>
      <NavInner>
        <NavLink to="/production">
          <Text as="span" variant="text2Xl" sx={{ fontWeight: "bold" }}>
            Production
          </Text>
        </NavLink>
        <NavLink to="/education">
          <Text as="span" variant="text2Xl" sx={{ fontWeight: "bold" }}>
            Education
          </Text>
        </NavLink>
        <NavLink to="/activation">
          <Text as="span" variant="text2Xl" sx={{ fontWeight: "bold" }}>
            Activation
          </Text>
        </NavLink>
        <NavLink to="/collection">
          <Text as="span" variant="text2Xl" sx={{ fontWeight: "bold" }}>
            Collection
          </Text>
        </NavLink>
        <NavSpacer>&nbsp;</NavSpacer>
        <NavLink to="/company">
          <Text as="span" variant="text2Xl" sx={{ fontWeight: "bold" }}>
            Company
          </Text>
        </NavLink>
        <NavLink to="/contact">
          <Text as="span" variant="text2Xl" sx={{ fontWeight: "bold" }}>
            Contact
          </Text>
        </NavLink>
      </NavInner>
      <NavSocials />
    </NavStyled>
  )
}

// Styled Components
const NavWrapper = styled.div`
  position: ${props => (props.open ? "fixed" : "relative")};
  left: 0;
  top: 0;
  width: 100%;
  height: ${props => (props.open ? "100%" : "auto")};
  z-index: 1;
`

const MenuButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  position: fixed;
  top: 30px;
  left: 40px;
  padding: 18px 14px;
  border-radius: 100px;
  border: none;
  outline: none;
  width: 51px;
  height: 51px;
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
`

const NavLogoStyled = styled.div`
  z-index: 10;
  position: absolute;
  top: 42px;
  left: 50%;
  transform: translateX(-50%);
`

const NavLogoMarkStyled = styled.div`
  z-index: 10;
  position: absolute;
  top: 32px;
  right: 40px;
`

const NavStyled = styled.nav`
  display: ${props => (props.open ? "block" : "none")};
  visibility: ${props => (props.open ? "visible" : "hidden")};
  z-index: 9;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #111f30;
  top: 0;
  left: 0;
`

const NavInner = styled.div`
  padding-top: 160px;
`

const NavLink = styled(Link)`
  display: block;
  color: #b39b78;

  font-weight: 300;
  line-height: 1.3;
  text-align: center;
  text-decoration: none;
  position: relative;
  span {
    color: #b39b78;
    font-size: 71px;
  }
  &:hover {
    text-decoration: none;
    opacity: 0.9;
    top: -1px;
  }
`

const NavSpacer = styled.div`
  display: block;
  color: #111111;
  font-size: 71px;
  font-weight: 300;
  line-height: 1.3;
  text-align: center;
  text-decoration: none;
`

const NavSocials = styled.div``

export default Nav
