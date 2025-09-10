async function loadPoems(){
  const res = await fetch('poems.json');
  return await res.json();
}

function renderFooter(){
  const footer = document.getElementById('site-footer');
  const text = `
    <strong>© ${new Date().getFullYear()} Robert Grosse</strong><br>
    All poems are © Robert Grosse. Unauthorized copying or distribution is prohibited.
  `;
  if(footer) footer.innerHTML = text;
}
