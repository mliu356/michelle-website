/*
 * Header Messages
 *
 * This contains all the text for the Header component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  michelle: {
    id: `${scope}.michelle`,
    defaultMessage: 'michelle liu',
  },
  projects: {
    id: `${scope}.projects`,
    defaultMessage: 'projects',
  },
  template: {
    id: `${scope}.template`,
    defaultMessage: '<template>',
  },
  features: {
    id: `${scope}.feature`,
    defaultMessage: '<features>',
  },
});
