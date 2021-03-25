const getHostnameFromUrl = (url?: string) => {
  if (url === undefined) {
    return undefined;
  }
  // run against regex
  const matches = url.match(/^https?:\/\/([^/?#]+)(?:[/?#]|$)/i);
  // extract hostname (will be null if no match is found)
  return (matches && matches[1]) ?? undefined;
};

export default getHostnameFromUrl;
