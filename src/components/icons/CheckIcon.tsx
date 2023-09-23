const CheckIcon = () => {
  return (
    <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_284_1612)">
        <rect x="10" y="5" width="65" height="65" rx="32.5" fill="#434343" />
        <path
          d="M38.9167 48L29.4167 38.5L31.7917 36.125L38.9167 43.25L54.2084 27.9584L56.5834 30.3334L38.9167 48Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_284_1612"
          x="0"
          y="0"
          width="85"
          height="85"
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
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.3675 0 0 0 0 0.3675 0 0 0 0 0.3675 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_284_1612" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_284_1612"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CheckIcon;
