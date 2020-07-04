import React from "react"

const LogoMark = ({ color, size }) => {
  let width = 102
  let height = 140
  if (size && size === "sm") {
    width = 35
    height = 48
  }

  return (
    <svg
      className="logo"
      width={width}
      height={height}
      viewBox="0 0 102 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100.899 64.5732C101.01 66.2423 101.125 67.9728 101.125 69.5705C101.454 79.7978 99.7094 90.9998 96.2158 101.116C92.4284 112.064 86.7807 121.383 79.8779 128.068C71.8136 135.874 62.0536 140 51.6438 140C46.7482 140 41.6791 139.088 36.5655 137.285C20.3166 130.463 8.39812 115.095 3.00409 94.0128C-1.78912 75.2806 -0.801099 54.2385 5.64325 37.7404C8.37587 30.0054 11.6737 23.7658 15.7192 18.6655C20.1697 13.0667 25.5326 8.42484 31.2293 5.24271C37.46 1.76241 43.9934 0 50.6514 0C54.6924 0 58.7691 0.667578 62.779 1.98048C73.6783 5.98595 83.0111 14.2372 89.7714 25.8397C95.5704 35.7955 99.4513 48.2392 100.697 60.8876C100.732 62.0359 100.812 63.2549 100.89 64.4361L100.898 64.5592L100.899 64.5732ZM87.1412 108.544C91.7964 99.2377 94.6403 89.0549 95.6016 78.2669C96.5407 67.7191 95.6328 57.1625 92.909 46.8951C89.6379 34.2824 83.692 23.6857 75.7167 16.2622C68.2354 9.29714 59.1563 5.46079 50.1529 5.46079C34.1132 5.46079 20.0006 17.0054 11.4334 37.1218C6.73363 48.7955 4.57068 61.7332 5.18485 74.5284C5.80792 87.4972 9.27933 100.132 15.2252 111.058C17.1968 114.552 19.5333 117.823 22.1725 120.783C23.5254 121.846 24.3933 122.799 25.2344 123.724C25.8664 124.423 26.4628 125.082 27.2238 125.727C34.4737 131.887 42.6271 135.145 50.7982 135.145H50.8872H51.1899C58.7691 135.145 65.9789 132.421 72.6102 127.053C78.2935 122.452 83.3182 116.052 87.1412 108.544ZM68.3108 86.2654C68.385 86.348 68.4592 86.4307 68.5334 86.5138C70.1801 88.343 71.7334 90.0698 72.6902 92.4063C76.5488 99.5538 75.6409 106.23 74.2034 110.573C72.6368 115.295 70.1134 118.362 70.0911 118.388C64.9419 124.027 58.4842 126.889 50.8916 126.889C46.8149 126.889 42.5646 125.661 38.9197 123.431C31.7677 119.052 29.1419 112.046 27.8824 108.682L27.7177 108.241C27.3973 107.391 27.4685 106.452 27.9091 105.66C28.2562 105.037 28.8526 104.245 29.3822 103.541C29.4495 103.451 29.5157 103.362 29.5801 103.276C29.7117 103.1 29.8354 102.934 29.943 102.785C30.2545 102.349 30.7574 102.091 31.2915 102.091C31.6653 102.091 32.0169 102.211 32.3106 102.442C32.7023 102.745 32.9426 103.203 32.9693 103.697L32.9649 103.995C32.9683 104.05 32.9717 104.107 32.975 104.164C32.9848 104.328 32.9939 104.481 33.0005 104.521C34.5982 111.459 38.6704 116.897 44.1668 119.439C46.3075 120.369 48.2836 120.805 50.3753 120.805H50.7581H51.1497C52.9878 120.805 54.8169 120.752 56.971 120.062C62.6498 117.819 66.5441 113.755 68.2308 108.317C70.2335 101.85 69.0764 95.762 64.9686 91.1646C64.9552 91.1512 64.9374 91.129 64.9241 91.1112C64.7772 90.9109 64.6214 90.7106 64.4657 90.5148C60.2466 85.3255 53.1124 84.1595 46.6725 83.7011C46.4856 83.6699 46.3387 83.6566 46.2141 83.6566C45.8758 83.6566 45.8625 83.6566 45.8536 84.5823C45.8536 84.8449 45.8491 85.1386 45.8269 85.4679C45.8269 85.4837 45.8253 85.5058 45.8231 85.5368C45.8216 85.5582 45.8198 85.5839 45.818 85.6148C45.6311 88.0848 45.0792 96.3806 45.8892 99.4248C45.9153 99.5143 46.1509 99.9102 46.3286 100.209C46.363 100.267 46.3951 100.321 46.4232 100.368C47.0241 101.365 47.2466 101.77 47.2377 102.046L47.2421 103.555C47.2421 103.782 47.1576 103.991 46.9974 104.151C46.8416 104.307 46.628 104.396 46.4054 104.396H46.3832H46.3787C45.7824 104.378 44.7098 104.351 44.2202 104.351C43.5171 104.351 42.756 104.369 42.0217 104.387C41.363 104.405 40.7399 104.418 40.2192 104.418H40.1258H40.0991H39.9032H39.6763C39.1912 104.418 38.1809 104.418 38.1364 103.564L38.1097 102.46C38.0919 102.108 38.1942 101.757 38.399 101.472C38.5503 101.263 39.3514 99.7941 39.5294 99.4381C39.6941 93.9773 39.881 84.2529 39.5472 81.5648L39.5249 81.5515L39.4671 81.5114C35.1812 78.5919 32.2528 75.5032 31.9813 75.0938C28.0693 69.1924 26.8454 62.6546 28.5277 56.6775C30.0275 51.3636 33.6725 46.9932 38.5369 44.6745C38.5405 44.6655 38.5448 44.6565 38.5493 44.6473C38.5559 44.6335 38.5628 44.6192 38.5681 44.6033L38.5903 44.5499C38.7728 44.1181 38.9108 43.7977 39.0087 43.6553C39.5205 42.2712 39.4359 40.6378 39.3514 39.0535C39.3069 38.1856 39.2624 37.2822 39.3113 36.4499C39.3514 31.9237 38.8841 19.302 38.5102 18.2918C38.2758 17.6493 37.9948 17.2059 37.7457 16.8127L37.7269 16.7831L37.7262 16.7819C37.4817 16.3996 37.2684 16.0661 37.1573 15.6526C37.1128 15.4924 37.1217 15.2921 37.1929 15.0028C37.4376 13.9792 38.3545 13.2627 39.427 13.2627H39.7875C42.0929 13.2627 46.1785 13.276 47.6649 13.3517C48.1367 13.3028 48.6218 13.2805 49.1025 13.2805C56.4013 13.2849 63.6201 18.5588 65.5427 25.2969C67.1671 30.9357 65.8854 36.8772 62.2137 40.7847C61.9823 41.1986 61.5016 41.6125 60.9943 42.0487L60.9803 42.0607C60.4386 42.5268 59.7082 43.1555 59.7214 43.5129C59.7259 43.5885 59.7793 43.6686 59.8905 43.7532C61.1233 44.3451 64.2609 45.9874 67.1983 48.6488C67.6344 49.0404 67.7056 49.6946 67.3674 50.1664C67.0915 50.5447 66.7221 50.9675 66.3304 51.4126C66.2878 51.4617 66.245 51.5109 66.2022 51.5602C65.8063 52.0156 65.4068 52.4752 65.1377 52.8768C65.0398 53.0281 64.8351 53.2061 64.4345 53.2061C63.6067 53.2061 62.2449 52.3783 62.098 51.9822C61.9066 51.466 61.1678 50.9141 59.263 49.8771L59.174 49.8282L59.1534 49.817C57.4395 48.8886 54.2691 47.1712 49.73 47.1712C47.4424 47.1712 45.0569 47.6207 42.627 48.5064C41.0248 48.9336 34.4514 54.0517 34.1576 59.4591L34.1532 59.5125L34.1487 59.557C33.3076 64.2523 34.1265 67.6836 37.0683 71.7826C37.2552 72.0185 37.8783 72.5703 38.4301 73.0554C38.982 73.5405 39.5516 74.0434 39.8632 74.3995C39.8632 71.3998 39.8365 63.963 39.6718 59.7973V59.7795L39.6763 59.7617L39.6941 59.6416V59.6282L39.6985 59.6149C39.7742 59.3122 39.7252 58.6046 39.6006 58.2797C39.387 57.7145 38.6304 56.7621 38.4034 56.4861C38.1987 56.2325 38.1497 55.8853 38.2743 55.5827L38.7061 54.5502C38.844 54.2164 39.1689 54.0028 39.5338 54.0028C40.1302 54.0117 41.7057 54.0295 43.4147 54.0295C45.8803 54.0295 47.5937 53.9939 48.5194 53.9226H48.5417H48.5461L48.547 53.9226C48.885 53.9182 49.2229 53.9137 49.5564 53.9137C52.5917 53.9137 56.1298 54.1852 59.352 56.1924C65.6762 60.1267 68.0795 65.4317 66.4862 71.9517L66.4595 72.0318L66.4016 72.1965L66.396 72.2118C65.5186 74.5991 64.0574 78.5748 60.4557 81.0085C62.9703 82.0544 66.0634 84.0304 67.8303 85.7261L67.8436 85.7439L67.8659 85.7661C68.0142 85.9352 68.1625 86.1003 68.3108 86.2654ZM45.858 61.5775L45.8714 61.6176V61.6576L45.8669 61.7021L45.8625 61.7467C45.4724 64.8802 45.6732 70.0818 45.6922 70.5739L45.6934 70.6032C45.6934 70.6048 45.6935 70.6187 45.6936 70.6446C45.6958 70.9845 45.7112 73.3846 45.7112 76.9452C46.2942 77.0965 47.4691 77.368 47.8118 77.3769C49.3309 77.4169 50.3623 77.5056 51.1893 77.5767L51.1942 77.5772C51.8084 77.6306 52.2935 77.6706 52.7519 77.6706C53.7088 77.6706 54.6122 77.4792 56.3123 76.914C58.8358 75.4098 60.5848 72.913 61.1055 70.0602C61.5773 67.4834 61.0032 64.9599 59.5167 63.113C57.4605 59.9798 53.3394 59.3211 50.2462 59.3211C48.6841 59.3211 47.4469 59.4947 47.0908 59.5525C46.5167 60.0555 45.7067 61.0123 45.858 61.5775ZM47.4157 18.6656C46.6191 18.6656 45.7868 18.7146 44.9457 18.8169C44.7276 18.8436 44.5496 19.0128 44.5407 19.1952C44.5407 20.21 44.5273 21.4428 44.5095 22.8758L44.507 23.1108C44.4673 26.8032 44.4187 31.3303 44.5407 35.0168C44.7142 40.1928 45.1504 41.1051 45.2617 41.2565C45.6266 41.2743 45.9916 41.2832 46.3476 41.2832C52.2712 41.2832 55.6759 38.9867 57.4872 37.0552C59.5345 34.8789 60.6071 31.9816 60.4246 29.1065C60.251 26.3517 58.9782 23.7926 56.8375 21.8967C54.452 19.7827 51.1942 18.6656 47.4157 18.6656Z"
        fill={color}
      />
    </svg>
  )
}

export default LogoMark