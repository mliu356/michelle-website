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
    defaultMessage: 'm i c h e l l e',
  },
  projects: {
    id: `${scope}.projects`,
    defaultMessage: 'p r o j e c t s',
  },
  template: {
    id: `${scope}.template`,
    defaultMessage: 't e m p l a t e',
  },
  features: {
    id: `${scope}.feature`,
    defaultMessage: 'f e a t u r e s',
  },
});
