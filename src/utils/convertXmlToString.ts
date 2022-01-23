export const convertXmlToString = (xmlString: string) => {
  if (xmlString === '' || xmlString === null) {
    return xmlString;
  }
  const doc = new DOMParser().parseFromString(xmlString, 'text/xml');
  return doc.firstChild.textContent;
};
