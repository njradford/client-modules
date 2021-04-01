import {
  AppBar,
  AppBarSection,
  AppBarTab,
  FillButton,
  TextButton,
} from '@codecademy/gamut';
import React, { ReactNode } from 'react';

import { formatUrlWithRedirect } from '../GlobalHeader/urlHelpers';
import { AppHeaderDropdown } from './AppHeaderElements/AppHeaderDropdown';
import { AppHeaderLink } from './AppHeaderElements/AppHeaderLink';
import { AppHeaderLogo } from './AppHeaderElements/AppHeaderLogo';
import {
  AppHeaderClickHandler,
  AppHeaderItem,
} from './AppHeaderElements/types';
import { FormattedAppHeaderItems } from './types';

export type AppHeaderProps = {
  action: AppHeaderClickHandler;
  items: FormattedAppHeaderItems;
  redirectParam?: string;
};

export const mapItemToElement = (
  action: AppHeaderClickHandler,
  item: AppHeaderItem,
  redirectParam?: string
): ReactNode => {
  switch (item.type) {
    case 'logo':
      return <AppHeaderLogo action={action} item={item} />;
    case 'link':
      return <AppHeaderLink action={action} item={item} />;
    case 'dropdown':
    case 'profile-dropdown':
      return <AppHeaderDropdown action={action} item={item} />;
    case 'render-element':
      return item.renderElement();
    case 'text-button':
      return (
        <TextButton
          onClick={(event: React.MouseEvent) => action(event, item)}
          data-testid={item.dataTestId}
          href={
            item.redirect
              ? formatUrlWithRedirect(item.href, redirectParam)
              : item.href
          }
        >
          {item.text}
        </TextButton>
      );
    case 'fill-button':
      return (
        <FillButton
          data-testid={item.dataTestId}
          href={
            item.redirect
              ? formatUrlWithRedirect(item.href, redirectParam)
              : item.href
          }
          onClick={(event: React.MouseEvent) => action(event, item)}
        >
          {item.text}
        </FillButton>
      );
  }
};

export const AppHeader: React.FC<AppHeaderProps> = ({
  action,
  items,
  redirectParam,
}) => {
  const mapItemsToElement = <T extends AppHeaderItem[]>(items: T) => {
    return items.map((item, index) => (
      <AppBarTab key={item.id}>
        {mapItemToElement(action, item, redirectParam)}
      </AppBarTab>
    ));
  };

  return (
    <AppBar>
      <AppBarSection alignment="left">
        {mapItemsToElement(items.left)}
      </AppBarSection>
      <AppBarSection alignment="right">
        {mapItemsToElement(items.right)}
      </AppBarSection>
    </AppBar>
  );
};
