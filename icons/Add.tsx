import React from 'react';

const Add: React.FC = () => (
    <svg
        width="18"
        height="22"
        viewBox="0 0 18 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_d_243_231)">
            <path
                d="M17.9141 8.27148V11.3301H0.371094V8.27148H17.9141ZM10.7773 0.800781V19.4336H7.52539V0.800781H10.7773Z"
                fill="white"
            />
        </g>
        <defs>
            <filter
                id="filter0_d_243_231"
                x="0.371094"
                y="0.800781"
                width="17.543"
                height="20.6328"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dy="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_243_231" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_243_231" result="shape" />
            </filter>
        </defs>
    </svg>
);

export default Add;
