import React from "react";
import { motion } from "framer-motion";
const LogoRed = ({ className, onClick }) => {
  return (
    <>
      <motion.svg
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.02 }}
        transition={{duration:.25, ease:"easeInOut", type: "ease"}}
        className={className}
        onClick={onClick}
        viewBox="0 0 118 126"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50.1384 13.0079C46.4561 18.5113 44.7592 28.8239 44.7592 28.8239C44.7592 28.8239 49.767 28.339 52.9048 28.8239C55.0598 29.1569 56.2084 29.6164 58.2839 30.2488C64.178 32.0445 66.8406 34.5692 72.7309 36.3757C79.6373 38.4939 91.0201 39.6529 91.0201 39.6529C91.0201 39.6529 101.027 40.6774 106.235 37.9431C109.56 36.1977 111.755 34.9109 113.305 31.6737C114.962 28.2155 115.024 25.4164 113.305 21.9845C111.731 18.8409 109.735 17.2194 106.235 16.0001C102.921 14.8452 97.1677 16.0001 97.1677 16.0001L92.8644 17.8524C92.8644 17.8524 93.3154 15.3637 92.8644 13.8628C92.3416 12.1234 91.2941 11.4406 90.0979 10.0156C86.8032 6.09092 84.6026 3.65528 79.6469 1.75139C73.4922 -0.613145 68.7679 -0.554263 62.5873 1.75139C56.2872 4.10162 53.7181 7.65766 50.1384 13.0079Z"
          fill="#950024"
        />
        <path
          d="M24.3183 57.7488C20.5022 61.986 18.4888 66.224 20.4761 71.4275C21.6995 74.631 26.4699 78.1244 26.4699 78.1244C26.4699 78.1244 31.4072 79.7578 33.5397 81.9715C35.8339 84.3532 35.4439 89.0303 36.9209 89.5233C37.3824 89.6774 40.7719 84.5267 44.3312 82.4387C46.6808 81.0603 48.4627 80.7017 50.6206 79.5656C51.8688 78.9085 48.0706 76.2721 49.6772 76.2721C51.2838 76.2721 51.6831 75.9485 52.8903 75.6125C54.8012 75.0807 54.7723 75.0109 56.2 73.0856C57.0841 71.8934 57.0154 69.873 56.5933 69.5605C56.1712 69.248 56.1366 69.148 55.6658 68.9025C54.8288 68.466 55.6001 67.824 55.2101 67.0104C54.8653 66.2913 54.0735 66.2794 53.6732 65.5855C53.0221 64.457 54.1372 63.733 53.2225 62.7744C52.1885 61.6908 51.0263 63.0355 49.6772 62.3083C47.9214 61.3619 48.973 59.3947 47.9866 57.7488C46.8294 55.8178 45.971 54.7025 43.9906 53.4741C40.5751 51.3556 37.5526 51.5131 33.5397 52.3343C29.3772 53.186 27.0504 54.7152 24.3183 57.7488Z"
          fill="#950024"
        />
        <path
          d="M3.26265 52.3343C15.0966 23.3535 42.4537 17.8524 42.4537 17.8524C42.4537 17.8524 32.7147 23.8715 27.5456 28.8239C21.7428 34.3835 18.4423 37.8375 15.0967 44.9249C10.5838 54.4852 11.0544 68.9025 11.4081 71.4275C13.6182 87.2044 25.0701 100.37 31.8143 107.568C38.5585 114.765 49.6772 124.425 68.1199 126C51.5123 125.626 43.3149 126.44 29.5436 118.591C15.0967 111.023 8.42173 102.378 3.26265 87.8135C0.341056 79.5656 -2.3175 65.9998 3.26265 52.3343Z"
          fill="#950024"
        />
        <path
          d="M50.0106 39.8144C48.0535 36.5128 46.9396 30.5973 46.9396 30.5973C46.9396 30.5973 50.5904 29.9677 52.9048 30.2488C55.2539 30.534 56.4544 31.2292 58.6512 32.0518C62.3099 33.4219 63.9772 34.9575 67.6146 36.3757C71.8921 38.0436 74.4495 38.6393 78.9593 39.6529C84.3064 40.8547 87.3639 41.6345 92.8644 41.7553C98.3996 41.8769 106.948 40.245 106.948 40.245C106.948 40.245 113.194 48.3358 115.266 54.2915C117.41 60.4533 117.323 70.7601 117.323 70.7601C117.323 70.7601 115.496 74.3078 113.835 76.2721C109.554 81.3368 105.372 83.103 98.7196 84.9397C91.4553 86.9455 79.3107 84.9397 79.3107 84.9397L83.6039 80.4042C83.6039 80.4042 87.4864 75.4025 88.4338 71.6723C89.3379 68.1128 88.4338 62.3083 88.4338 62.3083L83.6039 53.4741L75.5542 62.3083C75.5542 62.3083 73.9588 63.6781 72.7309 63.6051C71.6415 63.5403 70.3107 62.3083 70.3107 62.3083L68.9574 58.9242L66.4589 58.5864L66.0425 57.4765L63.3358 56.9939L62.9714 54.2915L61.4619 53.1816L58.6512 54.2915C58.6512 54.2915 56.2467 55.5115 56.2 54.2915C56.0902 51.4238 56.5855 49.2424 55.3199 46.0395C54.1699 43.1295 51.6206 42.5305 50.0106 39.8144Z"
          fill="#950024"
        />
        <path
          d="M37.2262 93.9099C38.4808 89.6896 40.1999 87.2807 43.9027 84.5643C47.9217 81.616 51.2698 79.9843 56.3395 80.6805C58.8377 81.0235 62.3616 82.8652 62.3616 82.8652C62.3616 82.8652 72.8168 86.1647 79.7731 87.1131C85.6989 87.921 89.1702 88.6853 95.0901 87.8413C100.444 87.0781 103.678 86.3832 108.181 83.5934C113.097 80.5488 118 72.9128 118 72.9128V80.6805L115.251 92.9389C115.251 92.9389 110.256 103.072 105.04 108.11C99.1467 113.801 94.7285 116.39 86.7116 119.034C78.8547 121.624 73.7982 122.136 65.5035 121.34C57.4788 120.57 52.0703 120.174 45.8664 115.392C42.1078 112.496 40.0591 110.386 38.2734 106.168C36.381 101.698 35.85 98.5395 37.2262 93.9099Z"
          fill="#950024"
        />
      </motion.svg>
    </>
  );
};
export default LogoRed;
