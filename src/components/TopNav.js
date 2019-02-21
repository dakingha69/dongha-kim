import React from 'react';
import { navigate } from 'gatsby-link';
import { Anchor, Box, Button } from 'grommet';
import { Deploy } from 'grommet-icons';

import { PAGES } from '../constants';

const TopNav = props => {
  return (
    <Box direction="row" style={{ justifyContent: 'space-around' }}>
      <Button icon={<Deploy />} onClick={() => navigate('/')} />
      <Box direction="row">
        {PAGES.map(({ to, name }) => (
          <Box pad="small">
            <Anchor color="dark-1" label={name} onClick={() => navigate(to)} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TopNav;
