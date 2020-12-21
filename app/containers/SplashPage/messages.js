/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  michelleTitle: {
    id: `${scope}.michelle.title`,
    defaultMessage: 'Hello! I\'m Michelle.',
  },
  bioMessage: {
    id: `${scope}.bio.message`,
    defaultMessage: 'I\'m currently a grad student at Stanford and I like corn...',
  },
  introMessage: {
    id: `${scope}.intro.message`,
    defaultMessage: `Check out some of {item1}, {item2}, or {item3} while you're here.`,
  },
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'Start your next react project in seconds',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage:
      'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
