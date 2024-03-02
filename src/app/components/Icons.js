import { cx } from "../utils/index";

export const BookmarkIcon = ({ className, colorCircle, colorPath, ...rest }) => (
  <svg
    width="56"
    height="56"
    xmlns="http://www.w3.org/2000/svg"
    className={cx("w-full h-auto", className)}
    {...rest}
  >
    <g fill="none" fillRule="evenodd">
      <circle fill={colorCircle} cx="28" cy="28" r="28" />
      <path fill={colorPath} d="M23 19v18l5-5.058L33 37V19z" />
    </g>
  </svg>
);
