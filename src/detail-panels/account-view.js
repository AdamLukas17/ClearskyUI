// @ts-check

import React from 'react';
import { AccountLayout } from './layout';
import { AccountResolver } from './account-resolver';

export function AccountView() {
  return (
    <AccountResolver>
      {<AccountLayout />}
    </AccountResolver>
  );
}