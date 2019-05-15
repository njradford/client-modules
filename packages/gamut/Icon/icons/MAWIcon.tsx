import React, { SVGProps } from 'react';

import { defaultIconProps } from '../defaultIconProps';

const MAWIcon: React.FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg {...props}>
      <title>MAW Icon</title>
      <path
        d="M21.5 18.667V5.333A2.843 2.843 0 0 0 18.667 2.5H5.333A2.843 2.843 0 0 0 2.5 5.333v13.334A2.843 2.843 0 0 0 5.333 21.5h13.334a2.843 2.843 0 0 0 2.833-2.833z"
        stroke="currentColor"
        fill="none"
      />
      <path d="M7.435 6.346h5.67c1.045 0 1.885.239 2.516.72.63.48.948 1.202.948 2.173 0 .588-.144 1.091-.432 1.51-.287.418-.7.744-1.235.973v.033c.719.153 1.265.493 1.634 1.02.37.529.556 1.19.556 1.986 0 .458-.082.886-.246 1.281a2.589 2.589 0 0 1-.768 1.03c-.35.287-.794.516-1.34.686-.545.17-1.192.255-1.944.255h-5.36V6.346zm2.042 4.886h3.333c.49 0 .9-.137 1.226-.418.327-.281.49-.68.49-1.203 0-.588-.147-1.003-.441-1.242-.294-.238-.719-.36-1.275-.36H9.477v3.223zm0 5.114h3.611c.621 0 1.105-.16 1.445-.483.343-.32.516-.778.516-1.366 0-.579-.17-1.02-.516-1.334-.347-.313-.824-.464-1.445-.464h-3.61v3.647z" />
    </svg>
  );
};

MAWIcon.defaultProps = defaultIconProps;

export default MAWIcon;
