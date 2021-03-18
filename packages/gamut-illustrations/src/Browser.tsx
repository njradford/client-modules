import React from 'react';

import { IllustrationProps } from './types';

export const Browser: React.FC<IllustrationProps> = ({
  className,
  height,
  width,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 80 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width="80" height="60" fill="white" />
    <path
      d="M70 5H10V55.3278H70V5Z"
      fill="white"
      stroke="#10162F"
      strokeMiterlimit="10"
    />
    <path
      d="M15.2246 10.9296C15.0742 10.93 14.927 10.8857 14.8018 10.8023C14.6765 10.719 14.5788 10.6004 14.521 10.4615C14.4632 10.3226 14.4479 10.1696 14.4771 10.0221C14.5062 9.87447 14.5785 9.73884 14.6847 9.63235C14.791 9.52585 14.9265 9.45328 15.074 9.42381C15.2215 9.39433 15.3745 9.40929 15.5135 9.46678C15.6525 9.52428 15.7713 9.62172 15.855 9.74679C15.9386 9.87185 15.9832 10.0189 15.9832 10.1694C15.9832 10.3707 15.9033 10.5638 15.7611 10.7064C15.6189 10.8489 15.426 10.9292 15.2246 10.9296V10.9296Z"
      fill="#10162F"
    />
    <path
      d="M15.2247 9.91404C15.289 9.91925 15.349 9.94847 15.3927 9.9959C15.4364 10.0433 15.4607 10.1055 15.4607 10.17C15.4607 10.2345 15.4364 10.2966 15.3927 10.3441C15.349 10.3915 15.289 10.4207 15.2247 10.4259C15.1893 10.4288 15.1538 10.4243 15.1202 10.4127C15.0867 10.4012 15.0559 10.3828 15.0299 10.3587C15.0038 10.3347 14.983 10.3055 14.9687 10.273C14.9545 10.2405 14.9472 10.2055 14.9472 10.17C14.9472 10.1345 14.9545 10.0994 14.9687 10.0669C14.983 10.0345 15.0038 10.0053 15.0299 9.98122C15.0559 9.95717 15.0867 9.93879 15.1202 9.92722C15.1538 9.91566 15.1893 9.91117 15.2247 9.91404V9.91404ZM15.2247 8.90704C14.9746 8.90671 14.73 8.98059 14.5219 9.11933C14.3139 9.25807 14.1516 9.45543 14.0557 9.68642C13.9599 9.91741 13.9347 10.1717 13.9834 10.417C14.0321 10.6623 14.1525 10.8876 14.3294 11.0644C14.5062 11.2413 14.7316 11.3617 14.9769 11.4104C15.2222 11.4591 15.4764 11.4339 15.7074 11.3381C15.9384 11.2422 16.1358 11.08 16.2745 10.8719C16.4132 10.6638 16.4871 10.4192 16.4868 10.1691C16.4863 9.83455 16.3532 9.51379 16.1166 9.2772C15.88 9.0406 15.5593 8.90749 15.2247 8.90704V8.90704Z"
      fill="#10162F"
    />
    <path
      d="M19.3733 10.9296C19.2229 10.9296 19.076 10.885 18.9509 10.8015C18.8259 10.718 18.7285 10.5992 18.6709 10.4603C18.6134 10.3214 18.5983 10.1685 18.6276 10.021C18.657 9.87355 18.7294 9.73808 18.8357 9.63175C18.942 9.52543 19.0775 9.45302 19.225 9.42368C19.3725 9.39435 19.5253 9.4094 19.6643 9.46695C19.8032 9.52449 19.9219 9.62194 20.0055 9.74696C20.089 9.87199 20.1336 10.019 20.1336 10.1694C20.1336 10.2692 20.1139 10.3681 20.0757 10.4603C20.0375 10.5525 19.9815 10.6364 19.9109 10.707C19.8403 10.7776 19.7565 10.8336 19.6643 10.8718C19.572 10.91 19.4732 10.9296 19.3733 10.9296V10.9296Z"
      fill="#10162F"
    />
    <path
      d="M19.3734 9.91404C19.4243 9.91371 19.4742 9.92853 19.5167 9.95661C19.5592 9.9847 19.5923 10.0248 19.612 10.0718C19.6316 10.1188 19.6369 10.1705 19.627 10.2205C19.6171 10.2705 19.5927 10.3164 19.5566 10.3524C19.5206 10.3884 19.4747 10.4129 19.4248 10.4227C19.3748 10.4326 19.323 10.4274 19.276 10.4077C19.229 10.3881 19.189 10.3549 19.1609 10.3124C19.1328 10.2699 19.118 10.2201 19.1183 10.1691C19.1187 10.1016 19.1457 10.037 19.1935 9.98924C19.2412 9.9415 19.3059 9.91448 19.3734 9.91404V9.91404ZM19.3734 8.90704C19.1234 8.90704 18.879 8.98121 18.6711 9.12015C18.4632 9.25909 18.3013 9.45656 18.2057 9.68758C18.1101 9.91861 18.0851 10.1728 18.134 10.418C18.1829 10.6632 18.3035 10.8884 18.4804 11.065C18.6573 11.2417 18.8826 11.3619 19.1279 11.4105C19.3731 11.4591 19.6273 11.4338 19.8582 11.3379C20.0891 11.242 20.2863 11.0798 20.425 10.8717C20.5637 10.6637 20.6375 10.4192 20.6372 10.1691C20.6372 10.0033 20.6045 9.839 20.5409 9.68577C20.4774 9.53254 20.3843 9.39333 20.2669 9.27611C20.1495 9.15889 20.0102 9.06596 19.8569 9.00263C19.7036 8.93931 19.5393 8.90682 19.3734 8.90704V8.90704Z"
      fill="#10162F"
    />
    <path
      d="M23.5239 10.9296C23.3735 10.93 23.2263 10.8857 23.1011 10.8023C22.9758 10.719 22.8781 10.6004 22.8203 10.4615C22.7625 10.3226 22.7472 10.1696 22.7764 10.0221C22.8055 9.87447 22.8778 9.73884 22.984 9.63235C23.0903 9.52585 23.2258 9.45328 23.3733 9.42381C23.5208 9.39433 23.6738 9.40929 23.8128 9.46678C23.9518 9.52428 24.0707 9.62172 24.1543 9.74679C24.2379 9.87185 24.2825 10.0189 24.2825 10.1694C24.2825 10.3707 24.2026 10.5638 24.0604 10.7064C23.9182 10.8489 23.7253 10.9292 23.5239 10.9296V10.9296Z"
      fill="#10162F"
    />
    <path
      d="M23.524 9.91404C23.5883 9.91925 23.6483 9.94847 23.692 9.9959C23.7358 10.0433 23.76 10.1055 23.76 10.17C23.76 10.2345 23.7358 10.2966 23.692 10.3441C23.6483 10.3915 23.5883 10.4207 23.524 10.4259C23.4886 10.4288 23.4531 10.4243 23.4196 10.4127C23.386 10.4012 23.3552 10.3828 23.3292 10.3587C23.3031 10.3347 23.2823 10.3055 23.2681 10.273C23.2538 10.2405 23.2465 10.2055 23.2465 10.17C23.2465 10.1345 23.2538 10.0994 23.2681 10.0669C23.2823 10.0345 23.3031 10.0053 23.3292 9.98122C23.3552 9.95717 23.386 9.93879 23.4196 9.92722C23.4531 9.91566 23.4886 9.91117 23.524 9.91404V9.91404ZM23.524 8.90704C23.2739 8.90671 23.0293 8.98059 22.8213 9.11933C22.6132 9.25807 22.4509 9.45543 22.3551 9.68642C22.2592 9.91741 22.234 10.1717 22.2827 10.417C22.3315 10.6623 22.4519 10.8876 22.6287 11.0644C22.8055 11.2413 23.0309 11.3617 23.2762 11.4104C23.5215 11.4591 23.7757 11.4339 24.0067 11.3381C24.2377 11.2422 24.4351 11.08 24.5738 10.8719C24.7126 10.6638 24.7864 10.4192 24.7861 10.1691C24.7857 9.83455 24.6525 9.51379 24.4159 9.2772C24.1794 9.0406 23.8586 8.90749 23.524 8.90704Z"
      fill="#10162F"
    />
    <path
      d="M35.2287 19.3162L34.7287 19.3182L34.7307 19.8182L34.8229 42.7892L34.8249 43.2892L35.3249 43.2872L48.1388 43.2358L48.6388 43.2338L48.6368 42.7338L48.5446 19.7628L48.5426 19.2628L48.0426 19.2648L35.2287 19.3162Z"
      fill="white"
    />
    <path
      d="M35.2287 19.3162L34.7287 19.3182L34.7307 19.8182L34.8229 42.7892L34.8249 43.2892L35.3249 43.2872L48.1388 43.2358L48.6388 43.2338L48.6368 42.7338L48.5446 19.7628L48.5426 19.2628L48.0426 19.2648L35.2287 19.3162Z"
      fill="url(#pattern0)"
    />
    <path
      d="M35.2287 19.3162L34.7287 19.3182L34.7307 19.8182L34.8229 42.7892L34.8249 43.2892L35.3249 43.2872L48.1388 43.2358L48.6388 43.2338L48.6368 42.7338L48.5446 19.7628L48.5426 19.2628L48.0426 19.2648L35.2287 19.3162Z"
      stroke="#10162F"
    />
    <path
      d="M34.7246 43.3837L35.0216 43.2517V42.9268V20.0315V19.2818L34.3294 19.5699L24.7453 23.5594L24.4375 23.6876V24.021V47.1863V47.9557L25.1406 47.6432L34.7246 43.3837Z"
      fill="white"
      stroke="#10162F"
      strokeMiterlimit="10"
    />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="4.99454"
        height="2.7861"
      >
        <use xlinkHref="#image0" transform="scale(0.0780397 0.0435328)" />
      </pattern>
      <image
        id="image0"
        width="64"
        height="64"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAChSURBVHgB7dgxDoAwDMXQ5P53BoaIARaE2iJa+23p6j81ImKPK9qtk0ugsryKS6CyvIpLoLK8ikugsryKS6CyvIpLoLK8ikugsryKS6CyvIpLoLI8VN4faOW3gLJ8QOXDjSuPWYLlH+5l5csbV37ZJVj+5b2MbLxx5ZdZguUb72ll5xtXftolWL7zPY0cfOPKT7MEyw++fys/vnHlsb/DFwf+rf4QcSN+5wAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
);