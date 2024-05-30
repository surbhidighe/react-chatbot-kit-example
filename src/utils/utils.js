export const parseResponseToHTML = (response) => {
  // Replace **text** with <strong>text</strong>
  let html = response.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  // Replace __text__ with <em>text</em>
  html = html.replace(/\_\_(.*?)\_\_/g, "<em>$1</em>");
  // Replace ~~text~~ with <del>text</del>
  html = html.replace(/\~\~(.*?)\~\~/g, "<del>$1</del>");
  // Replace `code` with <code>code</code>
  html = html.replace(/\`(.*?)\`/g, "<code>$1</code>");
  // Replace [link](url) with <a href="url">link</a>
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
  // Replace \n with <br>
  html = html.replace(/\n/g, "<br>");

  return { __html: html };
};
