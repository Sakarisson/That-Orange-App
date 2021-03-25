import getHostnameFromUrl from './getHostnameFromUrl';

const testCases: Array<[string, ReturnType<typeof getHostnameFromUrl>]> = [
  [
    'https://stackoverflow.com/questions/8498592/extract-hostname-name-from-string/',
    'stackoverflow.com',
  ],
  [
    'https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname',
    'developer.mozilla.org',
  ],
  [
    'https://sakarisson.com/posts/my-experience-with-typescript',
    'sakarisson.com',
  ],
  ['randomstring', undefined],
];

describe('getHostnameFromUrl', () => {
  it.each(testCases)(
    'given the url %p, returns hostname %p',
    (fullUrl, expected) => {
      expect(getHostnameFromUrl(fullUrl)).toBe(expected);
    },
  );
});
