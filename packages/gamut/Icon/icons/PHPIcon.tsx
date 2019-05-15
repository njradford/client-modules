import React, { SVGProps } from 'react';

import { defaultIconProps } from '../defaultIconProps';

const PHPIcon: React.FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg {...props}>
      <title>PHP Icon</title>
      <path d="M4.932 14.89c.867.03 1.71-.291 2.337-.891a3.622 3.622 0 0 0 1.089-2.677c0-1.292-.714-1.96-2.178-2.061H2.557L1 17.146h1.2l.436-2.259 2.296.003zM3.59 10.05h1.742c1.035 0 1.704.542 1.704 1.38v.024c-.124 2.12-1.233 2.527-2.303 2.645H2.915l.675-4.05zm11.568.77c.088-.323.027-.67-.167-.943-.273-.355-.824-.568-1.59-.618h-2.43L11.402 7h-1.205l-1.56 7.887H9.84l.963-4.837h1.96c.284 0 .689.034.93.328.242.294.177.743.12 1.026l-.653 3.486h1.307l.692-4.07zm4.19 4.07c.87.031 1.716-.29 2.345-.894a3.622 3.622 0 0 0 1.09-2.677c0-1.291-.715-1.96-2.179-2.06h-3.631l-1.56 7.887h1.2l.436-2.259 2.298.003zm-1.343-4.84h1.743c1.035 0 1.703.542 1.703 1.38v.024c-.124 2.12-1.235 2.527-2.302 2.645h-1.812l.668-4.05z" />
    </svg>
  );
};

PHPIcon.defaultProps = defaultIconProps;

export default PHPIcon;
